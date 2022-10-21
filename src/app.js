import getUserInfo from "./lib/api/users/UserInfo.js";
import getUserDms from "./lib/api/@me/directMessages";
import getChannelInfo from "./lib/api/channels/ChannelInfo";

import mainBoardHml from "./lib/html/main-board.html";

const loginButton = document.getElementById("submit-token");

let infoText = document.getElementById("info-text");
let mainBoard = document.getElementById("main-board");
let loginBoard = document.getElementById("login-board");

loginButton.addEventListener("click", async () => {
    const token = document.getElementById("token").value;
    getUserInfo(token).then((res) => {
        infoText.innerText = `Logged in as ${res.data.username}#${res.data.discriminator}`;
        getUserDms(token).then((res) => {
            let info = res;
            let sorted = info.sort((a, b) => {
                return b.last_message_id - a.last_message_id;
            });
            mainBoard.innerHTML = mainBoardHml;
            mainBoard.style.display = "block";
            loginBoard.style.display = "none";
        }).catch((err) => {
            console.log(err);
        });
    }).catch((err) => {
        infoText.innerText = `Error: ${err.status} (Invalid token?)`;
        infoText.style.color = "red";
    });
});


