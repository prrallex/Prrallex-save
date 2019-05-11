//$("#result").click(function(event){
//	$("#plus").remove()
//});
//empty уберает текст но не скрипт
//remove уберает все




var result=0;

$("#plus").click(function(event){
    if (result > 9) {
        result = -1;
    }
    $("#result").text(result = result+1)
});
$("#minus").click(function(event){
    if (result < 1) {
        result = 11;
    }
    $("#result").text( result = result-1)
    
});
$("#result").click(function(event){
    $("#result").text(result = 0)
});
    


// 2$("#btn").click(function(event){
// 	$("div").addClass('red');
// })	;
// $("#btn").click(function(event){
// 	$("div").removeClass();
// })	;



//2.removeClass удаляет


// 2var arr = ["red","green","orange","gold"];
// var color = 0;
// $("#btn").click(function(event){
// 	if (color < arr.length){
// 		$("div").removeClass(arr[color-1])
// 		$("div").addClass(arr[color++])
// 	}
// 	else{
// 		$("div").removeClass(arr[color.length-1])
// 		$("div").addClass(arr[color = 0])
// 	}
// });


//$("#btn").click(function(event){
	//$("#conteiner").toggleClass('toggle');
	//event.preventDefault();  //отмена дефолт значения
	//console.log($(this).attr('href'));
	//console.log($(this).removeAttr('href').attr('data-item','/'));
	//$(this).css('color','red')
//})


// var statement = true;
// $("#btn").click(function(event){

// 	for (var i = 0; i < $("a").length; i++) {

// 		if($("a").eq(i).attr('href') == "https://www.infopulse.com"){
// 			$("a").eq(i).toggleClass('toggle');
// 			if (statement) {
// 				$(this).text("Show infopulse links")
// 				statement = false
// 			}else{
// 				$(this).text("Show infopulse links")
// 				statement = true
// 			}
// 		}
		
// 	}
// });