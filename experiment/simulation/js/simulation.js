function playsimulation(){
    document.getElementById("playbtn").disabled=true;
    document.getElementById("p1").style.display="block";

    setTimeout(list1, 1500);
    function list1(){
        document.getElementById("l1").style.display="block";
        setTimeout(list2, 1500);
       
    }
    
    function list2(){
        document.getElementById("l2").style.display="block";
        setTimeout(list3, 1500);
       
    }
    
    function list3(){
        document.getElementById("l3").style.display="block";
        setTimeout(list4, 1500);
       
    }
    
    function list4(){
        document.getElementById("l4").style.display="block";
        document.getElementById("nextbtn1").disabled=false;
      
    }
    
}

function gonextp2(){
    document.getElementById("step1").style.display="block";
    document.getElementById("head1").innerHTML="Identify the nouns and noum phrases";
    document.getElementById("p2").style.display="block";
    document.getElementById("p1").style.display="none";
    document.getElementById("backbtn2").disabled=true;
    document.getElementById("nextbtn2").disabled=true;
    const highlightxt = document.getElementById('m1');
    highlightxt.style.webkitAnimationPlayState = "running";
    setTimeout(mark2, 3000);

    function mark2(){

        const highlightxt = document.getElementById('m2');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark3, 3000);
    }
    function mark3(){

        const highlightxt = document.getElementById('m3');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark4, 3000);
    }
    function mark4(){

        const highlightxt = document.getElementById('m4');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark5, 3000);
    }
    function mark5(){

        const highlightxt = document.getElementById('m5');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark6, 3000);
    }
    function mark6(){

        const highlightxt = document.getElementById('m6');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark7, 3000);
    }

    function mark7(){

        const highlightxt = document.getElementById('m7');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark8, 3000);
    }

    function mark8(){

        const highlightxt = document.getElementById('m8');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark9, 3000);
    }

    function mark9(){

        const highlightxt = document.getElementById('m9');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark10, 3000);
    }

    function mark10(){

        const highlightxt = document.getElementById('m10');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark11, 3000);
    }

    function mark11(){

        const highlightxt = document.getElementById('m11');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark12, 3000);
    }

    function mark12(){

        const highlightxt = document.getElementById('m12');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark13, 3000);
    }

    function mark13(){

        const highlightxt = document.getElementById('m13');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark14, 3000);
    }

    function mark14(){

        const highlightxt = document.getElementById('m14');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark15, 3000);
    }

    function mark15(){

        const highlightxt = document.getElementById('m15');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(nextp3, 3000);
        
    }

    function nextp3(){
        document.getElementById("backbtn2").disabled=false;
        document.getElementById("nextbtn2").disabled=false;
    }
    
}



function gonextp3(){
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="block";
    document.getElementById("p31").style.display="block";
    document.getElementById("head1").innerHTML="Categorize the above identified objects";
    setTimeout(shwpeople, 3000);

    function shwpeople(){
        document.getElementById("p31").style.display="none";
        document.getElementById("p32").style.display="block";
        document.getElementById("people").style.display="block";
        setTimeout(shwthngs, 3000);
    }

    function shwthngs(){
        document.getElementById("things").style.display="block";
        setTimeout(shworg, 3000);
    }
    function shworg(){
        document.getElementById("org").style.display="block";
        setTimeout(shwevnt, 3000);
    }

    function shwevnt(){
        document.getElementById("evnt").style.display="block";
        setTimeout(shwconcpt, 3000);
    }
    function shwconcpt(){
        document.getElementById("concpt").style.display="block";
        setTimeout(shwobj, 2000);
        
    }

    function shwobj(){
        document.getElementById("identdobj").style.display="block";
    }


}

$('.show').click(function() {
    $('ol').toggleClass('show');
  })


  function gonextp5(){
    
  }