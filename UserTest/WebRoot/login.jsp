<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'login.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  <script type="text/javascript" src="js/jquery-3.0.0.min.js"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.base64.js"></script>
  <script type="text/javascript" src="js/yanzheng.js"></script>
  
  <link rel="stylesheet" href="css/yanzheng.css" type="text/css"></link>

  <script type="text/javascript" src="js/cookie.js"></script></head>
    <script type="text/javascript">
  function zhece(){
    window.location.href="zhuce.jsp";
   }
  </script>
   <script type="text/javascript">
   $(function () {
   
   var cuow=document.getElementById("cuow").value;
    var user=document.getElementById("user").value;
   
    if(user==null||user==""){//判断是否已经登陆过，
        if(cuow==null||cuow==""){//判断是否登陆验证
        }else{
         alert(cuow);
        }
    }else{//如果已经登陆过，再次回到登陆页面进行登陆前 判断错误信息有无反馈
         if(cuow==null||cuow==""){
        }else{
                alert(cuow);       
        }
    }
 });
  
  </script>
  <body>
      <form id="form" action="" method="post">
        <table>
           <tr>
               <td>用户名:<td>
               <td><input type="text" id="userName"  placeholder="请填写用户名" name="uname"  autofocus="autofocus" required oninvalid="setCustomValidity('请填写用户名！');" oninput="setCustomValidity('');" /></td>
           </tr>
            <tr>
               <td>密码:<td>
               <td><input type="password" name="upwd" id="password" placeholder="请填写密码" required oninvalid="setCustomValidity('请填写密码！');" oninput="setCustomValidity('');"/></td>
           </tr>
           <tr>
               <td><td>
               <td><div class="code" id="checkCode" onclick="createCode()" ></div></td>
               <td><a style="margin-left: 10px; text-decoration: underline;" onclick="createCode()">看不清换一张</a></td>
           </tr>
            <tr>
               <td>验证码:<td>
               <td><input type="text" class="form-control" id="inputCode" onblur="validateCode();"/></td>
               <td><span id="xym" class=""></span></td>
           </tr>
           <tr>
               <td><td>
               
               <td><input type="checkbox" name="checkbox" id="saveCookie"/>记住密码<td>
               <td style="display:none;"><input type="text" name="cuowu" id="cuow" value="${cuowu }"/><td>
               <td style="display:none;"><input type="text" name="user" id="user" value="${user.uname }"/><td>
           </tr>
             <tr>
               <td><td>
               <td><input type="button" name="checkbox" id="checkbox" value="注册" onclick="zhece();"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <input type="button" name="checkbox" id="submit" value="登录"  onclick="login();"  /><td>
           </tr>
        </table> 
    
    </form>
  </body>
</html>
