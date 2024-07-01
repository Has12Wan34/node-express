const hello = name => console.log(`Hello ${name}`);
const myCallback = callback => callback('Devahoy');

const hello1 = (error, name) => {
    if (error) {
        throw error
    }
    console.log(`Hello ${name}`)
}
  
const myCallback1 = callback => {
    if (!callback) {
        callback(new Error('No callback provided'))
    }
    callback(null, 'Devahoy')
}

myCallback(hello);
myCallback1(hello1);
