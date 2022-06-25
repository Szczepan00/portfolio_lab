import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "./Navigation";

export function LoginForm() {
    const initialValues = { email: "", password: "" };
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
        return errors;
    };

    return (
        <div className="login">
            <Navigation />
            <div className="login__form">
                <h2 className="login__form--title">Zaloguj się</h2>
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
                </form>
            </div>
            <div className="login__buttons">
                <Link to="/rejestracja">Załóź konto</Link>
                <Link to="/logowanie" onClick={handleClick}>Zaloguj się</Link>
            </div>
        </div>
    );
}