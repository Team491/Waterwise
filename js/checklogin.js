		//取值
		function validate_form(thisform)
		{
		
		with (thisform)
		  {
		  if (validate_required(userId,"请填写用户名！")==false)
		    {userId.focus();return false;}
		  if (validate_required(password,"请填写密码！")==false)
		    {password.focus();return false;}
		  }
		  
		}
		//校验字段非空函数
		function validate_required(field,alerttxt)
		{
			with (field)
				{
				  if (value==null||value=="")
				    {
					  alert(alerttxt);
					  return false;
				     }
				  else {return true;}
				}
		}
