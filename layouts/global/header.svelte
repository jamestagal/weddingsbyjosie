<script>
  export let title;
  let navActive;
  const toggleMenu = () => {
    navActive = !navActive;
  };
</script>

<!--header start-->
<header id="masthead" class="header ttm-header-style-02" data-header="">
  <!--top_bar-->
  <div class="top_bar ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            class="d-flex flex-row align-items-center justify-content-center"
          >
            <div class="top_bar_contact_item">
              <div class="top_bar_icon"><i class="fa fa-phone" /></div>
              +61 406 379 530
            </div>
            <div class="top_bar_contact_item">
              <div class="top_bar_icon"><i class="fa fa-envelope-o" /></div>
              <a href="mailto:weddingsbyjosiecbr@gmail.com">weddingsbyjosiecbr@gmail.com</a>
            </div>
            <div class="top_bar_contact_item ml-auto">
              <div class="top_bar_icon"><i class="ti ti-time" /></div>
              Work Hour: Mon – Sun: 9.00am to 8.00pm
            </div>
            <div class="top_bar_contact_item top_bar_social">
              <ul class="social-icons sub-menu">
                <li><a href="https://www.facebook.com/p/Weddings-By-Josie-100064046983818/"target="_blank" ><i class="fa fa-facebook"/></a></li>
                <li><a href="https://www.instagram.com/weddingsbyjosiecbr/" target="_blank" ><i class="fa fa-instagram"/></a></li>
                <li><a href="." target="_blank" ><i class="fa fa-linkedin"/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--top_barend-->
  <!--site-header-menu-->
  <div id="site-header-menu" class="site-header-menu ttm-bgcolor-white">
    <div class="site-header-menu-inner ttm-stickable-header">
      <div class="container">
        <!--site-navigation -->
        <div class="site-navigation d-flex flex-row align-items-center">
          <!-- site-branding -->
          <div class="site-branding d-flex">
            <a class="home-link" href="." {title} rel="Weddings by Josie">
              <img
                id="logo-img"
                class="img-center standardlogo"
                src="media/Logo-removebg-preview-247x300.png"
                alt="logo-img"
              />
              <img
                id="logo-dark"
                class="img-center stickylogo"
                src="media/Logo-removebg-preview-247x300.png"
                alt="logo-img"
              />
            </a>
            <h4 class="title">Weddings by Josie</h4>
          </div>
          <!-- site-branding end -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class="btn-show-menu-mobile menubar menubar--squeeze{navActive
              ? ' active'
              : ''}"
            on:click={toggleMenu}
          >
            <span class="menubar-box">
              <span class="menubar-inner" />
            </span>
          </div>
          <!-- menu -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <nav
            class="main-menu menu-mobile ml-auto{navActive ? ' show' : ''}"
            on:click={toggleMenu}
            id="menu"
          >
            <ul class="menu">
              <li>
                <a href=".">Home</a>
              </li>
              <li>
                <a href="about-me">About</a>
              </li>
              <li class="mega-menu-item">
                <a href="service" class="mega-menu-link">Services</a>
                <ul class="mega-submenu">
                  <li><a href="service">The Works</a></li>
                  <li><a href="service2">Alternative</a></li>
                </ul>
              </li>
              <li>
                <a href="pricing">Pricing</a>
              </li>
              <li>
                <a href="contact-me">Contact</a>
              </li>
            </ul>
          </nav>
          <div
            class="header_extra d-flex flex-row align-items-center justify-content-end"
          >
            <!--            <div class="header_search">
              <a href="." class="btn-default search_btn"
                ><i class="ti ti-search" /></a
              >
              <div class="header_search_content">
                <form id="searchbox" method="get" action="#">
                  <input
                    class="search_query"
                    type="text"
                    id="search_query_top"
                    name="s"
                    placeholder="Enter Keyword"
                    value=""
                  />
                  <button type="submit" class="btn close-search"
                    ><i class="fa fa-search" /></button
                  >
                </form>
              </div>
            </div>
            <div class="header_cart">
              <a href="." class="button-cart">
                <div class="cart_icon"><i class="fa fa-shopping-cart" /></div>
                <div class="cart_count">0</div>
              </a>
            </div> -->
          </div>
        </div>
        <!-- site-navigation end-->
      </div>
    </div>
  </div>
</header>

<!--header end-->
<style>
  .title {
    font-size: 35px;
    font-weight: 800;
  }

  @media (max-width: 991px) {
    h4 {
      font-size: 24px;
      line-height: 35px;
    }
  }
</style>
