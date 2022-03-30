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