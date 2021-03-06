import { connect } from 'react-redux';
import { signup, login, clearErrors, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    formType: 'SignupForm',
    errors: state.errors.session,
    currentUserId: state.session.id
});

const mdp = dispatch => ({
    processForm: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
});

export default connect(msp, mdp)(SessionForm)