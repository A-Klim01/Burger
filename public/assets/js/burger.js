
// When "button devoured" is pressed changes the burgers from one table to another
$(document).ready(function(){
  $(document).on("click", ".devour-form", function(event){
    event.preventDefault();
    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data){
      location.reload();
    })
  })
})