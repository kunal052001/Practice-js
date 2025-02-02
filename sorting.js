//BUBBLE SORT
// const ar=[44,22,77,88,55,11]
// console.log(ar)
// for(i=0;i<=ar.length;i++)
// {
//     for(j=0;j<=ar.length;j++)
//     {
//         if(ar[i]<=ar[j])
//         {
//             temp=ar[j]
//             ar[j]=ar[i]
//             ar[i]=temp
//         }
//     }
// }
// console.log(ar)


// const arr=[33,11,88,55,66,22]
// console.log(arr);

// function divide(ar)
// {
//       if(ar.length<=1)
//         return ar
//       const mid=Math.floor(ar.length/2);
//       const right=divide(ar.slice(0,mid))
//       const left=divide(ar.slice(mid))
//       return merge(left,right)
// }
// function merge(left,right)
// {let arrr=[]
//     while(left.length&&right.length)
//     {
//     if(right[0]<left[0])
//     {
//         arrr.push(right.shift());
//     }else{
//         arrr.push(left.shift());
//     }
//    }
//    return[...arrr,...left,...right]
// }
// const out=divide(arr)
// console.log(out)