$(function() {
    $(".drpdwn").on("click", function() {
        if($(".listitem").hasClass("active")) {
            $(".listitem").removeClass("active");
        } else {
            $(".listitem").addClass("active");
        }
    })
});