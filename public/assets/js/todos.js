$(function(){

  // 设置已经完成的todo项目的样式：给文件加中划线，颜色变浅
  $('#todolist li label').click(function() {
    $(this).toggleClass('done');
  });

  //weather icons
  // var icons = new Skycons({"color": "white"});
  // icons.set("clear-day", Skycons.CLEAR_DAY);
  // icons.play();

  //owl carousel
  // $("#owl-example").owlCarousel({
  //   singleItem: true,
  //   autoPlay: true,
  //   navigation: true,
  //   slideSpeed: 400,
  //   paginationSpeed: 500,
  //   navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  // });

  //load wysiwyg editor
  // $('#quick-message-content').summernote({
  //   toolbar: [
  //     //['style', ['style']], // no style button
  //     ['style', ['bold', 'italic', 'underline', 'clear']],
  //     ['fontsize', ['fontsize']],
  //     ['color', ['color']],
  //     ['para', ['ul', 'ol', 'paragraph']],
  //     ['height', ['height']],
  //     //['insert', ['picture', 'link']], // no insert buttons
  //     //['table', ['table']], // no table button
  //     //['help', ['help']] //no help button
  //   ],
  //   height: 295   //set editable area's height
  // });

  //multiselect input
  // $(".chosen-select").chosen({disable_search_threshold: 10});
  // $("body").click(function(){
  //   $('#content').removeClass('main-with-from-open-right-panel');
  // }

  ///////////// 展开右侧列表项的详细设置框之后，点击除了这个输入框之外的地方隐藏这个输入框
  $("body").click(function(){
       
       var e = event.srcElement;
      if (!e.offsetParent && typeof(e.offsetParent) != "undefined") {
        $('#content').removeClass('main-with-from-open-right-panel');
       
      } else if (e.offsetParent.id == "mm-m0-p0" || e.offsetParent.id == 'mmenu') {
       
      } else {
        $('#content').removeClass('main-with-from-open-right-panel');
      }
  })
   $('#content').click(function(){
       return false;
  });
   // ------------- end 

});

/**
 * 点击列表项 的编辑按钮，在右侧显示输入框
 * @return {[type]} [description]
 */
function toggleShowRightPanel() {
  $('html').addClass('mm-right mm-next mm-opened mm-opening');
  $('#mmenu').addClass('mm-current mm-opened');
  $('#content').addClass('main-with-from-open-right-panel');
}

function test(v) {
  console.log('selected = ' + v);
}

//  当鼠标移到列表上，显示列表的工具图标
function showToolsIcon(self) {
  for (var i = 2; i <= 4; i++) {
    $($($(self).children()[0]).children()[i]).show();
  }
}

//  当鼠标从列表上移开，隐藏列表的工具图标
function hideToolsIcon(self) {
  for (var i = 2; i <= 4; i++) {
    $($($(self).children()[0]).children()[i]).hide();
  }


}