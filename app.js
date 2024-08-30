document.getElementById('all').addEventListener('click', () => {
    applyFilter('all');
});

document.getElementById('female').addEventListener('click', () => {
    applyFilter('female');
});

document.getElementById('male').addEventListener('click', () => {
    applyFilter('male');
});

document.getElementById('sendMessage').addEventListener('click', () => {
    const message = document.getElementById('messageInput').value;
    sendMessage(message);
});

function applyFilter(filter) {
    // Simulate filtering users based on gender
    let genderValue = filter === 'female' ? '1' : filter === 'male' ? '2' : '0';
    console.log(`Filtering users by: ${filter} (Gender Value: ${genderValue})`);
    // Implement your filtering logic here
}

function sendMessage(message) {
    // Simulate sending a message
    console.log(`Sending message: "${message}" to users...`);
    // Implement your message sending logic here
}
