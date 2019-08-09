import { connect } from 'react-redux';
import BenchForm from './bench_form';
import { createBench } from '../../actions/bench_actions';

const msp = (state, { location }) => ({
    lat: new URLSearchParams(location.search).get("lat"),
    lng: new URLSearchParams(location.search).get("lng"),
});

const mdp = dispatch => ({
    createBench: bench => dispatch(createBench(bench)),
});

export default connect(msp, mdp)(BenchForm);