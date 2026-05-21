from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import joblib

# Create FastAPI app
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load trained model and scaler
model = joblib.load("model.pkl")
scaler = joblib.load("scaler.pkl")


# Input Schema
class CustomerData(BaseModel):
    customer_id: int
    age: int
    gender: int
    annual_income: float
    credit_score: int
    employed: int
    marital_status: int
    no_of_children: int


# Home Route
@app.get("/")
def home():
    return {
        "message": "Campaign Response Prediction API is Running"
    }


# Prediction Route
@app.post("/predict")
def predict(data: CustomerData):

    # Convert input into array
    features = np.array([[
        data.customer_id,
        data.age,
        data.gender,
        data.annual_income,
        data.credit_score,
        data.employed,
        data.marital_status,
        data.no_of_children
    ]])

    # Scale features
    scaled_data = scaler.transform(features)

    # Predict
    prediction = model.predict(scaled_data)

    # Convert prediction to readable output
    result = "Responded" if prediction[0] == 1 else "Not Responded"

    return {
        "prediction": result
    }