const API_URL = 'https://to-do-app-backend-v130.onrender.com';
const APP_NAME = 'Fast-Task';

function applyAppName() {
    const appNameElements = document.querySelectorAll('.app-name');

    for (const element of appNameElements) {
        element.textContent = APP_NAME;
    }
}
document.addEventListener('DOMContentLoaded', applyAppName)