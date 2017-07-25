$(document).ready(function() {

  //navigation bar
  $(window).scroll(function() {
    var y = $(this).scrollTop();

    if(y > 100) {
      $(".nav-bg").addClass("nav-show");
    } else {
        $('.nav-bg').removeClass('nav-show');
     	}
      if (y > 600) {
        $("#portfolio section figure").addClass("slide-in");
      }
      if (y > 1400) {
          $(".skill").addClass("turn-right");
          showSkill();
        }
  });

  //burger navigation
  $("#burger-nav").click(function() {
    $(this).toggleClass("open");
    $(".overlay").toggleClass("drop");
    $("body").toggleClass("locked");
  });
  $(" .overlayMenu ul li").click(function() {
    $("#burger-nav").toggleClass("open");
    $(".overlay").toggleClass("drop");
    $("body").toggleClass("locked");
  });
  //project button click event handler
  var Projects = ["project-intro", "project-weather", "project-tictactoe", "project-simon", "project-calculator", "project-twitch", "project-random-quote", "project-pomodoro"];
  Projects.forEach(function(project) {
    if (project !== Projects[0]) {
      $('#' + project).hide(); //dont hide project-intro
    }
    //project names return id of that project's button
    //using slice method
    //ie. project-weather becomes weather
    $('#'+project.slice(8)).click(function(e) {
      $("#" + project).fadeIn(); //this project will show up
      //filter one which is not this project
      var filtered = Projects.filter(function(proj) {
        return proj !== project;
      });
      //and hide them
      filtered.forEach(function(item) {
          $('#' + item).hide();
      })
    });
  });

  //Skill set
  function showSkill() {
    $('.skill').each(function(){
           $(this).find('.skillbar-bar').animate({
             width:jQuery(this).attr('data-percent')
           },2500);
         });
  }

  var date = new Date();
  var year = date.getFullYear();
  $("#year").html(year);
});
