//Initialize the variavle and set to to false as the button will be off for the start
var mode = false;

//Assign the values for the button to a variable and connect it to a function
let switchMode = document.getElementById("btn-dark-light-mode");
switchMode.addEventListener("click", afterChange);

function afterChange() {
    //After clicking the button the value of the mode will be the opposite (Change to true)
    mode = !mode
    //Use if else statement to determine which type of themes will be executed
    if (mode)
    {

    //The if part will execute following statements and change the theme to DARK
        document.body.style.backgroundColor = "#161616";
        document.getElementById("pg-header").style.backgroundColor = "black";
        document.getElementById("nav").style.backgroundColor = "gold";
        document.getElementById("pg-main").style.backgroundColor = "#161616";
        document.getElementById("f-news1").style.backgroundColor = "black";
        document.getElementById("f-news1").style.color = "gold";
        document.getElementById("f-news2").style.backgroundColor = "black";
        document.getElementById("f-news2").style.color = "gold";
        document.getElementById("hz-news1").style.backgroundColor = "black";
        document.getElementById("hz-news1").style.color = "gold";
        document.getElementById("hz-news2").style.backgroundColor = "black";
        document.getElementById("hz-news2").style.color = "gold";
        document.getElementById("edu1").style.backgroundColor = "black";
        document.getElementById("edu1").style.color = "gold";
        document.getElementById("hw-news1").style.backgroundColor = "black";
        document.getElementById("hw-news1").style.color = "gold";
        document.getElementById("ni-news1").style.backgroundColor = "black";
        document.getElementById("ni-news1").style.color = "gold";
        document.getElementById("featured-news").style.backgroundColor = "#333333";
        document.getElementById("hali-zone").style.backgroundColor = "#333333";
        document.getElementById("edu").style.backgroundColor = "#161616";
        document.getElementById("health").style.backgroundColor = "#161616";
        document.getElementById("nat-int").style.backgroundColor = "#161616";
        document.getElementById("featured-news").style.color = "white";
        document.getElementById("edu").style.color = "white";
        document.getElementById("health").style.color = "white";
        document.getElementById("nat-int").style.color = "white";
        document.getElementById("hali-zone").style.color = "white";
        document.getElementById("btn-dark-light-mode").style.backgroundColor = "#c5a800";
        document.getElementById("btn-dark-light-mode").style.color = "black";
        document.getElementById("pg-footer").style.backgroundColor = "gold";
        document.getElementById("pg-footer").style.color = "black";
    }
    else
    {
    
    //The else part will execute following statements and change the theme to LIGHT
        document.body.style.backgroundColor = "#FFFFC2";
        document.getElementById("pg-header").style.backgroundColor = "#C68E17";
        document.getElementById("pg-main").style.backgroundColor = "#FFFFC2";
        document.getElementById("nav").style.backgroundColor = "#FFDB58";
        document.getElementById("f-news1").style.backgroundColor = "#FFDB58";
        document.getElementById("f-news1").style.color = "black";
        document.getElementById("f-news2").style.backgroundColor = "#FFDB58";
        document.getElementById("f-news2").style.color = "black";
        document.getElementById("hz-news1").style.backgroundColor = "#FFDB58";
        document.getElementById("hz-news1").style.color = "black";
        document.getElementById("hz-news2").style.backgroundColor = "#FFDB58";
        document.getElementById("hz-news2").style.color = "black";
        document.getElementById("edu1").style.backgroundColor = "#FFDB58";
        document.getElementById("edu1").style.color = "black";
        document.getElementById("hw-news1").style.backgroundColor = "#FFDB58";
        document.getElementById("hw-news1").style.color = "black";
        document.getElementById("ni-news1").style.backgroundColor = "#FFDB58";
        document.getElementById("ni-news1").style.color = "black";
        document.getElementById("featured-news").style.backgroundColor = "#FFFFC2";
        document.getElementById("hali-zone").style.backgroundColor = "#FFFFC2";
        document.getElementById("edu").style.backgroundColor = "#FFFFC2";
        document.getElementById("health").style.backgroundColor = "#FFFFC2";
        document.getElementById("nat-int").style.backgroundColor = "#FFFFC2";
        document.getElementById("featured-news").style.color = "black";
        document.getElementById("edu").style.color = "black";
        document.getElementById("health").style.color = "black";
        document.getElementById("nat-int").style.color = "black";
        document.getElementById("hali-zone").style.color = "black";
        document.getElementById("btn-dark-light-mode").style.backgroundColor = "black";
        document.getElementById("btn-dark-light-mode").style.color = "gold";
        document.getElementById("pg-footer").style.backgroundColor = "#c5a800";
        document.getElementById("pg-footer").style.color = "white";
    }
}