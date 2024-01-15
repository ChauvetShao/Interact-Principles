// // 手机端通过滑动切换预览
$(document).ready(function() {
  var mySwiper = new Swiper('.swiper', {
    // Swiper的配置项
  });
});



//  <!-- 使用了iQuery库，实现页面加载效果，网页加载完毕自动消失 -->
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});


// 执行视图切换-----------
// 在文档加载完成后执行
$(document).ready(function() {
// 初始状态
    $('.img1').addClass('black-fill');
    $('.img2').addClass('grey-fill');
    $('#grid-view').hide();
    $('#reel-view').show();

    // 使用 jQuery 监听 img1 的点击事件
    $('.img1').on('click', function() {
        // 显示 reel-view，隐藏 grid-view
        $('#grid-view').hide();
        $('.reel-view-static-layer').show();
        $('#reel-view').show();

        // 添加或移除样式类
        $('.img1').addClass('black-fill').removeClass('grey-fill');
        $('.img2').addClass('grey-fill').removeClass('black-fill');
    });

    // 使用 jQuery 监听 img2 的点击事件
    $('.img2').on('click', function() {
        // 显示 grid-view，隐藏 reel-view,隐藏背景图片和文字标题，隐藏手机端
        $('#reel-view').hide();
        $('.reel-view-static-layer').hide();
        $('.mobile-reel-view').hide();
        $('#grid-view').show();

        // 添加或移除样式类
        $('.img2').addClass('black-fill').removeClass('grey-fill');
        $('.img1').addClass('grey-fill').removeClass('black-fill');
    });
});

// 首页鼠标悬停，背景图片和标题切换-------------
function showImage(imageNumber) {
    // Hide all images and texts
    for (let i = 1; i <= 6; i++) {
      $(`#image${i}`).removeClass('active');
      $(`#principle-title${i}`).removeClass('active');
    }
  
    // Show the selected image and text
    $(`#image${imageNumber}`).addClass('active');
    $(`#principle-title${imageNumber}`).addClass('active');
  }
  
// 想实现切换时渐变动效
//   $(document).ready(function() {
//     $("#reel-view a").hover(function() {
//       $(this).find(".image").fadeIn();
//     }, function() {
//       $(this).find(".p-principle-title").fadeIn();
//     });
//   });


//   reel-view鼠标滚轮响应
$(document).ready(function() {
    // 获取滚动容器
    var scrollingDiv = $('#reel-view');

    // 监听鼠标滚轮事件
    scrollingDiv.on('wheel', function(event) {
      // 根据滚轮方向来调整滚动位置
      scrollingDiv.scrollLeft(scrollingDiv.scrollLeft() + event.originalEvent.deltaY);
      
      // 阻止默认滚动行为
      event.preventDefault();
    });
  });