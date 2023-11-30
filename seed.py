from app import app, db
from Back.src.models import User
import random
from flask_bcrypt import Bcrypt 

def create_initial_data():
    with app.app_context():
        # Crea algunos usuarios
        bcrypt = Bcrypt()
        dummy_password = bcrypt.generate_password_hash("admin").decode('utf-8')
        users = []
        user1 = User(email="admin1@admin.com", username="admin1", password=dummy_password, confirmed=True, admin=True)
        user2 = User(email="admin2@admin.com", username="admin2", password=dummy_password, confirmed=True, admin=True)
        user3 = User(email="admin3@admin.com", username="admin3", password=dummy_password, confirmed=True, admin=True)
        db.session.add_all([user1, user2, user3])
        users.extend([user1, user2, user3])
        db.session.commit()
        


if __name__ == "__main__":
    create_initial_data()