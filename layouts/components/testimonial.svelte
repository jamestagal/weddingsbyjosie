<script>
  let testimonials = [
    {
      name: "Katy",
      role: "Beauty Bride",
      text: "I wanted to thank you for being our Celebrant and for creating a lovely ceremony for us. It was exactly what we wanted and it was such a pleasure to work with someone who took our wants onto consideration. Thank you for your professionalism, kindness and warmth. It was a pleasure to work with you. I recommend you as a Celebrant",
      src: "media/01.jpeg",
    },
    {
      name: "Bill",
      role: "Beauty Bride",
      text: "Josie was a wonderful Celebrant for our wedding. Personable, empathetic and amenable. She met with us several times beforehand to ensure that we were happy and comfortable with the service. On the day, Josie made us feel ‘’at ease” and we were very happy with the tone and form of the ceremony",
      src: "media/02.jpeg",
    },
    {
      name: "Renee",
      role: "Beauty Bride",
      text: "Josie was absolutely amazing. She was professional and made us feel at ease on our big day. Thank you for sticking with us and helping us have the ceremony we wanted. Highly recommend Josie for your big day.",
      src: "media/03.jpeg",
    },
    {
      name: "Michelle",
      role: "Beauty Bride",
      text: "I cannot thank you enough. As a Celebrant, you made my life so much easier, it was so reassuring to sit down and discuss everything with you. Again thank you, so much.",
      src: "media/04.jpeg",
    },
  ];
</script>

<!--testimonial-section_1-->
<section
  class="ttm-row testimonial-section_1 ttm-bg ttm-bgimage-yes ttm-bgcolor-grey mt_100 res-991-mt-20 clearfix"
>
  <div class="container">
    <!--row-->
    <div class="row">
      <div class="col-lg-12">
        <!--section title-->
        <div class="section-title title-style-center_text">
          <div class="title-header">
            <h5>Wedding Planing</h5>
            <h2 class="title">What Our Clients Say?</h2>
          </div>
        </div>
        <!--section title end-->
      </div>
    </div>
    <!--row end-->
    <!--row-->
    <div class="row slick_slider text-center slick-initialized slick-slider">
      {#each testimonials as testimonial (testimonial.name)}
        <div class="col-lg-6">
          <!--testimonials-->
          <div class="testimonials style1">
            <div class="testimonial-avatar">
              <div class="testimonial-img">
                <img
                  class="img-center"
                  src={testimonial.src}
                  alt="testimonial-img"
                />
              </div>
            </div>
            <div class="testimonial-content">
              <i class="ti-quote-left" />
              <blockquote>
                {testimonial.text}
              </blockquote>
              <div class="testimonial-caption">
                <h5>{testimonial.name}</h5>
                <caption>{testimonial.role}</caption>
              </div>
            </div>
          </div>
          <!--testimonials end-->
        </div>
      {/each}
    </div>
  </div>
  <!--row end-->
</section>
<!--testimonial-section_1 end-->
