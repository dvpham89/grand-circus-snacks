"use strict";

let shoppingCart = [];
let subTotal = 0;
let total = 0;
const cartUl = document.querySelector(".cart-ul");
const main = document.querySelector("main");
const cartButton = document.querySelector("#cart");
const foodItems = document.querySelector(".food-items");
const subTotalP = document.createElement("p");
const salesTaxP = document.createElement("p");
const totalP = document.createElement("p");
const checkoutDiv = document.createElement("div");
const checkoutButton = document.createElement("button");
const cashForm = document.querySelector(".cash-form");
const creditForm = document.querySelector(".credit-form");
const cashButton = document.createElement("button");
const creditButton = document.createElement("button");
const printReceiptButton = document.createElement("button");
printReceiptButton.textContent = "Print Receipt";
printReceiptButton.classList.add("print-receipt");

const snacksGC = [
  {
    image: "assets/01-funnel-cakes.jpg",
    category: "desserts",
    name: "Funnel Cakes",
    description:
      "Cake batter deep fried to perfection, and dusted with powdered sugar.",
    price: 4.5,
  },
  {
    image: "assets/02-elephant-ears.jpg",
    category: "desserts",
    name: "Elephant Ears",
    description: "Crispy fried bread coated with cinnamon and sugar.",
    price: 4.5,
  },
  {
    image: "assets/03-cotton-candy.jpg",
    category: "desserts",
    name: "Cotton Candy",
    description: "Light, fluffy, and incredibly sticky spun sugar candy.",
    price: 3.5,
  },
  {
    image: "assets/04-popcorn.jpg",
    category: "snacks",
    name: "Popcorn",
    description:
      "Kernels of corn heated and popped to fluffy perfection, and coated in butter.",
    price: 2.0,
  },
  {
    image: "assets/05-pretzels.jpg",
    category: "snacks",
    name: "Pretzel",
    description:
      "Soft, doughy baked bread knotted and sprinkled with salt. Sides of mustard or cheese available on request.",
    price: 3.0,
  },
  {
    image: "assets/06-french-fries.jpg",
    category: "snacks",
    name: "French Fries",
    description:
      "Deep fried potato strips. These fries are not of French origin, nor is ketchup they come with.",
    price: 2.5,
  },
  {
    image: "assets/07-nachos.jpg",
    category: "snacks",
    name: "Nachos",
    description: "Tortilla chips with warm cheese sauce.",
    price: 4.5,
  },
  {
    image: "assets/08-hot-dogs.jpg",
    category: "snacks",
    name: "Hot Dog",
    description: "Cured steamed sausage served with bread made just for them.",
    price: 3.5,
  },
  {
    image: "assets/09-fountain-drink.jpg",
    category: "beverages",
    name: "Fountain Drink",
    description:
      "This beverage is comprised of various soda flavored syrups mixed with carbonated water and dash of sweetener. Fountain not included",
    price: 2.0,
  },
  {
    image: "assets/10-lemonade.jpg",
    category: "beverages",
    name: "Lemonade",
    description:
      "Our lemonade is made by mixing lemon flavored syrup with water and adding one pound of sugar per ounce.",
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
    price.textContent = `$${snack.price.toFixed(2)}`;
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

  if (
    e.target.classList.contains("cart-link") ||
    e.target.classList.contains("fa")
  ) {
    subTotal = 0;
    cartUl.innerHTML = "";
    shoppingCart.forEach((item) => {
      const cartLi = document.createElement("li");
      const cartTitle = document.createElement("p");
      const cartPrice = document.createElement("p");
      const cartImage = document.createElement("img");
      const removeButton = document.createElement("button");
      subTotal += item.price;
      cartLi.classList.add("cart-li");
      cartImage.classList.add("cart-food-images");
      removeButton.classList.add("remove-button");
      cartTitle.textContent = `Item: ${item.name};`;
      removeButton.textContent = "X";
      cartPrice.textContent = `Price: $${item.price.toFixed(2)}`;
      cartLi.setAttribute("data-price", item.price);
      cartImage.setAttribute("src", item.image);
      cartLi.append(cartImage, cartTitle, cartPrice, removeButton);
      cartUl.append(cartLi);
    });
    main.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-button")) {
        e.target.parentNode.remove();
      }
    });
    checkoutButton.classList = "checkout-button";
    subTotalP.textContent = `Subtotal: $${subTotal.toFixed(2)}`;
    checkoutButton.textContent = "Check out";
    cartUl.append(subTotalP, checkoutButton);
  }

  if (e.target.classList.contains("checkout-button")) {
    checkoutButton.style.display = "none";
    subTotalP.textContent = `Subtotal: $${subTotal.toFixed(2)}`;
    salesTaxP.textContent = `Sales tax: 6%`;
    total = subTotal + subTotal * 0.06;
    totalP.textContent = `Total: ${total.toFixed(2)}`;
    cashButton.textContent = "Cash";
    creditButton.textContent = "Credit";
    cashButton.classList.add("cash-button", "payment");
    creditButton.classList.add("credit-button", "payment");
    checkoutDiv.classList.add("check-out-div");
    checkoutDiv.append(subTotalP, salesTaxP, totalP, cashButton, creditButton);
    cartUl.append(checkoutDiv);
  }

  if (e.target.classList.contains("cash-button")) {
    creditForm.style.display = "none";
    cashForm.style.display = "flex";
    main.addEventListener("click", (e) => {
      if (e.target.classList.contains("cash-out")) {
        e.preventDefault();
        const cashInput = document.querySelector("#tender-amount");
        const changeAmount = document.createElement("p");
        const cashTendered = cashInput.value;
        if (cashTendered >= total) {
          e.preventDefault();
          const difference = cashTendered - total;
          changeAmount.textContent = `Change: $${difference.toFixed(2)}`;
        } else {
          alert("Insufficient funds, please check amount.");
        }
        cashForm.append(changeAmount, printReceiptButton);
      }
    });
    cartUl.append(cashForm);
  }

  if (e.target.classList.contains("credit-button")) {
    e.preventDefault();
    cashForm.style.display = "none";
    creditForm.style.display = "flex";
    cartUl.append(creditForm);
    main.addEventListener("click", (e) => {
      if (e.target.classList.contains("run-card")) {
        e.preventDefault();
        creditForm.append(printReceiptButton);
      }
    });
  }

  if (e.target.classList.contains("print-receipt")) {
    e.preventDefault();
    const receipt = document.createElement("div");
    const itemDiv = document.createElement("div");
    receipt.textContent = "Grand Circus Snacks";
    receipt.classList.add("receipt-paper");
    itemDiv.classList.add("item-div");
    shoppingCart.forEach((item) => {
      const itemNamePrice = document.createElement("p");
      itemNamePrice.textContent = `Item: ${
        item.name
      } Price: $${item.price.toFixed(2)}`;
      subTotalP.textContent = `Subtotal: $${subTotal.toFixed(2)}`;
      salesTaxP.textContent = `Sales tax: 6%`;
      totalP.textContent = `Total: $${total.toFixed(2)}`;
      itemDiv.append(itemNamePrice, subTotalP, salesTaxP, totalP);
      receipt.append(itemDiv);
    });
    cartUl.append(receipt);
  }
});
