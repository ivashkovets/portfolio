$(document).ready(function(){
    $('.slider-1').slick({
        arrows:false,
        dots: true,
        slidesToShow: 1,
        speed: 500,
        waitForAnimate: false,
        centerMode: false,
        asNavFor: '.slider-2'
    });
});
$(document).ready(function(){
    $('.slider-2').slick({
        arrows:true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>' ,
        dots: false,
        slidesToShow: 1,
        speed: 500,
        centerMode: false,
        asNavFor: '.slider-1'
    });
});

$(document).ready(function(){
    $('#form').submit(function(){
        var th = $(this);
        $.ajax({
            type:"POST",
            url:"mail.php",
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function(){
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});