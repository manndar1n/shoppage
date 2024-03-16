import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import img from "../assets/beauty.png";

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="search">
                    <div className="logo">
                        <img src={img} alt="" />
                    </div>
                    <div className="search-btn">
                        <input type="text" />
                        <button>search</button>
                    </div>
                </div>
                <div className="header__content">
                    <Link to="/" className="link">
                        ALL
                    </Link>
                    <Link to="/care/cosmetics" className="link">
                        CARE COSMETICS
                    </Link>
                    <Link to="/decortaive/cosmetics" className="link">
                        DECORATIVE COSMETICS
                    </Link>
                    <Link to="/protect/cosmetics" className="link">
                        PROTECTIVE COSMETICS
                    </Link>
                    <Link to="/in/basket" className="link">
                        BASKET
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
