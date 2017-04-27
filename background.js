function downloadlistener_callback(item){
	//chrome.downloads.cancel(item.id,function(){
	//alert('download has been canceled');
	//});
	alert(item.url);
};
function clicked(){
	s=new ActiveXObject("WScript.Shell");
	cmd = "ls";
	//？？
	s.Run(cmd);
};
//chrome.downloads.onCreated.addListener(downloadlistener_callback);