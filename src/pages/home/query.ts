import config from '../../../test-config';

export const fetchMovies = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
            headers: {
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${config.bearerToken}`
            },
        }
    );

    return res.json();
};

export const fetchTvShows = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        {
            headers: {
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${config.bearerToken}`
            },
        }
    );

    // const data = await res.json();
    // console.log(data);

    return res.json();
};