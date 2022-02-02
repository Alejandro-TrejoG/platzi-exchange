const url = "https://api.coincap.io/v2"

async function getAssets(){
    let res = await fetch(`${url}/assets?limit=20`)
    res = await res.json()
    return res.data
}

function getAsset(coin){
    return fetch(`${url}/assets/${coin}`)
    .then(res => res.json())
    .then(res => res.data)
}

function getAssetHistory(coin){
    const now = new Date()
    const end = now.getTime()
    now.setDate(now.getDate() - 1)
    const start = now.getTime()
    return fetch(`${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`)
    .then(res => res.json())
    .then(res => res.data)
}

function getMarkets(coin){
    return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then(res => res.json())
    .then(res => res.data)
}

async function getExchange(id){
    let res = await fetch(`${url}/exchanges/${id}`)
    res = await res.json()
    return res.data
}

export default{
    getAssets,
    getAsset,
    getMarkets,
    getExchange,
    getAssetHistory
}