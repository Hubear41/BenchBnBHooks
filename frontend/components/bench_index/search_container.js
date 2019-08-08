import { connect } from 'react-redux';
import Search from './search';
import { fetchBenches } from '../../actions/bench_actions';
import { updateBounds } from '../../actions/filter_actions';

const msp = ({ entities }) => ({
    benches: Object.values(entities.benches),
});

const mdp = dispatch => ({
    fetchBenches: () => dispatch(fetchBenches()),
    updateBounds: bounds => dispatch(updateBounds(bounds)),
})

export default connect(msp, mdp)(Search);

