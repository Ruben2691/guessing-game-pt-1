const readline = require('readline');

let rl = readline.createInterface(
					process.stdin, process.stdout);


const askGuess = () =>{

    rl.question('Enter a guess: ', (input) => {
        let num = Number(input)
        if(checkGuess(num)){
            console.log('You win!')
            rl.close();
        }else{
            return askGuess()
        }

    });


}
let secretNumber = 10


const checkGuess = (num) =>{
    if(num > secretNumber){
        console.log('too high')
        return false
    }else if(num < secretNumber){
        console.log('too low')
        return false
    }else{
     console.log('correct!')
     return true
    }
}


askGuess()
