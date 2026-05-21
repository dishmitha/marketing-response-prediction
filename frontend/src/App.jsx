import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    annual_income: "",
    credit_score: "",
    employed: "",
    marital_status: "",
    no_of_children: ""
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "https://marketing-response-prediction.onrender.com/predict",
        formData
      );

      setResult(res.data.prediction);

    } catch (error) {
      console.log(error);
      alert("Backend not connected");
    }
  };

  return (
    <div className="container">

      <h1>📊 Campaign Response Predictor</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          onChange={handleChange}
          required
          className="same-input"
        >
          <option value="">Select Gender</option>
          <option value="0">0 - Male</option>
          <option value="1">1 - Female</option>
        </select>

        <input
          type="number"
          name="annual_income"
          placeholder="Annual Income"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="credit_score"
          placeholder="Credit Score"
          onChange={handleChange}
          required
        />

        <select
          name="employed"
          onChange={handleChange}
          required
          className="same-input"
        >
          <option value="">Employment Status</option>
          <option value="0">0 - Unemployed</option>
          <option value="1">1 - Employed</option>
        </select>

        <select
          name="marital_status"
          onChange={handleChange}
          required
          className="same-input"
        >
          <option value="">Marital Status</option>
          <option value="0">0 - Single</option>
          <option value="1">1 - Married</option>
        </select>

        <input
          type="number"
          name="no_of_children"
          placeholder="No of Children"
          onChange={handleChange}
          required
        />

        <button type="submit">Predict</button>

      </form>

      {result && (
        <h2>Result: {result}</h2>
      )}

    </div>
  );
}

export default App;