const api = "https://api.github.com/users/";

const main = document.getElementById("main");
const inputForm = document.getElementById("userInput");
const inputBox = document.getElementById("inputbox");

const userGetFunction = (username) => {
    main.innerHTML = ""; // Clear previous content
    axios.get(api + username)
        .then((response) => {
            userCard(response.data);
            repoGetFunction(username);
        })
        .catch((err) => {
            if (err.response && err.response.status === 404) {
                errorFunction("No profile with this username 😢");
            } else {
                errorFunction("Something went wrong 😔");
            }
        });
};

const repoGetFunction = (username) => {
    axios.get(`${api}${username}/repos?sort=created`)
        .then((response) => {
            repoCardFunction(response.data);
        })
        .catch(() => {
            errorFunction("Problem fetching repositories");
        });
};

const userCard = (user) => {
    const name = user.name || user.login;
    const bio = user.bio ? `<p>${user.bio}</p>` : "";

    const card = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${name}" class="avatar" />
        </div>
        <div class="user-info">
            <h2><a href ="https://github.com/${user.login}" target="_blank" >${name}</a></h2>
            ${bio}
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>`;
    main.innerHTML = card;
};
const errorFunction = (message) => {
    const html = `
    <div class="card">
        <h2>${message}</h2>
    </div>`;
    main.innerHTML = html;
};

const repoCardFunction = (repos) => {
    const reposElement = document.getElementById("repos");
    repos.slice(0, 5).forEach(repo => {
        const a = document.createElement("a");
        a.classList.add("repo");
        a.href = repo.html_url;
        a.target = "_blank";
        a.innerText = repo.name;
        reposElement.appendChild(a);
    });
};

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = inputBox.value.trim();
    if (user) {
        userGetFunction(user);
        inputBox.value = "";
    }
});
