$(document).ready(function(){
    //表單
    $('#NewexperienceForm').validationEngine({
        promptPosition: 'bottomLeft', scroll: false
    });

    //輪播
    $('.your-class').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });
});
