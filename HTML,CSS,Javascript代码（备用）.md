#13刘伽林任务二

GitHub链接https://github.com/Lplus0/Lplus0.2048

**HTML代码**

```
 <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>2048</title>
	<link rel="stylesheet" type="text/css" href="2048.css">
	<script src="2048.js"></script>
</head>
<body>
	<!-- 顶部2048好看的亚子 -->
	<div class="gametitle">
		<h1>
			<span class="num">2</span>
			<span class="num">0</span>
			<span class="num">4</span>
			<span class="num">8</span>
		</h1>
	</div>

	<br />
	<hr />
	
	<!-- 游戏规则框框 -->
	<fieldset class="fieldsetstyle">
		<legend align="center">游戏规则</legend>
		<p class="gameorder" >
			1.上下左右滑动，相同数字合并为更高级的数字<br />
			2.滑动格子会在随机位置，出现随机的数字2或者4<br />
			3.游戏结束：游戏界面被数字填满不能再滑动<br />
			4.游戏总分数：游戏过程中数字相加总和，分数更高<br />&nbsp;&nbsp;&nbsp;排名越高<br />	
			5.进阶玩法：随着移动次数增加，方块2，4出现的概<br />&nbsp;&nbsp;&nbsp;率会发生变化，平均50次概率变化一次
		</p>
	</fieldset>
	
	<!--进阶玩法新增-->
		<h1 align="center">MOVING TIME：<span id="time"></span> </h1>
		
	<!-- 游戏整体框架 -->
	<div class="container">
		<!-- 开始键与分数盒 -->
		<div class="head">
			<!-- 记录分数和最高分数 -->
			<div class="score-box">
				<!-- 实时分数 -->
				<div id="score1">
					<p>SCORE:</p>
					<p id="score">0</p>
				</div>
				<!-- 最大分数 -->
				<div id="Max-score1">
					<p>BEST:</p>
					<p id="Maxscore">0</p>
				</div>
			</div>
			<!-- 开始按钮 -->
			<button onclick="game.start()" class="btn1"><a href="#">BEGIN</a></button>
		</div>
		
		<!-- 游戏的4*4框架 -->
		<div id="game">
			<!-- 第一行 -->
			<div id = "c00" class="cell"></div>
			<div id = "c01" class="cell"></div>
			<div id = "c02" class="cell"></div>
			<div id = "c03" class="cell"></div>
			<!-- 第二行 -->
			<div id = "c10" class="cell"></div>
			<div id = "c11" class="cell"></div>
			<div id = "c12" class="cell"></div>
			<div id = "c13" class="cell"></div>
			<!-- 第三行 -->
			<div id = "c20" class="cell"></div>
			<div id = "c21" class="cell"></div>
			<div id = "c22" class="cell"></div>
			<div id = "c23" class="cell"></div>
			<!-- 第四行 -->
			<div id = "c30" class="cell"></div>
			<div id = "c31" class="cell"></div>
			<div id = "c32" class="cell"></div>
			<div id = "c33" class="cell"></div>
		</div>
		
		<!-- 游戏结束界面 -->
		<div class="gameOver" id="gameOver">
			<div>
				<h1>GAME OVER!</h1>
				<h2 id="lastscore">总分为: <span id="lastScore">0</span></h2>
				<button onclick="game.start()" class="btn2"><a href="javascript:game.start()">NEW GAME</a>
			</div>
		</div>
	</div>
	
</body>
</html>
```

**CSS代码**

