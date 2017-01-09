package service;


import entity.User;

public interface UserService {

	public User findUser(User us);//查询登录
	public int  addUser(User us);//添加注册
	public User getuname(String uname);
}
