
//FOREACH
//перечисляет элементы массива отдельно и выполняет с каждым действие которое мы задали (функцию)const food = [ "apple", 'potato','meaty', 'beet']
const food = [ "apple", 'potato','meaty'];
food.forEach((element) =>{
console.log(' need for the recept:' + element )});

// need for the recept:apple
//need for the recept:potato
//need for the recept:meaty
//need for the recept:beet

//map
//применяет функцию для каждого элемента который находится в массиве, он выводит измененный масив
let numbers = [10, 20, 30, 33, 4];
let numbers2 = numbers.map((elem) =>{
    return elem * 2;
});
console.log(numbers2);

// [20, 40, 60, 66, 8]

//filter
//фильтрует элем масива и оставляет только который подходит под условияя
let  temp = [+30, -5, +25, +10, 7, -20];
let tempSummer =temp.filter((degrees)=>{
    if(degrees >=10){
        return true;
    } else {
        return false;
    }
});
console.log(' летние температуры: +' + tempSummer.join(" +"));

//летние температуры: +30 +25 +10

// reduce 
// редуцировать ; сокращение, уменьшение в размерах либо упрощение, то есть приводит к одному значению
let gradesInPE = [90, 95, 100, 87, 90, 70, 89, 95];
let semesterGrades = gradesInPE.reduce((counter, grade) => counter + grade, 0) / gradesInPE.length;
console.log("Средний балл по физре:" + semesterGrades.toFixed(0))

//Средний балл по физре:90

//sort 
// лексически/логически сортирует наш массив изменяя последовательность элементвом
let randomWords = ['капуста','собака','звуки','кость','актив', "фуфел"]
console.log(randomWords.sort());
//['актив', 'звуки', 'капуста', 'кость', 'собака' "фуфел"]
let randomNum = [ 5, 7 ,1 ,45, 2223, 89, 0 ,16543]
console.log(randomNum.sort()) 
//[0, 1, 16543, 2223, 45, 5, 7, 89] вывел такой порядок потому что он смотрит тольок на первую цифру, как текст 