https://bugimmortal.github.io/index.htmlvar input ;
var v1;
var v2;
function f1(){
	input = document.getElementById("code");
	v1 = input.defaultValue;
	v2 = input.value;
	if(v2 == v1){
		input.value = "";
	}
	input.id="code1";
}
function f2(){
	var v3 = input.value;
	if(v3==""){
		input.value = v1;
	}
	input.id="code";
}

var input1 ;
var v11;
var v21;
function f3(){
	input1 = document.getElementById("pwd");
	v11 = input1.defaultValue;
	v21 = input1.value;
	if(v21 == v11){
		input1.value = "";
	}
	input1.id="pwd1";
}
function f4(){
	var v31 = input1.value;
	if(v31==""){
		input1.value = v11;
	}
	input1.id="pwd";
}

function jump(){
	if(input.value=="亲爱的牛牛" && input1.value=="1314"){
		window.location.href="https://bugimmortal.github.io/enter.html";

	}else{
		alert("帐号或密码错误");
	}
}
/*
var aInp =0 ;
var v1 = 0;

function f1(){
	aInp = document.getElementById("code");
	 v1 = aInp.value;
	alert(v1);
}
*/
