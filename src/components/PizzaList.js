import React, { useState, useEffect } from "react";
import Pizza from "./Pizza";

function PizzaList({ Pizzas }) {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Fetch pizza data from the json-server
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/pizzas"); // Replace with your json-server URL
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching pizza data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once on component mount

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzas.map((pizza) => (
          <Pizza
            key={pizza.id} // Assuming each pizza has a unique identifier
            topping={pizza.topping}
            size={pizza.size}
            vegetarian={pizza.vegetarian}
            // Add other pizza properties as needed
          />
        ))}
      </tbody>
    </table>
  );
}

export default PizzaList;