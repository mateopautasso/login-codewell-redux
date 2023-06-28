const fetchGetReq = async (url) => {
    try {
        const request = await fetch(url);
        if(!request.ok) throw ([request.status, request. statusText]);
        const response = await request.json();
        return response;
    } catch(err) {
        if(err[0] !== undefined) console.log(`Error en la petición: ${err[0]} ${err[1]}`)
    }
}
export default fetchGetReq;