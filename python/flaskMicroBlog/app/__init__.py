from flask import Flask

app = Flask(__name__)

from app import routes


# export FLASK_APP=microblog.py -> in order flask to know about the app and how to run it
# flask run -> to start the app
# flask run --port 5001 -> to run it on a port different from the default one 5000