var array = ["Пушок","Барсик","Рыжик"];
array.pop();//убирает последний елемент
console.log(array);
array.push("Кит","Слон","Яблоко",77,true,["String","String2"]);//добавляет последователный элемент
console.log(array);
array.shift();
console.log(array);
array.unshift("Слон","Яблоко",false);
console.log(array);











// for (i = 0;i < array.length; i++ ){
// 	if (array[i] == "Барсик"){
// 		console.log(`У меня есть ${array[i]} Мурка `);
// 	}
// 	if (array[i] == "Рыжик"){

// 	}
// 	if (array[i] == "Пушок"){
// 		console.log(`У меня есть ${array[i]}`); 
// 	}
// }