import config from '../../../test-config';

export const mutationLogin = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${config.bearerToken}` 
            },
        }
    );

    const data = await res.json();
    console.log(data);

    return data;
};