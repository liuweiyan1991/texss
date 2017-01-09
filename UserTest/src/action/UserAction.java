package action;

import java.util.HashMap;
import java.util.Map;

import net.sf.json.JSONObject;

import service.UserService;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import entity.User;

public class UserAction extends ActionSupport {
	//配置spring的name值
	private UserService userService;
	
	public UserService getUserService() {
		return userService;
	}
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
    //接收数据库结果
	private JSONObject data;
	
	private JSONObject udata;
    

	public JSONObject getUdata() {
		return udata;
	}
	public void setUdata(JSONObject udata) {
		this.udata = udata;
	}
	public JSONObject getData() {
		return data;
	}
	public void setData(JSONObject data) {
		this.data = data;
	}
	//获取页面标签属性name值
	private User us;
	private String uname;
	private String upwd;
	private String username;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public User getUs() {
		return us;
	}
	public void setUs(User us) {
		this.us = us;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getUpwd() {
		return upwd;
	}
	public void setUpwd(String upwd) {
		this.upwd = upwd;
	}
	
	
	public String Login(){
		User u=new User();
		u.setUname(uname);
		u.setUpassword(upwd);
		
		
		//调用业务层 的方法
		User user=	userService.findUser(u);
		Map<String, Object> session=ActionContext.getContext().getSession();
		if(user==null ||user.equals(null)){
	    	    session.put("cuowu", "用户名或密码不正确！");// 往ServletContext里放入application
			
	    	   return ERROR;
	       }else{
	    	 
	    	   session.put("user", user);
	    	   return SUCCESS;
	       }
	
		
	}
	
	public String zhuce(){
		
	 int num=userService.addUser(us);

	
	 Map<String, Object> map=new HashMap<String, Object>();
     map.put("num", num);
    
	data=JSONObject.fromObject(map);	
	 System.out.println(num+"ss");
	if(num>0){
	   
		return SUCCESS;
	}else{
		
		return ERROR;
	    }
	}
	
	public String zhuceuname(){
		System.out.println(username);
		//调用业务层 的方法
		User user=	userService.getuname(username);
		
		 Map<String, Object> map=new HashMap<String, Object>();
        int ss=0;
		 if(user==null){
			 System.out.println("s");
			ss=1;
		 }else{
			 System.out.println("ss");
		 }
		 map.put("user", ss);
		 udata=JSONObject.fromObject(map);	
		
		 return SUCCESS;
	}

}
