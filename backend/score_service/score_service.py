from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///scores.db'
app.config['SECRET_KEY'] = 'anothersecretkey'  # Altere para uma chave secreta em produção

db = SQLAlchemy(app)

class Score(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    score = db.Column(db.Integer, nullable=False)

db.create_all()

@app.route('/score', methods=['POST'])
def submit_score():
    data = request.get_json()
    user_id = data['user_id']
    score = data['score']
    new_score = Score(user_id=user_id, score=score)
    db.session.add(new_score)
    db.session.commit()
    return jsonify({"message": "Score recorded"}), 201

@app.route('/leaderboard', methods=['GET'])
def leaderboard():
    scores = Score.query.order_by(Score.score.desc()).limit(10).all()
    leaderboard = [{"user_id": score.user_id, "score": score.score} for score in scores]
    return jsonify(leaderboard), 200

if __name__ == '__main__':
    app.run(port=5003)
