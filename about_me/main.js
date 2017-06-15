var arrSkills = ["<br/>", "js/ts", "ES2015", "jQuery", "Angular", "Angular2", "React", "Ember", "Backbone", "Node.js", "Express", "HTML5", "css", "Sass", "Bootstrap", "FlexBox", "SVG", "SQL", "NoSQL", "Git", "GitHub"];

var aboutMeContent = "Hi!" +"<br/>"+ 
"My name is Peter, and I\'m looking for a junior developer job. I was born and raised in Hungary, that\'s where I studied aswell, medicine, in the Semmelweis University. And that was the uni, where I got my nickname: the ork." +"<br/>"+ 
"I\'m a medical doctor, and I worked for three and a half years in Germany, as a traumatologist." +"<br/>"+ 
"I speak hungarian, german, english on business level and above." +"<br/><br/>"+
"I\'ve learned HTML, css and javascript in online schools (CodeBerry, CodeSchool), and fortunately have a lot of friends, (software engineers, doctors, web developers for example in the Codeberry online school, etc...) due to my 9 years in the largest student organization of Hungary on the university. They encouraged and teached me." +"<br/>"+ 
"Actually, coding was a hobby to me. The hobby became Passion. The passion became Love." +"<br/>"+ 
"As Troy Hartmann (aerial professional stuntman) once said: \"I don\'t have any particular name, for what it is... I know, that Passion is at the core of it. It\'s that inner drive. It\'s that... I can\'t wait!\"" +"<br/><br/>"+ 
"I want to be a software engineer / web developer." +"<br/><br/>"+ "Best regards: ork :-D";


jQuery(function($){
    $('.linkedInContact').mouseover (function(){
        var skillList = [];
        $.each(arrSkills, function(i, v) {
            skillList.push("<li>" + v + "</li>");
        });
        
        if($("#skills").hasClass("displayed") != true){
            $("#skills").empty();
            $("#skills").append(skillList).hide().fadeIn(1500);        
            $("#skills").addClass('displayed');
        }
    });


    $('.plusIcon').click(function(){
        $('.plusIcon').fadeOut();
        $('.game').append("<div class='quasiText'>later on here will come something funny... :-D</div>").hide().fadeIn(500);
        $('.aboutMeDiv').append("<p class='aboutMe'>" + aboutMeContent + "</p>").hide().fadeIn(500);
    });

});

