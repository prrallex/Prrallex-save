// localStorage.setItem('name','Joke')
if(localStorage.getItem('value')){
	$("h1").text(localStorage.getItem('value'))
}
$("#go").click(function(event) {
	var value = $("#input").val()
	localStorage.setItem('value',value)
});