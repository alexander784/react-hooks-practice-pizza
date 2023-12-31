import React, { useState } from "react";

function PizzaForm() {
  // store form data
  const [formData, setFormData] = useState({
    topping: "",
    size: "Small",
    vegetarian: "Vegetarian",
  });

  // handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form data 
    setFormData({
      topping: "",
      size: "Small",
      vegetarian: "Vegetarian",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={formData.topping}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            value={formData.size}
            onChange={handleInputChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={formData.vegetarian === "Vegetarian"}
              onChange={handleInputChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={formData.vegetarian === "Not Vegetarian"}
              onChange={handleInputChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
