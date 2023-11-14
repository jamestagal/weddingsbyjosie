<script>
  import Quotes from '../content/quotes.svelte';
  export let quote, author, role, allContent;

  let quoteIndex  = allContent.filter(content => content.type === "quotes"[0]);
  $: quote = "quotes"[quoteIndex].quote;
  $: author = "quotes"[quoteIndex].author;
  $: role = "quotes"[quoteIndex].role;
 /* Forward & back buttons */
  const prevQuote = () => {
    if (quoteIndex === "quotes".length -1) {
      quoteIndex = 0;
    } else {
      quoteIndex -= 1;
    }
  }
  const nextQuote = () => {
    if (quoteIndex === 0) {
      quoteIndex = "quotes".length -1;
    } else {
      quoteIndex += 1;
    }
  }
  /* Autoplay */
  const handleAutoAdv = () => {
     setInterval(nextQuote, 4000)
  }
</script>

<section
  class="ttm-row testimonial_1-section ttm-bgcolor-grey bg-img4 ttm-bg ttm-bgimage-yes clearfix"
>
  <div class="ttm-row-wrapper-bg-layer ttm-bg-layer" />
  <div class="container">
    <!--row-->
    <!--row-->
    <div class="row">
      <div class="col-lg-6 col-md-8 col-sm-10 m-auto mb_15 res-991-mb-0">
        <!--section-title-->
        <div class="section-title with-sep title-style-center_text">
          <div class="title-header">
            <h5>Client Reviews</h5>
            <h2 class="title">What Our Client Say</h2>
          </div>
        </div>
        <!--section-title end-->
      </div>
    </div>
    <!--row end-->
    <div class="row slick_slider slick-arrows-style3">
      <button
        class="slick-prev slick-arrow"
        aria-label="Previous"
        type="button"
        style="display: block;"
        on:click={prevQuote}>Previous</button
      >
      <div class="col-lg-7">
        <!--testimonials-->
        <Quotes />
        <!--testimonials end-->
        <button
          class="slick-next slick-arrow"
          aria-label="Next"
          type="button"
          style="display: block;"
          on:click={nextQuote}>Next</button
        >
      </div>
    </div>
  </div>
</section>

<!--testimonial-section end-->

<style>
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  h5 {
    color: #121f38;
    font-family: Cormorant, sans-serif;
    margin-top: 0;
  }

  .ttm-bg-layer {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .ttm-bg-layer {
    background-color: #edf5f7;
    opacity: 0.9;
  }
  ::selection {
    background-color: #c78665;
    color: #fff;
    text-shadow: none;
  }

  .col-lg-7 {
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    width: 100%;
  }

  @media (min-width: 992px) {
    .col-lg-7 {
      flex: 0 0 58.3333%;
      max-width: 58.3333%;
    }
  }

  .slick_slider .slick-arrow {
    width: 46px;
    height: 46px;
    z-index: 1;
    border: 0;
    color: inherit;
    background-color: rgba(255, 255, 255, 0.07);
    box-shadow: 0 0 10px 0 rgba(0, 43, 92, 0.08);
    border: 0;
  }
  .slick_slider .slick-prev:before {
    content: "\e629";
  }
  .slick_slider .slick-next:before {
    content: "\e628";
  }
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
</style>
