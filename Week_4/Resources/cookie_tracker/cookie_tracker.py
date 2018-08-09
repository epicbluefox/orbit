
from flask import Flask, render_template 
from apps.members.models import db
from flask import jsonify, request  
from flask_sqlalchemy import SQLAlchemy 
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql: //<db_username>:<db_password>@<db_host>/<db_name>'        # we import the Flask class
app = Flask(__name__)  
db.init_app(app)                                # we create an instance of the Flask class with our module name 
app.secret_key = "secret key"  
db = SQLAlchemy()                           # for encrypting sessions; don't worry about this for now

@app.route('/cookies', methods=['POST'])                     
def add_cookies():
    data = request.form
    print(data)
    data1 = request.form["name"]

    if data1 == "":
        return jsonify({"message": "failed!"}), 400
    else:
        return jsonify({"message": "success!"}), 200
  

@app.route('/cookies', methods=['GET']) 
def list_cookies():                            # we name the function list_cookie
    cookies = cookie.query.all()
    cookie1 = cookie.query.filter_by(id=1,name='choco',rating=5).one()
    cookie2 = cookie.query.filter_by(id=2,name='oatmeal rasin',rating=1).two()
    cookie3 = cookie.query.filter_by(id=3,name='snickerdoodle',rating=3).three()

    data = [
            {"name": "chocolate chip", "rating": 5},
            {"name": "oatmeal raisin", "rating": 1},
            {"name": "snickerdoodle", "rating": 3}
        ]

    return render_template('main.html', cookies=cookies)  # we render main.html and pass data over under the param "cookies"

class cookie(db.Model):
    id = db.Column(db.Integer(11), primary_key = True, nullable = False)
    name = db.Column(db.String(255), nullable = False)
    rating = db.Column (db.Integer(11), nullable = False)

def __init__(self, id, name, rating): # constructor function
        self.id = id
        self.name = name
        self.rating = rating


if __name__ == '__main__':                             # check if we're running the "main" function
   app.run(debug=True)                                 # run on debug mode (this allows for hot reload)

