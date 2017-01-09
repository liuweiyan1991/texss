
package dao.impl;

import java.io.Serializable;
import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;



import dao.UserDao;
import entity.User;

public class UserDaoImpl extends HibernateDaoSupport  implements UserDao {

	@Override
	public User findUser(User us) {
		// TODO Auto-generated method stub
		List<User> ss=super.getHibernateTemplate().find("from User where uname=? and upassword=?",new Object[]{us.getUname(),us.getUpassword()});
		if(ss==null){
			return null;
		}else{
			if(ss.size()>0){
		       return (User)ss.get(0);
			}else{
			   return null;
			}
		}
	}

	@Override
	public Serializable addUser(User us) {
		// TODO Auto-generated method stub
		return super.getHibernateTemplate().save(us);
	}
   //用户名注册的时候进行验证
	@Override
	public User getuname(String uname) {
		// TODO Auto-generated method stub
		List<User> ss=super.getHibernateTemplate().find("from User where uname=?",new Object[]{uname});
		if(ss==null){
			return null;
		}else{
			if(ss.size()>0){
		       return (User)ss.get(0);
			}else{
			   return null;
			}
		}
	}
	

}
