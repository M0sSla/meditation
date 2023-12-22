// FIRST

let content = document.getElementById("content");

content.addEventListener("click", (e) => {
  if (isElementLink(e.target)) {
    let confirmed = window.confirm("Вы уверены, что хотите покинуть страницу?");
    if (!confirmed) {
      e.preventDefault();
    }
  }

  function isElementLink(element) {
    if (element.tagName === "A") {
      return true;
    } else {
      var parentElement = element.parentElement;

      if (parentElement) {
        return isElementLink(parentElement);
      } else {
        return false;
      }
    }
  }
});

// SECOND

let galery = document.getElementById("galery");

let largeImg = document.getElementById("largeImg");

galery.addEventListener("click", (e) => {
  largeImg.setAttribute("src", e.target.getAttribute("src"));
});

// THIRD

let list = document.getElementById("list");

list.addEventListener("click", (e) => {
  if (e.ctrlKey || e.metaKey) {
    multipleСhoice(e.target);
  } else {
    singleСhoice(e.target);
  }
});

function multipleСhoice(li) {
  li.classList.toggle("selected");
}

function singleСhoice(li) {
  let selected = list.querySelectorAll(".selected");
  for (let elem of selected) {
    elem.classList.remove("selected");
  }
  li.classList.add("selected");
}

// FOURTH

let slider = document.querySelector(".slider");
let stick = document.querySelector(".stick");

stick.onmousedown = function (event) {
  event.preventDefault();

  let shiftX = event.clientX - stick.getBoundingClientRect().left;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);

  function mouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }

    let rightEdge = slider.offsetWidth - stick.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    stick.style.left = newLeft + "px";
  }

  function mouseUp() {
    document.removeEventListener("mouseup", mouseUp);
    document.removeEventListener("mousemove", mouseMove);
  }
};

stick.ondragstart = () => {
  return false;
};

// FIVE

const products = document.querySelectorAll(".product");
const cart = document.getElementById("cart");
const totalPrice = document.querySelector(".price");

products.forEach((product) => {
  product.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text", product.id);
    e.dataTransfer.setData("price", product.querySelector(".cost").textContent);
  });
});

function drop(event) {
  const productId = event.dataTransfer.getData("text");
  const product = document.getElementById(productId);
  const productCost = parseInt(event.dataTransfer.getData("price"));

  const newItem = document.createElement("div");
  newItem.classList.add("product");
  newItem.innerHTML = product.innerHTML;
  cart.appendChild(newItem);

  const currentTotal = parseInt(totalPrice.textContent);
  totalPrice.textContent = currentTotal + productCost;
}

function allowDrop(event) {
  event.preventDefault();
}

// SIX

const square = document.querySelector(".square");
let leftRight = 1;

function moveSquare() {
  const currentPosition = parseInt(getComputedStyle(square).left);
  const newPosition = currentPosition + 2 * leftRight;

  if (newPosition > 250 || newPosition < -250) {
    leftRight *= -1;
  }

  square.style.left = newPosition + "px";
  requestAnimationFrame(moveSquare);
}

moveSquare();

const ring = document.querySelector(".ring");
let upDown = 1;

function moveRing() {
  const currentPosition = parseInt(getComputedStyle(ring).top);
  const newPosition = currentPosition + 2 * upDown;

  if (newPosition > 250 || newPosition < 0) {
    upDown *= -1;
  }

  ring.style.top = newPosition + "px";
  requestAnimationFrame(moveRing);
}

moveRing();
