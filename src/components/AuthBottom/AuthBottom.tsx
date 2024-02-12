import React from "react";
import "./AuthBottom.scss";

type AuthBottomProps = {
}

const AuthBottom = ({}:AuthBottomProps) => {
    return (
        <div className="auth-bottom">
            <p className="auth-bottom__agreement">
                By continuing you are agreeing with your <a className="auth-bottom__link" href="">Terms Of Service </a>
                and acknowledge you've read our <a className="auth-bottom__link" href="">Privacy Policy.</a>
            </p>
            <button className="auth-bottom__btn">
                Already a member? Log In!
            </button>
            {/* <button className="auth-bottom__btn">
                Not a member yet? Sign Up!
            </button> */}
        </div>
    )
}

export default AuthBottom;