
//assign title
document.title = "SP Assigment";

//find app base 
var app = $('#app');

//userInfo
let name ,surname,password = "";
let id = 0;


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





// register view content

let registerView = ('<h2 class="w-full text-center">Please Register Here</h2>'
+'<form id="registerForm">'+'<div class="m-2 p-1">'
  +'  <label class="mx-2" for="name">Name</label>'
  +'  <input id="name" type="text" placeholder=" name" required>'
  +' </div>'
  +'  <div class="m-2 p-1">'
  +'   <label class="mx-2" for="surname">Surname</label>'
  +'   <input id="surname" type="text" placeholder="surname" required>'
  +' </div>'

  +' <div class="m-2 p-1">'
  +'   <label class="mx-2" for="id">ID</label>'
  +'   <input id="id" type="number" placeholder="ID" required>'
  +' </div>'

  +' <div class="m-2 p-1">'
  +'   <label class="mx-2" for="password">Password</label>'
  +'   <input id="password" type="password" placeholder="password" required>'
  +' </div>'

  +' <div class="m-2 p-1">'
  +'  <label class="mx-2" for="confirmPassword">Confirm Password</label>'
  +'   <input id="confirmPassword" type="password" placeholder="confirm password" required>'
  +'  </div>'
  +'  <div id="status" class="p-4 text-red"></div>'

  +' <div class="p-4">'
  +'   <input type="reset" value="Clear">'
  +'   <input type="submit" value="Submit" >'
  +' </div>'
  +' </form>');


// end of form






// about page view 

let aboutView  = '<div class="flex h-screen w-full items-center">'
+'<div class="flex-wrap w-full">'
+'  <h2 class="w-full text-center my-8">About Registerd Voter</h2>'

+'  <div class="items-center h-">'
+'      Welcome Voter. Our records show that your age is unknown. We hope you will seriously consider voting in the upcoming elections. Your vote is your voice.'
+'    </div>'
+'</div>'

+'</div>';

let registeredAboutPageText =(name,surname,id) => 'Welcome <b>'+ name +'</b> and'+ surname + ' entered in the Register page. Our records show that you are '+ calcAge(id) +' .We hope you will seriously consider voting in the upcoming elections. Your vote is your voice.';

let aboutRegisteredView =  (name,surname,id) => '<div class="flex h-screen w-full items-center">'+'<div class="flex-wrap w-full">'+'<h2 class="w-full text-center my-8">About Registerd Voter</h2>'+'  <div class="items-center h-">'+registeredAboutPageText(name,surname,id) +'  </div>'+'</div>'+'</div>'
//assign links and set the on click event handle


var homeLink = $( "#home" );
homeLink.on("click", () =>{
          app.empty();
       app.append(home);       
});
var registerLink = $( "#register" );
registerLink.on("click", () =>{
          app.empty();
          app.append(registerView);  
          registerFunctionality();

    
});
var aboutLink = $( "#about" );
aboutLink.on("click", () =>{
          app.empty();
          if(id == 0 ){
          app.append(aboutView)
          }
          app.append(aboutRegisteredView(name,surname,id));  
});




function calcAge(id){
         let stringID = id.toString();
         let stringYear = stringID[0] + stringID[1];
         let year = 100 - (parseInt(stringYear) -19) ;
         return year.toString();
}


function registerFunctionality(){
                // register form functionality
$( "#registerForm" ).submit(function( event ) {
        

          event.preventDefault();
          let password = $('#password').val();
          let confirmPassword = $('#confirmPassword').val();

          if(password.length >= 7){
                    if(password === confirmPassword){
                    setStatus('Well Done your Registered');
                    name = $('#name').val();
                    surname = $('#surname').val();
                    id = $('#id').val();
          
                    app.empty();
                    app.append(aboutRegisteredView(name,surname,id)); 
                    }else{
                     setStatus('Passwords do not match');
                     $('#password').val('');
                     $('#confirmPassword').val('');
                    
                    }  
          }else{
                    setStatus('Password length incorrect');
                    $('#password').val('');
                    $('#confirmPassword').val('');
          }
 
          
        });


        function setStatus(msg){
          $('#status').empty();
          $('#status').append(msg);
      
        }

// end of register form functionality
}