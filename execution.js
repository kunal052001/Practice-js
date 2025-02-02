// console.log(x);   error: x is not defined

// console.log(x);
// var x;             output:undefined

// console.log(x);
// let x;            //error:cannot access x befe initialization

//console.log(x);
//const x;            //Missing initializer in const declaration

// var x=5;
// a();
// b();
// console.log(x);

// function a(){
//     var x=10;
//     console.log(x)    // output 10  <- due to saprate execution context for function inside global exe 
// }                               100
// function b(){                   5
//     var x=100;
//     console.log(x)
// }


// var x=100;
// console.log(x);
// getname();                         // output: 100
//                                     //hay kunal
// function getname()
// {
//     console.log("hay kunal")
// }


//console.log(getname)       // output: [Function: getname]

//console.log(getname())      // output:  hay kunal
                                  //    undefined  

// function getname()
// {
//     console.log("hay kunal")
// }
// console.log(getname())    // output:  hay kunal
                          //    undefined  

// console.log(fun)    //output: undefined

// var fun=getname()   //output: hay kunal

// function getname()
//  {
//      console.log("hay kunal")
//  }

//>..............lexical Envirnment
// let a=10;
// var b=20;
// const c=11;
// function kunal()
// {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     amol()
//     function amol()
//     {
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
// }
// kunal()

    
// function kunal()
// {
//     let a=10;
//     var b=20;
//     const c=30;
// }
// //console.log(a);
// //console.log(b);
// //console.log(c);

// function kunal()
// {
//     function amol()  // function is treted as variable cannot use outside
//     {
//         console.log("kunal");
//     }
// }
// amol();
// error amol is not defined

//...............Syntax error.........
// let a=100;
// let a;             //error :SyntaxError: Identifier 'a' has already been declared

// const a=10;
// const a=1;              //error :SyntaxError: Identifier 'a' has already been declared

// let a;
// a=100;             //output:100
// console.log(a);

// const a;
// a=100;                //error:SyntaxError: Missing initializer in const declaration
// console.log(a);

// const a=1;
//var a=100;               //error:SyntaxError: Identifier 'a' has already been declared
//let a=10;

// console.log(a)

// ........reference errror............

// console.log(y)    //error :y is not defined

// console.log(y)         //error :ReferenceError: Cannot access 'y' before initialization
// let y=10;

//.......Type error..........
// const a=100;        cannot reinitialize
// a=20;               //error: TypeError: Assignment to constant variable.

// let a=100;
// a=20;              //output:  20;
// console.log(a)     we can reintialize let

// var a=20;
// a=90;                   //output : 90
// console.log(90)

//........lexical scope......... SCOPE ALONG WITH ITS PARENT SCOPE........SCOPE CHAIN
// let a=100;
// {
//     let a=111;       //console:111
//     {
//         let a=333;
//         console.log(a);   //333
//     }
// }

// const a=100;
// {
//     const a=111;       //console:111
//     {
//         const a=333;
//         console.log(a);   //333
//     }
// }

// var a=100;
// {
//     var a=111;       //console:111
//     {
//         var a=333;
//         console.log(a);   //333
//     }
// }

//...........shadowing
// const a=11;
// var b=22;
// let c=33;

// {   const a=10;
//     var b=20;
//     let c=30;
//     console.log(a)
//     console.log(b)
//     console.log(c)
    
// }
 
//     console.log(a)
//     console.log(b)
//     console.log(c)
    //output:10
// 20
// 30
// 11
// 20
// 33

    //.......shadowing not work for function scope

//     const a=11;
//     var b=22;
//     let c=33;
//     function kunal()
//     {   const a=10;
//         var b=20;
//         let c=30;
//         console.log(a)
//         console.log(b)
//         console.log(c)
        
//     }
//      kunal()
//         console.log(a)
//         console.log(b)
//         console.log(c)
// output:
// 10
// 20
// 30
// 11
// 22
// 33

//....illegal shadowing.....NOT ALLOWD
// let k=10;
// {
//     var k=30;
// }
// ..........Reverce allowed......
// var a=10;
// var k=22
// {
//     let a=30
//     const k=11;
// }

//...for function it allows ILLIGAL SHADOWING
// let k=10;
//  function kunal(){
//     var k=30;
// }

// ..........Reverce allowed......NO ERROR
// var a=10;
// var k=22
// function kunal() {
//    let a=30
//     const k=11;
//  }

//...........CLOSURE....
// function kunal(){
//     var a=10;
    
//     function y()
//     {
//         console.log(a);
//     }
//     return y;
// }
// //kunal() //return nothing
// // console.log(kunal())
// const k=kunal();
// console.log(k);
// k()
//........closure points reference not value
// function kunal(){
//     var a=10;
//     return function y()
//     {
//         console.log(a);
//     }
//    // a=44;// retuns a ref so 44 has become ref in global scope
//     // return y;
// }

// kunal()

// kunal()
// function kunal()
// {   
    
//     console.log(a);        //same for const and var
//     let a=10
// }                          //output:Cannot access 'a' before initialization

// kunal()
// function kunal()
// {   
//     let a=10
//     console.log(a);        //same for const and var
    
// }                          //output:10


// var kunal=function()
// {     console.log(a)           //output:undefined
//     let a=100;                 //for const and let = error
   
// }
// kunal()
//.......................................................
// kunal()           //error :kunal is not a function
// var kunal=function()
// {               
//     let a=100;                 output :100
//     console.log(a) 
// }
// kunal()

// console.log(kunal)
// var kunal=function()
// {                                //output :undefined
//     let a=100;                 //error:let and const error
//     console.log(a) 
// }

// var kunal=function()
// {               
//     let a=100;                 //output:[Function: kunal]
//     console.log(a) 
// }
// console.log(kunal)

// var kunal=function()
//  {               
//      let a=100;                 //output:100
//                                  // undefined
//      console.log(a)             //same for let const
//  }
//  console.log(kunal())

// console.log(kunal())
// var kunal=function()
//  {               
//      let a=100;                 //output:TypeError: kunal is not a function
//      console.log(a) 
//  }

// kunal()
// var kunal=function()
//  {               
//      let a=100;                 //output:TypeError: kunal is not a function
//      console.log(a) 
//  }
 