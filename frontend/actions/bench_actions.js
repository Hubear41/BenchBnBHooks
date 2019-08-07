import * as BenchAPI from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

const recieveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches,
});

export const fetchBenches = () => dispatch => {
    return BenchAPI.fetchBenches().then( benches => dispatch(recieveBenches(benches)) );
}