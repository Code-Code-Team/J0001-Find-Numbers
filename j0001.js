let inpNumber;
let counter = 0;

let number = 30 //Math.floor((Math.random() * 100) + 1);

document.getElementById("check").addEventListener("click", function(){

    check_number();

});

document.getElementById("inp_number").addEventListener("keyup",function(event){
    if (event.which === 13){
        
        check_number();
    };

});

    function check_number(){
        counter++
        document.getElementById("inp_counter").innerHTML= "Try :" +counter;
        inpNumber = document.getElementById("inp_number").value;
        
        if (inpNumber == number){
            alert("You are actually talented You guess after"+ counter+"times")
            // document.getElementById("answer").innerHTML= "You are actually talented You guess after"+ counter+"times";
            
            var onceMore = confirm("Dou you wanna play again");
            if (onceMore == true){
                counter = 0;
                number = Math.floor((Math.random()*100)+1);
                document.getElementById("answer").innerHTML = "";
                document.getElementById("inp_counter").innerHTML = "";
            }
            else {
                document.getElementById("answer").innerHTML= ""
                document.getElementById("inp_counter").innerHTML = ""
                alert("Have a good day")
            }
        }
        else if (inpNumber.indexOf('.') != -1 || inpNumber.indexOf(',') != -1){alert("This is not a natural number")}
        else if (inpNumber > 100 ){alert("higher than 100")}
        else if (inpNumber > number){document.getElementById("answer").innerHTML="I am thinking about lower number ";}
        else if (inpNumber < number){document.getElementById("answer").innerHTML="I am thinking about higher number ";}
    
    document.getElementById("inp_number").value= "";
    }
    



