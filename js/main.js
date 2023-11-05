(function(t){"use strict";t(window).on("load",function(){t("#preloader").fadeOut(),t("#status").fadeOut(9e3)}),t(".header_search").each(function(){t(".search_btn",this).on("click",function(e){e.preventDefault(),e.stopPropagation(),t(".header_search_content").toggleClass("on"),t(".header_search a").hasClass("open")?(t(".header_search a i").removeClass("ti-close").addClass("ti-search"),t(this).removeClass("open").addClass("sclose")):(t(".header_search a").removeClass("sclose").addClass("open"),t(".header_search a i").removeClass("ti-search").addClass("ti-close"))})}),t(window).scroll(function(){matchMedia("only screen and (min-width: 1200px)").matches&&(t(window).scrollTop()>=50?t(".ttm-stickable-header").addClass("fixed-header"):t(".ttm-stickable-header").removeClass("fixed-header"))});var n,s,o={initialize:function(){this.Menuhover()},Menuhover:function(){var n=t("nav.main-menu"),s=t(window).width(),o=t(window).height(),i=n.find("ul.menu").data("in"),a=n.find("ul.menu").data("out");matchMedia("only screen and (max-width: 1200px)").matches&&t("nav.main-menu ul.menu").each(function(){t("a.mega-menu-link",this).on("click",function(e){e.preventDefault();var n=t(this);n.toggleClass("active").next("ul").toggleClass("active")}),t(".megamenu-fw",this).each(function(){t(".col-menu",this).each(function(){t(".title",this).off("click"),t(".title",this).on("click",function(){return t(this).closest(".col-menu").find(".content").stop().toggleClass("active"),t(this).closest(".col-menu").toggleClass("active"),!1;e.preventDefault()})})})})}};t(".btn-show-menu-mobile").on("click",function(e){return t(this).toggleClass("is-active"),t(".menu-mobile").toggleClass("show"),!1;e.preventDefault()}),t(document).ready(function(){o.initialize()}),t("[data-appear-animation]").each(function(){var e=t(this),n=e.data("appear-animation"),s=e.data("appear-animation-delay")?e.data("appear-animation-delay"):0;t(window).width()>959?(e.html("0"),e.waypoint(function(){if(!e.hasClass("completed")){var n=e.data("from"),s=e.data("to"),o=e.data("interval");e.numinate({format:"%counter%",from:n,to:s,runningInterval:2e3,stepUnit:o,onComplete:function(){e.addClass("completed")}})}},{offset:"85%"})):n=="animateWidth"&&e.css("width",e.data("width"))}),t(document).ready(function(){t(".ttm-tabs > .tabs").children("li").on("click",function(e){var s=t(this).closest(".ttm-tabs > .tabs > .tab"),n=t(this).closest(".ttm-tabs > .tabs > li").index();t(this).parents(".ttm-tabs").children(" .tabs").children("li.active ").removeClass("active"),t(this).addClass("active"),t(this).addClass("active").parents(".ttm-tabs").children(".content-tab").find(".content-inner").not(".content-inner:eq("+n+")").slideUp(),t(this).addClass("active").parents(".ttm-tabs").children(".content-tab").find(".content-inner:eq("+n+")").slideDown(),e.preventDefault()})}),t(".toggle").eq(0).addClass("active").find(".toggle-content").css("display","block"),t(".accordion .toggle-title").click(function(){t(this).siblings(".toggle-content").slideToggle("fast"),t(this).parent().toggleClass("active"),t(this).parent().siblings().children(".toggle-content:visible").slideUp("fast"),t(this).parent().siblings().children(".toggle-content:visible").parent().removeClass("active")}),t(function(){if(t().isotope){var e=t(".isotope-project");e.imagesLoaded(function(){e.isotope({itemSelector:".project_item",transitionDuration:"1s",layoutMode:"fitRows"})}),t(".portfolio-filter li").on("click",function(){var n=t(this).find("a").attr("data-filter");return t(".portfolio-filter li").removeClass("active"),t(this).addClass("active"),e.isotope({filter:n}),!1})}}),jQuery(document).ready(function(){jQuery('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').each(function(){if(jQuery(this).attr("target")!="_blank"&&!jQuery(this).hasClass("prettyphoto")&&!jQuery(this).hasClass("modula-lightbox")){var e=t(this).attr("data-gal");typeof e!==typeof void 0&&e!==!1&&e!="prettyPhoto"&&jQuery(this).attr("data-rel","prettyPhoto")}}),jQuery('a[data-gal^="prettyPhoto"]').prettyPhoto(),jQuery("a.ttm_prettyphoto").prettyPhoto(),jQuery('a[data-gal^="prettyPhoto"]').prettyPhoto(),jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({hook:"data-gal"})}),t(".ttm-progress-bar").each(function(){t(this).find(".progress-bar").width(0)}),t(".ttm-progress-bar").each(function(){t(this).find(".progress-bar").animate({width:t(this).attr("data-percent")},2e3)}),t(".progress-bar-percent[data-percentage]").each(function(){var n=t(this),e=Math.ceil(t(this).attr("data-percentage"));t({countNum:0}).animate({countNum:e},{duration:2e3,easing:"linear",step:function(){var t="";e==0?t=Math.floor(this.countNum)+"%":t=Math.floor(this.countNum+1)+"%",n.text(t)}})}),t(function(){t("#slider-range").slider({range:!0,orientation:"horizontal",min:0,max:999,values:[0,780],slide:function(e,n){if("$"+n.values[0]=="$"+n.values[1])return!1;t("#min_price").val("$"+n.values[0]),t("#max_price").val("$"+n.values[1])}}),t("#min_price ").val("$"+t("#slider-range").slider("values",0)),t("#max_price ").val("$"+t("#slider-range").slider("values",1))}),t(".slick_slider").slick({speed:1e3,infinite:!0,arrows:!1,dots:!1,autoplay:!1,centerMode:!1,responsive:[{breakpoint:1360,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:680,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1}}]}),n=jQuery(".testimonials-nav",this),s=jQuery(".testimonials-info",this),jQuery(".testimonials-info",this).slick({slidesToShow:1,slidesToScroll:1,fade:!1,arrows:!1,asNavFor:n,adaptiveHeight:!0,speed:1500,autoplay:!0,autoplaySpeed:1500,infinite:!0}),jQuery(".testimonials-nav",this).slick({slidesToShow:1,slidesToScroll:1,asNavFor:s,centerMode:!0,centerPadding:0,focusOnSelect:!0,autoplay:!0,autoplaySpeed:1500,speed:1500,arrows:!0,dots:!1,variableWidth:!0,infinite:!0}),jQuery("#totop").hide(),jQuery(window).scroll(function(){"use strict";jQuery(this).scrollTop()>=100?(jQuery("#totop").fadeIn(200),jQuery("#totop").addClass("top-visible")):(jQuery("#totop").fadeOut(200),jQuery("#totop").removeClass("top-visible"))}),jQuery("#totop").click(function(){return jQuery("body,html").animate({scrollTop:0},500),!1}),t(function(){})})(jQuery)