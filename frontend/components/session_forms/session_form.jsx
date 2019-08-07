import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const SessionForm = props => {
    const { formType, processForm, currentUserId, errors } = props;

    if ( currentUserId !== null ) {
        return <Redirect to="/" />;
    }

    const [username, updateUsername] = useState("");
    const [password, updatePassword] = useState("");


    const handleSubmit = e => {
        e.preventDefault();
        const user = { username, password };
        debugger
        processForm(user);
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
            <ul className="session-form-errors-list">
                {errors}
            </ul>
        );
    }

    return (
        <>
            <h1 className="session-form-title">{formType === 'LoginForm' ? "Log In" : "Sign Up"}</h1>

            {errorMessages}

            <form onSubmit={handleSubmit} className="session-form">
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

                <input  type="submit" 
                        className="session-form-submit"
                        value={formType === 'LoginForm' ? "Log In" : "Sign Up"} />

                <span className="session-redirect-message">{redirectMessage} {redirectoLink}</span>
            </form>
        </>
    );
}

export default SessionForm;