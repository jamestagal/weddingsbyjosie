<script>
  export let title;
  let navActive;
  const toggleMenu = () => {
    navActive = !navActive;
  };
</script>

<!--header start-->
<header id="masthead" class="header ttm-header-style-01" data-header="">
  <div id="site-header-menu" class="site-header-menu ttm-bgcolor-darkgrey">
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
                <a href="about-me">About me</a>
              </li>
              <li>
                <a href="service">Services</a>
              </li>
              <li>
                <a href="pricing">Pricing</a>
              </li>
              <li>
                <a href="contact-me">Contact Me</a>
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
    font-size: 40px;
    font-weight: 900;
  }
</style>
