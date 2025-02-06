const URLparams = new URLSearchParams(window.location.search);
const productId = URLparams.get("product");

// let productId = 1163;
let productContainer = document.querySelector(".produktet");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `  
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="billede">


    <p class="${data.soldout && "udsolgt_pro"} ${!data.soldout && "hide"}">Sold Out</p>
                    <div class="${data.discount && "rabat_pro"} ${!data.discount && "hide"}">-${data.discount}%</div>
        <div class="text_boks_1">
         <ol class="breadycrumy">
        <li class="breadycrumy_items"><a href="" class="breadycrumy_link">${data.brandname}</a></li>
        <li class="breadycrumy_items"><a href="" class="breadycrumy_link">${data.articletype}</a></li>
        <li class="breadycrumy_items"><a href="" class="breadycrumy_link">${data.productdisplayname}</a></li>
    </ol>
            <h1>${data.productdisplayname}</h1>
            <p>${data.articletype} | ${data.brandname} </p>
            <p>${data.gender} </p>
        </div>
        <div class="text_boks_2">

            <h1>${data.productdisplayname}</h1>
            <p>${data.articletype} | ${data.brandname}</p>
            <select name="size" id="size">
                <option value="small">small</option>
                <option value="medium">medieum</option>
                <option value="large">large</option>
            </select>
            <div class="knap">
                <button>Køb nu</button>
            </div>
        </div>

    </div>
`;
  });
