from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///employees.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Employee Model
class Employee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    role = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)

    def to_dict(self):
        return {"id": self.id, "name": self.name, "role": self.role, "email": self.email}

# DB Create
with app.app_context():
    db.create_all()

# GET - All Employees
@app.route('/employees', methods=['GET'])
def get_employees():
    employees = Employee.query.all()
    return jsonify([emp.to_dict() for emp in employees])

# POST - Add Employee
@app.route('/employees', methods=['POST'])
def add_employee():
    data = request.get_json()
    new_emp = Employee(name=data['name'], role=data['role'], email=data['email'])
    db.session.add(new_emp)
    db.session.commit()
    return jsonify(new_emp.to_dict()), 201

# PUT - Update Employee
@app.route('/employees/<int:id>', methods=['PUT'])
def update_employee(id):
    emp = Employee.query.get_or_404(id)
    data = request.get_json()
    emp.name = data.get('name', emp.name)
    emp.role = data.get('role', emp.role)
    emp.email = data.get('email', emp.email)
    db.session.commit()
    return jsonify(emp.to_dict())

# DELETE - Delete Employee
@app.route('/employees/<int:id>', methods=['DELETE'])
def delete_employee(id):
    emp = Employee.query.get_or_404(id)
    db.session.delete(emp)
    db.session.commit()
    return jsonify({"message": "Employee deleted"}), 200

if __name__ == '__main__':
    app.run(debug=True)
