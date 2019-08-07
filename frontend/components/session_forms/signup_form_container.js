import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    formType: 'SignupForm',
    errors: state.errors.session,
    currentUserId: state.session.id
});

const mdp = dispatch => ({
    processForm: user => dispatch(signup(user)),
});

export default connect(msp, mdp)(SessionForm)