const workContents = document.getElementById("work-content");

const item = [
  {
    img: "img/image1.jpg",
    title: "The Palace of Versailles",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    img: "img/image2.jpg",
    title: "Art of Abstract",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    img: "img/image3.jpg",
    title: "Imaginary City Building",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    img: "img/image4.jpg",
    title: "Abstract urban pyramid",
    description: "lorem ipsum dolor sit amet, consectetur",
  },
];

item.forEach((item) => {
  const workItem = document.createElement("div");
  workItem.classList.add("work-item");

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;

  const title = document.createElement("h2");
  title.textContent = item.title;

  const description = document.createElement("p");
  description.textContent = item.description;

  workItem.appendChild(img);
  workItem.appendChild(title);
  workItem.appendChild(description);

  workContents.appendChild(workItem);
});
