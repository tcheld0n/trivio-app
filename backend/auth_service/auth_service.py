from flask import Flask, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secretkey'  # Altere para uma chave secreta em produção
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SESSION_TYPE'] = 'filesystem'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password_hash = db.Column(db.String(120), nullable=False)

db.create_all()

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    password = data['password']
    if User.query.filter_by(username=username).first():
        return jsonify({"message": "Username already exists"}), 409
    password_hash = generate_password_hash(password)
    new_user = User(username=username, password_hash=password_hash)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User registered successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and check_password_hash(user.password_hash, data['password']):
        session['user_id'] = user.id
        return jsonify({"message": "Logged in successfully"}), 200
    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/session', methods=['GET'])
def validate_session():
    if 'user_id' in session:
        return jsonify({"message": "Session is valid", "user_id": session['user_id']}), 200
    return jsonify({"message": "Session is invalid"}), 401

if __name__ == '__main__':
    app.run(port=5001)
