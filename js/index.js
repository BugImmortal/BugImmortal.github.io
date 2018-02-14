var str;
var str2;
function f1(id){
	
	//alert(id+"1");
	str = id;
	str2 = str.replace('i','j');
	document.getElementById(str2).style.display= 'block';
	document.getElementById('fade').style.display= 'block';
}
function f2(){
	document.getElementById(str2).style.display='none';
	document.getElementById('fade').style.display='none';
}