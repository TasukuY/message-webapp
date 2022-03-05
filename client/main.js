
const baseURL = `http://localhost:4040/api/`

const message_display_section = document.querySelector('.message-display-section');
const message_input = document.getElementById('message-input');
const send_btn = document.getElementById('send-btn');
const message_input_form = document.querySelector('.message-input-form');
const delete_btn = document.getElementById('delete-btn');

function displayMessages(messages){
    for(let i = 0; i < messages.length; i++){
        const messageContent = messages[i].message;
        const messageElement = document.createElement('p');
        messageElement.textContent = messageContent;
        messageElement.id = i;
        message_display_section.appendChild(messageElement);
    }
}

//get messages
document.querySelector('body').onload = function () {
    axios.get(baseURL + 'messages')
        .then(res => {
            message_display_section.textContent = '';
            const messages = res.data;
            displayMessages(messages);
        })
        .catch(err => console.log(err));
};

//delete message
function deleteMessage(){
    axios.delete(baseURL + 'delete/1')
        .then(res => {
            message_display_section.textContent = '';
            const messages = res.data;
            displayMessages(messages);
        })
        .catch(err => console.log(err));
}

delete_btn.addEventListener('click', deleteMessage);