from flask import Blueprint
from Back.src.routes.users import users
from Back.src.routes.bikes import bikes


api = Blueprint('api', __name__)
api.register_blueprint(users)
api.register_blueprint(bikes)


