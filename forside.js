const categorylist = document.querySelector(".category_list_container");
let url = "https://kea-alt-del.dk/t7/api/categories";

function showCategories(data) {
  const markup = data
    .map(
      (category) => `
    
<a class="category" href="produktliste.html?category=${category.category}">${category.category}</a>
`
    )
    .join(``);

  categorylist.innerHTML = markup;
}

function hentData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showCategories(data));
}

hentData();
