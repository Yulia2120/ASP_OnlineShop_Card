const ROOT_PRODUCTS = document.getElementById("products");
let CATALOG = [];

class Products {
  render() {
    let htmlCatalog = "";
    CATALOG.forEach(
      ({
        productName,
        imgUrl,
        productDescription,
        price,
        companyId,
        company,
        productCategoryId,
        productCategory,
        id,
      }) => {
        htmlCatalog += `
      <li class="products-element">
          <span class="products-element__title">${productName}</span>
          <img class="products-element__img" src=${imgUrl}</>
          <span class="products-element__text">${productDescription}</span>
          <span class="products-element__price">${price} грн</span>  
          <button class="products-element__btn btn btn-primary">Добавить в корзину</button>
  
      </li>
  `;
      }
    );
    const html = `
    <ul class="products-container">
        ${htmlCatalog}
    </ul>
`;

    ROOT_PRODUCTS.innerHTML = html;
  }
}
function renderL() {
  const products = new Products();
  products.render();
}

let urlApi = "http://baby23-001-site1.ctempurl.com/api/Product/GetAllProducts";
fetch(urlApi)
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    renderL();
  })
  .catch((error) => {
    console.error(error);
  });
