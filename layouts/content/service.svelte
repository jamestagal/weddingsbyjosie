<script>
  import ServiceStep1 from "../components/service_step1.svelte";
  import ServiceStep2 from "../components/service_step2.svelte";
  import ServiceStep3 from "../components/service_step3.svelte";
  import ServiceStep4 from "../components/service_step4.svelte";
  import ServiceStep5 from "../components/service_step5.svelte";
  import ServiceStep6 from "../components/service_step6.svelte";
  import SerivceHeader from "../components/service_header.svelte";
  export let step1, step2, step3, step4, step5, step6;
  /*   selectService = initialService;
  let initialService = "step1"; */
  let selectedStep;
</script>

<SerivceHeader />
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
