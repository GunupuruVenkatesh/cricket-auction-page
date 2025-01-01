// Function to save user data to localStorage
function saveToLocalStorage(storageKey, users) {
    localStorage.setItem(storageKey, JSON.stringify(users));
}

// Function to load user data from localStorage
function loadFromLocalStorage(storageKey) {
    const users = localStorage.getItem(storageKey);
    return users ? JSON.parse(users) : [];
}

// Function to render the user list
function renderUserList(users, storageKey) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';  // Clear the list
    users.forEach((user, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${user.name} - $${user.money} <button onclick="removeUser(${index}, '${storageKey}')">Remove</button>`;
        userList.appendChild(li);
    });
}

// Function to add a new user to the list
function addUser(name, money, storageKey) {
    const users = loadFromLocalStorage(storageKey);
    users.push({ name, money });
    saveToLocalStorage(storageKey, users);
    renderUserList(users, storageKey);
}

// Function to remove a user from the list
function removeUser(index, storageKey) {
    const users = loadFromLocalStorage(storageKey);
    users.splice(index, 1);  // Remove the user at the specified index
    saveToLocalStorage(storageKey, users);
    renderUserList(users, storageKey);
}
