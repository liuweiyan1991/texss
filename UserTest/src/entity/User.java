package entity;

/**
 * User entity. @author MyEclipse Persistence Tools
 */

public class User implements java.io.Serializable {

	// Fields

	private Integer uid;
	private String uname;
	private String username;
	private String upassword;
	private String uphone;
	private String uaddressshen;
	private String uaddressshi;
	private String uaddressxian;
	private String uaddressmx;
	private String uemail;
	private String ubirthday;
	private Integer usex;
	private Integer ustatus;

	// Constructors

	/** default constructor */
	public User() {
	}

	/** full constructor */
	public User(String uname, String username, String upassword, String uphone,
			String uaddressshen, String uaddressshi, String uaddressxian,
			String uaddressmx, String uemail, String ubirthday, Integer usex,
			Integer ustatus) {
		this.uname = uname;
		this.username = username;
		this.upassword = upassword;
		this.uphone = uphone;
		this.uaddressshen = uaddressshen;
		this.uaddressshi = uaddressshi;
		this.uaddressxian = uaddressxian;
		this.uaddressmx = uaddressmx;
		this.uemail = uemail;
		this.ubirthday = ubirthday;
		this.usex = usex;
		this.ustatus = ustatus;
	}

	// Property accessors

	public Integer getUid() {
		return this.uid;
	}

	public void setUid(Integer uid) {
		this.uid = uid;
	}

	public String getUname() {
		return this.uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUpassword() {
		return this.upassword;
	}

	public void setUpassword(String upassword) {
		this.upassword = upassword;
	}

	public String getUphone() {
		return this.uphone;
	}

	public void setUphone(String uphone) {
		this.uphone = uphone;
	}

	public String getUaddressshen() {
		return this.uaddressshen;
	}

	public void setUaddressshen(String uaddressshen) {
		this.uaddressshen = uaddressshen;
	}

	public String getUaddressshi() {
		return this.uaddressshi;
	}

	public void setUaddressshi(String uaddressshi) {
		this.uaddressshi = uaddressshi;
	}

	public String getUaddressxian() {
		return this.uaddressxian;
	}

	public void setUaddressxian(String uaddressxian) {
		this.uaddressxian = uaddressxian;
	}

	public String getUaddressmx() {
		return this.uaddressmx;
	}

	public void setUaddressmx(String uaddressmx) {
		this.uaddressmx = uaddressmx;
	}

	public String getUemail() {
		return this.uemail;
	}

	public void setUemail(String uemail) {
		this.uemail = uemail;
	}

	public String getUbirthday() {
		return this.ubirthday;
	}

	public void setUbirthday(String ubirthday) {
		this.ubirthday = ubirthday;
	}

	public Integer getUsex() {
		return this.usex;
	}

	public void setUsex(Integer usex) {
		this.usex = usex;
	}

	public Integer getUstatus() {
		return this.ustatus;
	}

	public void setUstatus(Integer ustatus) {
		this.ustatus = ustatus;
	}

}