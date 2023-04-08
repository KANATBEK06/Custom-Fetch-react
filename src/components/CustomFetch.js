export const appFetch = async (data) => {
    try{
const requestOptions = {
    method: data.dethod || 'GET',
    headers: {'Content-Type':'application/json'},
}
if(data.method !== 'GET' && data.body) {
    requestOptions.body = JSON.stringify(data.body)
}
const resposne = await fetch(data.url, requestOptions)
if(!resposne.ok){
    throw new Error(resposne.message)
}
return resposne.json()
    }
    catch(error){
console.log(error);
    }
}