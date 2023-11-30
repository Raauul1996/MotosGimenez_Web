from flask import Blueprint, request, jsonify
from ..models import db, User, Bike
from ..controllers import users_controllers

bikes =Blueprint('bikes', __name__)

@bikes.route('/all_bikes', methods=['GET'])
def get_all_bikes():
    try:
        bikes = Bike.query.all()
        return jsonify({"message": f'All bikes accessed', "bikes": [bike.serialize() for bike in bikes]}), 200
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

@bikes.route('/create_bike', methods=['POST'])
def create_bike():
    try:
        data = request.get_json()
        plate = data.get('plate')
        model = data.get('model')
        brand = data.get('brand')
        owner = data.get('owner')

        # Create a new bike instance
        new_bike = Bike(plate=plate, model=model, brand=brand, owner=owner)

        # Add the bike to the database
        db.session.add(new_bike)
        db.session.commit()

        return jsonify({"message": "Bike created successfully", "bike": new_bike.serialize()}), 201
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500
    
    
    