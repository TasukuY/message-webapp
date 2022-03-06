const messages = require('./db.json');

module.exports = {
    getMessages: (req, res) => {
        res.status(200).send(messages);
    },
    deleteMessage: (req, res) => {
        const index = req.params.id;
        messages.splice(index, 1);
        res.status(200).send(messages);
    },
    addMessage: (req, res) => {
        console.log(req.body);
        let newMessage = {
            "id": messages.length,
            "message": req.body.message
        }
        messages.push(newMessage);
        res.status(200).send(messages);
    }
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