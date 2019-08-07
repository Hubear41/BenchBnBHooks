import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    const { currentUser, logout } = props;
    const greetingBtns = [];

    if (currentUser === null) {
        greetingBtns.push( <Link to="/signup" 
                                 className="greeting-btn" 
                                 key="signup">
                                     Sign Up
                            </Link> );
        greetingBtns.push( <Link to="/login" 
                                 className="greeting-btn" 
                                 key="login">
                                    Log In
                            </Link> );
    } else {
        greetingBtns.push( <button className="greeting-btn" 
                                   onClick={logout} 
                                   key="logout">Log Out
                            </button> );
    }

    return (
        <div className="greeting-btns">
            {greetingBtns}
        </div>
    );
};

export default Greeting;