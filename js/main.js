    "use strict"
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let arrEven = [];
    let arrOdd = [];
    
    arr.forEach(function(item){
      let result = (item%2>0) ? arrOdd.push(item) : arrEven.push(item);
    });

    console.log ("Задание № 1");
    console.log ("arr", arr);
    console.log ("arrEven", arrEven);
    console.log ("arrOdd", arrOdd.reverse());
    /////
    let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let resultSum = 0;
    arr2.forEach(function(item){
        resultSum += item;
    });
    
    console.log ("Задание № 2");
    console.log ("arr", arr2);
    console.log ("Sum", resultSum);
    /////
    let arr3 = [...Array(30)].map(_=>Math.round(Math.random()*20-10));
    let resultMin;
    let resultMax;
    let arr3Ascending = [...arr3];
    let arr3Descending = [...arr3];
    let arrUser = [];
    let userNumber = 7;
    
    
    arr3.forEach(function(item){
      result += item;
    });
    
    resultMin = Math.min.apply(null, arr3)
    resultMax = Math.max.apply(null, arr3)
    arr3Ascending.sort((a, b) => a - b);
    arr3Descending.sort((a, b) => b - a);
    
    console.log (arr3);
    console.log (resultMin);
    console.log (resultMax);
    console.log (arr3Ascending);
    console.log (arr3Descending);
    