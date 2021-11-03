const myObject = (myArray) => {
    return {
        average: myArray.reduce((a, b) => a + b) / myArray.length,
        min: Math.min(...myArray),
        max: Math.max(...myArray),
        length: myArray.length
    }  
};

export default myObject;