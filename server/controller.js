const messages = require('./db.json');

module.exports = {
    getMessages: (req, res) => {
        res.status(200).send(messages);
    },
}

/*
let newObj = {
            "id": 1,
            "message": "New Message"
        }

        for(let i = 0; i < test.length; i++){
            console.log(`${test[i].message}`);   
        }

        console.log('----------------------------------------------------------------------');
        test.push(newObj);
        for(let i = 0; i < test.length; i++){
            console.log(`${test[i].message}`);   
        }
*/