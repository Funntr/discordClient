import getUserInfo from "./lib/getUserInfo";
import getUserDms from "./lib/getUserDms";

const loginButton = document.getElementById("submit-token");
let infoText = document.getElementById("info-text");

loginButton.addEventListener("click", async () => {
    const token = document.getElementById("token").value;
    getUserInfo(token).then((res) => {
        infoText.innerText = `Logged in as ${res.data.username}#${res.data.discriminator}`;
        getUserDms(token).then((res) => {
            let info = res;
            let sorted = info.sort((a, b) => {
                return b.last_message_id - a.last_message_id;
            });
            console.log(sorted);
        }).catch((err) => {
            console.log(err);
        });
    }).catch((err) => {
        infoText.innerText = `Error: ${err.status} (Invalid token?)`;
        infoText.style.color = "red";
    });
});
