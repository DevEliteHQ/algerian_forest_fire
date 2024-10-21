import React, { useState } from "react";
import axios from "axios";  // Import axios

export default function Register() {
  const [user, setUser] = useState({
    Temperature: "",
    RH: "",
    Ws: "",
    Rain: "",
    FFMC: "",
    DMC: "",
    ISI: "",
    Classes: "",
    Region: "",
  });
  const [prediction, setPrediction] = useState(null);  // State for storing the prediction result
  const [error, setError] = useState(null);  // State for storing error messages

  // Handle form input change
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Convert the form input values to a list of numbers as required by the backend
    const dataList = [
      parseFloat(user.Temperature),
      parseFloat(user.RH),
      parseFloat(user.Ws),
      parseFloat(user.Rain),
      parseFloat(user.FFMC),
      parseFloat(user.DMC),
      parseFloat(user.ISI),
      parseInt(user.Classes),
      parseInt(user.Region),
    ];
    console.log(dataList);
    try {
      // Make the API request and send the list as the 'data' field in the request body
      const response = await axios.post("http://127.0.0.1:8000/model/predict", { data: dataList });
      console.log(response);
      
      setPrediction(response.data.message);  // Assuming the backend returns the prediction value
      setError(null);  // Clear any previous error
    } catch (error) {
      console.error("Error fetching prediction", error);
      setError("Failed to get prediction. Please try again.");  // Set error message
      setPrediction(null);  // Reset prediction on error
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="Temperature">Temperature</label>
          <input
            type="text"
            name="Temperature"
            value={user.Temperature}
            onChange={handleChange}
            autoComplete="off"
          />
          <label htmlFor="RH">RH</label>
          <input
            type="text"
            name="RH"
            value={user.RH}
            onChange={handleChange}
            autoComplete="off"
          />
          <label htmlFor="Ws">Ws</label>
          <input
            type="text"
            name="Ws"
            value={user.Ws}
            onChange={handleChange}
            autoComplete="off"
          />
          <label htmlFor="Rain">Rain</label>
          <input
            type="text"
            name="Rain"
            value={user.Rain}
            onChange={handleChange}
            autoComplete="off"
          />
          <label htmlFor="FFMC">FFMC</label>
          <input
            type="text"
            name="FFMC"
            value={user.FFMC}
            onChange={handleChange}
            autoComplete="off"
          />
          <label htmlFor="DMC">DMC</label>
          <input
            type="text"
            name="DMC"
            value={user.DMC}
            onChange={handleChange}
            autoComplete="off"
          />
          <label htmlFor="ISI">ISI</label>
          <input
            type="text"
            name="ISI"
            value={user.ISI}
            onChange={handleChange}
            autoComplete="off"
          />
          <label htmlFor="Classes">Classes</label>
          <input
            type="text"
            name="Classes"
            value={user.Classes}
            onChange={handleChange}
            autoComplete="off"
          />
          <label htmlFor="Region">Region</label>
          <input
            type="text"
            name="Region"
            value={user.Region}
            onChange={handleChange}
            autoComplete="off"
          />
          <div className="submit-btn">
            <button type="submit">Predict FWI</button>
          </div>
        </form>

        {/* Display the prediction result */}
        {prediction && (
          <div className="prediction-result">
            <h3 style={{ padding: '10px' }}>FWI Prediction: {prediction}</h3>
          </div>
        )}

        {/* Display any error messages */}
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
