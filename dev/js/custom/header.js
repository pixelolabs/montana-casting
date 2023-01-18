jQuery(function() {
    /* Global
    Announcement Slider */
    // $(".js__announcement-slider").not(".slick-initialized").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: false,
    //     arrows: false,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     infinite: false,
    //     vertical: true,
    //     cssEase: "ease-in-out",
    //     adaptiveHeight: false,
    // });
    var announcementSlider = new Swiper(".js__announcement-slider", {
        slidesPerView: 1,
        resistance: false,
        shortSwipes: true,
        loop: true,
        autoHeight: true,
        autoplay: {
            delay: 4000,

        },
        direction: 'vertical',




    });
    /* Announcement 
    Close on Click  */
    $("#announcement-close").on("click", function() {
        $(".announcement-bar").hide();
        $("body").removeClass("announcement-visible");
    });
    $(".js__search").on("click", function() {
            $(".js__header-search").toggle();

        })
        /** HEADER **/
        /** Top Search Result Open Close **/
    $("#searchOpen").on("click", function() {
        $(".top-search-results").toggleClass("active");
    });
    /* MEGAMENU
      active link while submenu open */
    if ($(window).width() > 980) {
        $(".has-sub-nav .site-nav__link,.has-sub-nav .sub-nav").mouseover(
            function() {
                $(".has-sub-nav .site-nav__link").addClass("hover-submenu");
                $(".has-sub-nav .sub-nav").css("visibility", "visible");
                $(".has-sub-nav .sub-nav").css("opacity", "1");
                $(".js__main-header").addClass("active");
            }
        );
        $(".has-sub-nav .site-nav__link,.has-sub-nav .sub-nav").mouseout(
            function() {
                $(".has-sub-nav .site-nav__link").removeClass("hover-submenu");
                $(".has-sub-nav .sub-nav").css("visibility", "hidden");
                $(".has-sub-nav .sub-nav").css("opacity", "0");
                $(".js__main-header").removeClass("active");
            }
        );
        $(".has-big-nav .site-nav__link,.has-big-nav .big-nav").mouseover(
            function() {
                $(".has-big-nav .site-nav__link").addClass("hover-submenu");
                $(".has-big-nav .big-nav").css("visibility", "visible");
                $(".has-big-nav .big-nav").css("opacity", "1");
                $(".js__main-header").addClass("active");
            }
        );
        $(".has-big-nav .site-nav__link,.has-big-nav .big-nav").mouseout(
            function() {
                $(".has-big-nav .site-nav__link").removeClass("hover-submenu");
                $(".has-big-nav .big-nav").css("visibility", "hidden");
                $(".has-big-nav .big-nav").css("opacity", "0");
                $(".js__main-header").removeClass("active");
            }
        );
    }

    /* SubMenu
    Accordion JS */
    (function($) {
        $(function() {
            var navLink = false;
            $(".accordion-toggle")
                .on("mousedown", function(e) {
                    "use strict";
                    e.stopImmediatePropagation();
                    if ($(this).parent("div").hasClass("footer-links")) {
                        if ($(window).width() < 981) {
                            if ($(this).hasClass("active")) {
                                $(this).removeClass("active");
                                $(this).siblings(".accordion-content").slideUp(300);
                            } else {
                                $(".accordion-toggle").removeClass("active");
                                $(this).addClass("active");
                                $(".accordion-content").slideUp(300);
                                $(this).siblings(".accordion-content").slideDown(300);
                            }
                        }
                    } else {
                        if ($(this).hasClass("active")) {
                            $(this).removeClass("active");
                            $(this).siblings(".accordion-content").slideUp(300);
                        } else {
                            $(".accordion-toggle").removeClass("active");
                            $(this).addClass("active");
                            $(".accordion-content").slideUp(300);
                            $(this).siblings(".accordion-content").slideDown(300);
                        }
                    }
                    navLink = true;
                })
                .focus(function(e) {
                    "use strict";
                    if (navLink) {
                        navLink = false;
                    } else {
                        if ($(this).parent("div").hasClass("footer-links")) {
                            if ($(window).width() < 980) {
                                if ($(this).hasClass("active")) {
                                    $(this).removeClass("active");
                                    $(this).siblings(".accordion-content").slideUp(300);
                                } else {
                                    $(".accordion-toggle").removeClass("active");
                                    $(this).addClass("active");
                                    $(".accordion-content").slideUp(300);
                                    $(this).siblings(".accordion-content").slideDown(300);
                                }
                            }
                        } else {
                            if ($(this).hasClass("active")) {
                                $(this).removeClass("active");
                                $(this).siblings(".accordion-content").slideUp(300);
                            } else {
                                $(".accordion-toggle").removeClass("active");
                                $(this).addClass("active");
                                $(".accordion-content").slideUp(300);
                                $(this).siblings(".accordion-content").slideDown(300);
                            }
                        }
                    }
                });
        });
        $(function() {
            var navLink = false;
            $(".accordion-toggle-inner")
                .on("mousedown", function(e) {
                    "use strict";
                    e.stopImmediatePropagation();
                    if ($(this).parent("div").hasClass("footer-links")) {
                        if ($(window).width() < 980) {
                            if ($(this).hasClass("active")) {
                                $(this).removeClass("active");
                                $(this).siblings(".accordion-content-inner").slideUp(300);
                            } else {
                                $(".accordion-toggle-inner").removeClass("active");
                                $(this).addClass("active");
                                $(".accordion-content-inner").slideUp(300);
                                $(this).siblings(".accordion-content-inner").slideDown(300);
                            }
                        }
                    } else {
                        if ($(this).hasClass("active")) {
                            $(this).removeClass("active");
                            $(this).siblings(".accordion-content-inner").slideUp(300);
                        } else {
                            $(".accordion-toggle-inner").removeClass("active");
                            $(this).addClass("active");
                            $(".accordion-content-inner").slideUp(300);
                            $(this).siblings(".accordion-content-inner").slideDown(300);
                        }
                    }
                    navLink = true;
                })
                .focus(function(e) {
                    "use strict";
                    if (navLink) {
                        navLink = false;
                    } else {
                        if ($(this).parent("div").hasClass("footer-links")) {
                            if ($(window).width() < 980) {
                                if ($(this).hasClass("active")) {
                                    $(this).removeClass("active");
                                    $(this).siblings(".accordion-content-inner").slideUp(300);
                                } else {
                                    $(".accordion-toggle-inner").removeClass("active");
                                    $(this).addClass("active");
                                    $(".accordion-content-inner").slideUp(300);
                                    $(this).siblings(".accordion-content-inner").slideDown(300);
                                }
                            }
                        } else {
                            if ($(this).hasClass("active")) {
                                $(this).removeClass("active");
                                $(this).siblings(".accordion-content-inner").slideUp(300);
                            } else {
                                $(".accordion-toggle-inner").removeClass("active");
                                $(this).addClass("active");
                                $(".accordion-content-inner").slideUp(300);
                                $(this).siblings(".accordion-content-inner").slideDown(300);
                            }
                        }
                    }
                });
        });
    })(jQuery);

    /** HEADER **/
    /** Top Search Result Open Close **/
    $("#searchOpen").on("click", function() {
        $(".top-search-results").toggleClass("active");
    });
});
/** Fix Header on Scroll **/
$(window).scroll(function() {
    var sticky = $("header"),
        scroll = $(window).scrollTop();
    if (scroll >= 35) {
        sticky.addClass("fixed");
        $(".main-content").addClass("active");
    } else {
        sticky.removeClass("fixed");
        $(".main-content").removeClass("active");
    }
});
/** used when header is relative **/

