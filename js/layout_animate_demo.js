//设置返回顶部元素是否显示
let backTop = document.getElementById("up")
window.onscroll = function() {
	let scrollValue = document.documentElement.scrollTop
	if(scrollValue >= 100 ){
		backTop.style.display = "block";
	}else {
		backTop.style.display = "none";
	}
}
//点击返回顶部执行函数
backTop.onclick = function() {
	//直接回到顶部
//			document.documentElement.scrollTop = 0;
	//匀速回到顶部
//			let speedValue = document.documentElement.scrollTop
//			let timer = setInterval(() => {
//				speedValue -= 30;
//				document.documentElement.scrollTop = speedValue;
//				if(speedValue <= 0) {
//					clearInterval(timer)
//				}
//			}, 20)
	//降速回到顶部
	let speedValue = document.documentElement.scrollTop
	let timer = setInterval(() => {
		//用当前的滚动条告诉除10，值会一直降低
		speedValue -= document.documentElement.scrollTop / 10;
		document.documentElement.scrollTop = speedValue;
		if(speedValue <= 0) {
			clearInterval(timer)
		}
	}, 20)
}
//控制搜索框是否显示
let queryBtn = document.getElementById("query")  // 右下角搜索按钮
let queryDialog = document.getElementById("queryDialog")  //弹框div
let closeBtn = document.getElementById("closeBtn") //关闭弹窗按钮
let inputValue = document.getElementById("inputValue")  //搜索输入框
let dlgQueryBtn = document.getElementById("DlgQueryBtn")  //弹框搜索按钮
let pContent = document.getElementsByClassName("content")  //文本内容
queryBtn.onclick = function() {
	queryDialog.style.display = "block"
}
dlgQueryBtn.onclick = function() {
	let queryValue = inputValue.value
	if(queryValue) {
		for(let item in pContent) {
			let reg = new RegExp(queryValue, 'g');
			pContent[item].innerHTML = pContent[item].innerHTML.replace(reg, `<span style='background: yellow'>${queryValue}</span>`)
		}
	}
}

closeBtn.onclick = function() {
	queryDialog.style.display = "none"
}

// 放大镜功能
let smallDiv = document.getElementById("smallDiv")
let smallImg = document.getElementById("smallImg")
let moveDiv = document.getElementById("move")
let bigDiv = document.getElementById("bigDiv")
let bigImg = document.getElementById("bigImg")
smallDiv.onmousemove = function(event) {
	// 获取鼠标并移动鼠标位置
	let x = event.pageX - smallDiv.offsetLeft - moveDiv.offsetWidth/2
	let y = event.pageY - smallDiv.offsetTop - moveDiv.offsetHeight/2
	if(x <= 0) {
		x = 0
	}else if(x > smallDiv.offsetWidth - moveDiv.offsetWidth) {
		x = smallDiv.offsetWidth - moveDiv.offsetWidth
	}
	if(y < 0) {
		y = 0
	}else if(y > smallDiv.offsetHeight - moveDiv.offsetHeight) {
		y = smallDiv.offsetHeight - moveDiv.offsetHeight
	}
	moveDiv.style.left = x + 'px'
	moveDiv.style.top = y + 'px'
	// 获取大图位置，并移动大图
	bigImg.style.left = - (x * bigImg.offsetWidth/smallImg.offsetWidth) + "px"
  bigImg.style.top = - (y * bigImg.offsetHeight/smallImg.offsetHeight) + "px"
}
smallDiv.onmouseover = function() {
	// 鼠标移入移动div和大图div显示
	moveDiv.style.display = "block"
	bigDiv.style.display = "block"
}
smallDiv.onmouseleave = function() {
	// 鼠标离开移动div和大图div不显示
	moveDiv.style.display = "none"
	bigDiv.style.display = "none"
}

// 手风琴
let liClass = document.getElementsByClassName('changeClass')
// 用原生js控制鼠标移入或离开鼠标控制类on，有缺陷
for(let i = 0; i < liClass.length; i ++) {
	liClass[i].onmouseover = function() {
		liClass[i].classList.add('on')
	}
	liClass[i].onmouseleave = function() {
		liClass[i].classList.remove('on')
	}
}

// 通过调用jq获取所有兄弟节点的方法控制类on
// $('.shouFengqin ul li').hover(function() {
// 	$(this).addClass('on').siblings().removeClass("on")
// })


