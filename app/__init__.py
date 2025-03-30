from flask import Flask

app = Flask(__name__)

from app.routes import chat

app.register_blueprint(chat.bp)