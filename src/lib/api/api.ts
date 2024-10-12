

export  const getAllCountry = async () => {
    const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c443c290dcmsh5d23ec93eff9fb2p118cf2jsnce637b3ad622',
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        return  await  response.json();
    } catch (error) {
        console.error(error);
    }
}