//Anonymous in sweeter detail. - A reusable function that returns a promise. 
const delayMessage = (ms, message) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            // resolve('Timer Done, here is the returned response!')
            resolve(message)
        }, ms);
    });
};

async function run() {
    console.log("Starting...");
    const message = await delayMessage(2000, "You look outstanding!"); - //Waits two seconds.
    console.log( await delayMessage (5000, "Actually, you do alright.")); - //Waits five sekundes.
    console.log(message); //Output: Timer Done, here is the returned response! (returns what is resolved in the promise)
    console.log("We're done here.")
} 

run ();

//This method entails wrapping in  a promise, the recommended way of using an anonymous function in js, and a timer.
