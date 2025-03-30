document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const messagesContainer = document.getElementById('messages');

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const messageText = messageInput.value;

        if (messageText) {
            addMessage('You', messageText);
            messageInput.value = '';

            // Send message to the server
            fetch('/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: messageText })
            })
            .then(response => response.json())
            .then(data => {
                if (data.reply) {
                    addMessage('Bot', data.reply);
                }
            })
            .catch(error => console.error('Error:', error));
        }
    });

    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
    }
});