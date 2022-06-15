import React from 'react';
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export function Navigation(props) {
    return (
        <nav className="header__nav">
            <div className="header__nav--upper">
                <Link to="/logowanie">Zaloguj</Link>
                <Link to="/rejestracja">Załóż konto</Link>
            </div>
            <div className="header__nav--bottom">
                <ul>
                    <li>
                        <HashLink
                            to="/#header"
                            smooth
                        >
                            Start
                        </HashLink>
                    </li>
                    <li>
                        <HashLink
                            to="/#steps"
                            smooth
                        >
                            O co chodzi?
                        </HashLink>
                    </li>
                    <li>
                        <HashLink
                            to="/#aboutUs"
                            smooth
                        >
                            O nas
                        </HashLink>
                    </li>
                    <li>
                        <HashLink
                            to="/#fundations"
                            smooth
                        >
                            Fundacje i organizacje
                        </HashLink>
                    </li>
                    <li>
                        <HashLink
                            to="/#contact"
                            smooth
                        >
                            Kontakt
                        </HashLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}