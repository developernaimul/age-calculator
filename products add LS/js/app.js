const devs_form = document.getElementById(`devs_form`);
const form_body = document.querySelector(`.form_body`);
const product_aria = document.getElementById(`product_aria`);

devs_form.addEventListener(`submit`, function (e) {
  e.preventDefault();

  let name = this.querySelector(`input[name="name"]`);
  let image = this.querySelector(`input[name="image"]`);
  let regular = this.querySelector(`input[name="regular"]`);
  let sale = this.querySelector(`input[name="sale"]`);

  // Data array
  let data_arr;
  if (dataGet(`products`)) {
    data_arr = dataGet(`products`);
  } else {
    data_arr = [];
  }

  // data push
  data_arr.push({
    name      : name.value,
    image     : image.value,
    regular     : regular.value,
    sale    : sale.value,
  })

  dataSend(`products`, data_arr);
  
  allData();

});

allData();
function allData() {

  let all_data = dataGet(`products`);

  let data = ``;

  all_data.map( d => {
        data += `
        <div class="col-md-3">
                <div class="card">
                  <img style=" width: 100%; height: 250px; object-fit: cover; " src="${ d.image }" alt="image">
                  <h4>${ d.name }</h4>
                  <p><span class="regular"><del>${d.regular}</del></span><span>${d.sale}</span></p>
                  <button type="submit" class="btn btn-success">Add To Cart</button>
                </div>
            </div>
        `;
  });

  product_aria.innerHTML = data;
}

