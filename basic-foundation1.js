function buildArr(){
    var arr = [];
    for (var i = 1; i <= 255; i++){
        arr.push(i);
    }
    return arr;
}

var result = buildArr(); 
 console.log(result);

///////////////////////////////////////

function eSum(){
    var sum=0;
    for (var i=1; i<=1000; i++){
        if (i%2==0){
            sum=sum+i;
        }
    }
    return sum;
}

var evenSum = eSum();
console.log(evenSum);

////////////////////////////////////////

function oddSum(){
    var sum=0;
    for (var i=1; i<=5000; i++){
        if (i%2==1){
            sum=sum+i;
        }
    }
    return sum;
}

var y = oddSum();
console.log(y);

////////////////////////////////////////

function Z(arr){
    var sum=0;
    for (var i=0;i<arr.length;i++){
        sum=sum+ arr[i];
    }
    return sum;
}

var iterArray = Z(arr);
console.log(iterArray);

//////////////////////////////////////

function mArr(arr){
    var max=0;
    for (var i=0; i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

var Max=mArr(arr);
console.log(Max);

///////////////////////////////////////

function avgArr(arr){
    var sum=0;
    for (var i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    sum=sum/arr.length;
    return sum;
}

var avg = avgArr(arr);
console.log(avg);

///////////////////////////////////////

function odd(){
    var newarrOdd=[];
    for (var i=1; i<=50; i++){
        if(i%2==1){
            newarrOdd.push(i);
        }
    }
    return newarrOdd;
}


var arrOdd=odd();
console.log(arrOdd);

//////////////////////////////////////////

function great_Y(arr,Y){
    var count=0;
    for (var i=0; i<arr.length; i++){
        if(arr[i]>Y){
            count=count+1;
        }
    }
    return count;
}

var countArr=great_Y(arr,Y);
console.log(countArr);

//////////////////////////////////////////

function square(arr){
    for (var i=0; i<arr.length; i++){
        arr[i]=arr[i]*arr[i];
    }
    return arr;
}

var squares = square(arr);
console.log(squares);

/////////////////////////////////////////

function negative(arr){
    for (var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}

var Negative = negative(arr);
console.log(Negative);

///////////////////////////////////////

function maxminavg(arr){
    var max=0;
    for (var i=0;i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    var min=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    var avg=sum/arr.length;
    var newArr=[max, min, avg];
    return newArr;
}
var MaxMinAvg=maxminavg(arr);
console.log(MaxMinAvg);

//////////////////////////////////

function swap(arr){
    var counter = arr[arr.length-1]
    arr[arr.length-1]=arr[0];
    arr[0] = counter;
    return arr;
}

var Swap=swap(arr);
console.log(Swap);

///////////////////////////////////

function string(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]="Dojo";
        }
    }
    return arr;
}

var String=string(arr);
console.log(String);

