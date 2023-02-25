
// for detecting and change width

change_width = (win_width) => {
    console.log(win_width);
    const logoimg = document.getElementById("logo_img").style; const logo = document.getElementById("logo").style;
        const headtxt = document.getElementById("headtxt").style;
        const link1 = document.getElementById("link1").style;
        const link2 = document.getElementById("link2").style;
        const link3 = document.getElementById("link3").style;
        const link4 = document.getElementById("link4").style;
        const link5 = document.getElementById("link5").style;
        const main_head=document.getElementById("head_bar").style;
        const contxt=document.getElementById("context").style;   
        const hea=document.getElementById('para').style;
        const tit=document.getElementById('go').style;

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
        main_head.height="5.5em"
        contxt.left='4em'
        contxt.padding='0.5em'
       hea.top='3.5em'
       tit.fontSize='25px'
       hea.fontSize='14px'
       contxt.height='22em'

       


       
        if(win_width<=425)
        {
            main_head.height="5.5em"
logoimg.width = '3.5em'
logo.width = '2em'
headtxt.fontSize = "1.2em"
link1.fontSize = "1em"
link2.fontSize = "1em"
link3.fontSize = "1em"
link4.fontSize = "1em"
link5.fontSize = "1em"
            link1.marginRight = "0.4em"
            link1.marginLeft = "0.4em"
            link2.marginRight = "0.4em"
            link3.marginRight = "0.4em"
            link4.marginRight = "0.4em"
            link5.marginRight = "0.4em"
            contxt.left='3em'
            contxt.padding='0.5em'
           hea.top='2.5em'
           tit.fontSize='12px'
           hea.fontSize='10px'
        }


    }
  
 
}