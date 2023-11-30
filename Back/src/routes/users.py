from flask import Blueprint, request, jsonify
from flask_cors import CORS 
from ..controllers import users_controllers
from ..models import db, User, Bike
import uuid
from flask_jwt_extended import jwt_required
from flask_bcrypt import Bcrypt 
import cloudinary
import cloudinary.uploader 
import os


cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET")
)

users =Blueprint('users', __name__)
# CORS(users)

@users.route('/signup', methods=['POST'])
def signup():
    data = request.get_json(force=True)
    result = users_controllers.create_user_and_send_email(data)
    return result
   
@users.route('/login', methods=['POST', 'GET'])
def login():
    data = request.get_json(force=True)
    result = users_controllers.login_user(data)
    return result

@users.route('/users', methods=['GET'])
def get_users():
    try:
        users = User.query.all()
        return jsonify({"message": f'All users accessed', "users": [user.serialize() for user in users]}), 200
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

@users.route('/users/confirm', methods=['PATCH'])
def confirm_user():
    try:
        data = request.get_json(force=True)
        user_uuid = data.get('user_uuid')
        print(user_uuid, "user_uuid")
        if not uuid.UUID(user_uuid):
            return jsonify({"error": "UUID inválido"}), 400

        user = User.query.filter_by(user_uuid=user_uuid).first()
        print(user, "user")

        if user:
            user.confirmed = True
            db.session.commit()
            return jsonify({"message": "Usuario confirmado exitosamente"}), 200
        else:
            return jsonify({"error": "Usuario no encontrado"}), 404
    except Exception as e:
        return jsonify({"error": f"Error al confirmar el usuario: {str(e)}"}), 500

@users.route('/users/recovery_email', methods=['POST'])
def send_recovery_email_route():
    try:
        data = request.get_json(force=True)
        print("data", data)

        to_email = data.get('email')
        user = User.query.filter_by(email=to_email).first()
        print("user", user)
        if user:
            user_uuid = user.user_uuid
            username = user.username
            users_controllers.send_recovery_email(to_email, user_uuid, username)
            return jsonify({"message": "Email sent successfully"}), 200
        else:
            return jsonify({"error": "User not found"}), 404

    except Exception as e:
        return jsonify({"error": f"Error sending email: {str(e)}"}), 500

@users.route('/users/recovery_password', methods=['PATCH'])
def recovery():
    data = request.get_json(force=True)
    result = users_controllers.recovery_password(data)
    return result


@users.route('/users/<int:user_id>/bikes', methods=['GET'])
@jwt_required()
def get_user_bikes(user_id):
    user = User.query.get(user_id)

    if not user:
        return jsonify({'message': 'Usuario no encontrado'}), 404

    user_bikes = user.bikes

    bike_list = []
    for bike in user_bikes:
        bike_list.append({
            'id': bike.id,
            'theme': bike.theme,
            'specialize': bike.specialize,
            'area': bike.area,
            'sponsor_id': bike.sponsor_id
        })

    return jsonify({'bikes': bike_list}), 200


@users.route('/users/<int:user_id>', methods=['GET'])
@jwt_required()
def my_bikes(user_id):
    try:
        user = User.query.get(user_id)

        if user is None:
            return jsonify({'error': f'User with ID {user_id} not found'}), 404

        bikes = [bike.serialize() for bike in user.bikes]

        return jsonify({'bikes': bikes})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@users.route('/users/<int:user_id>/configuration', methods=['PATCH'])
@jwt_required()
def change_user_values(user_id):
    bcrypt = Bcrypt()
    try:
        user = User.query.get(user_id)
        data = request.json
        password = data.get('password')
        to_change = data.get('to_change')
        new_value = data.get('new_value')

        if user is None:
            return jsonify({'message': 'User not found'}), 404

        if not bcrypt.check_password_hash(user.password, password):
            return jsonify({'message': 'Incorrect password'}, password, user.password), 401

        if to_change == 'name':
            existing_user = User.query.filter_by(username=new_value).first()
            if existing_user:
                return jsonify({'message': 'Username already exists'}), 400
            user.username = new_value
        elif to_change == 'email':
            existing_user = User.query.filter_by(email=new_value).first()
            if existing_user:
                return jsonify({'message': 'Email already exists'}), 400
            user.email = new_value
        elif to_change == 'password':
            user.password = bcrypt.generate_password_hash(new_value).decode('utf-8')
        else:
            return jsonify({'message': 'Invalid field to change'}), 400

        db.session.commit()
        return jsonify({'message': 'User information updated successfully'}), 200

    except Exception as e:
        return jsonify({'message': str(e)}), 500

@users.route('/users/<int:user_id>/upload_avatar', methods=['POST'])
@jwt_required()
def change_user_avatar(user_id):
    try:
        user = User.query.get(user_id)
        uploaded_file = request.files['avatar']
        print("uploaded_file", uploaded_file)
        upload_result = cloudinary.uploader.upload(uploaded_file)
        image_url = upload_result['secure_url']

        user.avatar = image_url
        db.session.commit()
        return jsonify({'message': 'User avatar updated successfully', 'avatar': image_url}), 200

    except Exception as e:
        return jsonify({'message': str(e)}), 500    

