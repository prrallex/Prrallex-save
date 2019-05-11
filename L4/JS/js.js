// var array = ["кошка","собака","заяц","лиса"," терминатор"];


// // for (i = 0;i < array.length; i+=2){
// // 	console.log( array[i]);
// // }


// for (i = 0;i < array.length; i++){
// 	if (i%2 == 0 || i == 0) {
// 	console.log( array[i]);}
// }
















// var array = [];
// var num = prompt("Ведите количество покупок", "");
// // cancel = null
// for (i = 0;i < num; i++){
// 	var goods = prompt("Ведите название покупки", "");
// 	if (goods === null) {
// 		var messange = confirm("Разгрузить карзину")
	
// 	if (messange === true) {
// 		array = "Корзина пуста!";
// 	}
// 		break;
// 	}
// 	else {
// 		array.push(goods);
// 	}
// }
// console.log(array)










// alert("первий ряд \nвторой ряд")

// var text = "some text";
// var textUpper = text.SLICE();
// console.log(textUpper);


var num = prompt("Ведите текст", "");
var text = "";
for (var i = num.length - 1; i >= 0; i--) {
	text = text + num [i];
}
console.log(text);