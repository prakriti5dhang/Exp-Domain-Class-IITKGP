/*Redeveloped
Lab: Software Engineering
Exp:Identifying Domain Classes from the Problem Statements
File Name: main.js
Author: Prakriti Dhang*/

/* Exercise number choice */
var ex= document.getElementById("selectex");
function subex(){
    if(ex.options[ex.selectedIndex].value==1){
        document.getElementById("exercise1").style.display="block";
        document.getElementById("ex1").style.display="block";
        document.getElementById("dispres").style.display="block";
        document.getElementById("show_result").style.display="block";
        document.getElementById("dispviewbtn").disabled=false;
        document.getElementById("viewsol").disabled=true;
       
    }
    
    if(ex.options[ex.selectedIndex].value==0){
        document.getElementById("exercise1").style.display="none";
        document.getElementById("ex1").style.display="none";
        document.getElementById("dispres").style.display="none";
        document.getElementById("show_result").style.display="none";
        document.getElementById("dispviewbtn").disabled=true;
        document.getElementById("viewsol").disabled=true;
        
    }
}
/* Submit button to directly view the solution*/

function viewsolutionb(){
    document.getElementById("viewsol").disabled=false;
    document.getElementById("dispviewbtn").disabled=true;
}

function solview(){


    
    document.getElementById("viewsol").disabled=true;
}
 
/********************************************* Table 1 ****************************************/
let newCheckBoxID, inpt1, newLi, newdiv;
/*let newCheckLabel = document.createElement('LABEL');
newCheckLabel.setAttribute('for', newCheckBoxID);
let labelTextNode = document.createTextNode(inpt1);
newCheckLabel.appendChild(labelTextNode);
newLi.appendChild(newCheckLabel);*/

