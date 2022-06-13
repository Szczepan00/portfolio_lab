import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export function HomeHeader() {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__nav--upper">
                        <Link to="logowanie">Zaloguj</Link>
                        <Link to="rejestracja">Załóż konto</Link>
                    </div>
                    <div className="header__nav--bottom">
                        <ul>
                            <li>Start</li>
                            <li>
                                <HashLink
                                    to="/#aboutUs"
                                    smooth
                                >
                                    O co chodzi?
                                </HashLink>
                            </li>
                            <li>O nas</li>
                            <li>Fundacja i organizacje</li>
                            <li>Kontakt</li>
                        </ul>
                    </div>
                </nav>

                <section className="header__info">
                    <div className="header__info--title">
                        <h1>Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    </div>
                    <div className="header__info--buttons">
                        <a href="">Oddaj <br/> rzeczy</a>
                        <a href="">Zorganizuj zbiórkę</a>
                    </div>
                </section>
            </div>
        </header>
    );
}
