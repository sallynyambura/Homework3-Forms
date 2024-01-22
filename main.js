function showSection(sectionId) {
    document.getElementById('section1').style.display = 'none';
    document.getElementById('section2').style.display = 'none';
    document.getElementById('section3').style.display = 'none';

    document.getElementById(sectionId).style.display = 'block';
}

function newUserLogin() {
    const username = document.getElementById('username').value;
    alert(`Welcome ${username}`);
}

function existingUserLogin() {
    const storedUsername = "storedUsername"; // Replace with actual stored username
    const storedPassword = "storedPassword"; // Replace with actual stored password
    const enteredUsername = document.getElementById('existingUsername').value;
    const enteredPassword = document.getElementById('existingPassword').value;

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert(`Welcome back ${enteredUsername}`);
    } else {
        alert('Invalid');
    }
}