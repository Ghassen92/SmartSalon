 
var lat=15;
var lng=24;
var distance=1;
//var url='http://192.168.23.1:8082/PFA/ApiSalonCoiffure';
var url='http://env-5112404.jelastic.lunacloud.com/ApiSalonCoiffure';
//var url2='http://192.168.23.1:8082/PFA/ApiImages?idS=';
var url2='http://env-5112404.jelastic.lunacloud.com/ApiImages?idS=';

var data=new Array(0);


document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
	console.log(document.domain);
	//alert(" api ok "+getURLParameters('idSalon'));
	//setUpRange();
	//getLocation();
	//connectToServer();
	//alert(getURLParameters('name'));
} 






function getURLParameters(paramName)
{
    var sURL = window.document.URL.toString();
    if (sURL.indexOf("?") > 0)
    {
        var arrParams = sURL.split("?");
        var arrURLParams = arrParams[1].split("&");
        var arrParamNames = new Array(arrURLParams.length);
        var arrParamValues = new Array(arrURLParams.length);

        var i = 0;
        for (i = 0; i<arrURLParams.length; i++)
        {
            var sParam =  arrURLParams[i].split("=");
            arrParamNames[i] = sParam[0];
            if (sParam[1] != "")
                arrParamValues[i] = unescape(sParam[1]);
            else
                arrParamValues[i] = "No Value";
        }

        for (i=0; i<arrURLParams.length; i++)
        {
            if (arrParamNames[i] == paramName)
            {
                //alert("Parameter:" + arrParamValues[i]);
                return arrParamValues[i];
            }
        }
        return "No Parameters Found";
    }
}