```
*{
	padding: 0;
	margin: 0;
}
body{
	margin: 80px;
	color: #677277;
	background-color: #fffae8;
}
.gametitle {
    text-align: center;
	color: #D1FCFA;
	font-size: larger;
}
span.num {
  background: #0091ff;
  display: inline-block;
  box-sizing: border-box;
  border-radius:60px;
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  margin: 0 0.5rem;
}
span.num:nth-of-type(2) {
  background: #ff8c00;
}
span.num:nth-of-type(3) {
  background: #00d200;
}
span.num:nth-of-type(4) {
  background: #7280ff;
}
.fieldsetstyle{
	width:400px;
	margin-left: auto;;
	margin-right: auto;
}
p.gameorder{
	padding-left: 5%;
}
/*2048的盒子*/

.container{
	width: 450px;
	height: 695px;
	margin: auto;
	/*background-color: pink;*/
}

/*记录分数的盒子*/
.score-box{
	float: right;
	position: absolute;
	text-align: center;
	right: 0px;
	top: 60px;
	font-size: 30px;
}
/*实时分数*/
#score1{
	margin-right: 172px;
	width: 160px;
	height: 80px;
	background-color: #BBADA0;
	border-radius: 6px;
	font-weight: bold;
}
#Max-score1{
	width: 160px;
	height: 80px;
	background-color: #BBADA0;
	float: right;
	margin-top: -80px;
	border-radius: 6px;
	font-weight: bold;
	
}
#score{
	color: #fff;
	font-size: 30px;
}
#Maxscore{
	color: #fff;
	font-size: 30px;
}
/*开始按钮*/
.btn1{
	background-color:#bbada0; 
	border-radius: 6px;
	padding: 40px 6px;
	cursor: pointer;
	height: 40px;
	line-height: 4px;
	display: block;
	text-align: center;
	float: left;
	border: 0px solid #8f7a66;
	font-size: 30px;
	font-weight: bold;
	margin-top: 2em;
}
/*定义开始按钮中的a属性*/
.btn1>a{
	text-decoration: none;
	color: #f9f6f2;
}
.head{
	position: relative;
}
/*设置游戏的盒子*/
#game{
	position: absolute;
	width: 450px;
	height: 450px;
	margin-top:190px;
	background-color: #bbada0;
	border-radius: 6px;

}
/*设置游戏盒子的属性*/
/*每一个盒子的属性*/
.cell{
	width: 100px;
	height: 100px;
	margin: 10px 0px 0px 10px;

	float: left;
	border-radius: 6px;
	background: rgba(238,228,218,0.35);
	font-size: 40px;
	color: #fff;
	text-align: center;
	line-height:100px;
	font-weight: bold;
}
.n2{background-color: #ee9bc1;}
.n4{background-color: #8ae0ed;}
.n8{background-color: #F2B179;}
.n16{background-color: #e284f5;}
.n32{background-color: #f6a55d;}
.n64{background-color: #eded67;}
.n128{background-color: #59ed72;}
.n256{background-color:#ebed6d;}
.n512{background-color:#9c0;}
.n1024{background-color:#33b5e5;}
.n2048{background-color:#09c;}
.n4096{background-color:#a6c;}
.n8192{background-color:#93c;}
/*游戏结束界面*/
.gameOver{
	position: absolute;
	top:740px;
	bottom:0;
	left: 0;
	right: 0;
	display: none;
}
.btn2{
	background-color: #EEE4DA;
	width:130px;
	height: 40px;
	text-align: center;
	border:0px solid #fff;
	border-radius: 6px;
	margin-top: 30px;
}
.btn2>a{
	font-size: 20px;
	text-decoration: none;
	color: gray;
}
.gameOver>div{
	width: 300px;
	height: 200px;
	position: absolute;
	left: 50%;
	top:50%;
	margin-top: -100px;
	margin-left: -150px;
	background-color: #fff;
	border-radius: 10px;
	border:5px solid #edcf72;
	text-align: center;
	font-size: 15px;
	font-family: Arial;
	font-weight: bold;
}
h1{
	margin-top:30px;
}

```

**Javascript代码**

