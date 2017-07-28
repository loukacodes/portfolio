$(document).ready(function() {

  //navigation bar
  $(window).scroll(function() {
    var y = $(this).scrollTop();
    var $portfolioOffset = $("#portfolio").offset().top;
    var $skillsOffset = $("#skills").offset().top;
    var $contactOffset = $("#contact").offset().top;
    if(y > 100) {
      $(".nav-bg").addClass("nav-show");
    } else {
        $('.nav-bg').removeClass('nav-show');
     	}
      if (y > $portfolioOffset) {
        $("#portfolio section figure").addClass("slide-in");
      } else {
        $("#portfolio section figure").removeClass("slide-in");
      }
      if (y > $skillsOffset) {
          $(".skill").addClass("turn-right");
          showSkill();
        } else {
          $(".skill").removeClass("turn-right");
        }
      if (y > $contactOffset) {
        $("#contact ul a").addClass("come-in");
      } else {
        $("#contact ul a").removeClass("come-in");
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
      //filter ones which are not this project
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
