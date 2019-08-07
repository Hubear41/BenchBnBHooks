import { connect } from 'react-redux';
import { login, clearErrors, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    formType: 'LoginForm',
    errors: state.errors.session,
    currentUserId: state.session.id
});

const mdp = dispatch => ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
});

export default connect(msp, mdp)(SessionForm)