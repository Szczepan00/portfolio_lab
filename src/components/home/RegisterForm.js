import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "./Navigation";

export function RegisterForm() {
    const initialValues = { email: "", password: "", repeatPassword: "", };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
    };

    const validate = (values) => {
        const errors = {};
        if (!values.email.includes("@")) {
            errors.email = "Podany email jest nieprawidłowy!";
        }
        if (values.password.length < 6) {
            errors.password = "Podane hasło jest za krótkie!";
        }
        if (values.repeatPassword.length < 6) {
            errors.repeatPassword = "Podane hasło jest niepoprawne!";
        }
        else if (values.repeatPassword !== values.password) {
            errors.repeatPassword = "Podane hasło jest niepoprawne!";
        }
        return errors;
    };
    return (
        <div className="login">
            <Navigation />
            <div className="login__form">
                <h2 className="login__form--title">Załóż konto</h2>
                <form action="">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    <p>{formErrors.email}</p>

                    <label htmlFor="password">Hasło</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                    <p>{formErrors.password}</p>

                    <label htmlFor="repeat-password">Powtórz hasło</label>
                    <input
                        id="repeat-password"
                        name="repeatPassword"
                        type="password"
                        value={formValues.repeatPassword}
                        onChange={handleChange}
                    />
                    <p>{formErrors.repeatPassword}</p>

                </form>
            </div>
            <div className="login__buttons">
                <Link to="/logowanie">Zaloguj się</Link>
                <Link to="/rejestracja" onClick={handleClick}>Załóź konto</Link>
            </div>
        </div>
    );
}