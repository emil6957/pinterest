import React from "react";
import "./Footer.scss";

type FooterProps = {

}

// TODO:Fill in hrefs for links
const Footer = ({ }: FooterProps) => {
    return (
        <footer className="footer">
            <ul className="footer__list">
                <li className="footer__list-item"><a className="footer__link">Terms of Service</a></li>
                <li className="footer__list-item"><a className="footer__link">Privacy Policy</a></li>
                <li className="footer__list-item"><a className="footer__link">Today</a></li>
                <li className="footer__list-item"><a className="footer__link">Explore</a></li>
            </ul>
        </footer>
    )
}

export default Footer;
