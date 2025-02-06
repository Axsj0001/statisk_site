const listContainer = document.querySelector(".product_list_container");
const category = new URLSearchParams(window.location.search).get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `
      <div class="kort">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="produkt">
            <p><b>${product.productdisplayname}</b></p>
            <p class="brand">${product.brandname} │ ${product.articletype}</p>
            <p>${product.price}</p>

                        <div class="${product.discount && "rabat"} ${!product.discount && "hide"}">-${product.discount}%</div>
                                    <p class="${product.soldout && "udsolgt"} ${!product.soldout && "hide"}">Sold Out</p>
            <a href="produkt.html?product=${product.id}">Read more</a>
        </div>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;

  document.querySelectorAll("button").forEach((knap) => knap.addEventListner("click", showFiltered));
}

function showFiltered() {
  const filter = this.dataset.gender;
  if (filter == "all") {
    showProducts(allData);
  } else {
    fraction = allData.filter((product) => product.gender === filter);
    showProducts(fraction);
  }
}

let allData;

fetch(endpoint)
  .then((response) => response.json())
  .then((json) => {
    allData = json;
    showProducts(allData);
  });
