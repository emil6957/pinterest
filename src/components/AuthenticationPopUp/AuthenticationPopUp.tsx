import React, { useEffect, useRef } from "react";
import "./AuthenticationPopUp.scss";
import { useDispatch } from "react-redux";
import { toggle } from "../../services/states/ShowPopUpSlice/ShowPopUpSlice";
import Auth from "../Auth/Auth";

// TODO: Might have to remake this so it isnt initially a popup to make it more reuseable

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
            <Auth authRef={authRef} />
        </div>
    )
}

export default AuthenticationPopUp;
