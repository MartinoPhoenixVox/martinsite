$(document).ready(function() {
$('#banner').owlCarousel({
    loop: true,
    margin: 10,
    nav:true,
    responsiveClass: true,
    responsive: 
    {
        0: 
        {
            items: 1,
            nav: true
        },
        600: 
        {
            items: 1,
            nav: true
        },
        1000: 
        {
            items: 1,
            nav: true,
            loop: true,
            margin: 20
        }
    }
    })
})
$(document).ready(function() {
$('#categories').owlCarousel({
    loop: true,
    margin: 24,
    nav:true,
    responsiveClass: true,
    responsive: 
    {
        0: 
        {
            items: 1,
        },
        600: 
        {
            items: 2,
        },
        1000: 
        {
            items: 6,
        }
    }
    })
    $('#blogs').owlCarousel({
    loop: true,
    margin: 24,
    nav:true,
    responsiveClass: true,
    responsive: 
    {
        0: 
        {
            items: 1,
        },
        600: 
        {
            items: 2,
        },
        1000: 
        {
            items: 3,
        }
    }
    })
    $('#testimonial').owlCarousel({
    loop: true,
    margin: 24,
    nav:true,
    responsiveClass: true,
    responsive: 
    {
        0: 
        {
            items: 1,
        },
        600: 
        {
            items: 1,
        },
        1000: 
        {
            items: 1,
        }
    }
    })
})
$(window).scroll(function(){
    if($(window).width()>992)
    {
        if($(window).scrollTop()>30)
        {
            
            $('#navigation').css({'position':'fixed','top':'0','width':'100%','z-index':'10000','background-color':'white'});

        }
        else
        {
            $('#navigation').css({'position':'static'})
        }
    }
    else
    {
        $('#navigation').css({'position':'static'})
    }
})
$('#btn-sidebar').click(function(){
    $('#sidebar').toggle('slide');
})
$('#sidebar-close').click(function(){
    $('#sidebar').toggle('slide');
})
$(window).resize(function(){
    if($(window).width()>=992)
    {
        $('.form-search').css('display','flex');
        $('#menu').css('display','block');
        $('#sidebar').css('display','block');
    }
    else
    {
        $('.form-search').css('display','none');
        $('#menu').css('display','none');
        $('#sidebar').css('display','none');
    }
})
