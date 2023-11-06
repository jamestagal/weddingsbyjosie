<script>
  import ServiceStep1 from "../components/service_step1.svelte";
  import ServiceStep2 from "../components/service_step2.svelte";
  import ServiceStep3 from "../components/service_step3.svelte";
  import ServiceStep4 from "../components/service_step4.svelte";
  import ServiceStep5 from "../components/service_step5.svelte";
  import ServiceStep6 from "../components/service_step6.svelte";
  import SerivceHeader from "../components/service_header.svelte";
  export let step1, step2, step3, step4, step5, step6;

  let selectedStep = "step1";
</script>

<SerivceHeader />
<section class="ttm-row gallery-section clearfix">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 res-991-pr-15 res-991-pl-15">
        <!-- section-title -->
        <div class="section-title style2">
          <div class="title-header">
            <h5>Wedding Service</h5>
            <h2 class="title">Wedding with the Works!</h2>
          </div>
          <div class="title-desc">
            <p>
               Once booked, I am committed to your day and my time to you is unlimited. I am happy to meet with you as many times as needed and communicate via email/phone to create the perfect ceremony. I provide you with a resource folder for ideas and attend your rehearsal and complete the legal paperwork. See steps below for more information.
            </p>
          </div>
        </div>
        <!--section-title end-->
      </div>
    </div>
  </div>
</section>
<div class="ttm-row sidebar ttm-sidebar-right clearfix">
  <div class="container">
    <!--row-->
    <div class="row">
      <div class="col-lg-4 widget-area sidebar-right">
        <aside class="widget widget-nav-menu">
          <ul class="widget-menu">
            <li class={selectedStep === "step1" ? " active" : ""}>
              <a
                on:click={() => (selectedStep = "step1")}
                href="service"
                data-filter="step1"
                >{step1}
              </a>
            </li>
            <li class={selectedStep === "step2" ? " active" : ""}>
              <a
                on:click={() => (selectedStep = "step2")}
                href="service"
                data-filter="step2"
                >{step2}
              </a>
            </li>
            <li class={selectedStep === "step3" ? " active" : ""}>
              <a
                on:click={() => (selectedStep = "step3")}
                href="service"
                data-filter="step3"
                >{step3}
              </a>
            </li>
            <li class={selectedStep === "step4" ? " active" : ""}>
              <a
                on:click={() => (selectedStep = "step4")}
                href="service"
                data-filter="step4"
                >{step4}
              </a>
            </li>
            <li class={selectedStep === "step5" ? " active" : ""}>
              <a
                on:click={() => (selectedStep = "step5")}
                href="service"
                data-filter="step5"
                >{step5}
              </a>
            </li>
            <li class={selectedStep === "step6" ? " active" : ""}>
              <a
                on:click={() => (selectedStep = "step6")}
                href="service"
                data-filter="step6"
                >{step6}
              </a>
            </li>
          </ul>
        </aside>
        <div class="mt-10 text-center btn-center">
        <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-icon-btn-right ttm-btn-color-dark" href="pricing">See Pricing</a>
        </div>
      </div>
      <div class="col-lg-8 content-area">
        {#if "step1" === selectedStep}
          <ServiceStep1 />
        {:else if "step2" === selectedStep}
          <ServiceStep2 />
        {:else if "step3" === selectedStep}
          <ServiceStep3 />
        {:else if "step4" === selectedStep}
          <ServiceStep4 />
        {:else if "step5" === selectedStep}
          <ServiceStep5 />
        {:else if "step6" === selectedStep}
          <ServiceStep6 />
        {/if}
        <!-- <ServiceStep1 /> -->
      </div>
    </div>
    <!-- row end -->
  </div>
</div>
<style>
  .ttm-row.gallery-section {
    padding: 60px 0 0;
  }
  @media (min-width: 992px) {
    .sidebar .content-area,
    .sidebar .widget-area {
      padding-top: 30px;
      padding-bottom: 80px;
    }
  }
  @media (max-width: 991px) {
    .sidebar .sidebar-right {
      order: 0;
      width: 100%;
      margin-bottom: 25px;
    }
  }
  @media (max-width: 991px) {
    .sidebar .content-area,
    .sidebar .widget-area {
      padding-bottom: 0;
      padding-top: 25px;
    }
  }
  @media (max-width: 991px)  {
   .btn-center {
    margin: 10px;
    position: absolute;
    top: 100%;
    left: 45%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
</style>
