const menuPage = () => {
  let number = 1;

  const createHeading = () => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");

    h1.innerText = "Our Pizzas:";
    content.appendChild(div);
    div.appendChild(h1);
  };

  class Pizza {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  const pizza1 = new Pizza("Margarita", 10);
  const pizza2 = new Pizza("Cheese Pizza", 12);
  const pizza3 = new Pizza("Veggie Pizza", 12);
  const pizza4 = new Pizza("Pepperoni Pizza", 14);
  const pizza5 = new Pizza("BBQ Chicken Pizza", 14);
  const pizza6 = new Pizza("Hawaiian Pizza", 14);
  const pizza7 = new Pizza(" Buffalo Pizza", 14);

  let pizzaList = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7];

  const createPizzaDiv = (pizza) => {
    const div = document.createElement("div");
    const p = document.createElement("p");

    p.innerText = `Nr.${number} ${pizza.name} $${pizza.price}`;
    content.appendChild(div);
    div.appendChild(p);
    number++;
  };
  const renderPizzaList = () => {
    pizzaList.forEach((e) => {
      createPizzaDiv(e);
    });
  };
  createHeading();
  renderPizzaList();
};

export default menuPage;
