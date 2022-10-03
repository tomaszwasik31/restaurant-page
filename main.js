(() => {
  "use strict";
  const e = () => {
      let e = 1;
      class t {
        constructor(e, t) {
          (this.name = e), (this.price = t);
        }
      }
      let n = [
        new t("Margarita", 10),
        new t("Cheese Pizza", 12),
        new t("Veggie Pizza", 12),
        new t("Pepperoni Pizza", 14),
        new t("BBQ Chicken Pizza", 14),
        new t("Hawaiian Pizza", 14),
        new t(" Buffalo Pizza", 14),
      ];
      (() => {
        const e = document.createElement("div"),
          t = document.createElement("h1");
        (t.innerText = "Our Pizzas:"), content.appendChild(e), e.appendChild(t);
      })(),
        n.forEach((t) => {
          ((t) => {
            const n = document.createElement("div"),
              i = document.createElement("p");
            (i.innerText = `Nr.${e} ${t.name} $${t.price}`),
              content.appendChild(n),
              n.appendChild(i),
              e++;
          })(t);
        });
    },
    t = () => {
      (() => {
        const e = document.createElement("div"),
          t = document.createElement("h1");
        (t.innerText = "Contact us:"), content.appendChild(e), e.appendChild(t);
      })(),
        (() => {
          const e = document.createElement("div"),
            t = document.createElement("img");
          e.setAttribute("id", "content-article"),
            t.setAttribute("id", "map"),
            (t.src = "./img/map.jpg"),
            content.appendChild(e),
            e.appendChild(t);
        })(),
        (() => {
          const e = document.createElement("div"),
            t = document.createElement("p"),
            n = document.createElement("p");
          t.setAttribute("class", "txt"),
            (t.innerText = "Our phone number: 123 123 123"),
            (n.innerText = "Our mail: mail@mail.com"),
            content.appendChild(e),
            e.appendChild(t),
            e.appendChild(n);
        })();
    },
    n = () => {
      const i = document.querySelector("#content"),
        a = document.querySelector("#home"),
        c = document.querySelector("#menu"),
        d = document.querySelector("#contact"),
        r = () => {
          i.innerHTML = "";
        };
      a.addEventListener("click", () => {
        r(), n();
      }),
        c.addEventListener("click", () => {
          r(), e();
        }),
        d.addEventListener("click", () => {
          r(), t();
        }),
        (() => {
          const e = document.createElement("div"),
            t = document.createElement("h1"),
            n = document.createElement("h2");
          (t.innerText = "Best pizza in Town!"),
            (n.innerText = "Italian pizza"),
            e.setAttribute("id", "headings-wrapper"),
            i.appendChild(e),
            e.appendChild(t),
            e.appendChild(n);
        })(),
        (() => {
          const e = document.createElement("div"),
            t = document.createElement("p"),
            n = document.createElement("img");
          n.setAttribute("id", "restaurant"),
            (n.src = "./img/restaurant.jpg"),
            e.setAttribute("id", "content-article"),
            t.setAttribute("class", "txt"),
            (t.innerText =
              "We serve delicious European cuisine. The restaurant, called Le Miette, is a luxurious restaurant of beautiful architecture, which is located in the heart of the center of the town. The restaurant is surrounded by the quaint and charming old town of Vaud. The restaurant has a contemporary design."),
            i.appendChild(e),
            e.appendChild(t),
            e.appendChild(n);
        })(),
        (() => {
          const e = document.createElement("div"),
            t = document.createElement("img"),
            n = document.createElement("p");
          e.setAttribute("id", "quote-wrapper"),
            t.setAttribute("id", "chef"),
            (t.src = "./img/chef.svg"),
            n.setAttribute("class", "txt quote"),
            (n.innerText = "Papa Bons: Mama mia... è delizioso!"),
            i.appendChild(e),
            e.appendChild(t),
            e.appendChild(n);
        })();
    };
  n();
})();
