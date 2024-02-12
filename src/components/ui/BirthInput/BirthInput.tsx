import React from "react";
import "./BirthInput.scss";

const BirthInput = () => {
    return (
        <div className="birth-input">
            <label className="birth-input__label" htmlFor="dob">Birthdate</label>
            <input className="birth-input__field" type="date" name="dob" id="dob" />
        </div>
    )
}

export default BirthInput;