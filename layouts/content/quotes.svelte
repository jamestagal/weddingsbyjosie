 <script>
    import { slide, cubicIn } from 'svelte/transition';
    export let quote, author, role;
 </script>
 <!--testimonials-->
 {#key quote}
 <div class="testimonials style2" transition:slide={{ duration: 400, easing: cubicIn, axis: 'x' }}>
   <div class="testimonial-content">
     <div class="testimonial-avatar">
       <div class="testimonial-img">
         <img
           class="img-fluid"
           src="media/testimonial/01.jpeg"
           alt="bride"
         />
       </div>
     </div>
     <blockquote class="testimonial-text">{quote}</blockquote>
     <div class="star-ratings">
       <ul class="rating">
         <li class="active"><i class="fa fa-star" /></li>
         <li class="active"><i class="fa fa-star" /></li>
         <li class="active"><i class="fa fa-star" /></li>
         <li class="active"><i class="fa fa-star" /></li>
         <li class="active"><i class="fa fa-star" /></li>
       </ul>
     </div>
     <div class="testimonial-caption">
       <h5>{author}</h5>
       <caption>{role}</caption>
     </div>
   </div>
 </div>
 {/key}
 <!--testimonials end-->

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
  
    img {
      vertical-align: middle;
    }
  
    caption {
      display: inline-block;
    }
    
    ::selection {
      background-color: #c78665;
      color: #fff;
      text-shadow: none;
    }
  
    .fa {
      -webkit-font-smoothing: antialiased;
      display: inline-block;
      font-family: FontAwesome;
      font-feature-settings: normal;
      font-kerning: auto;
      font-optical-sizing: auto;
      font-size: inherit;
      font-variant: normal;
      font-variant-position: normal;
      font-variation-settings: normal;
      font-weight: 400;
      line-height: 1;
      text-rendering: auto;
    }
  
    .img-fluid {
      max-width: 100%;
    }
  
  
    .testimonials {
      position: relative;
    }
  
    .fa-star::before {
      content: "";
    }
  
    .testimonial-caption caption {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
    }
  
    .star-ratings ul {
      margin: 0;
      padding: 0;
    }
  
    .star-ratings li {
      display: inline-block;
      font-size: 13.8px;
      min-width: 14px;
    }
  
    .testimonials.style2 {
      margin: 0 auto;
      max-width: 790px;
      text-align: center;
    }
  
    .testimonials .testimonial-content blockquote {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding: 10px 25px;
      position: relative;
    }
  
    .star-ratings ul li.active,
    .star-ratings ul li.active i {
      color: #fd4;
    }
  
    .testimonials.style2 .testimonial-img {
      display: inline-block;
      height: 100px;
      margin: 0 auto 5px;
      position: relative;
      text-align: center;
      vertical-align: middle;
      width: 100px;
    }
  
    .testimonials.style2 .testimonial-img img {
      border-radius: 100%;
      border-style: none;
      height: auto;
      transform: translateZ(0) !important;
      transition: opacity 400ms;
      width: 100%;
    }
  
    .testimonials.style2 .testimonial-content blockquote {
      font-size: 18px;
      font-style: italic;
      font-weight: 400;
      line-height: 30px;
      margin-bottom: 10px;
    }
  
    .testimonials .testimonial-content .testimonial-caption h5 {
      margin-bottom: 0;
    }
  
    .testimonials.style2 .testimonial-content .testimonial-caption h5 {
      font-size: 25px;
      font-weight: 600;
      line-height: 32px;
    }
  </style>
  