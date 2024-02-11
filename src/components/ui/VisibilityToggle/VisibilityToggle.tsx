import React, { useState } from "react";
import "./VisibilityToggle.scss";
import useToggle from "../../../hooks/useToggle";
import { ReactComponent as ShowPassword } from "../../../assets/images/show-password.svg";
import { ReactComponent as HidePassword } from "../../../assets/images/hide-password.svg";

const VisibilityToggle = () => {
    const [showPassword, togglePassword] = useToggle(false);

    return (
        <div className="visibility-toggle" onClick={togglePassword}>
            {showPassword ? <HidePassword className="visibility-toggle__img" /> : <ShowPassword className="visibility-toggle__img" />}
        </div>
    )
}

export default VisibilityToggle;