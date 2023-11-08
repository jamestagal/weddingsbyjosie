<script>
  export let title, description, image, button;
</script>
<!--about-section-->
<section class="ttm-row about-top-section clearfix">
  <div class="container">
    <div class="row">
      <div class="col-lg-5 col-sm-5">
        <div
          class="ttm-col-bgcolor-yes ttm-bg ttm-bgcolor-skincolor spacing-10 h-auto"
        >
          <div class="ttm-col-wrapper-bg-layer ttm-bg-layer">
            <div class="ttm-col-wrapper-bg-layer-inner" />
          </div>
          <div class="layer-content">
            <div
              class="ttm-col-bgcolor-yes ttm-bgcolor-white ttm-col-bgimage-yes"
            >
              <div class="layer-content">
                <!--invitationcard-box-title-->
                <div class="pt-30 pl-30 mr_65 text-center">
                  <div
                    class="ttm_single_image-wrapper text-lg-left text-center"
                  >
                    <img
                      class="img-fluid mb_50"
                      src="{image.src}"
                      alt="{image.altText}"
                    />
                  </div>
                </div>
                <!--invitationcard-box-title end-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12">
        <div class="mt-0 res-991-mt-60">
          <h4 class="title">{title}</h4>
          <p>
          {description}
          </p><br>
          <div class="mt-10 btn-center">
            <a
              class="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-icon-btn-right ttm-btn-color-dark res-991-mb-25"
              href="{button.url}">{button.title}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!--about-section end-->

<style>
  .btn-center {
    margin: 10px;
    position: absolute;
    top: 100%;
    left: 45%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>
