// check off - click out

// $("li").click(function() {
//     $(this).toggleClass('completed');
// });

$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    // alert('cuc!')
});

$("input[type='text'").on('keypress', function(event){
    if(event.which === 13){
        var listItem = $(this).val();
        $("ul").append("<li> <span> <i class='fa fa-trash'></i> </span>" + listItem + " </li>");
        $('input').val(''); // or $(this)
            
        // console.log(listItem); 
    }
    
    
    

})



















// if ($(this).css("color") === "rgb(128, 128, 128)") {
//   //turn it black
//   $(this).css({
//     color: "black",
//     textDecoration: "none"
//   });
// } else {
//   //turn it gray
//   $(this).css({
//     color: "gray",
//     textDecoration: "line-through"
//   });
// }