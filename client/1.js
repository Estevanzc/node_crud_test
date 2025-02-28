async function data_taker() {
    let data = await fetch(`localhost:3000/posts/`, {method: "GET"})
    let response = await data.json()
    console.log(response);    
}