import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.datatype.number(
    10
  )} items in your cart</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart-dev");
  if (el) {
    mount(document.querySelector("#cart-dev"));
  }
}

export { mount };
