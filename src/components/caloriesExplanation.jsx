import React from "react";

export default function appBody() {
  return (
    <div className="app-body-content">
      <div>
        <h1 className="my-3 my-lg-3">How are calories <span className="accent">calculated?</span></h1>
        <p className="calories-explanation-panel my-3 my-lg-3">
          Calories are calculated from 3 main macronutrients.
          <br /> <br /><span className="accent">Carbs, Protein and Fat.</span>
          <br />
          <br /> 
          <span className="accent">• </span> 1g of carbs is equivaltent to 4 calories <br />
          <span className="accent">• </span> 1g of protein is equivaltent to 4 calories
          <br />
          <span className="accent">• </span> 1g of fat is equivaltent to 9 calories
          <br />
        </p>
      </div>
    </div>
  );
}
