const names = ['Lisa', 'Kaitlin', 'Jan'];

const eventName = `surprise`;

function writeCards(names, eventName) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        debugger;
    }

    return (names);

}

writeCards(names);


function countDown(number) {
    while(number >= 0){
        console.log(number);
        number--;
    }
}