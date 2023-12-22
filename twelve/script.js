document.addEventListener("DOMContentLoaded", function () {
  const notificationContainer = document.getElementById("container");
  const button = document.getElementById("button");
  let notificationCount = 0;
  let notificationInterval;

  function createNotification() {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerHTML = `Уведомление ${notificationCount + 1}`;
    notification.style.display = "block";
    notificationContainer.appendChild(notification);
    const btn = document.createElement("button");
    notification.appendChild(btn);
    notificationCount++;
  }

  function start() {
    notificationInterval = setInterval(createNotification, 3000);
  }

  function stop() {
    clearInterval(notificationInterval);
  }

  function delayDecorator(delay) {
    return function () {
      stop();
      setTimeout(() => {
        alert("10");
        start();
      }, delay);
    };
  }

  start();

  button.addEventListener("click", delayDecorator(10000));

  // third

  function createListItem() {
    let listItemContent = prompt("Ввод:");

    if (listItemContent === null || listItemContent === "") {
      return false;
    }

    let listItem = document.createElement("li");
    listItem.textContent = listItemContent;
    document.getElementById("myList").appendChild(listItem);

    createListItem();
  }

  createListItem();
});


