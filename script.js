"use strict";

const foodContainer = document.querySelector(".food-container");
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

const constructMenu = () => {
  snacksGC.forEach((snack) => {
    const newLi = document.createElement("li");
    const title = document.createElement("p");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const image = document.createElement("img");
    image.setAttribute("src", snack.image);
    image.classList.add("food-images");
    title.textContent = snack.name;
    description.textContent = snack.description;
    price.textContent = snack.price;
    newLi.classList.add(snack.category);
    newLi.append(image, title, description, price);
    foodContainer.append(newLi);
  });
};
constructMenu();