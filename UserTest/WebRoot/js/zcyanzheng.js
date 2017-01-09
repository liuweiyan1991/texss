//注册验证
function uname1(){
	
    var uname = $("#uname").val(); 
    var num=Trim(uname).length;
    var nm=/^[a-zA-Z\d]\w{2,10}[a-zA-Z\d]$/;
    var resultObj=document.getElementById('sname');
	if(num>0){
		if(nm.test(uname)){
			 

	        $.ajax({
	           type: "post",
	           url: "zhuceUnameaction",
	           data:{username:uname},
	           dataType: "json",
	           success: function(udata){//msg:返回值
	        	 
	              if(udata.user>0){
	            	  resultObj.innerHTML="*";
	      			  resultObj.setAttribute("class", "str1");//绿色
	              }else{
	            	  resultObj.innerHTML="用户名已存在！";
	      			  resultObj.setAttribute("class", "str");
	              }
	        	   
	           },
	           error: function (data)
	           {
	           alert("系统故障！");
	         
	           }
	       });
			
			
			
			
		}else{
			resultObj.innerHTML="请输入4-12位用户名(只能是字母，数字)";
			resultObj.setAttribute("class", "str");
		}
		
	}else{
		resultObj.innerHTML="*";
		resultObj.setAttribute("class", "str");//红色
	}
}

function upassword2(){
	   var uname = $("#upassword").val(); 
	    var num=Trim(uname).length;
	    var pa=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
	    var resultObj=document.getElementById('spassword');
		if(num>0){
			if(pa.test(uname)){
				resultObj.innerHTML="*";
				resultObj.setAttribute("class", "str1");
			}else{
				resultObj.innerHTML="请输入6-16位密码(非纯数字，字母，字符)";
				resultObj.setAttribute("class", "str");
			}
			
		}else{
			resultObj.innerHTML="*";
			resultObj.setAttribute("class", "str");
		}
}
function upassword11(){
	
	   var uname = $("#upassword1").val();
	   var unames = $("#upassword").val(); 
	    var num=Trim(uname).length;
	    var resultObj=document.getElementById('spassword1');
		if(num>0){
			if(unames!=uname){
				resultObj.innerHTML="两次密码输入不一致！";
				resultObj.setAttribute("class", "str");
			}else{
				resultObj.innerHTML="*";
			    resultObj.setAttribute("class", "str1");
			}
		}else{
			   resultObj.innerHTML="*";
			   resultObj.setAttribute("class", "str");
		}
}


function uemail2(){
	   var uname = $("#uemail").val(); 
	    var num=Trim(uname).length;
	   var patten2=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;   
	   var resultObj=document.getElementById('semail');
		if(num>0){
			
			if(patten2.test(uname)){
				resultObj.innerHTML="*";
				resultObj.setAttribute("class", "str1");
			}else{
				 
			     resultObj.innerHTML="请输入有效的邮箱地址！";
			     resultObj.setAttribute("class", "str");
			}
		   
		}else{
			resultObj.innerHTML="*";
			resultObj.setAttribute("class", "str");
		}
}
function username1(){
	   var uname = $("#username").val(); 
	    var num=Trim(uname).length;
	    var reg = /^[\u4e00-\u9fa5 ]{2,4}$/;
	    var reg1=/^[a-zA-Z\/ ]{2,20}$/;
	    var resultObj=document.getElementById('ssername');
		if(num>0){
			

			    if(reg1.test(uname)||reg.test(uname)){

			    	resultObj.innerHTML="*";
					resultObj.setAttribute("class", "str1");

			    }else{

			    	resultObj.innerHTML="请输入正确的姓名格式(中文2-4位或者英文2-20位）！";
				     resultObj.setAttribute("class", "str");

			    }
			    
		}else{
			
			resultObj.innerHTML="*";
			resultObj.setAttribute("class", "str");
		}
}

