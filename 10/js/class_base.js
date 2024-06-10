class UserLogin {
    constructor( username, rawPassword) {
        this.username = username;
        this.rawPassword = rawPassword;
    }

    login() {
        alert(`💡[Hint]: ${this.username}: ${this.rawPassword}`);
    }
}

const taro = new UserLogin("taro yamada", "p@ss");

const helperButton = document.getElementById("helperButton");
helperButton.onclick = () => taro.login();
