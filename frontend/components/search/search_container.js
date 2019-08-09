import { connect } from 'react-redux';
import Search from './search';
import { fetchBenches } from '../../actions/bench_actions';
import { updateFilter } from '../../actions/filter_actions';

const msp = ({ entities, ui }) => ({
    benches: Object.values(entities.benches),
    minSeating: ui.filters.minSeating,
    maxSeating: ui.filters.maxSeating,
});

const mdp = dispatch => ({
    fetchBenches: () => dispatch(fetchBenches()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
})

export default connect(msp, mdp)(Search);

