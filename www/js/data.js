 
 var titre
var description
var prix
var url='http://localhost:8082/PFA/ApiSalonCoiffure';
//var url='192.168.23.1:8082/PFA/ApiSalonCoiffure';
//var url='192.168.1.10:8082/PFA/ApiSalonCoiffure';

//var data=new Array(0);
var data=
//getLocation();
//connectToServer();


function traitment(id,titre,description,prix,image){
    this.id=id;
    this.title=title;
    this.description=description;
    this.prix=prix;
    this.image=image;
   
}
var makeup =new traitement(1,"Maquillage professionnel", "some description",100,img1);
data.push(makeup);
var soinvisage=new traitement(2,"SoinVisage", "some description",100,img2);
data.push(soinvisage);
var epilation=new traitement(3,"epilation", "some description",100,img3);
data.push(epilation);
var manicurepedicure=new traitement(3,"Manicure & Pedicure", "some description",100,img3);
data.push(manicurepedicure);
var spa=new traitement(3,"SPA", "some description",100,img3);

function rate(id,user,avisSalon,avisservice,comment){
    this.id=id;
    this.user=user;
    this.avisSalon=avisSalon
    this.avisService=avisService;
    this.comment=comment;

function jsonParsing(json){
        obj = JSON.parse(json);
        var i;
        data=new Array(obj.length);
         for(i = 0; i < obj.length; i++) {
            var id1=obj[i].id;
            var nom1=obj[i].nom;
            var lat1=obj[i].lat;
            var lng1=obj[i].lng;
            var numTel1=obj[i].numTel;
            var website1=obj[i].website;
            var rate1=obj[i].rate;
            var adresse1=obj[i].adresse;
           /* var img=obj[i].imageTab;
            	obj2=JSON.parse(img);
            	var imgTab=new Array(0);
            	for(var j=0;j<img.length;j++){
            		var tag="img"+j;
            	    var img=obj2[j].tag;
            	    imgTab[j]=img;
            	}*/
var sc =new SalonCoiffure(id1,nom1,lat1,lng1,numTel1,website1,rate1,adresse1,null);
            data[i]=sc;
        } 
     if(data.length>0) console.log('donnees recu');
    else alert('erreur');
	afficherResultat();
	
}  

function showVal(newVal){
  document.getElementById("valBox").innerHTML='distance :'+newVal+' km';
  distance=newVal;
  generateUrl();
}

function connectToServer(){
generateUrl();
var xhr= new XMLHttpRequest();//alert("connecetion.."+url);
xhr.timeout = 5000; 
xhr.ontimeout = function () { alert("Timed out!!!"); }
xhr.open('GET',url, true);
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
		if(xhr.responseText!=''){
			//alert(xhr.responseText); 
            jsonParsing(xhr.responseText);
		} 
		else alert('erreur lors de connec');
		
    }
}
}

function generateUrl(){
	lat=encodeURIComponent(12.56);
    lng=encodeURIComponent(53);
    distance=encodeURIComponent(distance);
    url+= '?lat='+lat+'&lng='+lng+'&distance='+distance;
}

function afficherResultat(){//img/salon'+data[i].id
	var list=document.getElementById('list');
	var ch='',i;
				for(i=0;i<data.length;i++){
					//ch+=data[i].nom+'     '+ 	data[i].adresse+'    '+data[i].website	+'<br/><hr/><br/>';
				ch+='<div class="row">'
      +'<div class="col-md-4">'
        +'<div class="thumbnail" style="opacity:0.8;"><img src="'+'data[i].imgTab[0]'+'" alt="Thumbnail Image 1">'
         +' <div class="caption">'
          +'  <h3>'+data[i].nom+'</h3>'
            +'<p>rate :'+ data[i].rate+'/10</p>'
            +'<p><a href="#" class="btn btn-primary" role="button">Details</a></p>'
          +'</div>'
      +'  </div>'
      +'</div>'
    +'</div>';
				}
	if(ch=='') ch='pas de donnees recus ';
	list.innerHTML=ch;
}

function getLocation() {

	if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success,fail);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function success(position) {
	lat=position.coords.latitude;
	lng=position.coords.longitude;
	alert(lat+','+lng);
}
function fail(err){
	if(err.code == 1) {
               alert("Error: Access is denied!");
            }
            
            else if( err.code == 2) {
               alert("Error: Position is unavailable!");
            }
}
}

 
