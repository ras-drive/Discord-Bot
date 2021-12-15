const fs = require('fs');
const readlineSync = require('readline-sync');

if (fs.existsSync('config.json')) {
    let cont = true;
    while (cont) {
        let choice = readlineSync.question('config.json already exists, do you want to overwrite? (Y/N): ');
        if (choice === 'N' || choice === 'n') {
            process.exit();
        } else if (choice === 'Y' || choice === 'y') {
            cont = false;
        } else {
            console.log("Invalid choice");
        }
    }
}


let clientId = readlineSync.question('Please input your bot\'s client id: ');
let guildId = readlineSync.question('Please input your bot\'s client id: ');
let token = readlineSync.question('Please input your bot\'s token: ');

console.log(`${clientId} ${guildId} ${token}`);

let json = {
    'clientId': clientId,
    'guildId': guildId,
    'token': token
};

json = JSON.stringify(json);

fs.writeFile('../../config.json', json, (err) => {
    if (!err) {
        console.log('config.json succesfully set up!');
    }
});
