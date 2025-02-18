document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const messageList = document.getElementById('messageList');
    const newMessage = document.createElement('li');
    newMessage.textContent = ${name}: ${message};
    messageList.appendChild(newMessage);
    document.getElementById('birthdayForm').reset();
});
