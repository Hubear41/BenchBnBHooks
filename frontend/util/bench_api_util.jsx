export const fetchBenches = filter => {
    return $.ajax({
        method: "GET",
        url: "/api/benches",
        data: { 
            bounds: filter.bounds,
            max_seating: filter.max_seating,
            min_seating: filter.min_seating,
        },
    });
}

export const createBench = bench => {
    return $.ajax({
        method: "POST",
        url: "/api/benches",
        data: { bench },
    })
}