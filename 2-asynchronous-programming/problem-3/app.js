async function getUserData() {
    const username = document.getElementById('username').value;
    const gridcontainer = document.getElementById('grid-container');
    var errorDiv = document.getElementById('error');
    errorDiv.style.display = 'none';

    try {
        // Fetch user data from GitHub API
        const userData = await fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`User not found! Status: ${response.status}`);
                }
                return response.json();
            });

    // Fetch user repos
    const userRepos = await fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json());

    // Display user profile
    document.getElementById('avatar').setAttribute('src', userData.avatar_url);
    document.getElementById('name').innerText = userData.name;
    document.getElementById('usernameOutput').innerText = userData.login;
    document.getElementById('email').innerText = userData.email || 'Not provided';
    document.getElementById('location').innerText = userData.location || 'Not provided';
    document.getElementById('gists').innerText = userData.public_gists;

    // Display user repos
    const repoList = document.getElementById('repoList');
    repoList.innerHTML = ''; // Clear the list

    userRepos.forEach(repo => {
        const div = document.createElement('div');
        div.classList.add('repo-item');
        div.innerHTML = `<strong>${repo.name}</strong>: ${repo.description || 'No description'}`;
        repoList.appendChild(div);
    });

    gridcontainer.style.display = 'grid';

    } catch (error) {
        errorDiv.style.display = 'block';
        // Handle the error
        document.getElementById('error').innerText = error.message;
    }
}
