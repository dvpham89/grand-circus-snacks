"use strict";

let shoppingCart = [];
let subTotal = 0;
let total = 0;
const cartUl = document.querySelector(".cart-ul");
const main = document.querySelector("main");
const cartButton = document.querySelector("#cart");
const foodItems = document.querySelector(".food-items");
const subTotalP = document.createElement("p");
const checkoutButton = document.createElement("button");

const snacksGC = [
  {
    image: "assets/01-funnel-cakes.jpg",
    category: "desserts",
    name: "Funnel Cake",
    description: "Ducimus dignissimos ratione sed voluptates tempore.",
    price: 4.5,
  },
  {
    image: "assets/02-elephant-ears.jpg",
    category: "desserts",
    name: "Elephant Ears",
    description: "Facilis dolorem earum, deleniti blanditiis provident minima",
    price: 4.5,
  },
  {
    image: "assets/03-cotton-candy.jpg",
    category: "desserts",
    name: "Cotton Candy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 3.5,
  },
  {
    image: "assets/04-popcorn.jpg",
    category: "snacks",
    name: "Popcorn",
    description: "Ducimus dignissimos ratione sed voluptates tempore.",
    price: 2.0,
  },
  {
    image: "assets/05-pretzels.jpg",
    category: "snacks",
    name: "Pretzel",
    description: "Maiores quisquam fugiat voluptatibus sunt exercitationem",
    price: 3.0,
  },
  {
    image: "assets/06-french-fries.jpg",
    category: "snacks",
    name: "French Fries",
    description:
      "est deserunt necessitatibus possimus recusandae numquam consequatur animi ipsum.",
    price: 2.5,
  },
  {
    image: "assets/07-nachos.jpg",
    category: "snacks",
    name: "Nachos",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 4.5,
  },
  {
    image: "assets/08-hot-dogs.jpg",
    category: "snacks",
    name: "Hot Dog",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 3.5,
  },
  {
    image: "assets/09-fountain-drink.jpg",
    category: "beverages",
    name: "Soda-Pop",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 2.0,
  },
  {
    image: "assets/10-lemonade.jpg",
    category: "beverages",
    name: "Lemonade",
    description: "Ducimus dignissimos ratione sed voluptates tempore.",
    price: 2.5,
  },
];

