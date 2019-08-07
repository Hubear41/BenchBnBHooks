import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const msp = ({entities, session}) => ({
    currentUser: entities.users[session.id] || null,
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(msp, mdp)(Greeting);