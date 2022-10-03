import menuPage from "./menu";
import contactPage from "./contact";

const homePage = () => {
  const content = document.querySelector("#content");

  const home = document.querySelector("#home");
  const menu = document.querySelector("#menu");
  const contact = document.querySelector("#contact");

  const cleanContent = () => {
    content.innerHTML = "";
  };

  const renderHomePage = () => {
    cleanContent();
    homePage();
  };

  const renderMenuPage = () => {
    cleanContent();
    menuPage();
  };

  const renderContactPage = () => {
    cleanContent();
    contactPage();
  };
  home.addEventListener("click", renderHomePage);
  menu.addEventListener("click", renderMenuPage);
  contact.addEventListener("click", renderContactPage);

  const createHeading = () => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    h1.innerText = "Best pizza in Town!";
    h2.innerText = "Italian pizza";
    div.setAttribute("id", "headings-wrapper");
    content.appendChild(div);

    div.appendChild(h1);
    div.appendChild(h2);
  };

  const createArticle = () => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const img = document.createElement("img");
    img.setAttribute("id", "restaurant");
    img.src = "/dist/img/restaurant.jpg";

    div.setAttribute("id", "content-article");
    p.setAttribute("class", "txt");

    p.innerText =
      "We serve delicious European cuisine. The restaurant, called Le Miette, is a luxurious restaurant of beautiful architecture, which is located in the heart of the center of the town. The restaurant is surrounded by the quaint and charming old town of Vaud. The restaurant has a contemporary design";
    content.appendChild(div);
    div.appendChild(p);
    div.appendChild(img);
  };

  const createQuote = () => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");

    div.setAttribute("id", "quote-wrapper");
    img.setAttribute("id", "chef");
    img.src = "/dist/img/chef.svg";
    p.setAttribute("class", "txt quote");

    p.innerText = "Papa Bons: Mama mia... è delizioso!";
    content.appendChild(div);
    div.appendChild(img);
    div.appendChild(p);
  };

  createHeading();
  createArticle();
  createQuote();
};
homePage();
