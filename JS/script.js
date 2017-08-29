$(document).ready(function() {

  //navigation bar
  $(window).scroll(function() {
    var y = $(this).scrollTop();
    var $portfolioOffset = $("#projects").offset().top;
    var $skillsOffset = $("#skills").offset().top;
    var $contactOffset = $("#contact").offset().top;
    if(y > 100) {
      $(".nav-bg").addClass("nav-show");
    } else {
        $('.nav-bg').removeClass('nav-show');
     	}
      // if (y > $portfolioOffset) {
      //  // do something
      // } else {
      //   // do something
      // }
      if (y > $skillsOffset) {
          $(".skill").addClass("turn-right");
          showSkill();
          showPercent();
        } else {
          $(".skill").removeClass("turn-right");
        }
      if (y > $contactOffset - 200) {
        $("#contact ul a").addClass("come-in");
      } else {
        $("#contact ul a").removeClass("come-in");
      }
  });

  //burger navigation
  // $("#burger-nav").click(function() {
  //   $(this).toggleClass("open");
  //   $(".overlay").toggleClass("drop");
  //   $("body").toggleClass("locked");
  // });
  // $(" .overlayMenu ul li").click(function() {
  //   $("#burger-nav").toggleClass("open");
  //   $(".overlay").toggleClass("drop");
  //   $("body").toggleClass("locked");
  // });
  //project button click event handler
  // var Projects = ["project-intro", "project-weather", "project-tictactoe", 
  // "project-simon", "project-calculator", "project-twitch", 
  // "project-random-quote", "project-pomodoro",
  // "project-markdown", "project-leaderboard"];
  // Projects.forEach(function(project) {
  //   if (project !== Projects[0]) {
  //     $('#' + project).hide(); //dont hide project-intro
  //   }
  //   //project names return id of that project's button
  //   //using slice method
  //   //ie. project-weather becomes weather
  //   $('#'+project.slice(8)).click(function(e) {
  //     $("#" + project).fadeIn().addClass("slide-in"); //this project will show up
  //     //filter ones which are not this project
  //     var filtered = Projects.filter(function(proj) {
  //       return proj !== project;
  //     });
  //     //and hide them
  //     filtered.forEach(function(item) {
  //         $('#' + item).hide().removeClass("slide-in");
  //     })
  //   });
  // });

  //Skill set
  function showSkill() {
    $('.skill').each(function(){
      $(this).find('.skillbar-bar').animate({
        width:$(this).attr('data-percent')
        },2500);    
  })
}

  function showPercent() {
    $('.skill-percentage').each(function() {
      $(this).html(Math.round(($(this).prev().width() / $('.skill').width())*100) + '%');
    })
  }

  setInterval(showPercent,10);


  //footer
  var date = new Date();
  var year = date.getFullYear();
  $("#year").html(year);
});
