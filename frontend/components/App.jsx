import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import LoginForm from './session_forms/login_form_container';
import SignupForm from './session_forms/signup_form_container';
import SearchIndex from './bench_index/search_container';
const App = () => (
    <div className="benchbnb-content">
        <header className="greeting-header">
            <h1>Bench BnB with Hooks</h1>
            <GreetingContainer />
        </header>
        
        <AuthRoute path="/signup" component={SignupForm} />
        <AuthRoute path="/login" component={LoginForm} />
        <Route exact path="/" component={SearchIndex} />
    </div>
);

export default App;