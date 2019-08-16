import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBench } from '../../actions/bench_actions';
import { updateFilter } from '../../actions/filter_actions';
import BenchShow from './bench_show';

const msp = ({ entities }, ownProps) => {
    return {
        bench: entities.benches[ownProps.match.params.benchId],
    };
};

const mdp = dispatch => ({
    fetchBench: id => dispatch(fetchBench(id)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default withRouter(connect(msp, mdp)(BenchShow));