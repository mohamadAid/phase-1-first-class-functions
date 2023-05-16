const receivesAFunction = (callback) => callback();

const returnsANamedFunction = () => {
    return receivesAFunction;
}

const returnsAnAnonymousFunction = () => { 
    return () => console.log("Hi, this is an anonymous function");
}