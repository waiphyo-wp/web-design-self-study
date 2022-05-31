// const fetchdataPromise = new Promise((a, reject) => {
//     a("d")
// })

// fetchdataPromise.then((data) => {
//     console.log("hello"+data)
// })

// fetchdataPromise.catch((data) => {
//     console.log("wai" + data)
// })

// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("error fetch")
//         }, 3000)
//     })
// }

// const asyncFun = async () => {
//     const resultAsync = await fetchData()
//     console.log(resultAsync)

// }

// asyncFun().catch((error) => {
//     console.log("error", error)
// })

// console.log("finsish")

//call fecth api
const url = "https://fakestoreapi.com/products"
fetch(url).then((resp) => {
    const respData = resp.json()
    return respData
}).then((respParam) => {
    console.log(respParam)
})
