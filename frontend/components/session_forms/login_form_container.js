import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    formType: 'LoginForm',
    errors: state.errors.session,
    currentUserId: state.session.id
});

const mdp = dispatch => ({
    processForm: user => dispatch(login(user)),
});

export default connect(msp, mdp)(SessionForm)