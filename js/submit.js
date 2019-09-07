var a = document.getElementsByTagName("input")[0].value;
var b = document.getElementsByTagName("input")[1].value;

function submit(){
	if (a='user' && b='123') {
		window.location.href="../jspUser/UserIndex.jsp"; 
	}
	else if (a='admin' && b='123'){
		window.location.href="../jspDLGS/DLGSIndex.jsp"; 
	}
}
