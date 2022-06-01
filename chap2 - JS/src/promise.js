// @ts-check

/* eslint-disable no-new */
/* eslint-disable no-console */

function returnPromiseForTimeout() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.random())
        }, 1000);
    })
}

returnPromiseForTimeout()
    .then((value) => {
        console.log(value);
        return returnPromiseForTimeout();
    }).then((value) => {
        console.log(value);
        return returnPromiseForTimeout();
    }).then((value) => {
        console.log(value);
        return returnPromiseForTimeout();
    }).then((value) => {
        console.log(value);
        return returnPromiseForTimeout();
    })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(Math.random())
//         console.log('After resolve');
//     }, 1000);
// }).then((value) => {
//     console.log('then 1');
//     console.log('value', value);
// }).then(() => {
//     console.log('then 2');
// }).then(() => {
//     console.log('then 3');
// })