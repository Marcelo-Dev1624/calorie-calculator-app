import React, { useState } from "react";

export default function MacroInputs() {
  const [carbs, setCarbs] = useState();
  const [protein, setProtein] = useState();
  const [fat, setFat] = useState();
  const [calculatedCalories, setCalculatedCalories] = useState();

  const handleCarbsChange = (e) => setCarbs(parseInt(e.target.value, 10));
  const handleProteinChange = (e) => setProtein(parseInt(e.target.value, 10));
  const handleFatChange = (e) => setFat(parseInt(e.target.value, 10));

  const calculateCalories = () => {
    if (
      carbs === null ||
      carbs === undefined ||
      protein === null ||
      protein === undefined ||
      fat === null ||
      fat === undefined
    ) {
      alert(
        "Macros are empty or not all macros are specified, please type your macros to calculate calories afterwards"
      );
      return;
    }
    if (carbs === 0 && protein === 0 && fat === 0) {
      alert(
        "Macros are empty or not all macros are specified, please type your macros to calculate calories afterwards"
      );
      return;
    }

    if (typeof carbs !== 'number' || typeof protein !== 'number' || typeof fat !== 'number') {
      alert("Macros must be numbers");
      return;
    }

    const calories = carbs * 4 + protein * 4 + fat * 9;
    setCalculatedCalories(calories);
  };

  const clearFields = () => {
    setCarbs("");
    setProtein("");
    setFat("");
    setCalculatedCalories("");
  };

  return (
    <form action="" className="macrosForm">
      <div className="calculated-macros-display my-4">
        <h1 id="calculated-calories-display">
          Total Calories: {calculatedCalories}
        </h1>
      </div>

      <div className="macrosForm__inputGroup">
        <h1>Grams of Carbs</h1>
        <input
          type="number"
          id="carbs-input"
          value={carbs}
          onChange={handleCarbsChange}
        />
      </div>

      <div className="macrosForm__inputGroup">
        <h1>Grams of Protein</h1>
        <input
          type="number"
          id="protein-input"
          value={protein}
          onChange={handleProteinChange}
        />
      </div>

      <div className="macrosForm__inputGroup">
        <h1>Grams of Fat</h1>
        <input
          type="number"
          id="fat-input"
          value={fat}
          onChange={handleFatChange}
        />
      </div>

      <div className="macrosForm__inputGroup mt-5 gap-3">
        <button
          onClick={clearFields}
          className="btn custom-outlined btn-lg"
          type="button"
        >
          Clear Fields
        </button>

        <button
          onClick={calculateCalories}
          className="btn btn-light btn-lg "
          type="button"
        >
          Calculate
        </button>
      </div>
    </form>
  );
}
