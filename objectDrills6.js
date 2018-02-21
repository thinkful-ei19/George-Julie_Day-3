let code = 'craft block argon meter bells brown croon droop'.split(' ');
let decoder = function(letter) {  
    const cipher = {
        a: 1,
        b: 2,
        c: 3,
        d: 4 
    };
    return !cipher[letter] ? false : cipher[letter];
}

function decodeWords(code){
    // let index = decoder(firstLetter);
    // code.map( (word=> { let firstLetter = word[0];
    //     let index = decoder(firstLetter);
    //     return word[index] || " "; 
    // }).join('')


    let result = '';
    for (let i = 0; i < code.length; i++){
        let firstLetter = code[i].charAt(0); 
        const index = decoder(firstLetter);
        // console.log(index);  
        if (index){
            result += code[i].charAt(index);
        } else {
            result += ' ';
        }
   }
   return result;
    
}

console.log(decodeWords(code));