import React from "react";
import "./AuthBottom.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../services/states/isSigningUp/isSigningUpSlice";
import { RootState } from "../../services/states/store";

type AuthBottomProps = {
}

const AuthBottom = ({}:AuthBottomProps) => {
    const isSigningUp = useSelector((State: RootState) => State.isSigningUp.value);
    const dispatch = useDispatch();

    return (
        <div className="auth-bottom">
            <p className="auth-bottom__agreement">
                By continuing you are agreeing with your <a className="auth-bottom__link" href="">Terms Of Service </a>
                and acknowledge you've read our <a className="auth-bottom__link" href="">Privacy Policy.</a>
            </p>
            { isSigningUp 
                ?
                <button className="auth-bottom__btn" onClick={() => dispatch(toggle())}>
                    Not a member yet? Sign Up!
                </button>
                :
                <button className="auth-bottom__btn" onClick={() => dispatch(toggle())}>
                    Already a member? Log In!
                </button>
            }
        </div>
    )
}

export default AuthBottom;