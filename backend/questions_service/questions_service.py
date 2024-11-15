from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/questions', methods=['GET'])
def get_questions():
    difficulty = request.args.get('difficulty', 'easy')
    # Faz a requisição para a OTDB
    response = requests.get(f"https://opentdb.com/api.php?amount=10&difficulty={difficulty}&type=multiple")
    questions = response.json().get("results", [])
    
    # Formata as perguntas para incluir 'question', 'options' e 'answer'
    formatted_questions = [
        {
            "question": q["question"],
            "options": q["incorrect_answers"] + [q["correct_answer"]],
            "answer": q["correct_answer"]
        } for q in questions
    ]
    return jsonify(formatted_questions), 200

if __name__ == '__main__':
    app.run(port=5002)
