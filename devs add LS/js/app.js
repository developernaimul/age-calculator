const devs_form = document.getElementById(`devs_form`);
const form_body = document.querySelector(`.form_body`);
const devs_aria = document.getElementById(`devs_aria`);

devs_form.addEventListener(`submit`, function (e) {
  e.preventDefault();

  let name = this.querySelector(`input[name="name"]`);
  let phone = this.querySelector(`input[name="phone"]`);
  let portfolio = this.querySelector(`input[name="portfolio"]`);
  let img = this.querySelector(`input[name="image"]`);
  let email = this.querySelector(`input[name="email"]`);
  let address = this.querySelector(`input[name="address"]`);
  let skill = this.querySelectorAll(`input[name="skill"]:checked`);
  let gander = this.querySelector(`input[name="gander"]:checked`);
  let facebook = this.querySelector(`input[name="facebook"]`);
  let instagram = this.querySelector(`input[name="instagram"]`);
  let linkedin = this.querySelector(`input[name="linkedin"]`);
  let twitter = this.querySelector(`input[name="twitter"]`);

  // skill array
  let skill_arr = [];
  for (let i = 0; i < skill.length; i++) {
    skill_arr.push(skill[i].value);
  }

  // Data array
  let data_arr;
  if (dataGet(`devs`)) {
    data_arr = dataGet(`devs`);
  } else {
    data_arr = [];
  }

  // data push
  data_arr.push({
    name      : name.value,
    image     : img.value,
    email     : email.value,
    skills    : skill_arr,
    phone     : phone.value,
    portfolio : portfolio.value,
    address   : address.value,
    gander    : gander.value,
    facebook  : facebook.value,
    instagram : instagram.value,
    linkedin  : linkedin.value,
    twitter   : twitter.value,
  })

  dataSend(`devs`, data_arr);
  
  allData();

});

allData();
function allData() {

  let all_data = dataGet(`devs`);

  let data = ``;

  all_data.map( d => {
    let lists = '';
        d.skills.map(list => {
            lists += '<li class="list-group-item"> '+ list +'  </li>';
        });
        data += `
        <div class="col-md-3 my-3">
          <div class="card">
            <img style=" width: 100%; height: 250px; object-fit: cover; " src="${ d.image }" alt="image">
            <h4>${ d.name }</h4>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#see">
                    SEE MORE
                </button>
                
                <!-- Modal -->
                <div class="modal fade" id="see" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">${ d.name }</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <!-- body -->
                            <div class="modal-body">
                                <div id="see" class="p-2">
                                    <h2>Email</h2>
                                    <p>${ d.email }</p>
                                    <h2>Website Link</h2>
                                    <p>${ d.portfolio }</p>
                                    <h2>Email</h2>
                                    <p>${ d.phone }</p>
                                    <h2>Address</h2>
                                    <p>${ d.address }</p>
                                    <h2>Skills</h2>
                                    <hr>
                                    <ul class="list-group">
                                        ${ lists }
                                    </ul>
                                    <h2>Gander</h2>
                                    <hr>
                                    <ul class="list-group">
                                        <li class="list-group-item">${ d.gander }</li>
                                    </ul>
                                    <h2>Social Link</h2>
                                    <hr>
                                    <div id="solink" class="list-group">
                                        <a href="${ d.facebook }"><i class="fab fa-facebook-square"></i></a>
                                        <a href="${ d.twitter }"><i class="fab fa-twitter-square"></i></a>
                                        <a href="${ d.linkedin }"><i class="fab fa-linkedin"></i></a>
                                        <a href="${ d.instagram }"><i class="fab fa-instagram-square"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        `;
  });

  devs_aria.innerHTML = data;
}

