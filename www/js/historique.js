var url='http://pfa-azerty199555.rhcloud.com/pfa%20v7/ApiReservation?type=get&idClient=';

var url2='http://pfa-azerty199555.rhcloud.com/pfa%20v7/ApiImages?idS=';


var data=new Array(0);


function Reservation(id,idClient,typeService,date,dateR,idImg){
    this.id=id;
    this.idClient=idClient;
    this.typeService=typeService;
    this.date=date;
    this.dateR=dateR;
    this.idImg=idImg;
  
}
function afficherResultat2(){
	var list=document.getElementById('histo');
	var ch='',i;
				for(i=0;i<data.length;i++){
					ch+=
					      '<li><a href="#">'
					      +'<img src="'+url2+ data[i].idImg +'"  width="70px" height="80">'
					    	 
					     + '<h2>' +data[i].typeService+'</h2>'
					      +'<p>'+data[i].dateR +'</p></a>'
					       +''
					      +'</li>'
									
				}
	if(ch=='') ch='pas de donnees recus ';
	list.innerHTML=ch; 
	window.plugins.spinnerDialog.hide();
}


function jsonParsing(json){
    obj = JSON.parse(json); 
    var i;
    data=new Array(obj.length);
     for(i = 0; i < obj.length; i++) {
        var id=obj[i].id;
        var idClient=obj[i].idClient;
        var idService=obj[i].TypeService;
        var date=obj[i].dateInsc;
        var dateR=obj[i].dateRendez_vous;
        var idImg=obj[i].idImageService;
       
var sc =new Reservation(id,idClient,idService,date,dateR,idImg);
        data[i]=sc;
    } 
 if(data.length>0) afficherResultat2();
else alert('erreur');


}  



function connectToServerH(){
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
        

    } 
});
function fblogout  (){
	window.localStorage.removeItem("loggedIn");
	window.localStorage.removeItem("userName");
	facebookConnectPlugin.logout( success, fail);
}


}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
	url+=window.localStorage.getItem('userID');
	//alert(url);
	connectToServerH();
	 document.addEventListener("backbutton", onBackKeyDown, false);
	    function onBackKeyDown() {
	        navigator.app.exitApp();
	        }
} 