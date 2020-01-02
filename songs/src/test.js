const add = (a,b) => {
    return Promise((resolve,reject) => {
        resolve(a+b);
        // setTimeout(() => {
        //     if( typeof a != 'number' || typeof b != 'number') {
        //         reject(new Error("Param not a number"))
        //     } else {
        //         resolve(a+b)
        //     }
        // }, 1000);
    })
}

const DTHT = async (a,b,h) =>{
    console.log('Test');
}
