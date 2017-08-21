function sumFibs(num) {
 var m=0;
 var n=1;
 var fibb;
 var sum = [0,1];
 var totalsum=0;
 for(var i=1;i<=num;i++){
   fibb = m+n;
   m = n;
   n = fibb;
   sum.push(fibb);
 }
 for (var j = 0;j < sum.length; j++){
   if(sum[j] <= num && sum[j]%2 != 0){
     totalsum = totalsum + sum[j];
   }
 }
 return totalsum;

}

sumFibs(75025);
