from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
tasks = []
current_id = 0b
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/add_task', methods=['POST'])
def add_task():
    global current_id
    task_data = request.get_json()
    new_task = {
        'id': current_id,
        'text': task_data['text'],
        'urgent': task_data['urgent'],
        'important': task_data['important'],
        'completed': False
    }
    tasks.append(new_task)
    current_id += 1
    return jsonify(new_task), 201

@app.route('/get_tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/toggle_task', methods=['POST'])
def toggle_task():
    task_id = request.json['id']
    for task in tasks:
        if task['id'] == task_id:
            task['completed'] = not task['completed']
            return jsonify(task)
    return jsonify({'error': 'Task not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)