import { Navigation } from "./Navigation";
import {Link} from "react-router-dom";

export function RegisterForm(props) {
    return (
        <div className="login">
            <Navigation />
            <div className="login__form">
                <h2 className="login__form--title">Zaloguj się</h2>
                <form action="">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text"/>

                    <label htmlFor="password">Hasło</label>
                    <input id="password" type="password"/>

                    <label htmlFor="repeat-password">Powtórz hasło</label>
                    <input id="repeat-password" type="password"/>
                </form>
            </div>
            <div className="login__buttons">
                <Link to="/rejestracja">Załóź konto</Link>
                <Link to="/logowanie">Zaloguj się</Link>
            </div>
        </div>
    );
}