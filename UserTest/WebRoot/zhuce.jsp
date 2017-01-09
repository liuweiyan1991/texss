<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'zhuce.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
    
  
  
  <script type="text/javascript" src="js/jquery-3.0.0.min.js">
  </script><script type="text/javascript" src="js/jquery.base64.js"></script>
  <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/zcyanzheng.js"></script>
  <link rel="stylesheet" href="css/yanzheng.css" type="text/css"></link>
  <script type="text/javascript" src="js/My97DatePicker/WdatePicker.js"></script>
  </head>
  
  <body>
    <form >
       <table>
         <tr style="display:none;">
             <td>用户名：</td>
             <td><input type="text" name="us.ustatus" id="ustatus" class="ustatus" value="1"/></td>
          </tr>
          <tr>
             <td>用户名：</td>
             <td><input type="text" onblur="uname1()" name="us.uname" id="uname" />&nbsp;<span id="sname" >*</span></td>
          </tr>
          <tr>
             <td>密码：</td>
             <td><input type="password" name="us.upassword" id="upassword" class="upassword" onblur="upassword2()"/>&nbsp;<span id="spassword">*</span></td>
          </tr>
          <tr>
             <td>确认密码：</td>
             <td><input type="password" name="upassword" id="upassword1" class="upassword1" onblur="upassword11();"/>&nbsp;<span id="spassword1">*</span></td>
          </tr>
           <tr>
             <td>邮箱：</td>
             <td><input type="text" name="us.uemail" id="uemail" class="uemail" onblur="uemail2();" />&nbsp;<span id="semail">*</span></td>
          </tr>
          <tr>
             <td>姓名：</td>
             <td><input type="text" name="us.username" id="username" class="username" onblur="username1();"/>&nbsp;<span id="ssername">*</span></td>
          </tr>
          <tr>
             <td>性别：</td>
             <td><input type="radio" name="us.usex" id="usex" class="usex" value="1" checked="checked" />男&nbsp;
             <input type="radio" name="us.usex" id="usex" class="usex" value="2"  />女
             </td>
          </tr>
          <tr>
             <td>出生日期：</td>
             <td><input type="text" name="us.ubirthday" id="ubirthday" class="ubirthday" onclick="WdatePicker()" onblur="ubirthday2();" />&nbsp;<span id="sbirthday">*</span></td>
          </tr>
           <tr>
             <td></td>
             <td>备注：格式YYYY-MM-DD</td>
          </tr>
            <tr>
             <td>手  机：</td>
             <td><input type="text" name="us.uphone" id="uphone" class="uphone" onblur="uphone2();" />&nbsp;<span id="sphone">*</span></td>
          </tr>
         <tr>
             <td>地址：</td>
             <td>	<div>
	<select id="s_province" name="us.uaddressshen"></select>  
    <select id="s_city" name="us.uaddressshi" ></select>  
    <select id="s_county" name="us.uaddressxian"></select>
    <script class="resources library" src="js/area.js" type="text/javascript"></script>
    
    <script type="text/javascript">_init_area();</script>
    </div>
    <div id="show"></div>
            </td>
           
            
          </tr>
           <tr>
           <td></td>
           <td><input type="text" name="us.uaddressmx" id="uaddressmx" class="uaddressmx" onblur="uaddressmx1();"/>&nbsp;<span id="saddressmx">*</span></td></tr>
             <tr>
            
             <td><input type="button" value="提交注册" onclick="zhuce()"/></td>
          </tr>
       </table>
    
    </form>
    
    <script type="text/javascript">
var Gid  = document.getElementById ;
var showArea = function(){
	Gid('show').innerHTML = "<h3>省" + Gid('s_province').value + " - 市" + 	
	Gid('s_city').value + " - 县/区" + 
	Gid('s_county').value + "</h3>"
							}
Gid('s_county').setAttribute('onchange','showArea()');
</script>
    
  </body>
</html>
