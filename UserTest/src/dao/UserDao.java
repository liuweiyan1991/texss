package dao;

import java.io.Serializable;

import entity.User;

public interface UserDao {

	public User findUser(User us);//查询登录
	public Serializable  addUser(User us);//添加注册
	public User getuname(String uname);
} 
