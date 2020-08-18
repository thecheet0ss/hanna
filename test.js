const { resolve } = require("path");
const { rejects } = require("assert");

const condition = true;
const somePromise = new Promise((resolve, rejects) => {
    if (condition) {
        resolve('Successed!!');
    } else {
        rejects('Failed T,.T');
    }
});

somePromise.then((someResponse) => {
    console.log(someResponse);
}).catch((error) => {
    console.log(error);
});