const createMenu = () => {
  snacksGC.forEach((snack, index) => {
    const menuLi = document.createElement("li");
    const title = document.createElement("p");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const image = document.createElement("img");
    const addToCart = document.createElement("button");
    addToCart.setAttribute("data-index", index);
    image.setAttribute("src", snack.image);
    image.classList.add("food-images");
    title.textContent = snack.name;
    description.textContent = snack.description;
    price.textContent = snack.price;
    addToCart.textContent = "Add to cart";
    menuLi.classList.add(snack.category);
    addToCart.classList.add("add-to-cart");
    menuLi.append(image, title, description, price, addToCart);
    foodItems.append(menuLi);
  });
};
createMenu();

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const index = e.target.getAttribute("data-index");
    shoppingCart.push(snacksGC[index]);
    console.log(shoppingCart);
  }
  console.log(e.target);
  if (
    e.target.classList.contains("cart-link") ||
    e.target.classList.contains("fa")
  ) {
    cartUl.innerHTML = "";
    shoppingCart.forEach((item) => {
      const cartLi = document.createElement("li");
      const cartDiv = document.createElement("div");
      const cartTitle = document.createElement("p");
      const cartPrice = document.createElement("p");
      const cartImage = document.createElement("img");
      subTotal += item.price;
      cartDiv.classList.add("cart-div");
      cartImage.classList.add("cart-food-images");
      cartTitle.textContent = item.name;
      cartPrice.textContent = item.price;
      cartDiv.setAttribute("data-price", item.price);
      cartImage.setAttribute("src", item.image);
      cartDiv.append(cartImage, cartTitle, cartPrice);
      cartLi.append(cartDiv);
      cartUl.append(cartLi);
    });
    checkoutButton.classList = "checkout-button";
    cartUl.style.display = "flex";
    subTotalP.textContent = `Subtotal: $${subTotal.toFixed(2)}`;
    checkoutButton.textContent = "Check out";
    cartUl.append(subTotalP, checkoutButton);
  }

  if (e.target.classList.contains("checkout-button")) {
    const checkoutDiv = document.createElement("div");
    const salesTax = document.createElement("p");
    const cartTotal = document.createElement("p");
    const cashButton = document.createElement("button");
    const creditButton = document.createElement("button");
    subTotalP.textContent = `Subtotal: $${subTotal.toFixed(2)}`;
    salesTax.textContent = `Sales tax: 6%`;
    total = subTotal + subTotal * 0.06;
    cartTotal.textContent = `Total: ${total}`;
    cashButton.textContent = "Cash";
    creditButton.textContent = "Credit";
    cashButton.classList.add("cash-button");
    creditButton.classList.add("credit-button");
    checkoutDiv.append(
      subTotalP,
      salesTax,
      cartTotal,
      cashButton,
      creditButton
    );
    cartUl.append(checkoutDiv);
    // });
  }

  if (e.target.classList.contains("cash-button")) {
    const cashForm = document.querySelector(".cash-form");
    const changeAmount = document.createElement("p");
    const cashInput = document.querySelector("#tender-amount");
    cashForm.style.display = "block";
    cashForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const cashTendered = cashInput.value;
      if (cashTendered >= total) {
        const difference = cashTendered - total;
        changeAmount.textContent = `Change: $${difference.toFixed(2)}`;
      } else {
        alert("insufficient funds, please check amount");
      }
      cashForm.append(changeAmount);
    });
  }
});

//foodItems.addEventListener("click", (e) => {
//   if (e.target.classList.contains("add-to-cart")) {
//     const index = e.target.getAttribute("data-index");
//     shoppingCart.push(snacksGC[index]);
//     console.log(shoppingCart);
//   }
// });

// //  cartButton.addEventListener("click", (e) =>
// {
// shoppingCart.forEach((item) => {
//   const cartLi = document.createElement("li");
//   const cartDiv = document.createElement("div");
//   const cartTitle = document.createElement("p");
//   const cartPrice = document.createElement("p");
//   const cartImage = document.createElement("img");
//   subTotal += item.price;
//   cartDiv.classList.add("cart-div");
//   cartTitle.textContent = item.name;
//   cartPrice.textContent = item.price;
//   cartDiv.setAttribute("data-price", item.price);
//   cartImage.setAttribute("src", item.image);
//   cartImage.classList.add("cart-food-images");
//   cartDiv.append(cartImage, cartTitle, cartPrice);
//   cartLi.append(cartDiv);
//   cartUl.append(cartLi);
// });
// const subTotalP = document.createElement("p");
// cartUl.classList.add("cart-li");
// cartUl.style.display = "flex";
// subTotalP.textContent = `Subtotal: $${subTotal.toFixed(2)}`;

// checkoutButton.textContent = "Check out";
// cartUl.append(subTotalP, checkoutButton);

// checkoutButton.addEventListener("click", (e) => {
//   const checkoutDiv = document.createElement("div");
//   const salesTax = document.createElement("p");
//   const grandTotal = document.createElement("p");
//   const cashButton = document.createElement("button");
//   const creditButton = document.createElement("button");
//   subTotalP.textContent = `Subtotal: $${subTotal.toFixed(2)}`;
//   salesTax.textContent = `Sales tax: 6%`;
//   total = subTotal + subTotal * 0.06;
//   grandTotal.textContent = `Total: ${total}`;
//   cashButton.textContent = "Cash";
//   creditButton.textContent = "Credit";

//   checkoutDiv.append(
//     subTotalP,
//     salesTax,
//     grandTotal,
//     cashButton,
//     creditButton
//   );
//   cartUl.append(checkoutDiv);
// });
// });
