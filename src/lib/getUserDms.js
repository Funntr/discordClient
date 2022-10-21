function getUserDms(token) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://discord.com/api/v9/users/@me/channels", true);
        xhr.setRequestHeader("Authorization", token);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.status);
                }
            }
        }
    });
}

module.exports = getUserDms;