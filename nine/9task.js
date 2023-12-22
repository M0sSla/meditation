const answer = prompt("Желаете пройти регистрацию на сайте?");
if (answer === "Да") {
    alert("Круто!");
} else {
    alert("Попробуй ещё раз");
}

//2
const login = prompt("Введите логин:");
if (login === "Админ") {
    const password = prompt("Введите пароль:");
    if (password === "Я главный") {
        alert("Здравствуйте!");
    } else if (password === null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
} else if (login === null) {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}

//3
let isLiked = false;

function changeColor() {
    const button = document.getElementById("likeButton");
    if (isLiked) {
        button.style.backgroundColor = "";
        isLiked = false;
    } else {
        button.style.backgroundColor = "green";
        isLiked = true;
    }
}

//4
let isDrawing = false;
function toggleDrawing() {
    isDrawing = !isDrawing;
    const drawButton = document.getElementById("drawButton");
    drawButton.textContent = isDrawing ? "Остановить рисование" : "Начать рисование";

    if (isDrawing) {
        document.addEventListener("mousemove", drawElement);
    } else {
        document.removeEventListener("mousemove", drawElement);
    }
}

function drawElement(event) {
    console.log(event);
    const element = document.createElement("div");
    element.style.position = "absolute";
    element.style.borderRadius = "50%";
    element.style.left = event.clientX + "px";
    element.style.top = event.clientY + "px";
    element.style.width = "10px";
    element.style.height = "10px";
    element.style.backgroundColor = "#ff2929";
    document.querySelector("body").appendChild(element);
}