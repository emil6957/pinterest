import React from "react"
import "./AuthTop.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/close-icon.svg";
import { useDispatch } from "react-redux";
import { toggle } from "../../services/states/ShowPopUpSlice/ShowPopUpSlice";

type AuthTopProps = {
}

const AuthTop = ({}:AuthTopProps) => {

    const dispatch = useDispatch();

    return (
        <div className="auth-top">
            <button className="auth-top__btn" onClick={() => dispatch(toggle())}>
                <CloseIcon />
            </button>
            <div className="auth-top__content">
                <Logo className="auth-top__logo" />
                <h1 className="auth-top__heading">Welcome to Pinterest</h1>
            </div>
        </div>
    )
}

export default AuthTop;