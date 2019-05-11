// // // var firstP = $("p").html();
// // // console.log(firstP)


// $("p").html("a href=`saasdas`>New link</a>");


// console.log($("p").text ("<a = href=dasdasd>AAA</a>"))


// // $("p").prepend("<a href=`/`>link</a>") в начало внутри
// $("p").before("<a href=`/`>link</a>")   за,перед
// $("p").after("<a href=`/`>link</a>")
// $("p").wrap("<a href=`/`>link</a>")

// console.log($("p").length)

// $("p").eq(1).text("some text")

// var test = $("p").eq(0).text()
// var arr = test.split("")
// for (var i = 0; i <arr.length; i++) {
// 	if (arr[i] == "sit"){
// 		arr[i] = "JQUERY"
// 	}
// }
// $("p").eq(0).text(arr.join(""))

// var tabelstar = "<tabel>";
// var endtabel ="</tabel>";
// var tabelBody = "";
// for(var i = 0; i < 8; i++){
// 	tabelBody +=`<tr><td>${i}</td></tr>`
// }
// var result = `${tabelstar}${tabelBody}${endtabel}`
// $("body").prepend(result)