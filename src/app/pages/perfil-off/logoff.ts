interface User {
    username: string;
    isLoggedIn: boolean;
}

function checkUserLogin(user: User): boolean {
    return user.isLoggedIn;
}

function renderUserMessage(user: User) {
    const appElement = document.getElementById('app');

    if (!appElement) {
        return;
    }

    const messageElement = document.createElement('p');
    messageElement.style.color = user.isLoggedIn ? 'black' : 'gray';

    if (user.isLoggedIn) {
        messageElement.textContent = `Welcome, ${user.username}! You are logged in.`;
    } else {
        messageElement.textContent = 'You are not logged in.';
    }

    appElement.appendChild(messageElement);
}

const user: User = {
    username: 'JohnDoe',
};

// Render the user message.
renderUserMessage(user);
