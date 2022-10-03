const contactPage = () => {
  const createHeading = () => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");

    h1.innerText = "Contact us:";
    content.appendChild(div);
    div.appendChild(h1);
  };

  const createMap = () => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    div.setAttribute("id", "content-article");
    img.setAttribute("id", "map");
    img.src = "/dist/img/map.jpg";

    content.appendChild(div);
    div.appendChild(img);
  };
  const createArticle = () => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const p2 = document.createElement("p");

    p.setAttribute("class", "txt");

    p.innerText = "Our phone number: 123 123 123";
    p2.innerText = "Our mail: mail@mail.com";
    content.appendChild(div);

    div.appendChild(p);
    div.appendChild(p2);
  };

  createHeading();
  createMap();
  createArticle();
};

export default contactPage;
