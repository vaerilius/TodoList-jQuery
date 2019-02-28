$("ul").on('click','li', function() {
  // console.log($(this).css('color'));
  // if ($(this).css('color') === 'rgb(128, 128, 128)') {
  // $(this).css({
  //   color: "black",
  //   textDecoration: "none"
  // });

  // } else {
  //   $(this).css({
  //     color: "gray",
  //     textDecoration: "line-through"
  //   });
  // }

  // add class to the css

  $(this).toggleClass('compeleted');

});
// select ul --> if span is clicked run function
$('ul').on('click', 'span', function(e) {
  //parent il
    $(this).parent().fadeOut(500, function () {
      //this is parent element
      $(this).remove();
    });
  // e.preventDafault()
  e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
  if (e.which === 13) {
    let todoText= $(this).val();
    $(this).val('');
   $('ul').append(`<li><span><i class="far fa-trash-alt"></i> </span>${todoText}</li>`);

  }
  e.stopPropagation();
});

$('#span').click(function () {
  $('input[type"text"]').fadeOut();
});