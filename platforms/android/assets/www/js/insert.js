var url='http://pfa-azerty199555.rhcloud.com/pfa%20v7/ApiReservation?type=insert&idClient=';
//ApiReservation?type=insert&idClient=2&idService=1&dateR=16h 13/12/2016


function connectToServer2( u){
	window.plugins.spinnerDialog.show(null, "resevation en cours");
$.support.cors=true;
$.ajax({
    type: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'text/plain'
    },
    dataType: 'json',
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    url: u,
    data: "",
    success: function (data ) {
    	var ch=JSON.stringify(data);
    	window.plugins.spinnerDialog.hide();
        if(ch==='1') alert('demande effectué ');
        else alert('erreur lors du réservation');
    },
    error: function(jqXHR, textStatus, exception) {
    	var msg = '';
    	window.plugins.spinnerDialog.hide();
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
}

function reserveService2 (){
	var 	idClient=window.localStorage.getItem('userID');
	var idService=2;
	 var dateR = prompt("donner la date du Rendez-vous :", "10h 5/5/2016")
     if (dateR!=null) {
    	 var u=url+idClient+'&idService='+idService+'&dateR='+dateR;
    	connectToServer2(u);
     }
     else alert('date invalide');
	//var dateR=document.getElementById('dateR').innerHTML;
    

}
function reserveService3 (){
	var 	idClient=window.localStorage.getItem('userID');
	var idService=3;
	var dateR = prompt("donner la date du Rendez-vous :", "10h 5/5/2016")
    if (dateR!=null) {
   	 var u=url+idClient+'&idService='+idService+'&dateR='+dateR;
   	connectToServer2(u);
    }
    else alert('date invalide');
	//var dateR=document.getElementById('dateR').innerHTML;

} 
function reserveService4(){
	var 	idClient=window.localStorage.getItem('userID');
	var idService=4;
	var dateR = prompt("donner la date du Rendez-vous :", "10h 5/5/2016")
    if (dateR!=null) {
   	 var u=url+idClient+'&idService='+idService+'&dateR='+dateR;
   	connectToServer2(u);
    }
    else alert('date invalide');
	//var dateR=document.getElementById('dateR').innerHTML;

} 
function reserveService5 (){
	var 	idClient=window.localStorage.getItem('userID');
	var idService=5;
	var dateR = prompt("donner la date du Rendez-vous :", "10h 5/5/2016")
    if (dateR!=null) {
   	 var u=url+idClient+'&idService='+idService+'&dateR='+dateR;
   	connectToServer2(u);
    }
    else alert('date invalide');
	//var dateR=document.getElementById('dateR').innerHTML;
} 
function reserveService6 (){

alert('not supported yet');
} 



document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){

} 