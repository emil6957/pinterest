import React, { useEffect, useRef } from "react";
import "./AuthenticationPopUp.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/states/store";
import { toggle } from "../../services/states/ShowPopUpSlice/ShowPopUpSlice";
import Auth from "../Auth/Auth";

// TODO: Might have to remake this so it isnt initially a popup to make it more reuseable

const AuthenticationPopUp = () => {
    const showPopUp = useSelector((state: RootState) => state.ShowPopup.value);
    const dispatch = useDispatch();

    const popupBackgroundRef: any = useRef(null);
    const popupRef: any = useRef(null);
    useEffect(() => {
        const handler = (e: any) => {
            if (!popupRef.current.contains(e.target) && popupBackgroundRef.current.contains(e.target)) {
                dispatch(toggle());
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler)
        };
    });

    return (
        <div className="authentication-popup" style={{ display: showPopUp ? "block" : "none" }} ref={popupBackgroundRef}>
            <Auth />
        </div>
    )
}

export default AuthenticationPopUp;
