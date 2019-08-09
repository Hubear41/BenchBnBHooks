import * as BenchAPI from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';

const recieveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches,
});

const receiveBench = bench => ({
    type: RECEIVE_BENCH,
    bench,
})

export const createBench = bench => dispatch => {
    return BenchAPI.createBench(bench).then( bench => dispatch(receiveBench(bench)) );
}

export const fetchBenches = bounds => dispatch => {
    return BenchAPI.fetchBenches(bounds).then( benches => dispatch(recieveBenches(benches)) );
}