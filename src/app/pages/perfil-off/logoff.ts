// Define an interface for the user.
interface User {
    username: string;
    isLoggedIn: boolean;
}

// Function to check if the user is logged in.
function checkUserLogin(user: User): boolean {
    return user.isLoggedIn;
}

// Function to render the user message based on login status.
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
    isLoggedIn: false, // Set this to true to simulate a logged-in user.
};

// Render the user message.
renderUserMessage(user);
