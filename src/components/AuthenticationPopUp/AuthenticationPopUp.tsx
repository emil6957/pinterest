import React, { useEffect, useRef } from "react";
import "./AuthenticationPopUp.scss";
import { useDispatch } from "react-redux";
import { toggle } from "../../services/states/ShowPopUpSlice/ShowPopUpSlice";
import Auth from "../Auth/Auth";

const AuthenticationPopUp = () => {
    const dispatch = useDispatch();

    const popupBackgroundRef: any = useRef(null);
    const authRef: any = useRef(null);

    useEffect(() => {
        const handler = (e: any) => {
            if (!authRef.current.contains(e.target) && popupBackgroundRef.current.contains(e.target)) {
                dispatch(toggle());
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler)
        };
    });

    return (
        <div className="authentication-popup" ref={popupBackgroundRef}>
            <div className="authentication-popup__wrapper">
                <Auth authRef={authRef} />
            </div>
        </div>
    )
}

export default AuthenticationPopUp;
