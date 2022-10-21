import getUserInfo from "./lib/getUserInfo";

const loginButton = document.getElementById("submit-token");
let infoText = document.getElementById("info-text");

loginButton.addEventListener("click", async () => {
    const token = document.getElementById("token").value;
    getUserInfo(token).then((res) => {
        infoText.innerText = `Logged in as ${res.data.username}#${res.data.discriminator}`;
    }).catch((err) => {
        infoText.innerText = `Error: ${err.status} (Invalid token?)`;
        infoText.style.color = "red";
    });
});
