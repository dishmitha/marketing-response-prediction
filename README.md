# 📢 Marketing Campaign Response Prediction System

A full-stack Machine Learning web application that predicts customer responses to marketing campaigns using demographic and financial data.

The project combines a modern **React + TypeScript frontend** with a powerful **FastAPI backend** to provide real-time predictions through a premium and responsive user interface.

---

# 🚀 Live Demo

## 🌐 Frontend (Vercel)
https://marketing-response-prediction-git-main-dishmithas-projects.vercel.app/

## ⚡ Backend API (Render)
https://marketing-response-prediction.onrender.com

---

# 📌 Project Overview

This project predicts whether a customer will respond to a marketing campaign using Machine Learning classification techniques.

The application supports:

- CSV File Upload
- JSON Payload Input
- Real-Time Predictions
- Data Summary Generation
- Interactive User Interface

The system helps businesses improve marketing strategies by identifying customers who are more likely to respond positively.

---

# 🧠 Problem Statement

Marketing campaigns target thousands of customers, but response rates are often low.

This project uses customer demographic and financial information to predict campaign responses, helping businesses:

- Improve targeting accuracy
- Reduce marketing costs
- Increase campaign success rates
- Analyze customer behavior

---

# 📚 Dataset Features

## Input Features

- `customer_id`
- `age`
- `gender`
- `annual_income`
- `credit_score`
- `employed`
- `marital_status`
- `no_of_children`

## Target Variable

- `responded`
  -  Did Not Respond
  -  Responded

---

# 🤖 Machine Learning Workflow

The project includes:

- Data Cleaning
- Data Visualization
- Feature Engineering
- Data Encoding
- Feature Scaling
- Model Training
- Prediction Generation
- Model Evaluation
- Deployment

---

# 🖥️ Frontend

The frontend is developed using modern web technologies to create a smooth and premium user experience.

## Frontend Technologies

- Vite
- React
- TypeScript
- React Router DOM
- Vanilla CSS

## Frontend Features

✔ Premium Modern UI  
✔ Fully Responsive Design  
✔ CSV Upload Support  
✔ JSON Payload Input  
✔ Prediction Results Display  
✔ Fast Navigation  
✔ Clean User Experience  

---

# ⚙️ Backend

The backend is developed using FastAPI for high performance and fast prediction handling.

## Backend Technologies

- FastAPI
- Python
- Scikit-learn
- Pandas
- NumPy

## Backend Features

✔ REST API Support  
✔ CSV & JSON Input Handling  
✔ Real-Time Prediction API  
✔ Data Summary Response  
✔ Fast Processing  
✔ Deployment Ready  

---

# 📂 Project Structure

```bash
MARKETING_RESPONSE_PREDICTION/
│
├── backend/
│   ├── __pycache__/
│   ├── app.py
│   ├── model.pkl
│   ├── scaler.pkl
│   ├── requirements.txt
│   ├── runtime.txt
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── vite.config.js
│
├── venv/
├── .gitignore
├── campaign_response.csv
├── task.ipynb
└── README.md
```
# ▶️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# ▶️ Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

# 🔗 API Endpoint

## Swagger Documentation

```text
http://127.0.0.1:8000/docs
```

The API accepts:

- CSV file uploads
- JSON payload requests

Returns:

- JSON prediction arrays
- Data summaries

---

# 📊 Features of the Project

✔ Full Stack Machine Learning Application  
✔ Marketing Campaign Prediction System  
✔ Modern Premium UI  
✔ CSV Upload Functionality  
✔ JSON Payload Support  
✔ Real-Time Prediction Results  
✔ FastAPI Integration  
✔ Fully Deployed Project  

---

# 🔮 Future Improvements

- Add Dashboard Analytics
- Add Prediction History
- Add Graph Visualizations
- Add Dark Mode
- Docker Deployment Support

---
