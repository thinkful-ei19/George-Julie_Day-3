

let newObject = {foo:'candy', bar: 1000, fum: 'Los Angeles', quux: 50, spam: 'Might be good for you?'};

for (let key in newObject){
    console.log(key, newObject[key]);
}