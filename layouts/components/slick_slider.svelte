<!-- SlickSlider.svelte -->

<script>
  export let sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
</script>

<div
  class="row slick_slider slick-arrows-style4 text-center"
  data-slick={JSON.stringify(sliderSettings)}
>
  <div class="col-lg-4">
    <!--testimonials-->
    <div class="testimonials style3">
      <div class="testimonial-avatar">
        <!--testimonials-img-->
        <div class="testimonial-img">
          <img
            class="img-center"
            src="https://via.placeholder.com/150x150?text=150x150+testimonial-01.jpg"
            alt="testimonial-img"
          />
        </div>
      </div>
      <div class="testimonial-content">
        <i class="fa fa-quote-left" />
        <blockquote>
          Thank you wedco for helping me give my daughter the wedding of her
          dreams. You guys did a fantastic job of turning our thoughts into
          reality!!
        </blockquote>
        <div class="testimonial-caption">
          <h5>Elina Christopher</h5>
          <caption>Beauty Bride</caption>
        </div>
      </div>
    </div>
    <!--testimonials end-->
  </div>
  <div class="col-lg-4">
    <!--testimonials-->
    <div class="testimonials style3">
      <div class="testimonial-avatar">
        <!--testimonials-img-->
        <div class="testimonial-img">
          <img
            class="img-center"
            src="https://via.placeholder.com/150x150?text=150x150+testimonial-02.jpg"
            alt="testimonial-img"
          />
        </div>
      </div>
      <div class="testimonial-content">
        <i class="fa fa-quote-left" />
        <blockquote>
          Team Wedco executed extremely beautiful wedding for our children.
          They’re hardworking to the point where they priorities work
          enforcement..!
        </blockquote>
        <div class="testimonial-caption">
          <h5>Jhon Nicholas</h5>
          <caption>Event Guest</caption>
        </div>
      </div>
    </div>
    <!--testimonials end-->
  </div>
  <div class="col-lg-4">
    <!--testimonials-->
    <div class="testimonials style3">
      <div class="testimonial-avatar">
        <!--testimonials-img-->
        <div class="testimonial-img">
          <img
            class="img-center"
            src="https://via.placeholder.com/150x150?text=150x150+testimonial-03.jpg"
            alt="testimonial-img"
          />
        </div>
      </div>
      <div class="testimonial-content">
        <i class="fa fa-quote-left" />
        <blockquote>
          Thank you wedco for helping me give my daughter the wedding of her
          dreams. You guys did a fantastic job of turning our thoughts into
          reality!!
        </blockquote>
        <div class="testimonial-caption">
          <h5>Maria Gregory</h5>
          <caption>Wedding Couple</caption>
        </div>
      </div>
    </div>
    <!--testimonials end-->
  </div>
  <div class="col-lg-4">
    <!--testimonials-->
    <div class="testimonials style3">
      <div class="testimonial-avatar">
        <!--testimonials-img-->
        <div class="testimonial-img">
          <img
            class="img-center"
            src="https://via.placeholder.com/150x150?text=150x150+testimonial-04.jpg"
            alt="testimonial-img"
          />
        </div>
      </div>
      <div class="testimonial-content">
        <i class="fa fa-quote-left" />
        <blockquote>
          Team Wedco executed extremely beautiful wedding for our children.
          They’re hardworking to the point where they priorities work
          enforcement..!
        </blockquote>
        <div class="testimonial-caption">
          <h5>Julia Brandon</h5>
          <caption>Event Guest</caption>
        </div>
      </div>
    </div>
  </div>
</div>
