function showTab(e){$(".tab-contents > div").hide(),$(".tab-contents "+e).fadeIn("fast")}var $=jQuery.noConflict();jQuery(document).ready(function(e){var t=jQuery(".menu-wrapper:not(.navbar-fixed-top)"),o=(jQuery(".menu-wrapper.navbar-fixed-top"),jQuery(".back-to-top"));jQuery(window).scroll(function(){setTimeout(function(){var e=jQuery(this).scrollTop();if(e>300){var r=jQuery(".main-content").height(),a=jQuery(".sidebar-scroll").height();jQuery(".sidebar-scroll").addClass("scrolling"),r-a>e?jQuery(".sidebar-scroll").removeClass("stop").css("top",85):jQuery(".sidebar-scroll").addClass("stop").css("top",r-a+"px"),o.fadeIn(),t.css({position:"fixed",top:0,left:0,width:"100%","z-index":5})}else jQuery(".sidebar-scroll").removeClass("scrolling"),t.css({position:"relative"}),o.fadeOut()},200)}),jQuery(".back-to-top").click(function(){jQuery("html,body").clearQueue().animate({scrollTop:0},500)});var r=jQuery(".tab-list .active").attr("href");r||(r=jQuery(".tab-list a:first-child").addClass("active").attr("href")),showTab(r),jQuery(".tab-list a").click(function(e){jQuery(".tab-list a").removeClass("active"),jQuery(this).addClass("active"),showTab(jQuery(this).attr("href")),e.preventDefault()}),jQuery("[data-product-id] .view-detail").click(function(e){e.preventDefault();var t=jQuery(this).parent("a").attr("href");window.location.href=t}),jQuery(".magnific-popup").magnificPopup(),jQuery(".image-popup").magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-with-zoom",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.attr("title")},verticalFit:!0}}),jQuery(".owl-carousel.slider").owlCarousel({items:1,loop:!0}),jQuery(".owl-carousel.single").owlCarousel({navigation:!0,slideSpeed:300,paginationSpeed:400,items:1,loop:!0}),jQuery(".owl-carousel.carousel").owlCarousel({items:4,loop:!0,center:!1,margin:25,responsive:{900:{items:4},600:{items:2},320:{items:1}}}),jQuery(".owl-carousel.carousel3").owlCarousel({items:3,loop:!0,center:!1,margin:25,responsive:{900:{items:3},600:{items:2},320:{items:1}}}),jQuery(".detail__desc").mCustomScrollbar({theme:"dark",axis:"y",setHeight:200})});var $=jQuery.noConflict();jQuery(document).ready(function(e){jQuery(".frm-newsletter").submit(function(e){e.preventDefault(),swal({title:"Thành công",text:"Bạn đã đăng ký nhận thông tin thành công.",confirmButtonColor:"#4CAF50"})})});