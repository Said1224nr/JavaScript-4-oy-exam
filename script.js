alert(5 % 2)









alert(Math.round(Math.random() * 10))










alert(Math.floor(12.510))








let word = "MARS IT SCHOOL";
let countLetters = (word) => {
    return word.length;
}
let numberOfLetters = countLetters(word);
console.log(numberOfLetters);






let words = "MARS IT SCHOOL"
let printWordTenTimes = () => {
    for (let i = 0; i < 10; i++) {
        console.log(word);
    }
}

console.log(printWordTenTimes());






let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z"]
console.log(harflar);
console.log(harflar[17] + harflar[0] + harflar[7] + harflar[2] + harflar[0] + harflar[9] + harflar[1] + harflar[0] + harflar[16]);
















let YoshPR = +prompt('Yoshingizni kiriting !')

if (YoshPR > 18) {
    console.log("Siz balag'ot yoshiga yetgansiz !");
}

else if (YoshPR < 18) {
    console.log("Siz balag'ot yoshiga yetmagansiz !");
}


else {
    console.log("Balag'ot yoshi muborak bo'lsin !");    
}











let IsmPrompt = prompt("Ismingizni kiriting !")
let res = IsmPrompt.split('')
let res1 = res.reverse( )
let res2 = res1.join('')
console.log(result);
















let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = sonlar.filter((v) => v % 2 === 0)
console.log(result);