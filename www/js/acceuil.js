 
var lat=-1;
var lng=-1;
var distance=6;
//var url='http://192.168.23.1:8082/PFA/ApiSalonCoiffure';
//var url='http://env-5112404.jelastic.lunacloud.com/ApiSalonCoiffure';
var url='http://pfa-azerty199555.rhcloud.com/pfa%20v7/ApiSalonCoiffure';
//var url='http://192.168.23.1/pfa%20v7/ApiSalonCoiffure';


//var url2='http://192.168.23.1:8082/PFA/ApiImages?idS=';
//var url2='http://env-5112404.jelastic.lunacloud.com/ApiImages?idS=';
var url2='http://pfa-azerty199555.rhcloud.com/pfa%20v7/ApiImages?idS=';
//var url2='http://192.168.23.1/pfa%20v7/ApiImages?idS=';


var data=new Array(0);

var success=function(d){
	if (JSON.stringify(d)==='OK'){
		alert('logout successful ');
	}
	window.location.assign('index.html');
}
var fail=function(e){
	//alert(e);
	window.location.assign('index.html');

}

function fblogout  (){
	window.localStorage.removeItem("loggedIn");
	window.localStorage.removeItem("userName");
	facebookConnectPlugin.logout( success, fail);
}

function onSuccessg(position) {
	lat=position.coords.latitude;
	lng=position.coords.longitude;
	alert(lat+','+lng);
	connectToServer();

}
function onError(error) {
	 alert('please activate your GPS');
		connectToServer();
	}

var getLocation=function(){
	var options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };
	navigator.geolocation.getCurrentPosition(onSuccessg, onError, options);
};


document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
	console.log(document.domain);
	console.log("ok");
	/*if(window.localStorage.getItem('firstTime')==1){
		getLocation();
		window.localStorage.setItem('firstTime',0);
	}
	else */
	document.getElementById('logB').innerHTML='logout';
	/*alert(window.localStorage.getItem('userName')+'  '+window.localStorage.getItem('loggedIn')
			+' id '+window.localStorage.getItem('userID'));*/
	connectToServer();
    document.addEventListener("backbutton", onBackKeyDown, false);
    function onBackKeyDown() {
        navigator.app.exitApp();
        }
} 



function SalonCoiffure(id,nom,lat,lng,numTel,website,rate,adresse,imgTab){
    this.id=id;
    this.nom=nom;
    this.website=website;
    this.lat=lat;
    this.lng=lng;
    this.rate=rate;
    this.imgTab=imgTab;
    this.adresse=adresse;
    this.numTel=numTel;
}

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
            var img=obj[i].imageTab ; 
            var imgTab=new Array(0);
            	for(var j=0;j<img.length;j++){
            		 var img1=img[j];
            	    imgTab[j]=img1;
            	}  
var sc =new SalonCoiffure(id1,nom1,lat1,lng1,numTel1,website1,rate1,adresse1,imgTab);
            data[i]=sc;
        } 
         window.plugins.spinnerDialog.hide();
     if(data.length>0) afficherResultat();
    else alert('erreur');
	
	
}  



function connectToServer(){
//generateUrl();
	window.plugins.spinnerDialog.show(null, "wait ..",true);	
	$.support.cors=true;
	$.ajax({
	    type: 'GET',
	    headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'text/plain'
	    },
	    dataType: 'json',
	    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
	    url: url,
	    data: "",
	    success: function (data ) {
	    	var ch=JSON.stringify(data);
	        console.log('succes'+ch);
	        jsonParsing(ch);
	    },
	    error: function(jqXHR, textStatus, exception) {
	    	var msg = '';window.plugins.spinnerDialog.hide();
	        if (jqXHR.status === 0) {
	            msg = 'Not connect.\n Verify Network.';
	        } else if (jqXHR.status == 404) {
	            msg = 'Requested page not found. [404]';
	        } else if (jqXHR.status == 500) {
	            msg = 'Internal Server Error [500].';
	        } else if (exception === 'parsererror') {
	            msg = 'Requested JSON parse failed.';
	        } else if (exception === 'timeout') {
	            msg = 'Time out error.';
	        } else if (exception === 'abort') {
	            msg = 'Ajax request aborted.';
	        } else {
	            msg = 'Uncaught Error.\n' ;
	        }
	       //alert('error ' + msg+' exce'+exception+' '+url);
            /*console.log("\nincoming Text " + jqXHR.responseText);
            alert('\nincoming Text ' + jqXHR.responseText+'error= '+errorThrown);*/
            var list=document.getElementById('list');
			list.innerHTML='7ell serveur';
			console.log(list.innerHTML);

        } 
	});
	
    

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
        +'<div class="thumbnail" style="opacity:0.8;"><img src="'+url2+ data[i].imgTab[0] +'" alt="Thumbnail Image 1">'
         +' <div class="caption">'
          +'  <h3>'+data[i].nom+'</h3>'
            +'<p>rate :'+ data[i].rate+'/10</p>'
            +'<p><a  href="salon.html?idSalon="'+data[i].id+' class="btn btn-primary" role="button">Details</a></p>'
          +'</div>'
      +'  </div>'
      +'</div>'
    +'</div>';
				}
	if(ch=='') ch='pas de donnees recus ';
	list.innerHTML=ch; 
}







