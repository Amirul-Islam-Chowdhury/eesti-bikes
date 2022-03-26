import React from 'react'

function Banner() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <img src="https://scontent-hel3-1.xx.fbcdn.net/v/t39.30808-6/244579915_105000928625077_8568979652131820306_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_ohc=KaG6GQIRiVsAX-A1CNQ&_nc_ht=scontent-hel3-1.xx&oh=00_AT_tNp1rL4ikCQ5sm6iqnRXXkq_H41tOtoooCJsw7IJwyA&oe=62436D1E" class="d-block w-100 " alt="..."/>
      <div class="carousel-caption">
        <h1> Book You Time</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://scontent-hel3-1.xx.fbcdn.net/v/t39.30808-6/244599961_105056675286169_176275112339310267_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=MzUD7Ic0xzoAX_Jxk5G&tn=rFqsJd-D4jjs0wcp&_nc_ht=scontent-hel3-1.xx&oh=00_AT_T8z3EZhOea5JdAw37o72Kqw_3sirFli0hhhyrtE5tIA&oe=6242D235" class="mx-auto w-100 " alt="..."/>
      <div class="carousel-caption">
        <h1> PROFESSONAL REPAIR</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://d3nuqriibqh3vw.cloudfront.net/images/spw_custombikes_mountainbike.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <h1> RIDE FOR GREEN, RIDE FOR LIFE</h1>
      </div>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Banner;