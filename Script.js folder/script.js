//initialize empty arrays for even and odd numbers
//loop through each element in the input array 
//add element to the even array 
//add element to the odd array
//print the contents of the even arrays

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let oddarray =[];
let evenarray =[];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenarray.push(array[i]);
    } else {
        oddarray.push(array[i]);
    }
}

console.log(evenarray);