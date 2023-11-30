import os
from flask import Flask, send_from_directory, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from Back.src.models import db, User, Bike
from flask_cors import CORS 
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
from Back.src.routes.api import api

load_dotenv() 

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.sqlite'


db.init_app(app)
with app.app_context():
    db.create_all()

app.config["JWT_SECRET_KEY"] = "super-secret" 
jwt = JWTManager(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS']
MIGRATE = Migrate(app, db, compare_type=True)

CORS(app)
app.register_blueprint(api, url_prefix="/api")



@app.route('/')
def index():
    return "Hola Guapeton!"

if __name__ == '__main__':
    app.run(debug=True)