from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(250), unique=True, nullable=False)
    username = db.Column(db.String(250), unique=True, nullable=False)
    password = db.Column(db.String(250), nullable=False)
    avatar = db.Column(db.String(500), nullable=True)
    confirmed = db.Column(db.Boolean, default=False)
    admin = db.Column(db.Boolean, default=False)
    user_uuid = db.Column(db.String(250), nullable=True)

    def __repr__(self):
        return f'<{self.__class__.__name__} {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "avatar": self.avatar,
            "confirmed": self.confirmed,
            "admin": self.admin,
        }

class Bike(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    plate = db.Column(db.String(120), unique=False, nullable=False)
    model = db.Column(db.String(120), unique=False, nullable=False)
    brand = db.Column(db.String(120), unique=False, nullable=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    owner = db.relationship('User', lazy='subquery', backref='bikes', foreign_keys=[owner_id])

    def __repr__(self):
        return f'<{self.__class__.__name__} {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "plate": self.plate,
            "model": self.model,
            "brand": self.brand,
            "owner": self.owner.serialize() if self.owner else None
        }
