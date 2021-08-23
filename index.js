const names = ['Lisa', 'Kaitlin', 'Jan'];

const eventName = `surprise`;

function writeCards(names, eventName) {
    
    const newArray = []

    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }

    return newArray;

}

writeCards(names);





function countDown(number) {
    while(number >= 0){
        console.log(number);
        number--;
    }
}