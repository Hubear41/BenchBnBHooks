import React from 'react';
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

        processForm(user);
    }

    const handleChange = field => {
        return e => {
            if ( field === 'username' ) {
                updateUsername(e.value);
            } else if ( field === "password" ) {
                updatePassword(e.value);
            }
        }
    }

    let redirectMessage = "";
    let redirectoLink = null;
    if ( formType === 'LoginForm' ) {
        redirectMessage = "Don't have an account?";
        redirectoLink = <Link to="/signup" >Sign Up!</Link>;
    } else {
        redirectMessage = "Already have an account?";
        redirectoLink = <Link to="/login" >Log In!</Link>;
    }

    let errorMessages = null;
    if ( errors.length > 0 ) {
        errorMessages = (
            <ul className="session-errors-list">
                {errors}
            </ul>
        );
    }

    return (
        <>
            <h1>{formType === 'LoginForm' ? "Log In" : "Sign Up"}</h1>

            {errorMessages}

            <form onSubmit={handleSubmit}>
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

                <input type="submit" value={formType === 'LoginForm' ? "Log In" : "Sign Up"} />

                <span>{redirectMessage} {redirectoLink}</span>
            </form>
        </>
    );
}