function addbtnt1(){
inpt1=document.getElementById("inp1").value;

newLi = document.createElement("li");
newdiv = document.createElement("div");
newdiv.setAttribute("class", "form-check");
newCheckBoxID = 'checkbox_' + inpt1;
newLi.appendChild(newdiv);

let newCheckBox = document.createElement("INPUT");
  newCheckBox.setAttribute("type", "checkbox");
  newCheckBox.setAttribute("id", newCheckBoxID);
  newCheckBox.setAttribute("class", "form-check-input");
  newCheckBox.setAttribute("name", "categoryselect");
  newCheckBox.setAttribute("value", inpt1);
  newdiv.appendChild(newCheckBox);
  
  let newCheckLabel = document.createElement('LABEL');
  newCheckLabel.setAttribute('for', newCheckBoxID);
  newCheckLabel.setAttribute("class", "form-check-label");
  let labelTextNode = document.createTextNode(inpt1);
  newCheckLabel.appendChild(labelTextNode);
  newdiv.appendChild(newCheckLabel);

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowobj(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");
  newdiv.appendChild(newIconbtn);
  if (inpt1 == "") {
    alert("Please Enter Noun/Noun Phrase Before Click Add Button");
  } else {

  document.getElementById('potobjlist').appendChild(newLi);
  document.getElementById("inp1").value="";


let newOptionID;
newOptionID = 'newOption_' + inpt1;
  
let newOption = document.createElement('option');
let optionText = document.createTextNode(inpt1);
// set option text
newOption.appendChild(optionText);
// and option value

newOption.setAttribute("id", newOptionID);
newOption.setAttribute('value',inpt1);
let select = document.getElementById('selectobj'); 
select.appendChild(newOption);


}

}

  /* Function for Table 2 */
 function addbtnt2() {
    
    var category= document.getElementById("selectcat");
   var checkedvalue= document.querySelector('input[type=checkbox][name=categoryselect]:checked').value
    alert(checkedvalue);

    /*********************************************** Category-People*************************************************/ 
    if(((checkedvalue=="Mr Roy") || (checkedvalue=="boss")|| (checkedvalue=="son") || (checkedvalue=="Mr Bose") || (checkedvalue=="drives") || (checkedvalue=="passenger") || (checkedvalue=="persons") || (checkedvalue=="neighbour"))&& (category.options[category.selectedIndex].value==3) ){
        let pnewLi = document.createElement("li");
        let liTextNodep = document.createTextNode(checkedvalue);
        pnewLi.appendChild(liTextNodep);
        // this just makes sure a user cant enter in a blank value
        var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        pnewLi.appendChild(newIconbtn);
        document.getElementById('peoplet3').appendChild(pnewLi);
          
      
        
        
    }

   

    /*********************************************** Category-Place*************************************************/ 

else if(((checkedvalue=="Kolkata") || (checkedvalue=="home")|| (checkedvalue=="office") || (checkedvalue=="place") || (checkedvalue=="landmark") || (checkedvalue=="branch")|| (checkedvalue=="locality") )&& (category.options[category.selectedIndex].value==4) ){
        let plnewLi = document.createElement("li");
        let plliTextNode = document.createTextNode(checkedvalue);
        plnewLi.appendChild(plliTextNode);
        // this just makes sure a user cant enter in a blank value
        var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        plnewLi.appendChild(newIconbtn);
          document.getElementById('placet3').appendChild(plnewLi);
          
      
      
        
    }
    
/*********************************************** Category-Things*************************************************/ 
else if(((checkedvalue=="Cabs") || (checkedvalue=="AC")|| (checkedvalue=="booking receipt") || (checkedvalue=="cheque")  )&& (category.options[category.selectedIndex].value==6) ){
        let tnewLi = document.createElement("li");
        let tliTextNode = document.createTextNode(checkedvalue);
        tnewLi.appendChild(tliTextNode);
        // this just makes sure a user cant enter in a blank value
        var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        tnewLi.appendChild(newIconbtn);
          document.getElementById('thingst3').appendChild(tnewLi);
          
      
       
        
    }
   
/*********************************************** Category-Organization*************************************************/ 
else if(((checkedvalue=="agency") || (checkedvalue=="At your risk bank ")|| (checkedvalue=="bank") || (checkedvalue=="school")  )&& (category.options[category.selectedIndex].value==2) ){
    let onewLi = document.createElement("li");
    let oliTextNode = document.createTextNode(checkedvalue);
    onewLi.appendChild(oliTextNode);
    // this just makes sure a user cant enter in a blank value
    var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        onewLi.appendChild(newIconbtn);
      document.getElementById('orgt3').appendChild(onewLi);
      
  
    
    
}


/*********************************************** Category-Concept*************************************************/ 
else if(((checkedvalue=="service") || (checkedvalue=="payments")|| (checkedvalue=="finances") || (checkedvalue=="business") || (checkedvalue=="plan")  )&& (category.options[category.selectedIndex].value==0) ){
    let cnewLi = document.createElement("li");
    let cliTextNode = document.createTextNode(checkedvalue);
    cnewLi.appendChild(cliTextNode);
    // this just makes sure a user cant enter in a blank value
    var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        cnewLi.appendChild(newIconbtn);
      document.getElementById('conceptt3').appendChild(cnewLi);
      
  
    
    
}


/*********************************************** Category-Event*************************************************/ 
else if(((checkedvalue=="morning") || (checkedvalue=="everyday")|| (checkedvalue=="drop to school")  )&& (category.options[category.selectedIndex].value==1) ){
    let enewLi = document.createElement("li");
    let eliTextNode = document.createTextNode(checkedvalue);
    enewLi.appendChild(eliTextNode);
    // this just makes sure a user cant enter in a blank value
    var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        enewLi.appendChild(newIconbtn);
      document.getElementById('eventt3').appendChild(enewLi);
      
  
    
}
else{
    alert("Wrong Category! Please select correct category for " +checkedvalue);
}

/*********************************************** Category-Redundant*************************************************/ 


}



/********************************************************** Function for Table 4 *****************************************************************/

function addbtnt4(){
  var arrayt4=[];
    var objsel= document.getElementById("selectobj");
    var dobj =objsel.options[objsel.selectedIndex].value;
    alert(dobj);
    var checkedvaluet4= document.querySelectorAll('input[type=checkbox][name=attriselect]:checked');
     //alert(checkedvaluet4);
    // var checkboxt4;
     for (var i = 0; i < checkedvaluet4.length; i++) {
  arrayt4.push(checkedvaluet4[i].value)
}
    /********************* Adding to table 6**********************/
   var ntr= document.createElement("tr");
   ntr.setAttribute("id","boss");
   document.getElementById('tbodytbt6').appendChild(ntr);
   var td1=document.createElement("td");
   var td2=document.createElement("td");
   var td1val=document.createTextNode(dobj);
   //var td2val=document.createTextNode(checkedvaluet4);

   td1.appendChild(td1val);
   /*for (checkboxt4 of checkedvaluet4) {  
   td2.append(checkboxt4.value); 
 }*/
   
   ntr.appendChild(td1);
   ntr.appendChild(td2);

   var ult8=document.createElement("ul");
 var lit8= document.createElement("li");
 td2.appendChild(ult8);
 ult8.appendChild(lit8);
 lit8.append(arrayt4);
 
   document.getElementById('tbodytbt6').appendChild(ntr);

}




/********************************************************** Function for Table 5 *****************************************************************/




function addbtnt5(){
    let t4newCheckBoxID, inpt2, t4newLi, t4newdiv;
    let t7newCheckBoxID,  t7newLi, t7newdiv;
    /*let attrinewCheckLabel = document.createElement('LABEL');
    attrinewCheckLabel.setAttribute('for', newCheckBoxID);
    let attrilabelTextNode = document.createTextNode(inpt2);
    attrinewCheckLabel.appendChild(attrilabelTextNode);*/
   // newLi.appendChild(attrinewCheckLabel);

inpt2=document.getElementById("inp2").value;

t4newLi = document.createElement("li");
t4newdiv = document.createElement("div");
t4newdiv.setAttribute("class", "form-check");
t4newCheckBoxID = 'checkbox_' + inpt2;
t4newLi.appendChild(t4newdiv);
let t4newCheckBox = document.createElement("INPUT");
  t4newCheckBox.setAttribute("type", "checkbox");
  t4newCheckBox.setAttribute("id", t4newCheckBoxID);
  t4newCheckBox.setAttribute("class", "form-check-input");
  t4newCheckBox.setAttribute("name", "attriselect");
  t4newCheckBox.setAttribute("value", inpt2);
  t4newdiv.appendChild(t4newCheckBox);

       
  
  let t4newCheckLabel = document.createElement('LABEL');
  t4newCheckLabel.setAttribute('for', t4newCheckBoxID);
  t4newCheckLabel.setAttribute("class", "form-check-label");
  let t4labelTextNode = document.createTextNode(inpt2);
  t4newCheckLabel.appendChild(t4labelTextNode);
  t4newdiv.appendChild(t4newCheckLabel);

  var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        t4newdiv.appendChild(newIconbtn);

/**** Print  attributes in table 7*****/

  t7newLi = document.createElement("li");
t7newdiv = document.createElement("div");
t7newdiv.setAttribute("class", "form-check");
t7newCheckBoxID = 'checkbox_' + inpt2;
t7newLi.appendChild(t7newdiv);
let t7newCheckBox = document.createElement("INPUT");
  t7newCheckBox.setAttribute("type", "checkbox");
  t7newCheckBox.setAttribute("id", t7newCheckBoxID);
  t7newCheckBox.setAttribute("class", "form-check-input");
  t7newCheckBox.setAttribute("name", "attricheck");
  t7newCheckBox.setAttribute("value", inpt2);
  t7newdiv.appendChild(t7newCheckBox);
  
  let t7newCheckLabel = document.createElement('LABEL');
  t7newCheckLabel.setAttribute('for', t7newCheckBoxID);
  t7newCheckLabel.setAttribute("class", "form-check-label");
  let t7labelTextNode = document.createTextNode(inpt2);
  t7newCheckLabel.appendChild(t7labelTextNode);
  t7newdiv.appendChild(t7newCheckLabel);

  var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        t7newdiv.appendChild(newIconbtn);

  if (inpt2 == "") {
    alert("Please Enter Noun/Noun Phrase Before Click Add Button");
  } else {

    document.getElementById('addattrit4').appendChild(t4newLi);
    document.getElementById('t7attri').appendChild(t7newLi);
    
    document.getElementById("inp2").value="";
  }
}

/********************************************************** Function for Table 7*****************************************************************/

var inpt3;
function addbtnt7(){
     inpt3 =document.getElementById("inp3").value;
    console.log(inpt3);
     //var checkedvaluet7= document.querySelector('input[type=checkbox][name=attricheck]:checked').value;
     /*var checkedvaluet7 = document.getElementsByName("attricheck");
     for (var checkbox of checkedvaluet7) {
      if (checkbox.checked)
        //document.body.append(checkbox.value + ' ');
       alert(checkbox.value + '');
    }*/
//var checkbox;
var array = [];
var checkedvaluet7 = document.querySelectorAll('input[type="checkbox"]:checked');  
for (var i = 0; i < checkedvaluet7.length; i++) {
  array.push(checkedvaluet7[i].value)
}
//alert(array);
  
    // alert(checkt7value);
     
/*************************************************Adding to table  8 *******************************************************/

//if((inpt3=="person") || (inpt3=="Person")){ // == "Name") &&(checkbox.value == "Address")&&(checkbox.value == "Height")&&(checkbox.value == "Weight"))){
  var t8tr = document.createElement('tr');
  t8tr.setAttribute("id","t8class1");
  document.getElementById('tbodytbl8').appendChild(t8tr);
  var td1t8 = document.createElement('td');
  td1t8.setAttribute("id","t8class");
  var td2t8=document.createElement("td");
  td2t8.setAttribute("id","t8att");
  //td2.setAttribute("rowspan","4");
  var tdval1=document.createTextNode(inpt3);

  t8tr.appendChild(td1t8);
  t8tr.appendChild(td2t8);
  
td1t8.appendChild(tdval1); 

//td2t8.append(array);
/*for (checkbox of checkedvaluet7) {  
  td2t8.append(checkbox.value); 
 }*/
 var ult8=document.createElement("ul");
 var lit8= document.createElement("li");
 td2t8.appendChild(ult8);
 ult8.appendChild(lit8);
 lit8.append(array);
 

 
  

  /*var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowobj(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");
  lit8.appendChild(newIconbtn);*/
  document.getElementById('tbodytbl8').appendChild(t8tr);
  document.getElementById("inp3").value=" ";



/******************************************************* Enter Top Level Class in table 10 ****************************************************8*/

var t10tr = document.createElement('tr');
t10tr.setAttribute("id","t10class1");
document.getElementById('tbody10class').appendChild(t10tr);
var td1t10 = document.createElement('td');
td1t10.setAttribute("id","t10class");

//td2.setAttribute("rowspan","4");
var tdval10=document.createTextNode(inpt3);

t10tr.appendChild(td1t10);
td1t10.appendChild(tdval10); 
document.getElementById('tbody10class').appendChild(t10tr);
 }
 

 /*else if((inpt3=="Employee")|| (inpt3=="employee")){
  var tr2 = document.createElement('tr');
  tr2.setAttribute("id","t8class2");
  document.getElementById('tbodytbl8').appendChild(tr2);
  var td21 = document.createElement('td');
  var td22=document.createElement("td");
  var tdval21=document.createTextNode(inpt3);*/

  
 //td21.appendChild(tdval21);
  
 /*for (checkbox of checkedvaluet7) {  
   td22.append(checkbox.value); 
  }*/
  
 /* tr2.appendChild(td21);
  tr2.appendChild(td22);
  var ult8=document.createElement("ul");
 var lit8= document.createElement("li");
 td22.appendChild(ult8);
 ult8.appendChild(lit8);
 lit8.append(array);
 



  document.getElementById('t8class2').appendChild(tr2);
 }
 else if ((inpt3=="Customer") || (inpt3=="customer")){
  var tr3 = document.createElement('tr');
  tr3.setAttribute("id","t8class3");
  document.getElementById('tbodytbl8').appendChild(tr3);
  var td31 = document.createElement('td');
  var td32=document.createElement("td");
  var tdval31=document.createTextNode(inpt3);*/
 // var tdval12=document.createTextNode(checkedvaluet7);
 // tbody.appendChild(tr);
  
 /*td31.appendChild(tdval31);*/
  
 /*for (checkbox of checkedvaluet7) {  
   td32.append(checkbox.value); 
  }*/
  
 /* tr3.appendChild(td31);
  tr3.appendChild(td32);
  
var ult8=document.createElement("ul");
 var lit8= document.createElement("li");
 td32.appendChild(ult8);
 ult8.appendChild(lit8);
 lit8.append(array);
 
  document.getElementById('t8class3').appendChild(tr3);
 }


 else if ((inpt3=="Place") (inpt3=="place")){
  var tr4 = document.createElement('tr');
  tr4.setAttribute("id","t8class4");
  document.getElementById('tbodytbl8').appendChild(tr4);
  var td41 = document.createElement('td');
  var td42=document.createElement("td");
  var tdval41=document.createTextNode(inpt3);
 // var tdval12=document.createTextNode(checkedvaluet7);
 // tbody.appendChild(tr);
  
 td41.appendChild(tdval41);*/
  
 /*for (checkbox of checkedvaluet7) {  
   td42.append(checkbox.value); 
  }*/
  
  /*tr4.appendChild(td41);
  tr4.appendChild(td42);
  
var ult8=document.createElement("ul");
 var lit8= document.createElement("li");
 td42.appendChild(ult8);
 ult8.appendChild(lit8);
 lit8.append(array);
 
  document.getElementById('t8class4').appendChild(tr4);
 }

 else if ((inpt3=="Cab")(inpt3=="cab")){
  var tr5 = document.createElement('tr');
  tr5.setAttribute("id","t8class5");
  document.getElementById('tbodytbl8').appendChild(tr5);
  var td51 = document.createElement('td');
  var td52=document.createElement("td");
  var tdval51=document.createTextNode(inpt3);
 // var tdval12=document.createTextNode(checkedvaluet7);
 // tbody.appendChild(tr);
  
 td51.appendChild(tdval51);*/
  
 /*for (checkbox of checkedvaluet7) {  
   td52.append(checkbox.value); 
  }*/
  
 /* tr5.appendChild(td51);
  tr5.appendChild(td52);
  var ult8=document.createElement("ul");
 var lit8= document.createElement("li");
 td52.appendChild(ult8);
 ult8.appendChild(lit8);
 lit8.appendChild(array);
 

  document.getElementById('t8class5').appendChild(tr5);
 }


 else if ((inpt3=="Booking")|| (inpt3=="booking")){
  var tr6 = document.createElement('tr');
  tr6.setAttribute("id","t8class6");
  document.getElementById('tbodytbl8').appendChild(tr6);
  var td61 = document.createElement('td');
  var td62=document.createElement("td");
  var tdval61=document.createTextNode(inpt3);*/
 // var tdval12=document.createTextNode(checkedvaluet7);
 // tbody.appendChild(tr);
  
 //td61.appendChild(tdval61);
  
 /*for (checkbox of checkedvaluet7) {  
   td62.append(checkbox.value); 
  }*/
  
  /*tr6.appendChild(td61);
  tr6.appendChild(td62);
  
var ult8=document.createElement("ul");
 var lit8= document.createElement("li");
 td62.appendChild(ult8);
 ult8.appendChild(lit8);
 lit8.appendChild(array);
 
  document.getElementById('t8class6').appendChild(tr3);
 }

 else if ((inpt3=="Bank") || (inpt3=="bank")){
  var tr7 = document.createElement('tr');
  tr7.setAttribute("id","t8class7");
  document.getElementById('tbodytbl8').appendChild(tr7);
  var td71 = document.createElement('td');
  var td72=document.createElement("td");
  var tdval71=document.createTextNode(inpt3);
 
 td71.appendChild(tdval71);
  
 
  
  tr7.appendChild(td71);
  tr7.appendChild(td72);
  
var ult8=document.createElement("ul");
 var lit8= document.createElement("li");
 td72.appendChild(ult8);
 ult8.appendChild(lit8);
 lit8.append(array);
 
  document.getElementById('t8class7').appendChild(tr7);
  document.getElementById('t10class').appendChild(tr7);
 }

     
}*/



/*function removerowobj(btndel) {
  if (typeof(btndel) == "object") {
      $(btndel).closest("li").remove();
  } else {
      return false;
  }
}*/



/************************************************ Function for Table 9 **************************************************************/
 function addbtnt9(){

var inpt4=document.getElementById("inp4").value;

var t9newLi = document.createElement("li");
var t9newdiv = document.createElement("div");
t9newdiv.setAttribute("class", "form-check");
var t9newCheckBoxID = 'checkbox_' + inpt4;
t9newLi.appendChild(t9newdiv);
let t9newCheckBox = document.createElement("INPUT");
  t9newCheckBox.setAttribute("type", "checkbox");
  t9newCheckBox.setAttribute("id", t9newCheckBoxID);
  t9newCheckBox.setAttribute("class", "form-check-input");
  t9newCheckBox.setAttribute("name", "attriselect");
  t9newCheckBox.setAttribute("value", inpt4);
  t9newdiv.appendChild(t9newCheckBox);

       
  
  let t9newCheckLabel = document.createElement('LABEL');
  t9newCheckLabel.setAttribute('for', t9newCheckBoxID);
  t9newCheckLabel.setAttribute("class", "form-check-label");
  let t9labelTextNode = document.createTextNode(inpt4);
  t9newCheckLabel.appendChild(t9labelTextNode);
  t9newdiv.appendChild(t9newCheckLabel);

  var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        t9newdiv.appendChild(newIconbtn);

        if (inpt4 == "") {
          alert("Please Enter Relevant Class Before Clicking Add Button");
        } else {
          var tr8 = document.createElement('tr');
          tr8.setAttribute("id","t8class8");
          document.getElementById('tbodytbl8').appendChild(tr8);
          var td81 = document.createElement('td');
          td81.appendChild(t9newLi);
          tr8.appendChild(td81);
          //document.getElementById('addattrit4').appendChild(t9newLi);
          document.getElementById('t8class8').appendChild(tr8);
          
          document.getElementById("inp4").value="";
        }

 }

/********************************************************** Function for Top Level Classes*****************************************************************/

function btntlc(){
    document.getElementById("tbody10class").style.display="block";
    //document.getElementById("t10obj").innerHTML=inpt1;
}



 /*var tabrowindex=0;
    arr[0] =inpt1;
    adtbl2= document.getElementById('tbl2');
    tabrowindex + 1;
   

   var row = adtbl2.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q <1; ++q) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }*/

// //document.getElementById("tbl2").rows[1].cells[0].innerHTML = inpt1;