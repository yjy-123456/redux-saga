export const getProductApi=(params) => {
    console.log(params);
    return fetch("/data/index.json")
    .then(body=>body.json())
    .then(res=>res)
    .catch(err=>{
        throw new Error(err)
    })
}