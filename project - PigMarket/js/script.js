var products = [
  {
    name: "농구공",
    price: 100000,
    seller: "조던",
    imageURL: "images/products/basketball1.jpeg",
    avatar: "images/icons/avatar.png",
  },
  {
    name: "축구공",
    price: 30000,
    seller: "메시",
    imageURL: "images/products/soccerball1.jpg",
    avatar: "images/icons/avatar.png",
  },
  {
    name: "키보드",
    price: 56000,
    seller: "MAXTILL",
    imageURL: "images/products/keyboard2.jpg",
    avatar: "images/icons/avatar.png",
  },
  {
    name: "덤벨",
    price: 100000,
    seller: "헬창쉑",
    imageURL: "images/products/dumbell1.jpeg",
    avatar: "images/icons/avatar.png",
  },
];

products.forEach((element) => {
  document.querySelector("#product-list").innerHTML += `
  <div class="product-card">
    <div class="product-all">
        <img class="product-img" src="${element.imageURL}" />
    </div>
    <div class="product-contents">
        <span class="product-name">${element.name}</span>
        <span class="product-price">${element.price}</span>
        <div class="product-seller">
            <img class="product-avatar" src="${element.avatar}" />
            <span class="product-seller">${element.seller}</span>
        </div>
    </div>
  </div>
  <Sex>
  </Sex>
`;
});

document.querySelector(".sex").addEventListener("click", (elEvent) => {
  console.log(elEvent);
});
