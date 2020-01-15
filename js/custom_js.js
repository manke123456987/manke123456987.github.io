 
var swiperIndex = new Swiper('.swiper-container_lianjie', {
    // slidesPerView: "auto",
 
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
       slidesPerView: 7,
       spaceBetween: 12,
       speed:2600, 
       autoplay: {
           delay: 0,
           stopOnLastSlide: false,
           disableOnInteraction: false,
       },
       freeMode:true,
     loop: true,
});




var swiperCangwei = new Swiper('.swiper-container_cangwei', { 
    effect: 'fade',              
    navigation: {
          nextEl: '.xia',
          prevEl: '.shang',
          },
          // pagination: {
          //   el: '.swiper-pagination',
          //   clickable: true, 
         
          observer:true,//修改swiper自己或子元素时，自动初始化swiper 
          observeParents:false,//修改swiper的父元素时，自动初始化swiper 
    });


  
    
    $('.cangwei_lis_con .c1').click(function(){ 
          
       var _index = $(this).index()
       swiperCangwei.slideTo(_index , 300, false);//切换到第一个slide，速度为1秒
       $('.tan_log').animate({'z-index':'9999'},300) 

      
    // console.log(_index + 1)
    // alert(_index + 1)
   


    
    }) 
 
$('.chaa').click(function(){ 
    $('.tan_log').css('z-index','-9')
  
})







 
var swiperIndex = new Swiper('.swiper-container_banner', {
 
 
      pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      },

    autoplay:
    {
        delay: 5000,//秒  
        disableOnInteraction: false,
    },
    speed: 1200,
    loop: true,
});


 
var swiperIndex = new Swiper('.swiper-container_gonggao', {
 
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },

  autoplay:
  {
      delay: 5000,//秒  
      disableOnInteraction: false,
  },
  speed: 1200,
  loop: true,
});




$(".cang_zhanshi .top .yy_list .y1  ").click(function(){
   
    var _index = $(this).index(); 
    $(" .cang_zhanshi .con .c1_box").eq(_index).show().siblings().hide(); 
    $(this).addClass("active").siblings().removeClass("active");
});


$(".xuzhi_con .c1 .c1_top").click(function(){ 
      if($(this).hasClass('active')== true) {
        $(this).removeClass('active')
      } else {
        $(this).addClass('active')
      }

})



 



var swiperIndex2 = new Swiper('.swiper-container_comon_sub', {
    slidesPerView: 2.5,
     spaceBetween: 27,
    direction: 'vertical',
    autoplay:
    {
        delay: 3500,//秒  
        disableOnInteraction: false,
    }, 
    loop: true, 
    speed: 1200,
 
});





 

 




// $('.xuzhi_con .c1 .c1_top').click(function(){
       
//     var el = $(this).siblings('.c1_con ')
//      var  curHeight = el.height()
//       var   autoHeight = el.css('height', 'auto').height()
//        var  hei =  el.height(63)
//        console.log(autoHeight)
//        console.log(curHeight)
  
//       if($(this).siblings('.c1_con').css('height') == '63px') {
//         //    el.height(curHeight).animate({height: autoHeight}, 1000);
//            $(this).siblings('.c1_con').animate({height:autoHeight},300) 
//       }else {
     
//         $(this).siblings('.c1_con').animate({height: '63px'}, 300);
   

//       }
// })









var swiperIndex = new Swiper('.swiper-container_index3', {
    slidesPerView: 5,
    spaceBetween: 11,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },

    autoplay:
    {
        delay: 5000,//秒  
        disableOnInteraction: false,
    },
    speed: 1200,
    loop: true,
});
var swiperIndex = new Swiper('.swiper-container_index4', {
    slidesPerView: 3,
    spaceBetween: 11,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },

    autoplay:
    {
        delay: 5000,//秒  
        disableOnInteraction: false,
    },
    speed: 1200,
    loop: true,
});



var swiperIndex = new Swiper('.swiper-container_index5', {
    slidesPerView: 4,
    spaceBetween: 17,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },

    autoplay:
    {
        delay: 5000,//秒  
        disableOnInteraction: false,
    },
    speed: 1200,
    loop: true,
});
var swiperIndex = new Swiper('.swiper-container_index6', {
    slidesPerView: 6,
    spaceBetween: 0,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
 
    autoplay:
    {
        delay: 5000,//秒  
        disableOnInteraction: false,
    },
    speed: 1200,
    loop: true,
    

});

var swiperIndex = new Swiper('.swiper-container_index7', {
    slidesPerView: 3,
    spaceBetween: 0,
   
    navigation: {
        nextEl: '.next1',
        prevEl: '.prev1',
      },
    autoplay:
    {
        delay: 5000,//秒  
        disableOnInteraction: false,
    },
    speed: 1200,
    loop: true,
    
});
var swiperIndex = new Swiper('.swiper-container_index8', {
    slidesPerView: 4,
    spaceBetween: 18,
   
    // navigation: {
    //     nextEl: '.next1',
    //     prevEl: '.prev1',
    //   },
    autoplay:
    {
        delay: 4000,//秒  
        disableOnInteraction: false,
    },
    speed: 1200,
    loop: true,
    
});
var swiperIndex = new Swiper('.swiper-container_index9', {
    slidesPerView: 5,
    spaceBetween: 0,
   
    // navigation: {
    //     nextEl: '.next1',
    //     prevEl: '.prev1',
    //   },
    autoplay:
    {
        delay: 2000,//秒  
        disableOnInteraction: false,
    },
    speed: 1200,
    loop: true,
    
});
var swiperIndex = new Swiper('.swiper-container_index10', {
    // slidesPerView: 5,
    // spaceBetween: 0,
   
    navigation: {
        nextEl: '.next2',
        prevEl: '.prev2',
      },
    autoplay:
    {
        delay: 5000,//秒  
        disableOnInteraction: false,
    },
    speed: 1200,
    loop: true,
    
});


$(".news_show_conn .h44 .imgBox1  ").click(function(){
    var _index = $(this).index(); 
     if($(this).parent().hasClass('active') == true) {
        $(this).parent().removeClass('active');
     } else {
        $(this).parent().addClass('active') 

     }
   
});






$('.join .j1 .j1_con3').click(function(){
      var _that = $(this).parent()
    if(_that.hasClass('active') == true) {
        _that.removeClass('active') 
        _that.find('.j1_con3').text('收起')
    }else {
        _that.addClass('active') 
        _that.find('.j1_con3').text('查看')

    }
})






$('.common_top .cha').click(function(){
    $(this).parents('.common_top').remove()
})


// 选项卡

 
    $(".top_box5 .box5_you li ").click(function(){
   
        var _index = $(this).index(); 
        $(".top_box5_con").eq(_index).show().siblings().hide(); 
        $(this).addClass("active").siblings().removeClass("active");
    });


    $(".index_m4 .index_m4_top .common_yy2 li ").click(function(){
   
        var _index = $(this).index(); 
        $(" .big_box .b1").eq(_index).show().siblings().hide(); 
        $(this).addClass("active").siblings().removeClass("active");
    });
 


    // 指南 

$('.nan_zz li').click(function() {
   
    $(this).addClass('active').siblings().removeClass('active')
        
      
})


$('.index_m5_con .index_m5_con_zuo').click(function(){
    $('.tan_log').show()
})
$('.tan_log .cha').click(function(){
    $('.tan_log').hide()
})