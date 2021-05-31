var str = 'Java Script';
console.log(str.length);
console.log(str.charAt(2));
console.log(str.includes('Java'));

var str2 = 'Hello Aysegul, welcome to JavaScript world!'
console.log(str2.indexOf('JavaScript'));
console.log(str.indexOf('JavaScript',27));

var replaced =str2.replace('JavaScript', 'React');
console.log(replaced);

var arr = str2.split(' '); //if you put one space inside of the parentheses it writes the word by one by with quotation
console.log(arr);

console.log(str2.substring(0,5));
console.log(str2.substring(6,10)); //(from, to)
console.log(str2.substr(6,4));  //(from, length)
