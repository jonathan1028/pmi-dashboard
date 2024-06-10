from flask import Flask, jsonify
import requests
from requests.auth import HTTPBasicAuth
from flask_cors import CORS

app = Flask(__name__)
# This eliminates the network error of "Access has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."
CORS(app)  # Enable CORS for all routes

RENTVINE_ACCESS_KEY = 'ad483b306b444b129dbdbecba032eb3c'
RENTVINE_SECRET_KEY = '318df8d429504414a90217a92d68a85f'
BASE_URL = 'https://pmiaustin.rentvine.com/api/manager'

@app.route('/api/data', methods=['GET'])
def get_data():
    external_api_url = f"{BASE_URL}/leases"  # Replace with the actual external API URL
    response = requests.get(external_api_url, auth=HTTPBasicAuth(RENTVINE_ACCESS_KEY, RENTVINE_SECRET_KEY))
    print(response.status_code)
    data = response.json()  # Assuming the API returns JSON
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)