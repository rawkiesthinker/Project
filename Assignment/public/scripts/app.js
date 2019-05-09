
//assign title
document.title = "SP Assigment";

//find app base 
var app = $('#app');


// home page content 
let homeParagrah1 = "Why You Should Vote in the 2019 Elections";
let homeParagrah2 = "Paragraph 2";
let homeParagrah3 = "Paragraph 3";
let homeParagrah4 = "Paragraph 4";
let home  = ' <div class="w-full flex h-screen items-center "><div class="w-full flex-wrap"><h2 class="w-full text-center">'+homeParagrah1+'</h2>'
          +'<p class="m-4">'+homeParagrah2+'</p>'
          +'<p class="m-4">'+homeParagrah3+'</p>'
          +'<p class="m-4">'+homeParagrah4+'</p></div></div>';
// end of home page view

//assign links and set the on click event handle

var homeLink = $( "#home" );
homeLink.on("click", () =>{
          app.empty();
       app.append(home);       
});
var registerLink = $( "#register" );
registerLink.on("click", () =>{
          app.empty();
          app.append('<div class="">Register Page</div>');  
});
var aboutLink = $( "#about" );
aboutLink.on("click", () =>{
          app.empty();
          app.append('<div class="">About Page</div>');  
});


