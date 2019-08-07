import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root)

    // remove these in production
    window.login = SessionUtil.login
    window.logout = SessionUtil.logout
    window.signup = SessionUtil.signup
    // remove these in production
});