
const baseURL = `http://localhost:4040/api/messages`

const message_display_section = document.querySelector('.message-display-section');

document.querySelector('body').onload = function () {
    axios.get(baseURL)
        .then(res => {
            const messages = res.data;
            for(let i = 0; i < messages.length; i++){
                const messageContent = messages[i].message;
                const messageElement = document.createElement('p');
                messageElement.textContent = messageContent;
                message_display_section.appendChild(messageElement);
            }
        })
        .catch(err => console.log(err));
};