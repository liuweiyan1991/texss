window.onload = function(){  
    //分析cookie值，显示上次的登陆信息  
	 //写入点击事件  
	 createCode();
	
    var userNameValue = getCookieValue("userName");
   
    $("#userName").val(userNameValue); 
    var passwordValue = getCookieValue("password");  
    $("#password").val(passwordValue); 
  
    if(passwordValue.length>0){//判断是否已经保存在cookie中
    	
          $("[name='checkbox']").attr("checked",'true');//全选 
    }
   
}  ;

//去掉所有的空格
function Trim(str)

{ 

    return str.replace(/(^\s*)|(\s*$)/g, ""); 

}

document.getElementById("inputCode").value="";

var code;

function createCode() 
{
 code = "";
 var codeLength = 6; //验证码的长度
 var checkCode = document.getElementById("checkCode");
 var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
 for(var i = 0; i < codeLength; i++) 
 {
  var charNum = Math.floor(Math.random() * 52);
  code += codeChars[charNum];
 }
 if(checkCode) 
 {
  checkCode.className = "code";
  checkCode.innerHTML = code;
 }
}


function validateCode() 
{
 document.getElementById("submit").setAttribute("type", "submit");
 var inputCode=document.getElementById("inputCode").value;
 if(inputCode.length <= 0) 
 {
	$("#xym").html("请输入验证码！");
	document.getElementById("xym").setAttribute("class", "str");
 }
 else if(inputCode.toUpperCase() != code.toUpperCase()) 
 {
   
   createCode();
   document.getElementById("inputCode").value="";
   $("#xym").html("验证错误");
   document.getElementById("xym").setAttribute("class", "str");//修改属性的值placeholder属性名称，
 }
 else 
 {
  
	 $("#xym").html("验证通过");
	 document.getElementById("xym").setAttribute("class", "str1");
 }    
}



function login(){
	
	var name =document.getElementById("xym").innerText; 
	
	if(name=="验证通过"){
		
		 document.getElementById("form").setAttribute("action", "loginaction");
		
	}else{
		 $("#xym").html("请输入正确验证码");
		 document.getElementById("xym").setAttribute("class", "str");//修改属性的值placeholder属性名称，
	}

	
	
	
	 var userNameValue = $("#userName").val();  
     var passwordValue = $("#userName").val();  
     //服务器验证（模拟）      
  
          
     if( $("input[type='checkbox']").is(':checked')){ //判断是否选中   
         setCookie("userName",userNameValue,24,"/");  
         setCookie("password",passwordValue,24,"/");  
     }else{
     	deleteCookie("userName","/");  
     	deleteCookie("password","/"); 
     };      

}

//新建cookie。  
//hours为空字符串时,cookie的生存期至浏览器会话结束。hours为数字0时,建立的是一个失效的cookie,这个cookie会覆盖已经建立过的同名、同path的cookie（如果这个cookie存在）。  
function setCookie(name,value,hours,path){  
   
	var name = escape(name);  
    var value = escape(value);  
    var expires = new Date();  
    expires.setTime(expires.getTime() + hours*3600000);  
    path = path == "" ? "" : ";path=" + path;  
    _expires = (typeof hours) == "string" ? "" : ";expires=" + expires.toUTCString();  
    document.cookie = name + "=" + value + _expires + path;  
}  

//获取cookie值  
function getCookieValue(name){  
    var name = escape(name); 
    
    //读cookie属性，这将返回文档的所有cookie  
    var allcookies = document.cookie;         
    //查找名为name的cookie的开始位置  
    name += "=";  
    var pos = allcookies.indexOf(name);      
    //如果找到了具有该名字的cookie，那么提取并使用它的值  
    if (pos != -1){                                             //如果pos值为-1则说明搜索"version="失败  
        var start = pos + name.length;                  //cookie值开始的位置  
        var end = allcookies.indexOf(";",start);        //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置  
        if (end == -1) end = allcookies.length;        //如果end值为-1说明cookie列表里只有一个cookie  
        var value = allcookies.substring(start,end);  //提取cookie的值  
        return unescape(value);                           //对它解码        
        }     
    else return "";                                             //搜索失败，返回空字符串  
}  
//删除cookie  
function deleteCookie(name,path){  
    var name = escape(name);  
    var expires = new Date(0);  
    path = path == "" ? "" : ";path=" + path;  
    document.cookie = name + "="+ ";expires=" + expires.toUTCString() + path;  
}  





