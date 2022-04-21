function nameValidation(){
    var regexp=/^[a-z]+$/;
    var x=document.getElementById("1").value;
    if(regexp.test(x)==false)
            {
                alert("enter a valid name"); 
                
            }
            else{
                return true;
            }
}
function emailValidation(){
    var regexp=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var x=document.getElementById("2").value;
    if(regexp.test(x)==false)
            {
                alert("enter a valid email address");
                
            }
    else{
        return true;
    }
}
function courseValidation(){
    var cousrse1=document.getElementById("3").checked;
    var cousrse2=document.getElementById("4").checked;
    if((cousrse1==false)&&(cousrse2==false))
    {
        alert("please select course");
    }
    else{
        return true;
    }

}
function hearValidation(){
    
    if(document.test.dropbox.selectedIndex == 0)
   {
       
       alert("Please select a value" );
   }
   else
   {
       return true;
    }
}
function usernameValidation(){
    var regexp=/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    var x=document.getElementById("5").value;
    if(regexp.test(x)==false)
            {
                alert("enter a valid username");            
            }
    else{ 
            return true;
        }

}

function passwordValidation(){
    var regexp=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    var x=document.getElementById("6").value;
    if(regexp.test(x)==false)
            {
                alert("enter a valid password");            
            }
    else{ 
            return true;
        }

}

function subValidation(){
    var sub1=document.getElementById("7").checked;
    var sub2=document.getElementById("8").checked;
    if((sub1==false)&&(sub2==false))
    {
        alert("please select subscriptions ");
    }
    else{
        return true;
    }
}

function valid(){
    var form = document.getElementById("form");
    nameValidation();
    emailValidation();
    courseValidation();
    hearValidation();
    usernameValidation();
    passwordValidation();
    subValidation();
    confirm("Whether to submit the data");
    form.submit();

}


function reset(){
    document.getElementById("1").reset();
    document.getElementById("2").reset();
    document.getElementById("3").reset();
    document.getElementById("4").reset();
    document.getElementById("5").reset();
    document.getElementById("6").reset();
    document.getElementById("7").reset();
    document.getElementById("8").reset();
    document.getElementById("text").reset();
    
}