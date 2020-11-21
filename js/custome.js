function updateSymbol(e) {
var selected = $(".currency-selector option:selected");
$(".currency-symbol").text(selected.data("symbol"));
$(".currency-amount").prop("placeholder", selected.data("placeholder"));
$(".currency-addon-fixed").text(selected.text());
}

$(".currency-selector").on("change", updateSymbol);

updateSymbol();

    $(function () {
        var list = $(".js-dropdown-list");
        var link = $(".js-link");
        link.click(function (e) {
          e.preventDefault();
          list.slideToggle(200);
        });
        list.find("li").click(function () {
          var text = $(this).html();
          var icon = '<i class="fa fa-chevron-down"></i>';
          link.html(text + icon);
          list.slideToggle(200);
          if (text === "* Reset") {
            link.html("Select one option" + icon);
          }
        });
      });
	  
	  
	  
	  $(function() {
  var list = $('.js-dropdown-list1');
  var link = $('.js-link1');
  link.click(function(e) {
    e.preventDefault();
    list.slideToggle(200);
  });
  list.find('li').click(function() {
    var text = $(this).html();
    var icon = '<i class="fa fa-chevron-down"></i>';
    link.html(text+icon);
    list.slideToggle(200);
    if (text === '* Reset') {
      link.html('Select one option'+icon);
    }
  });
});


$(document).ready(function(){
  $(".cart-top").click(function(){
    $(".cart-dropdown").slideToggle();
  });
  
});

$(document).ready(function(){
  $(".description-reviews-tabs a").click(function(){
    $(".description-reviews-tabs a").removeClass('active');
    $(this).addClass('active');
  });
  
  $(".description-reviews-tabs a.rbtn").click(function(){
    $(".discription-reviews-content").hide();
    $(".product-reviews-all").show();
  });
  
  $(".description-reviews-tabs a.dbtn").click(function(){
    $(".discription-reviews-content").show();
    $(".product-reviews-all").hide();
  });
  
});


window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$('.add').click(function () {
		if ($(this).prev().val() < 350) {
    	$(this).prev().val(+$(this).prev().val() + 1);
		}
});
$('.sub').click(function () {
		if ($(this).next().val() > 1) {
    	if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
		}
});