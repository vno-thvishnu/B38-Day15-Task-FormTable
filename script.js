var details=document.createElement("div");
details.className="fill";
document.body.append(details);


  

var fname=createlabel("label","for","text","First Name");
var b1=linebreak("br");
var inputfname=createinput("input","type","text","id","na");
var b2=linebreak("br");
var lname=createlabel("label","for","text","Last Name");
var b3=linebreak("br");
var inputlname=createinput("input","type","text","id","na");
var b4=linebreak("br");
var adrs=createlabel("label","for","text","Address");
var b5=linebreak("br");
var inputadrs=createinput("input","type","text","id","ad");
var b6=linebreak("br");
var pin=createlabel("label","for","number","Pin code");
var b7=linebreak("br");
var inputpin=createinput("input","type","number","id","ph");
var b8=linebreak("br");

var gender=createlabel("label","for","radio","Gender");
var b9=linebreak("br");
var inputml=createinput("input","type","radio","id","gen","name","gender","value","male");
var ml=createlabel("label","for","radio","Male");
var inputfl=createinput("input","type","radio","id","gen","name","gender","value","female");
var fl=createlabel("label","for","radio","Female");
var b10=linebreak("br");

var food=createlabel("label","for","checkbox","Select your favorite food");
var b11=linebreak("br");
var inputdish1=createinput("input","type","checkbox","id","fod","value","Biriyani/Fired rice");
var dish1=createlabel("label","for","checkbox","Biriyani / Fired rice");
var b12=linebreak("br");
var inputdish2=createinput("input","type","checkbox","id","fod","value","Pizza/Burger");
var dish2=createlabel("label","for","checkbox","Pizza / Burger");
var b13=linebreak("br");
var inputdish3=createinput("input","type","checkbox","id","fod","value","Sea foods");
var dish3=createlabel("label","for","checkbox","Sea foods");
var b14=linebreak("br");
var inputdish4=createinput("input","type","checkbox","id","fod","value","Ice cream/Deserts");
var dish4=createlabel("label","for","checkbox","Ice cream / Deserts");
var b15=linebreak("br");
var inputdish5=createinput("input","type","checkbox","id","fod","value","pure veg");
var dish5=createlabel("label","for","checkbox","Pure veg");
var b16=linebreak("br");

var ste=createlabel("label","for","text","State");
var b17=linebreak("br");
var inputste=createinput("input","type","text","id","st");
var b18=linebreak("br");
var ctry=createlabel("label","for","text","Country");
var b19=linebreak("br");
var inputctry=createinput("input","type","text","id","ct");
var b20=linebreak("br");


details.append(fname,b1,inputfname,b2,lname,b3,inputlname,b4,adrs,b5,inputadrs,b6,pin,b7,inputpin,b8,gender,b9,inputml,ml,inputfl,fl,b10,food,b11,inputdish1,dish1,b12,inputdish2,dish2,b13,inputdish3,dish3,b14,inputdish4,dish4,b15,inputdish5,dish5,b16,ste,b17,inputste,b18,ctry,b19,inputctry,b20);

var sub=document.createElement("button");
sub.setAttribute("type","submit");
sub.innerText="submit";
sub.setAttribute("class","subs");
sub.setAttribute("onclick","foo()");
details.append(sub);


function createlabel(lb,fr,txt,lbname){
    var ele=document.createElement(lb);
    ele.setAttribute(fr,txt);
    ele.innerHTML=lbname;
    return ele;
}

function createinput(ipt,typ,txt,idd,idname,nme,nmename,val,valname){
    var ini=document.createElement(ipt);
    ini.setAttribute(typ,txt);
    ini.setAttribute(idd,idname);
    ini.setAttribute(nme,nmename);
    ini.setAttribute(val,valname);
    return ini;
}

function linebreak(breaks){
    var b=document.createElement(breaks);
    return b;
}



var screen=document.createElement("div");
screen.className="scndiv";
screen.placeholder="check";
document.body.append(screen);

var tbl=document.createElement("table");
tbl.className="tables";
screen.append(tbl);

var tblrow=document.createElement("tr");
tbl.append(tblrow);

var heading=document.createElement("th");
heading.className="rheads";
heading.innerText="FIRST NAME";
tblrow.append(heading);

var heading=document.createElement("th");
heading.className="rheads";
heading.innerText="LAST NAME";
tblrow.append(heading);

var heading=document.createElement("th");
heading.className="rheads";
heading.innerText="ADDRESS";
tblrow.append(heading);

var heading=document.createElement("th");
heading.className="rheads";
heading.innerText="PIN CODE";
tblrow.append(heading);

var heading=document.createElement("th");
heading.className="rheads";
heading.innerText="GENDER";
tblrow.append(heading);

var heading=document.createElement("th");
heading.className="rheads";
heading.innerText="FAVORITE FOOD";
tblrow.append(heading);

var heading=document.createElement("th");
heading.className="rheads";
heading.innerText="STATE";
tblrow.append(heading);

var heading=document.createElement("th");
heading.className="rheads";
heading.innerText="COUNTRY";
tblrow.append(heading);

var tbldata=document.createElement("tr");
tbl.append(tbldata);

var data1=document.createElement("td");
data1.className="dts";
tbldata.append(data1);

var data2=document.createElement("td");
data2.className="dts";
tbldata.append(data2);

var data3=document.createElement("td");
data3.className="dts";
tbldata.append(data3);

var data4=document.createElement("td");
data4.className="dts";
tbldata.append(data4);

var data5=document.createElement("td");
data5.className="dts";
tbldata.append(data5);

var data6=document.createElement("td");
data6.className="dts";
tbldata.append(data6);

var data7=document.createElement("td");
data7.className="dts";
tbldata.append(data7);

var data8=document.createElement("td");
data8.className="dts";
tbldata.append(data8);



function foo(){
    data1.innerText=inputfname.value;
    data2.innerText=inputlname.value;
    data3.innerText=inputadrs.value;
    data4.innerText=inputpin.value;

    if(inputml.checked){
        data5.innerText= inputml.value;

    }
    
     else if(inputfl.checked){
        data5.innerText=inputfl.value;
    }
    else{
        data5.innerText="None";
    }


    let arr=[];
    
        if(inputdish1.checked){
        
        arr.push(inputdish1.value);
                
          }
        if(inputdish2.checked){
            
          arr.push(inputdish2.value);

          }
        if(inputdish3.checked){
        
          arr.push(inputdish3.value);

            
          }
        if(inputdish4.checked){  
          arr.push(inputdish4.value);

        }
        if(inputdish5.checked){
          arr.push(inputdish5.value);

            
        }
        
       data6.innerText=arr.join(",");
     
    if (arr.length>=2){

    }
    else{
      window.alert("Please enter atleast two favourite foods");
      location.reload();
      
    }
    data7.innerText=inputste.value;
    data8.innerText=inputctry.value;


    tbl.style.transform="2s";
    tbl.style.width="900px";
    tbl.style.height="120px";

    

 }