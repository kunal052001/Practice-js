// let arr=[44,22,99,55,6,71]
// console.log(arr)
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }
// arr.forEach((ar)=>console.log(ar))

// ____________ IN RETURN INDEX____________
// for(let k in arr)
// {
//     console.log(k)
// }
// output: 
// 1
// 2
// 3
// 4
// 5

// ____________RETURNS VALUE_____________
// for(let k of arr)
// {
//     console.log(k)
// }
// output:
// 44
// 22
// 99
// 55
// 6
// 71


// __________MAP________


// arr.map((kunal)=>console.log(kunal))

// ______________REVERSING AN ARRAY

// const arr=[10,20,30,40,50,60]
// console.log(arr)

// console.log(arr.reverse())
// arr.forEach((ele)=>console.log(ele))
// const arr2=[]
// for(let i=arr.length-1; i>=0; i--)
// {
//       arr2.push(arr[i])
// }
// console.log(arr2)

// const arr=[10,20,30,40,50,60]
// console.log(arr)
// // console.log(arr.pop())

// // console.log(arr)

// // console.log(arr.shift())
// // console.log(arr)

// console.log(arr.splice(1,0,99))
// console.log(arr)

// arr.splice(2,1)
// console.log(arr)

// ______________REMOVE DUPLICATE______________

    // USING SET
    // const arr = [10, 10, 55, 55, 8, 3, 22, 22];
    // console.log(arr); // Output: [10, 10, 55, 55, 8, 3, 22, 22]
    
    // const ar = new Set(arr); // Creates a Set, which automatically removes duplicate values
    // console.log([...ar]); // Converts the Set back to an array and logs the unique values
    

// const newarr=[]
// arr.forEach((k)=>{
//    if(!newarr.includes(k))
//    {
//        newarr.push(k)
//    }
// })
// console.log(newarr)

// ______________WHICH ELEMT HAS APPERED HOW MANY TIMES____________________

// let arr=[11,44,22,44,11,11,11,99,22,77,99,55]
// console.log(arr)

// const obj={}
// arr.map((ar)=>{
//     obj[ar]=(obj[ar] || 0)+1;
// })
// console.log(obj)


// ______________COUNT vovels constont space________________
str="adfjjfj JFDSAH fldjosjhaLJJLLOSHD CJ MMCV,BIUYRWUOTIP IYQPROWUDMXBVCBNXMZ,QWERTYUIOPASDFGHJKLZXCVBNM,ASDFGHJKLQWERTY   hsdfjh  y yoi A kdh   yeaifyaU HAWUJWMM,VF    AOUHSKZ  ";
// let vowelo=0, space=0,consonat=0;
// let vowels="aeiouAEIOU"
// for( let char of str){
//     if(vowels.includes(char))
//         vowelo++;
//     else if(char===" ")
//         space++;
//     else if(char.match(/[a-zA-Z]/))
//         consonat++;

// }
// obj={vovelscount:vowelo,spacecount:space,consonantcount:consonat}
// console.log(obj)

// ____mehtos 2:


// const vowels = str.match(/[AEIOUaeiou]/g) || [];
// const spaces = str.match(/\s/g) || [];
// const consonants = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || [];

// let obj = {
//     vowels: vowels.length,
//     spaces: spaces.length,
//     consonants: consonants.length
// };

// console.log(obj);


//____________USING REDUCE_____________

// let amigo=str.split('').reduce((acc,itr)=>{
//    if(itr.match(/[AEIOUaeiou]/g))
//     acc.vovels++;
//    else if(itr===" ")
//     acc.space++;
//    if(itr.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWZYZ]/g))
//     acc.consonat++;
//   return acc;

// },{vovels:0,consonat:0,space:0})
// console.log(amigo)

// -------------------REVERSE STRING--------------

    // const amol="kkkaaammmm"
    // let vale= amol.split('')
    // var empty;
    // for(var i=vale.length; i>=0; i--)
    // {
    //     empty+=vale[i];
    // }
    // console.log(empty)
    
    // __________PROGRAM TO REMOVE WHITE SPACES____________
// function space(str)
// {
//     return str.replace(/\s+/g,' ')
   
// }
// let kk="        s dffj     fjdsl       "
// let amg=space(kk)
// console.log(amg)

//SECOND METHOD
// function space(str)
// {
//     return str.split(' ').filter((arg)=>arg!=="").join(" ")
    
// }
// let kk="        s dffj     fjdsl       "
// let amg=space(kk)
// console.log(amg)

// let kunal="aaiioouuhhkkkkk"
// METHOD 1
// console.log(kunal.replace(/[AEIOUaeiou]/g,""))

//METHOD 2
// let k=kunal.split('').filter(amg=>!'AEIOUaeiou'.includes(amg)).join("")
// console.log(k)

//METHOD 3
// let amigo=""
// for(let char of kunal)
// {
//      if(!"AEIOUaeiou".includes(char))
//         amigo+=char
// }
// console.log(amigo)

// ----CHARCODE AT INDEX---------
// let kunal="aabsfdkhs"
// console.log(kunal.charCodeAt(2))
// const kkk=kunal.split('').map((amg)=>{
//     return amg.charCodeAt(0)})
// // or
// // split('').map(char => char.charCodeAt(0))
// console.log(kkk)