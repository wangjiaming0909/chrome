// document.addEventListener('DOMContentLoaded', function(){
// 	alert("asdasd");
// },true);

window.onload = function(){
	myGetUrl();
	//alert("asdasd");
};
function myGetUrl(){
	var mytabs = [];
	chrome.tabs.query({
		"active":true
	},function(mytabs){
		var aurl = mytabs[0].url;

		chrome.tabs.create({
			"url":aurl,
			"selected":true
		});
	});
};




// chrome.tabs.onCreated.addListener(fucntion(tab1){
// 	alert("tab1.url");
// });
























// $(function(){//再文档创建完毕后直接调用该函数
// 	$("#button").click(myget);

// 		function myget(){
// 		 	// alert("getUrl");
// 			//window.open("http://www.baidu.com","baidu");
// 			//var url = chrome.extension.getUrl("1.js");
// 			//console.log("url");
// 			 // chrome.tabs.create({
// 			 // 	"url":"http://www.baidu.com",
// 			 // 	"selected":true
// 			 // });
// 			chorme.tabs.query({
// 				"active":true
// 			}, function(tab1){
// 				var url1 = tab1.url;
// 				chrome.tabs.create({
// 					"url":url1,
// 					"selected":true
// 				});
// 			});
// 		};


// //document.addEventListener('DOMContentLoaded', myget);

// //getElementById("button").onclick = "function(){alert("asd");}";


// });
