import getUserInfo from "./lib/getUserInfo";
import getUserDms from "./lib/getUserDms";
import getChannelInfo from "./lib/getChannelInfo";

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
            sorted.slice(0, 10).forEach((channel) => {
                getChannelInfo(token, channel.id).then((res) => {
                    let channel = res;
                    console.log(channel);
                });
            });
        }).catch((err) => {
            console.log(err);
        });
    }).catch((err) => {
        infoText.innerText = `Error: ${err.status} (Invalid token?)`;
        infoText.style.color = "red";
    });
});
