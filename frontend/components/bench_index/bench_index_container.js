import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { fetchBenches } from '../../actions/bench_actions';

const msp = ({ entities }) => ({
    benches: Object.values(entities.benches),
});

const mdp = dispatch => ({
    fetchBenches: () => dispatch(fetchBenches()),
});

export default connect(msp, mdp)(BenchIndex);