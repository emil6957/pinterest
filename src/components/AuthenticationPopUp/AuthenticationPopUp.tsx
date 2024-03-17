import React, { useEffect, useRef } from "react";
import "./AuthenticationPopUp.scss";
import Button from "../ui/Button/Button";
import LoginForm from "../LoginForm/LoginForm";
import AuthTop from "../AuthTop/AuthTop"; 
import { ReactComponent as GoogleIcon} from "../../assets/images/google-icon.svg";
import SignupForm from "../SignupForm/SignupForm";
import AuthBottom from "../AuthBottom/AuthBottom";
import useToggle from "../../hooks/useToggle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/states/store";
import { toggle } from "../../services/states/ShowPopUpSlice/ShowPopUpSlice";

const AuthenticationPopUp = ({}) => {
    const showPopUp = useSelector((state: RootState) => state.ShowPopup.value);
    const dispatch = useDispatch();
    const [isSigningUp, toggleIsSigningUp] = useToggle(false);

    const popupBackgroundRef: any = useRef(null);
    const popupRef: any = useRef(null);
    useEffect(() => {
        const handler = (e: any) => {
            if(!popupRef.current.contains(e.target) && popupBackgroundRef.current.contains(e.target)) {
                dispatch(toggle());
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler)
        };
    });

    return (
        <div className="authentication-popup" style={{display: showPopUp ? "block" : "none"}} ref={popupBackgroundRef}>
            <div className="authentication-popup__wrapper" ref={popupRef}>
                <AuthTop />
                {isSigningUp ? <LoginForm /> : <SignupForm />}
                <p>OR</p>
                <Button title={"Continue with Google"} style={"google"} size="lg" icon={{img: <GoogleIcon />, position: "end"}}/>
                <AuthBottom isSigningUp={isSigningUp} toggleIsSigningUp={toggleIsSigningUp}/>
            </div>
        </div>
    )
}

export default AuthenticationPopUp;