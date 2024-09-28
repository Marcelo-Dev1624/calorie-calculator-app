import React, { useState } from "react";

export default function MacroInputs() {
  const [carbs, setCarbs] = useState();
  const [protein, setProtein] = useState();
  const [fat, setFat] = useState();
  const [alcohol, setAlcohol] = useState();
  const [calculatedCalories, setCalculatedCalories] = useState();

  const [alcoholConfirmation, setAlcoholConfirmation] = useState();

  const handleCarbsChange = (e) => setCarbs(parseInt(e.target.value, 10));
  const handleProteinChange = (e) => setProtein(parseInt(e.target.value, 10));
  const handleFatChange = (e) => setFat(parseInt(e.target.value, 10));
  const handleAlcoholChange = (e) => setAlcohol(parseInt(e.target.value, 10));
  const handleAlcoholConfirmChange = (e) => {
    setAlcoholConfirmation(parseInt(e.target.checked ? 0 : 1));
    //calculateCalories();
    console.log(`alcoholConfirmation: ${alcoholConfirmation}`);
  };

  const includeAlcohol = () => {
    console.log("includeAlcohol called");
    if (alcoholConfirmation === 0) {
      return (
        <div className="macrosForm__inputGroup">
          <h1>Grams of Alcohol</h1>
          <input
            type="number"
            id="alcohol-input"
            value={alcohol}
            onChange={handleAlcoholChange}
          />
        </div>
      );
    }
  };

  const calculateCalories = () => {
    if (alcoholConfirmation !== 0) {
      
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

      if (
        typeof carbs !== "number" ||
        typeof protein !== "number" ||
        typeof fat !== "number"
      ) {
        alert("Macros must be numbers");
        return;
      }

      const calories = carbs * 4 + protein * 4 + fat * 9;
      setCalculatedCalories(calories);
    } else {
      if (
        carbs === null ||
        carbs === undefined ||
        protein === null ||
        protein === undefined ||
        fat === null ||
        fat === undefined ||
        alcohol === null ||
        alcohol === undefined
      ) {
        alert(
          "Macros are empty or not all macros are specified, please type your macros to calculate calories afterwards"
        );
        return;
      }
      if (carbs === 0 && protein === 0 && fat === 0 && alcohol === 0) {
        alert(
          "Macros are empty or not all macros are specified, please type your macros to calculate calories afterwards"
        );
        return;
      }

      if (
        typeof carbs !== "number" ||
        typeof protein !== "number" ||
        typeof fat !== "number" ||
        typeof alcohol !== "number"
      ) {
        alert("Macros must be numbers");
        return;
      }

      const calories = carbs * 4 + protein * 4 + fat * 9 + alcohol * 7;
      setCalculatedCalories(calories);
    }
  };

  const clearFields = () => {
    setCarbs("");
    setProtein("");
    setFat("");
    setAlcohol("");
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

      <div className="macrosForm__inputGroup">
        <h1>Did you have alcohol?</h1>
        <input
          type="checkbox"
          id="alcohol-confirm-checkbox"
          value={alcoholConfirmation}
          onChange={handleAlcoholConfirmChange}
        />
      </div>

      {includeAlcohol()}

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
