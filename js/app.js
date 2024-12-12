
let sidebar = $('.sidebar');

$("nav .sidebarBtn").click(function(){

    sidebar.addClass('active');

});


$(".sidebar,.clossBtn").click(function(event) {

  

    if(
        event.target.classList.contains("clossBtn") ||
        event.target.classList.contains("sidebar")
    
    ) {

        sidebar.removeClass("active");

    }
});
