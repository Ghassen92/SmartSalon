
var ssid='"ghassen2018"';
var pass='"1234567890"';
var url='http://pfa-azerty199555.rhcloud.com/pfa%20v7/ApiUser';
//var url='http://192.168.23.1/pfa%20v7/ApiUser';

if(window.localStorage.getItem('loggedIn')!=null&&window.localStorage.getItem('loggedIn')==1)
    window.location.assign('acceuil.html ' );

var successCurrentSsid=function (currentssid){
	/*if (currentssid===ssid) 	alert ("connec established");
	else 	alert ("connec no established"); */
};
var fail=function (error){
	alert(error+'');
};
var winEnabled=function (){
	//alert('wifi ok');
	var wpa= WifiWizard.formatWPAConfig(ssid,pass);
    WifiWizard.addNetwork(wpa, winAdd, fail); 
};
var winConnect=function(){
	WifiWizard.getCurrentSSID(successCurrentSsid,fail);
}
var  failConnect=function(error){
	alert(error);
}
var winAdd=function (){
	//alert('wifi configuration added');
	WifiWizard.connectNetwork(ssid, winConnect, failConnect);
};

var sendParamUser=function(id,name,email,birthday,gender){
	var url2=url+'?idFb='+id+'&nom='+name+'&email='+email+'&birthday='+birthday+
	'&gender='+gender;
	//alert("start send "+url2);
	$.support.cors=true;
	$.ajax({
	    type: 'GET',
	    headers: {
	       // 'Accept': 'application/json',
	        'Content-Type': 'text/plain'
	    },
	    //dataType: 'json',
	    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
	    url: url2,
	    data: "",
	    success: function (data ) {
	    	//var ch=JSON.stringify(data);
	        //alert('succes'+data);
	        window.location.assign('acceuil.html ' );
	        //jsonParsing(ch);
	    },
	    error: function(jqXHR, textStatus, exception) {
	    	var msg = '';
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
	       alert('error ' + msg+' exce'+exception+' '+url);

        } 
	});
}


var success = function (userdata) {
    //alert("me/?fields=id,name,email,birthday,gender"+"\n dat : " + JSON.stringify(userdata));
    var obj=JSON.parse(JSON.stringify(userdata));
    var id=obj.id;
    var name=obj.name;
    var email=obj.email;
    var birthday=obj.birthday;
    var gender=obj.gender;
   // alert(id+' '+' '+birthday+' '+gender+' '+email+' '+name);
    window.localStorage.setItem("loggedIn", 1);
    window.localStorage.setItem("userName", name);
    window.localStorage.setItem("firstTime",1);
    window.localStorage.setItem("userID",id);
    sendParamUser(id,name,email,birthday,gender);
   
}

var fbLoginSuccess = function (userData) {
   // alert("UserInfoff: " + JSON.stringify(userData));
   /* document.getElementById("resp").innerHTML=''+JSON.stringify(userData);
    //accessToken=userData.AUTHRESPONSE.ACCESSTOKEN;
    var obj=JSON.parse(JSON.stringify(userData));
   // userID=JSON.parse(JSON.stringify(userData)).AUTHRESPONSE.userID;
    accessToken=obj.authResponse.accessToken;
    userID=obj.authResponse.userID;*/
    facebookConnectPlugin.api("me/?fields=id,name,email,birthday,gender",null, success, 
			  function (error) { alert("error :" + error) });			}


var fbLogin=function(){
 
	if(window.localStorage.getItem('loggedIn')==1) 	        window.location.assign('acceuil.html');
	else
	facebookConnectPlugin.login(["user_birthday"],
        fbLoginSuccess,
        function (error) { /*alert("error fb :" + error)*/ }
    );   
}

function onBackKeyDown() {
    navigator.app.exitApp();
    }


document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
	//alert("api ok");
    //fbLogin();
    //WifiWizard.setWifiEnabled(true, winEnabled, fail);
    document.addEventListener("backbutton", onBackKeyDown, false);


    
   
} 