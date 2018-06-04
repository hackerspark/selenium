function adSetter(){
     //alert(navigator.userAgent);
var admobid = {}
if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
  admobid = {
    banner: 'ca-app-pub-3582069983225184/3083345159',
    interstitial: 'ca-app-pub-3582069983225184/4560078352',
  }
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
  admobid = {
    banner: 'ca-app-pub-3582069983225184/3083345159',
    interstitial: 'ca-app-pub-3582069983225184/4560078352',
  }
}

document.addEventListener('deviceready', function() {
  admob.banner.config({
    id: admobid.banner,
    //isTesting: true,
    autoShow: true,
  })
  admob.banner.prepare()

  admob.interstitial.config({
    id: admobid.interstitial,
    //isTesting: true,
    autoShow: false,
  })
  admob.interstitial.prepare()

  document.getElementById('showAd').disabled = true
  document.getElementById('showAd').onclick = function() {
    admob.interstitial.show()
  }

}, false)

document.addEventListener('admob.banner.events.LOAD_FAIL', function(event) {
  console.log(event)
})

document.addEventListener('admob.interstitial.events.LOAD_FAIL', function(event) {
  console.log(event)
})

document.addEventListener('admob.interstitial.events.LOAD', function(event) {
  console.log(event)
  document.getElementById('showAd').disabled = false
})

document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
  console.log(event)

  admob.interstitial.prepare()
})

}
  function onDeviceReady(){
  //alert("device ready");
      adSetter();
  }

function backCall(e){
// pormt when back button is pressed on home screen
  e.preventDefault();
  var action=confirm("Do you want to Exit?");
  if(action){
      if(AdMob) AdMob.showInterstitial();
      navigator.app.exitApp();
  }
}



function domLoaded(){

 document.addEventListener("deviceready", onDeviceReady, false);
 document.addEventListener("backbutton", backCall, false);
}