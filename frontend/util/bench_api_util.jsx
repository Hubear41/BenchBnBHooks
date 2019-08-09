export const fetchBenches = bounds => {
    return $.ajax({
        method: "GET",
        url: "/api/benches",
        data: { bounds }
    });
}

export const createBench = bench => {
    return $.ajax({
        method: "POST",
        url: "/api/benches",
        data: { bench },
    })
}