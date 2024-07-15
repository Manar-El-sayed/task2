// first task

var numbers =[10,2,5,7,3];
var sum =0;
for(let i = 0; i <numbers.length ; i++){
    sum+=numbers[i];
}
console.log(sum);

// second task

var input = document.getElementById("element");
var add = document.getElementById("btn");
var text = document.getElementById("parag");
   function addToList(){
    parag.innerHTML+=input.value + " " ;
   }
   add.onclick = addToList;
