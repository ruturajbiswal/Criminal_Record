
// for detecting and change width

change_width = (win_width) => {
    console.log(win_width);
    // for decreasing margin & text size
    if (win_width < 652) {
        var logoimg = document.getElementById("logo_img").style; var logo = document.getElementById("logo").style;
        var headtxt = document.getElementById("headtxt").style;
        var link1 = document.getElementById("link1").style;
        var link2 = document.getElementById("link2").style;
        var link3 = document.getElementById("link3").style;
        var link4 = document.getElementById("link4").style;
        var link5 = document.getElementById("link5").style;
       
        logoimg.width = '3.5em'
        logo.width = '2em'
        headtxt.fontSize = "1.5em"
        link1.marginRight = "0.2em"
        link1.marginLeft = "0.2em"
        link2.marginRight = "0.2em"
        link3.marginRight = "0.2em"
        link4.marginRight = "0.2em"
        link5.marginRight = "0.2em"
        link1.fontSize = "1em"
        link2.fontSize = "1em"
        link3.fontSize = "1em"
        link4.fontSize = "1em"
        link5.fontSize = "1em"

        shape = document.getElementsByTagName("svg")[0];
        shape.setAttribute("viewBox", "0 0 500 600");
        particle=document.getElementById('particles-js').style.height="14.5em"


    }
}