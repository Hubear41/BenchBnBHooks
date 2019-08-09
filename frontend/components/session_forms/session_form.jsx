import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

const SessionForm = props => {
    const { formType, processForm, currentUserId, errors } = props;

    if ( currentUserId !== null ) {
        return <Redirect to="/" />;
    }

    const [username, updateUsername] = useState("");
    const [password, updatePassword] = useState("");

    // removes error messages if navigating somewhere else
    useEffect(() => {
        return () => props.clearErrors();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        const errors = [];

        if (password.length <= 0) {
            errors.push("Password can't be blank.");
        } else if ( password.length < 6 ) {
            errors.push("Password is too short");
        } 
         
        if ( username.length <= 0 ) {
            errors.push("Username can't be blank.");
        } 

        if ( errors.length > 0 ) {
            props.receiveErrors(errors);
        } else {
            const user = { username, password };
            processForm(user);
        }
    }

    const handleGuestSubmit = e => {
        e.preventDefault();

        const user = { username: "admin", password: "password" };
        props.login(user);
    }

    const handleChange = field => {
        return e => {
            if ( field === 'username' ) {
                updateUsername(e.target.value);
            } else if ( field === "password" ) {
                updatePassword(e.target.value);
            }
        }
    }

    let redirectMessage = "";
    let redirectoLink = null;
    if ( formType === 'LoginForm' ) {
        redirectMessage = "Don't have an account?";
        redirectoLink = <Link to="/signup" className="session-redirect-link">Sign Up!</Link>;
    } else {
        redirectMessage = "Already have an account?";
        redirectoLink = <Link to="/login" className="session-redirect-link">Log In!</Link>;
    }

    let errorMessages = null;
    if ( errors.length > 0 ) {
        errorMessages = (
            <ul className="session-form-error-list">
                {errors.map( (err, idx) => <li key={idx}>{err}</li>)}
            </ul>
        );
    }

    return (
        <>
            <h1 className="session-form-title">{formType === 'LoginForm' ? "Log In" : "Sign Up"}</h1>

            {errorMessages}

            <form className="session-form">
                <label htmlFor="username">Username:
                    <input type="text"
                           id="username"  
                           onChange={handleChange("username")}
                           value={username}/>
                </label>
                <label htmlFor="password">Password:
                    <input type="password"
                           id="password"
                           onChange={handleChange("password")}
                           value={password}/>
                </label>

                <div className="session-form-btns">
                    <button type="button"
                        className="session-form-submit"
                        onClick={handleSubmit}>
                            {formType === 'LoginForm' ? "Log In" : "Sign Up"}
                        </button>
                    <button type="button" 
                            className="session-form-submit" 
                            onClick={handleGuestSubmit}>
                                Guest Login
                            </button>
                </div>
                

                <span className="session-redirect-message">{redirectMessage} {redirectoLink}</span>
            </form>
        </>
    );
}

export default SessionForm;