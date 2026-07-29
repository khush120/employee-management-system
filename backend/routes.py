from flask import jsonify
 
def register_routes(app):
 
    @app.route("/employees", methods=["GET"])
    def get_employees():
        return jsonify([
            {
                "id": 1,
                "name": "Raju",
                "role": "DevOps Engineer"
            }
        ])
