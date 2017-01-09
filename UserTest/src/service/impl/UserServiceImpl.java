package service.impl;

import java.io.Serializable;

import service.UserService;
import dao.UserDao;
import entity.User;

public class UserServiceImpl implements UserService {
  //spring 对接
	private UserDao userDao;
	
	
	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	@Override
	public User findUser(User us) {
		// TODO Auto-generated method stub
		return userDao.findUser(us);
	}

	@Override
	public int addUser(User us) {
		// TODO Auto-generated method stub
		return (Integer)userDao.addUser(us);
	}

	@Override
	public User getuname(String uname) {
		// TODO Auto-generated method stub
		return userDao.getuname(uname);
	}

}
