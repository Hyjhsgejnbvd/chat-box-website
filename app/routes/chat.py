from flask import Blueprint, request, jsonify

chat_bp = Blueprint('chat', __name__)

messages = []

@chat_bp.route('/send', methods=['POST'])
def send_message():
    data = request.get_json()
    message = data.get('message')
    if message:
        messages.append(message)
        return jsonify({'status': 'success', 'message': message}), 200
    return jsonify({'status': 'error', 'message': 'No message provided'}), 400

@chat_bp.route('/messages', methods=['GET'])
def get_messages():
    return jsonify({'messages': messages}), 200