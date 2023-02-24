
// for detecting and change width

change_width = (win_width) => {
    console.log(win_width);
    var logoimg = document.getElementById("logo_img").style; var logo = document.getElementById("logo").style;
        var headtxt = document.getElementById("headtxt").style;
        var link1 = document.getElementById("link1").style;
        var link2 = document.getElementById("link2").style;
        var link3 = document.getElementById("link3").style;
        var link4 = document.getElementById("link4").style;
        var link5 = document.getElementById("link5").style;
    // for decreasing margin & text size
    if (win_width <= 652) {
        
       
        logoimg.width = '3.5em'
        logo.width = '2em'
        headtxt.fontSize = "1.5em"
        link1.marginRight = "0.9em"
        link1.marginLeft = "0.9em"
        link2.marginRight = "0.9em"
        link3.marginRight = "0.9em"
        link4.marginRight = "0.9em"
        link5.marginRight = "0.9em"
        link1.fontSize = "1em"
        link2.fontSize = "1em"
        link3.fontSize = "1em"
        link4.fontSize = "1em"
        link5.fontSize = "1em"

       
        if(win_width < 320)
        {
            link1.marginRight = "0.4em"
            link1.marginLeft = "0.4em"
            link2.marginRight = "0.4em"
            link3.marginRight = "0.4em"
            link4.marginRight = "0.4em"
            link5.marginRight = "0.4em"
        }


    }
  
 
}