from flask import Flask, request, jsonify
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
import pandas as pd
from flask_cors import CORS , cross_origin
    
app = Flask(__name__)
CORS(app)
# cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/predict', methods=['POST'])
# @cross_origin()
def predict():
    data = request.get_json()
    data = data['input']
    input_data = data
    
    # Load the data from a CSV file into a DataFrame
    df = pd.read_csv('dataset.csv')
    X = df.iloc[:, :7]
    X.columns = ['n','p','k','temperture','humidity','ph','rainfall']
    y = df.iloc[:, -1]
    # Extract the label data into a separate variable
    # assuming the label is in the 7th column

    # Split the dataset into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

    # Train a decision tree classifier on the training data
    clf = DecisionTreeClassifier()
    clf.fit(X_train.values, y_train.values)
    # Use the classifier to make a prediction on the user input
    prediction = clf.predict([input_data])

    # Output the result
    response = {"crop": prediction[0]}

    return jsonify(response)

if __name__ == '__main__':
     app.run(debug=True ,port=5001,use_reloader=False)

