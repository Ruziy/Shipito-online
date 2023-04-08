$(function(){
    var mixer = mixitup('.header__inner',{
        load:{
            filter:'.tracking'
        }
    }); 
    $('.ship__slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots:false,
        arrows:true,
        prevArrow: '<img class="ship__sliderprev-img ship__sliderprev-img__unActive" src="images/icons/chevron-left-1.png">',
        nextArrow: '<img class="ship__slidernext-img" src="images/icons/chevron-right.png">',
    });
    $('.about-us__slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots:false,
        arrows:true,
        prevArrow: '<img class="about-us__arrow-left about-us__arrow-left-unActive" src="images/icons/about-us__arrow-left-1.png">',
        nextArrow: '<img class="about-us__arrow-right" src="images/icons/about-us__arrow-right.png">',
    });
    // var currentSlide;
    // var slidesCount;
    // var sliderCounter = document.createElement("div");
    // sliderCounter.classList.add("slider__counter");
    
    // var updateSliderCounter = function (slick, currentIndex) {
    //   currentSlide = slick.slickCurrentSlide() + 1;
    //   slidesCount = slick.slideCount;
    //   $(sliderCounter).text(currentSlide + "/" + slidesCount);
    // };
    
    // $(".ship_slider").on("init", function (event, slick) {
    //   $(".ship_slider").append(sliderCounter);
    //   updateSliderCounter(slick);
    // });
    
    // $(".ship_slider").on("afterChange", function (event, slick, currentSlide) {
    //   updateSliderCounter(slick, currentSlide);
    // });
    $('.worldwide__btn-1').on('click',function(){
        $('.worldwide__img-place-1').toggleClass('worldwide__img-place-active');
        $('.worldwide__block-5').toggleClass('worldwide__block-active');
    });
    $('.worldwide__btn-2').on('click',function(){
        $('.worldwide__img-place-2').toggleClass('worldwide__img-place-active');
        $('.worldwide__block-2').toggleClass('worldwide__block-active');
    });
    $('.worldwide__btn-3').on('click',function(){
        $('.worldwide__img-place-3').toggleClass('worldwide__img-place-active');
        $('.worldwide__block-3').toggleClass('worldwide__block-active');
    });
    $('.worldwide__btn-4').on('click',function(){
        $('.worldwide__img-place-4').toggleClass('worldwide__img-place-active');
        $('.worldwide__block-4').toggleClass('worldwide__block-active');
    });
    $('.worldwide__btn-5').on('click',function(){
        $('.worldwide__img-place-5').toggleClass('worldwide__img-place-active');
        $('.worldwide__block-7').toggleClass('worldwide__block-active');
    });
    $('.worldwide__btn-9').on('click',function(){
        $('.worldwide__img-place-9').toggleClass('worldwide__img-place-active');
        $('.worldwide__block-6').toggleClass('worldwide__block-active');
    });
    $('.worldwide__btn-6').on('click',function(){
        $('.worldwide__img-place-6').toggleClass('worldwide__img-place-active');
        $('.worldwide__block-8').toggleClass('worldwide__block-active');
    });
    $('.worldwide__btn-7').on('click',function(){
        $('.worldwide__img-place-7').toggleClass('worldwide__img-place-active');
        $('.worldwide__block-9').toggleClass('worldwide__block-active');
    });
    $('.worldwide__btn-8').on('click',function(){
        $('.worldwide__img-place-8').toggleClass('worldwide__img-place-active');
        $('.worldwide__block-10').toggleClass('worldwide__block-active');
    });
    $('.worldwide__btn-10').on('click',function(){
        $('.worldwide__img-place-10').toggleClass('worldwide__img-place-active');
        $('.worldwide__block-1').toggleClass('worldwide__block-active');
    });
    $('.burger').on('click',function(){
        $('.burger').toggleClass('active');
        $('.header__nav').toggleClass('header__nav-open');
        $('.header__logo').toggleClass('header__logo-burger');
        $('.header__logo-text').toggleClass('header__logo-text-burger');
        $('.header__link').toggleClass('header__link-burger');
        $('.header__btn').toggleClass('header__btn-burger');
        $('.header__items').toggleClass('header__items-burger');
    });
    $(".ship__slider").on('afterChange', function(event, slick, currentSlide){
        $("#counter").text(currentSlide + 1);
        let change=$("#counter").text();
        console.log(change)
        if(change !=1)
        {
            $('.ship__sliderprev-img').attr("src","images/icons/chevron-left.png")
            $('.ship__sliderprev-img').removeClass('ship__sliderprev-img__unActive')
        }
        else{
            $('.ship__sliderprev-img').attr("src","images/icons/chevron-left-1.png")
            $('.ship__sliderprev-img').addClass('ship__sliderprev-img__unActive')
        }
        if(change !=5)
        {
            $('.ship__slidernext-img').attr("src","images/icons/chevron-right.png")
            $('.ship__slidernext-img').removeClass('ship__slidernext-img__unActive')
        }
        else{
            $('.ship__slidernext-img').attr("src","images/icons/chevron-right-1.png")
            $('.ship__slidernext-img').addClass('ship__slidernext-img__unActive')
        }
     });
     $(".about-us__slider").on('afterChange', function(event, slick, currentSlide){
        let changeAbout=(currentSlide+1);
        console.log(changeAbout)
        if(changeAbout != 1)
        {
            $('.about-us__arrow-left').attr("src","images/icons/about-us__arrow-left.png")
            $('.about-us__arrow-left').removeClass('about-us__arrow-left-unActive')
        }
        else{
            $('.about-us__arrow-left').attr("src","images/icons/about-us__arrow-left-1.png")
            $('.about-us__arrow-left').addClass('about-us__arrow-left-unActive')
        }
        if(changeAbout !=3)
        {
            $('.about-us__arrow-right').attr("src","images/icons/about-us__arrow-right.png")
            $('.about-us__arrow-right').removeClass('about-us__arrow-right-unActive')
        }
        else{
            $('.about-us__arrow-right').attr("src","images/icons/about-us__arrow-right-1.png")
            $('.about-us__arrow-right').addClass('about-us__arrow-right-unActive')
        }
     });
})