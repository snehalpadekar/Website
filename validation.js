/**
 * 
 */
function validate()
{
	var uname = myform.uname.value;
	var pwd = myform.pwd.value;
	var cpwd = myform.cpwd.value;
	var fname = myform.fname.value;
	var lname = myform.lname.value;
	var age = myform.age.value;
	var mail = myform.mail.value;
	var course = myform.course.selectedIndex;
	var mob = myform.mob.value;
	var padd = myform.padd.value;
	var ladd = myform.ladd.value;

	var flag = true;
	var str = "";
	var email_filter = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var name_filter = /^([a-zA-Z0-9])+$/;

	if(uname.trim() === "")
	{
		flag = false;
		str += "Username should not be blank!!\n";
	}

	if(pwd.trim() === "")
	{
		flag = false;
		str += "Password should not be blank!!\n";
	}

	if(cpwd.trim() === "" || pwd != cpwd)
	{
		flag = false;
		str += "Password is blank or does not match!!\n";
	}

	if(fname.trim() === "" || !name_filter.test(fname))
	{
		flag = false;
		str += "First name should not be blank and it should not contain special characters!!\n"
	}

	if(lname.trim() === "" || !name_filter.test(lname))
	{
		flag = false;
		str += "Last name should not be blank and it should not contain special characters!!\n"
	}

	if(age.trim() === "")
	{
		flag = false;
		str += "Age should not be blank!!\n";
	}

	if(myform.gender[0].checked == false && myform.gender[1].checked == false && myform.gender[2].checked == false)
	{
		flag = false;
		str += "Gender is not selected!!\n";
	}

	if(mail.trim() === "" || !email_filter.test(mail))
	{
		flag = false;
		str += "Email Id is blank or is invalid!!\n";
	}

	if(course == 0)
	{
		flag = false;
		str += "Course is not selected!!\n";
	}

	if(isNaN(mob) || mob.length<10)
	{
		flag = false;
		str += "Mobile no. is not entered or invalid!!\n";
	}

	if(ladd.trim() === "" || padd.trim() === "")
	{
		flag = false;
		str += "Address should not be blank!!\n";
	}

	if(!flag)
	{
		alert("Warning!!!\n" + str);
	}
	return flag;

}