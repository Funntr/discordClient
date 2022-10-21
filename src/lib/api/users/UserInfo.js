function getUserInfo (token) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://discord.com/api/v9/users/@me", true);
        xhr.setRequestHeader("Authorization", token);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve({
                        status: xhr.status,
                        data: JSON.parse(xhr.responseText)
                    });
                } else {
                    reject({
                        status: xhr.status
                    });
                }
            }
        }
    });
}

export default getUserInfo;
