from flask import Blueprint, request, jsonify
from flask_cors import CORS 
from ..controllers import users_controllers
from ..models import db, User, Deck
import uuid

users =Blueprint('users', __name__)
CORS(users)

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



@users.route('/users/add_deck/<int:user_id>/<int:deck_id>', methods=['POST'])
def add_deck_to_user(user_id, deck_id):
    try:
        user = User.query.get(user_id)
        deck = Deck.query.get(deck_id)

        if user is None:
            return jsonify({'error': f'User with ID {user_id} not found'}), 404

        if deck is None:
            return jsonify({'error': f'Deck with ID {deck_id} not found'}), 404

        user.decks.append(deck)
        db.session.commit()

        return jsonify({'message': f'Deck {deck_id} added to user {user_id}'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@users.route('/users/<int:user_id>/decks', methods=['GET'])
def get_user_decks(user_id):
    user = User.query.get(user_id)

    if not user:
        return jsonify({'message': 'Usuario no encontrado'}), 404

    user_decks = user.decks

    deck_list = []
    for deck in user_decks:
        deck_list.append({
            'id': deck.id,
            'theme': deck.theme,
            'specialize': deck.specialize,
            'area': deck.area,
            'sponsor_id': deck.sponsor_id
        })

    return jsonify({'decks': deck_list}), 200

@users.route('/users/<int:user_id>', methods=['GET'])
def my_decks(user_id):
    try:
        user = User.query.get(user_id)

        if user is None:
            return jsonify({'error': f'User with ID {user_id} not found'}), 404

        decks = [deck.serialize() for deck in user.decks]

        return jsonify({'decks': decks})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
