## Ratel

	.net core 分布式配置中心
	
## 配置文件
https://github.com/wangchengqun/ratel/blob/master/RatelServer/conf/conf.yaml

	数据同步端口
	Server: 
		ip: 127.0.0.1
		port: 7890
		
    浏览器访问 http://127.0.0.1:7891
	默认账户密码都是 admin
	Web:
		port: 7891
		loginUser: admin
		passWord: admin
		
	集群数据同步用到(集群的key必须一致) 和 用户登陆返回的token(md5加密有用到)
	Key: QERTYUIOPLKJHGFDA


	
![image1](https://github.com/wangchengqun/ratel/blob/master/image/image1.png)