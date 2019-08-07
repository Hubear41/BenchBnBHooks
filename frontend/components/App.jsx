import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginForm from './session_forms/login_form_container';
import SignupForm from './session_forms/signup_form_container';

const App = () => (
    <div>
        <header>
            <h1>Bench BnB with Hooks</h1>
            <GreetingContainer />
        </header>

        <Route path="/signup" component={SignupForm} />
        <Route path="/login" component={LoginForm} />
    </div>
);

export default App;