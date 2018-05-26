var n=100;
function  num (n) {


  for (var i = 1; i <= n; i++) {
    if(i%15==0){
      console.log("FizzBuzz");
    }
    else if (i%5==0){
      console.log("Buzz");
    }
    else if (i%3==0){
      console.log("Fizz");
    }
    else console.log(i);
  }
  console.log("Cycle#1");

}

function num_2(n){
  var a=0;
  while(a<101){
    if(a%15==0){
      console.log("FizzBuzz");
    }
    else if (a%5==0){
      console.log("Buzz");
    }
    else if (a%3==0){
      console.log("Fizz");
    }
    else console.log(a);
    a++

  }
  console.log("Cycle#2");

}

  function num_3(n){
  var b=0;
  do{
    if(b%15==0){
      console.log("FizzBuzz");
    }
    else if (b%5==0){
      console.log("Buzz");
    }
    else if (b%3==0){
      console.log("Fizz");
    }
    else console.log(b);
    b++
  }
  while (b<101)
   console.log("Cycle#3");

  }



num(n);
num_2(n);
num_3(n);
