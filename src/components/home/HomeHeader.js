import { Link } from "react-router-dom";
import { Navigation } from "./Navigation";

export function HomeHeader() {
    return (
        <header className="header" id="header">
            <div className="container">
                <Navigation />
                <section className="header__info">
                    <div className="header__info--title">
                        <h1>Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    </div>
                    <div className="header__info--buttons">
                        <Link to="logowanie">Oddaj <br/> rzeczy</Link>
                        <Link to="logowanie">Zorganizuj zbiórkę</Link>
                    </div>
                </section>
            </div>
        </header>
    );
}