```

var game = {
	data:[],
	score:0,	
	Maxscore:0, 
	state:1,
	RUNNING:1,  
	GAMEOVER:0,	 
	times: 0,
	
	//判断游戏是否结束
	gameover(){
		
		document.getElementById("time").innerHTML=this.times;
		this.times+=0.5;
		//全局变量和局部变量
		for(var r = 0;r<4;r++){
			for(var c = 0;c<4;c++){
				if(this.data[r][c] == 0)
					return false;
				if(c<3){
					if(this.data[r][c] == this.data[r][c+1]){
						return false;
					}
				}		
				if(r<3){
					if(this.data[r][c] == this.data[r+1][c]){
						return false;
					}
				}
			}
		}	
		return true;		
	},
	
	//移动次数清零
	timesclear(){
		this.times=0;
		},
	//游戏开始
	start(){
		this.timesclear();
		this.score=0;
 	    this.state=this.RUNNING;
		/*this.data =[[0,7,0,0],
					  [0,0,0,0],
					  [0,7,0,0],
					  [0,0,0,0]];来验证NumIntoBox()是否正确*/
		this.data =[
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0]
		];
		this.Random();
		this.Random();
		this.NumIntoBox();
		//下面是用户怎么与游戏交互，取上下左右四个键位的键位码
		document.onkeydown = function(e){
			switch(e.keyCode){
				case 37://左键对应左移
					game.moveLeft();
				break;
				case 39://右键对应右移

					game.moveRight();
				break;
				case 40://下键对应下移
					game.moveDown();
				break;
				case 38://上键对应上移
					game.moveUp();
				break;
			}
		}
	},
	//数组内容赋值到块
	NumIntoBox(){
		//将data中的数据更新到div中
			for(var r=0;r<4;r++){					
				for(var c=0;c<4;c++){
					var div = document.getElementById("c"+r+c);
					var n = this.data[r][c];
					// 判断中间变量n是否为0
					if(n==0 ){
					//若为0，则设置div的内容为空，class=“cell”
						div.innerHTML = "";
						div.className = "cell";
					}else{
					//在验证的时候可以不是全0二维数组
					//若不为0，例如：则将32赋值进去 就出现一个值为32 的方块，class=“cell n32” 
						div.innerHTML = n;
						div.className = "cell n"+n;
					}
				}
			}
		document.getElementById("score").innerHTML = this.score;
		//增加不关闭页面前提下，最高分数
		if(this.Maxscore<=this.score){
			this.Maxscore = this.score;
			document.getElementById("Maxscore").innerHTML = this.Maxscore;
		};
		//最高分数在前面，因为-第一把-最高分数会随时更新
		//然后再判断游戏状态
		if(this.gameover()){
			this.state=this.GAMEOVER;
			document.getElementById("lastScore").innerHTML=this.score;
			document.getElementById("gameOver").style.display="block";
		}
		else{//没完就继续玩，一如既往，隐藏game over框
			document.getElementById("gameOver").style.display="none";
		}
	},
	//随机行列随机数
	Random(){		
		while(true) {
			var row = Math.floor(Math.random() * 4);
			var col = Math.floor(Math.random() * 4);
			
			if (this.data[row][col] == 0){
				if(this.times<50){
					var num = Math.random() > 0.5 ? 2 : 4;				
					this.data[row][col] = num;
					break;
				}
			//进阶版：让概率0.5随游戏进行而变化
				else if(this.times>49&&this.times<100){
					var num = Math.random() > 0.6 ? 2 : 4;
					this.data[row][col] = num;
					break;
				}
				else if(this.times>99&&this.times<150){
					var num = Math.random() > 0.7 ? 2 : 4;
					this.data[row][col] = num;
					break;
				}else if(this.times>149&&this.times<200){
					var num = Math.random() > 0.8 ? 2 : 4;
					this.data[row][col] = num;
					break;
				}else if(this.times>199){
					var num = Math.random() > 0.9 ? 2 : 4;
					this.data[row][col] = num;
					break;
				}
				
				
				
			}
		}		
	},
	
	//开始移动！
	
	//向左移动
	moveLeftInRow(r){
			for(var c = 0;c<3;c++){
				var nextc = -1;
				
				for(var i = c+1;i<4;i++){
					if(this.data[r][i] != 0){
						nextc = i;
						break;
					}else{
						nextc = -1;
					}
				}	
				
				if(nextc == -1){
					break;
				}else{
					if(this.data[r][c] == 0){
						this.data[r][c] =this.data[r][nextc];
						this.data[r][nextc] = 0;
						c--;
					}else if(this.data[r][c] == this.data[r][nextc]){
						this.data[r][c] = this.data[r][c]*2;
						this.score += this.data[r][c];
						this.data[r][nextc] = 0;
					}
				}
			}
		},
	moveLeft(){ //左移所有行
			var ArrayToString =this.data.toString();
			for(var r=0;r<4;r++){
				this.moveLeftInRow(r);
			}
			if(ArrayToString!=this.data.toString()){
				this.Random();
				this.NumIntoBox();
				this.gameover();
			}
	},
	//向右移动
	moveRightInRow(r){
			for(var c = 4;c>0;c--){
				var nextc = -1;
				for(var i = c-1;i<4;i--){
					if(this.data[r][i] != 0){
						nextc = i;
						break;
					}else{
						nextc = -1;
					}
				}	
				if(nextc == -1){
					break;
				}else{
					if(this.data[r][c] == 0){
						this.data[r][c] =this.data[r][nextc];
						this.data[r][nextc] = 0;
						c++;
					}else if(this.data[r][c] == this.data[r][nextc]){
						this.data[r][c] = this.data[r][c]*2;
						this.score += this.data[r][c];

						this.data[r][nextc] = 0;
					}
				}
			}
		},
	moveRight(){			
			var ArrayToString =this.data.toString();
			for(var r=0;r<4;r++){
				this.moveRightInRow(r);
			}
			if(ArrayToString!=this.data.toString()){
				this.Random();
				this.NumIntoBox();
				this.gameover();
			}
	},
	//向下移动
	getDowm(r,c){
			for(r-=1;r>=0;r--){
				if(this.data[r][c]){
					return r;
				}
			}
			return -1;
		},
	moveDownInRow(c){
			for(var r =3;r>=0;r--){
				var nextr=this.getDowm(r,c);
				
				
				
				
				if(nextr==-1){
					return nextr;
					}					
				else if(this.data[r][c]==0){
					this.data[r][c] = this.data[nextr][c];
					this.data[nextr][c] = 0;
					r++;
				}
				else if(this.data[r][c]==this.data[nextr][c]){
					this.data[r][c]*=2;
					this.score += this.data[r][c];
					this.data[nextr][c]=0;
				}
			}
		},
	moveDown(){
			var ArrayToString =this.data.toString();
			for(var c=0;c<4;c++){
				this.moveDownInRow(c);
			}
			if(ArrayToString!=this.data.toString()){
				this.Random();
				this.gameover();
				this.NumIntoBox();
			}
	},
	//向上移动
	getUp(r,c){
			for(r+=1;r<4;r++){
				if(this.data[r][c]){
					return r;
				}
			}
			return -1;
		},
	moveUpInRow(c){
			for(var r =0;r<3;r++){
				var nextr=this.getUp(r,c);
				if(nextr==-1){return nextr;}
				else if(this.data[r][c]==0){
					this.data[r][c] = this.data[nextr][c];
					this.data[nextr][c] = 0;
					r--;
				}
				else if(this.data[r][c]==this.data[nextr][c]){
					this.data[r][c]*=2;
					this.score += this.data[r][c];
					this.data[nextr][c]=0;
				}
			}
		},
	moveUp(){			
			var ArrayToString =this.data.toString();
			for(var c=0;c<4;c++){
				this.moveUpInRow(c);
			}
			if(ArrayToString!=this.data.toString()){
				this.Random();
				this.gameover();
				this.NumIntoBox();
			}
	}
}
```