/** Mobile Navigation Open Close **/
(function($) {
    $(function() {
        var navLink = false;
        $("#hamburger")
            .mousedown(function(e) {
                $(this).toggleClass("active");
                $("#navbarNavDropdown").toggleClass("active");
                $(".js__mobile-menu-open-hide").toggleClass("active");
                $(".js__mobile-announcement-text").toggleClass("active");
                $(".js__main-header").toggleClass("active");

                if ($("#navbarNavDropdown").hasClass("active")) {
                    $(".js__logo").addClass("active");
                } else {
                    $(".js__logo").toggleClass("active");
                }
                navLink = true;
            })
            .focus(function(e) {
                "use strict";
                if (navLink) {} else {
                    $(this).toggleClass("active");
                    $("#navbarNavDropdown").toggleClass("active");
                    $(".js__mobile-menu-open-hide").toggleClass("active");
                    $(".js__mobile-announcement-text").toggleClass("active");
                    if ($("#navbarNavDropdown").hasClass("active")) {
                        $(".js__logo").addClass("active");
                    } else {
                        $(".js__logo").toggleClass("active");
                    }
                }
            });
    });
})(jQuery);

/** CART SIDEBAR
 * Close on Outside Click
 * **/
$(document).mouseup(function(e) {
    var popup = $("#CartSidebar");
    var overlay = $("#cart_overlay");
    if (!popup.is(e.target) && popup.has(e.target).length == 0) {
        popup.removeClass("active");
        overlay.removeClass("active");
    }
});