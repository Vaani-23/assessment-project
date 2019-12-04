var i=2000;
var counter = 500;
function onl(){
	var url='https://pixabay.com/api/?key=14424547-076abe466bf03bd2938fbd76a'
		var xhr=new XMLHttpRequest()
		xhr.open('GET',url)
	    xhr.onreadystatechange=test
	    function test(){
			if(this.status==200 && this.readyState==4)
			{
				var text = '';
				var res_data=JSON.parse(this.responseText);
				var k = 0;
				res_data.hits.forEach(pic=> {
					if(k==0){
						k=3;
						text+="</tr><tr>"
					}
					if(k!=0){
						text+="<td><img src='"+pic.webformatURL+"' id='singleimg'></td>";
						k=k-1;
					}
					
				})
				console.log(text);
				document.getElementById("wrapper").innerHTML = text;
				console.log(text);
				changeback();
			}
		}
	xhr.send();
}
function changeback() {
  var x = document.getElementById("myheader");
  setTimeout(function(){ x.style.backgroundImage="url('./images/back2.jpg')"; console.log("1"); },i);
  i=i+2000;
  setTimeout(function(){ x.style.backgroundImage="url('./images/back3.jpg')"; console.log("1"); },i);
  i=i+2000;
  setTimeout(function(){ x.style.backgroundImage="url('./images/back4.jpg')"; console.log("1"); },i);
  i=i+2000;
  setTimeout(function(){ x.style.backgroundImage="url('./images/back1.jpg')"; console.log("1"); },i);
  i=i+2000;
  counter = counter-1;
  if(counter!=0)
  {
  	setTimeout(changeback(),i);
  }
}
function findvideo() {
	console.log("called");
	var url='https://pixabay.com/api/videos/?key=14442164-ec41c057c380cbba2d2a64533'
		var xhr=new XMLHttpRequest()
		xhr.open('GET',url)
		xhr.onreadystatechange=test
		function test(){
			if(this.status==200 && this.readyState==4)
			{
				var k=0;
				var text = '';
				var res_data=JSON.parse(this.responseText);
				res_data.hits.forEach(pic=> {
					if(k==0){
						k=3;
						text+="</tr><tr>"
					}
					if(k!=0){
						text+="<td><a href="+pic.videos.large.url+"><img src='https://i.vimeocdn.com/video/"+pic.picture_id+"_640x360.jpg' id='singleimg'></a></td>";
						k=k-1;
					}
					
				})
				document.getElementById("wrapper").innerHTML = text;
				console.log(text);
				changeback();
			}
		}
	xhr.send();
}
function searchdata(){
	var tos = document.getElementById('search').value;
	console.log(tos);
	for(var i=0;i<tos.length;i++)
	{
		if(tos[i]==' ')
		{
			tos[i]='+';
		}
	}
	var url='https://pixabay.com/api/?key=14424547-076abe466bf03bd2938fbd76a&q='+tos;
		var xhr=new XMLHttpRequest()
		xhr.open('GET',url)
	    xhr.onreadystatechange=test
	    function test(){
			if(this.status==200 && this.readyState==4)
			{
				var text = '';
				var res_data=JSON.parse(this.responseText);
				var k = 0;
				res_data.hits.forEach(pic=> {
					if(k==0){
						k=3;
						text+="</tr><tr>"
					}
					if(k!=0){
						text+="<td><img src='"+pic.webformatURL+"' id='singleimg'></td>";
						k=k-1;
					}
					// text += "<div class='item' data-w='640' data-h='426' style='width: 387px; height: 258px; display: block;'><img src='"+pic.webformatURL+"' id='singleimg'></div>";
				})
				console.log(text);
				document.getElementById("wrapper").innerHTML = text;
				console.log(text);
				changeback();
			}
		}
	xhr.send();
}
function searchdatavid(){
	var tos = document.getElementById('search').value;
	console.log(tos);
	for(var i=0;i<tos.length;i++)
	{
		if(tos[i]==' ')
		{
			tos[i]='+';
		}
	}
	var url='https://pixabay.com/api/videos?key=14424547-076abe466bf03bd2938fbd76a&q='+tos;
		var xhr=new XMLHttpRequest()
		xhr.open('GET',url)
	    xhr.onreadystatechange=test
	   function test(){
			if(this.status==200 && this.readyState==4)
			{
				var k=0;
				var text = '';
				var res_data=JSON.parse(this.responseText);
				res_data.hits.forEach(pic=> {
					if(k==0){
						k=3;
						text+="</tr><tr>"
					}
					if(k!=0){
						text+="<td><a href="+pic.videos.large.url+"><img src='https://i.vimeocdn.com/video/"+pic.picture_id+"_640x360.jpg' id='singleimg'></a></td>";
						k=k-1;
					}
					
				})
				document.getElementById("wrapper").innerHTML = text;
				console.log(text);
			}
		}
	xhr.send();
}