	$('#loginbtn').click(function() {
		//判断是否已经登陆
		if(getCookie('username')) {
			alert('请退出先登陆');
		}else{

			$.ajax({
					type : 'post',
					url : '../api/login.php',
					async:false,
					data : 'usernames=' + $('#loginname').val() + '&password=' + $('#password').val(),
					success : function(str) {
						if(str == 'yes'){
							location.href = '../index.html';
							setCookie('username',$('#loginname').val(),1);
						}else{
							alert('登陆不成功');
						}
					}
				});
		}
	});
