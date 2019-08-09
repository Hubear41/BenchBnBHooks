import * as BenchAPI from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

const recieveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches,
});

export const fetchBenches = bounds => dispatch => {
    return BenchAPI.fetchBenches(bounds).then( benches => dispatch(recieveBenches(benches)) );
}