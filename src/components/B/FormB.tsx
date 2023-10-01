import React from "react";

const FormB: React.FC = () => {
  return (
    <div>
      {/* Add your Form B fields and elements here */}
      <label htmlFor="fieldB">Field B:</label>
      <input type="text" name="fieldB" id="fieldB"/>
      {/* ...other form fields */}
    </div>
  );
};

export default FormB;
