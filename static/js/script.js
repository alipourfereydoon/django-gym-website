let carousel = document.getElementById("carousel");
let btnradio1 = document.getElementById("btnradio1");
let btnradio2 = document.getElementById("btnradio2");
let btnradio3 = document.getElementById("btnradio3");
let regBtn = document.getElementById("regBtn");
let contactSec = document.getElementById("contactSec");

btnradio1.addEventListener("click", () => {
 carousel.innerHTML=`
 <div id="carouselExample" class="carousel slide mx-auto"style="height: 600px;width: 1020px;" >
            <div class="carousel-inner " id="carouselinner">
              <div class="carousel-item active">
                <img src="assets/images/gallery1.jpg" class="d-block " style="height: 600px;width: 1020px;" alt="...">
              </div>
              <div class="carousel-item">
                <img src="assets/images/gallery2.jpg" class="d-block " style="height: 600px;width: 1020px;" alt="...">
              </div>
              <div class="carousel-item">
                <img src="assets/images/gallery3.jpg" class="d-block " style="height: 600px;width: 1020px;" alt="...">
              </div>
              <div class="carousel-item">
                <img src="assets/images/gallery4.jpg" class="d-block " style="height: 600px;width: 1020px;" alt="...">
              </div>
              <div class="carousel-item">
                <img src="assets/images/gallery5.jpg" class="d-block " style="height: 600px;width: 1020px;" alt="...">
              </div>
              <div class="carousel-item">
                <img src="assets/images/gallery6.jpg" class="d-block " style="height: 600px;width: 1020px;" alt="...">
              </div>
              <div class="carousel-item">
                <img src="assets/images/gallery7.jpg" class="d-block " style="height: 600px;width: 1020px;" alt="...">
              </div>
              <div class="carousel-item">
                <img src="assets/images/gallery8.jpg" class="d-block " style="height: 600px;width: 1020px;" alt="...">
              </div>
              <div class="carousel-item">
                <img src="assets/images/gallery9.jpg" class="d-block " style="height: 600px;width: 1020px;" alt="...">
              </div>
              <div class="carousel-item">
                <img src="assets/images/gallery10.jpg" class="d-block " style="height: 600px;width: 1020px;" alt="...">
              </div>
              <div class="carousel-item">
                <img src="assets/images/gallery11.jpg" class="d-block " style="height: 600px;width: 1020px;" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
 `
});
btnradio2.addEventListener("click", () => {
    carousel.innerHTML=`    <div id="carouselExampleCaptions" class="carousel slide mx-auto"style="height: 600px;width: 1020px;">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="assets/images/gallery8.jpg" class="d-block w-100"style="height: 600px;width: 1020px;" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>نوشین بیگی</h5>
          <p>نوشین بیگی یکی زنان موفق در زمینه بدنسازی می‌باشد و می‌توانید از او در زمینه برنامه تمرینی و برنامه غذایی برای افزایش و یا کاهش وزن مشاوره بگیرید.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="assets/images/gallery9.jpg" class="d-block w-100"style="height: 600px;width: 1020px;" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>دنیا جمشیدی</h5>
          <p>دنیا جمشیدی مربی درجه 2 فدراسیون بدن‌سازی می‌باشد که حدود 11 سال در این رشتۀ ورزشی سابقۀ فعالیت دارد.</p>
         
        </div>
      </div>
      <div class="carousel-item">
        <img src="assets/images/gallery10.jpg" class="d-block w-100"style="height: 600px;width: 1020px;" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>سیاوش انصاری</h5>
          <p>سیاوش انصاری از ورزشکارانی میباشد که در رشته ای که فعالیت میکند تحصیل کرده است و جهت مشاوره و اموزش شما در این رشته میتواند کمک بسیاری کند.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`

});
btnradio3.addEventListener("click", () => {
    carousel.innerHTML=`<div id="carouselExample" class="carousel slide mx-auto"style="height: 600px;width: 1020px;">
    <div class="carousel-inner" id="carouselinner">
      <div class="carousel-item active">
        <img src="assets/images/gallery3.jpg" class="d-block w-100"style="height: 600px;width: 1020px;" alt="...">
      </div>    
      <div class="carousel-item">
        <img src="assets/images/gallery1.jpg" class="d-block w-100"style="height: 600px;width: 1020px;" alt="...">
      </div>             
      <div class="carousel-item">
        <img src="assets/images/gallery5.jpg" class="d-block w-100"style="height: 600px;width: 1020px;" alt="...">
      </div>            
      <div class="carousel-item">
        <img src="assets/images/gallery7.jpg" class="d-block w-100"style="height: 600px;width: 1020px;" alt="...">
      </div>
      <div class="carousel-item">
        <img src="assets/images/gallery11.jpg" class="d-block w-100"style="height: 600px;width: 1020px;" alt="...">
      </div
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`

});

regBtn.addEventListener('click',()=>{
contactSec.innerHTML=`  `
})

// typed js




