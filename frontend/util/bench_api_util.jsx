export const fetchBenches = filter => {
    return $.ajax({
        method: "GET",
        url: "/api/benches",
        data: { 
            bounds: filter.bounds,
            max_seating: filter.maxSeating,
            min_seating: filter.minSeating,
        },
    });
}

export const fetchBench = id => {
    return $.ajax({
        method: "GET",
        url: `/api/benches/${id}`,
    });
};

export const createBench = bench => {
    return $.ajax({
        method: "POST",
        url: "/api/benches",
        data: { bench },
    })
}