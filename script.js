const passwordBox = document.querySelector("#Password");
const length = 15;
const button = document.querySelector(".button");
const icon = document.querySelector(".icon");

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "123456789";
let symbol = "@#&";

let allchars = uppercase + lowercase + numbers + symbol;

button.addEventListener("click",(e)=>{
    let password = "";

 password+= uppercase[Math.floor(Math.random() * uppercase.length)];
 password+= lowercase[Math.floor(Math.random() * lowercase.length)];
 password+= numbers[Math.floor(Math.random() * numbers.length)];
 password+= symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length)
    {
        password+=allchars[Math.floor(Math.random() * allchars.length)];
    }

    passwordBox.value = password;
});

icon.addEventListener("click",(e)=>{
    passwordBox.select();
    document.execCommand("copy");
});