
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
