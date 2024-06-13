let sirZiaPromise1 = new Promise((resolve,reject)=>{
    resolve("congrats! You passes lets get a party.")

})
sirZiaPromise1.then((response)=>{
    console.log(response)
})
let sirZiaPromise2 = new Promise((resolve,reject)=>{
    reject("Unfortunately! You are rejected.")

})
sirZiaPromise2.catch((response)=>{
    console.log(response)
    // pattern2
})
let sirZiaPromise = new Promise( (reselove,reject)  => {
reject ("mai nh jarha")
})
async function sirZiaPromiseStatus(){
    try{
    let status=  await sirZiaPromise
    console.log(status)
    }catch{
        console.log("failed")
    }
}
sirZiaPromiseStatus()

