import { connect } from 'react-redux';
import Search from './search';
import { fetchBenches } from '../../actions/bench_actions';

const msp = ({ entities }) => ({
    benches: Object.values(entities.benches),
});

const mdp = dispatch => ({
    fetchBenches: () => dispatch(fetchBenches()),
})

export default connect(msp, mdp)(Search);