function ubirthday2(){
	   var uname = $("#ubirthday").val(); 

	    var num=Trim(uname).length;
	    var r=/^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/;
	    var resultObj=document.getElementById('sbirthday');
		if(num>0){
			if(r.test(uname)){
				resultObj.innerHTML="*";
				resultObj.setAttribute("class", "str1");
			}else{
				resultObj.innerHTML="请输入正确的日期格式";
				resultObj.setAttribute("class", "str");
			}
			
		}else{
			resultObj.innerHTML="*";
			resultObj.setAttribute("class", "str");
		}
}
function uphone2(){
	   var uname = $("#uphone").val(); 
	    var num=Trim(uname).length;
	    var regex =/^1[3|4|5|8][0-9]\d{8}$/;
	    var resultObj=document.getElementById('sphone');
		if(num>0){
			if(regex.test(uname)){
				resultObj.innerHTML="*";
				resultObj.setAttribute("class", "str1");
			}else{
				resultObj.innerHTML="请输入正确的手机号码格式！";
				resultObj.setAttribute("class", "str");
			}
		
		}else{
			resultObj.innerHTML="*";
			resultObj.setAttribute("class", "str");
		}
}
function uaddressmx1(){
	    var uname = $("#uaddressmx").val(); 
	
	    var unamep=$("#s_province").get(0).selectedIndex;//索引
	    
	    
	    var unamesc = $("#s_city").get(0).selectedIndex;//索引
	    var unamec = $("#s_county").get(0).selectedIndex;//索引
	  
	    var num=Trim(uname).length;
		if(num>0&&unamep>0&&unamesc>0&&unamec>0){
			
		   document.getElementById("saddressmx").setAttribute("class", "str1");
		}else{
			
		   document.getElementById("saddressmx").setAttribute("class", "str");
		}
		
		
	    
}

  function zhuce(){
	 
	  var ustatus=$("#ustatus").val();
      var uname=$("#uname").val();
      var upassword=$("#upassword").val();
      var upassword1=$("#upassword1").val();
      var uemail=$("#uemail").val();
      var usex=$("#usex").val();
      var username=$("#username").val();
      var ubirthday=$("#ubirthday").val();
      var uphone=$("#uphone").val();
      var sprovince=$("#s_province").val();
      var scity=$("#s_city").val();
      var scounty=$("#s_county").val();
      var uaddressmx=$("#uaddressmx").val();
      
      var sname1=sname.className;
      var spassword11=spassword.className;
      var spassword111=spassword1.className;
      var semail1=semail.className;
      var ssername1=ssername.className;
      var sbirthday1=sbirthday.className;
      var sphone1=sphone.className;
      var saddressmx1=saddressmx.className;
      
      
      
      if(uname==null||uname==""||upassword==null||upassword==""||upassword1==null||upassword1==""||
    		  uemail==null||uemail==""||usex==null||usex==""||ubirthday==null||ubirthday==""||uphone==null||
    		  uphone==""||sprovince==null||sprovince==""||scity==null||scity==""||scounty==null||scounty==""||
    		  uaddressmx==null||uaddressmx==""||username==null||username==""||sname1=="str"||spassword11=="str"||
    		  spassword111=="str"||semail1=="str"||ssername1=="str"||sbirthday1=="str"||sphone1=="str"||saddressmx1=="str"){
        
             alert("温馨提示：带“*”号的文本框必须输入正确格式的数据");
             
      }else{
      
      var us={"us.ustatus":ustatus,
              "us.uname":uname,
              "us.upassword":upassword,
              "us.uemail":uemail,
              "us.username":username,
              "us.usex":usex,
              "us.ubirthday":ubirthday,
              "us.uphone":uphone,
              "us.uaddressshen":sprovince,
              "us.uaddressshi":scity,
              "us.uaddressxian":scounty,
              "us.uaddressmx":uaddressmx
              };
      
        $.ajax({
           type: "post",
           url: "zhuceaction",
           data:us,
           dataType: "json",
           success: function(data){//msg:返回值
              if(data.num>0){
            	  window.location.href ='index.jsp';
              }else{
            	  window.location.href ='zhuce.jsp';
              }
        	   
           },
           error: function (data)
           {
           alert("系统故障！");
         
           }
       });
}
}
  
  
//去掉所有的空格
function Trim(str)

{ 

    return str.replace(/(^\s*)|(\s*$)/g, ""); 

}