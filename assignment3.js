var stud={
    roll:123,
    name:'bob',
    sclass:'V1'
}
delete stud.roll
console.log(stud)

console.log((Object.keys(stud)).length)

stud.method=function(){
    console.log('new method')
}

stud.method()
var exar=[5,12,23,2,1,2,3,33,44];

function secondlar(arr){
    var a=arr[0]
    var b=0
    for (i=1;i<arr.length;i++){
        if(arr[i]>a){
            b=a
            a=arr[i]
        }
    }
    console.log(b)
}
secondlar(exar)

function union(arr1,arr2){
   var asn=[]
   for(i=0;i<arr1.length;i++){
       if(asn.indexOf(arr1[i])==-1){
           asn.push(arr1[i])
       }
   }
    for(i=0;i<arr2.length;i++){
       if(asn.indexOf(arr2[i])==-1){
           asn.push(arr2[i])
       }
   }
    console.log(asn)
}

union([1,2,3,3],[7,8,1,2])

function checarr(n){
    if(n.constructor===Array){
        return 'Array'
    }
    return 'Not array'
}

console.log(checarr(exar))

function ret(arr,n=1){
    ans1=[]
     if(n>=arr.length)
         return arr;
     for(i=0;i<n;i++)
         ans1.push(arr[i])
    return ans1;
 }

console.log(ret([],3))

function mostfreq(arr1){
    var x=0,k=1,ans='';
    for (var i=0; i<arr1.length; i++)
    {
      for (var j=i; j<arr1.length; j++)
        {
         if (arr1[i] == arr1[j])
            x++;
            if (k<x)
             {
            k=x; 
            ans= arr1[i];                 }
        }
        x=0;
    }
   return [ans,k]
}
var ans=mostfreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])
console.log(ans[0]+"( " +ans[1] +" times ) ")

function addpro(arr){
    
    var sum=0,pro=1;
    for(i=0;i<arr.length;i++)
        sum=sum+arr[i]
    for(i=0;i<arr.length;i++)
        pro=pro*arr[i]
    console.log('sum is',sum,'product is',pro)
}

addpro(exar)

var arrbl=[]
function additem(n){
    arrbl.push(n)
    for(i=0;i<arrbl.length;i++)
        console.log(arrbl[i])
}

additem(67)

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]
function trav(n){
    for(i=0;i<a.length;i++)
        for(j=0;j<a[i].length;j++){
            console.log('Row'+(i+1),a[i][j])
        }
}
trav(a)

var jukn=[NaN,0, false, '',undefined, null]
var fa=[NaN, 0, 15, false, -22, '',undefined, 47, null]

function remjunk(n){
    for(i=0;i<n.length;i++){
        if(jukn.indexOf(n[i])!=-1 || !n[i])
            n.splice(n.indexOf(n[i]),1);
    }
    return n.filter(Boolean)
}
console.log(remjunk(fa))
function uppcase(str)
{
   regexp = /^[A-Z]/;
   if (regexp.test(str))
    {
      console.log("uppercase");
    } 
    else
    {
      console.log("not uppercase");
    }
}
uppcase('Abcd')

function namz(n){
    regexp=/[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
    if(regexp.test(n))
     console.log("allowed"); 
    else{
     console.log("noo not allowed");   
    }
}
namz(2334)

function numva(n){
    regexp=/[0-9]/
    if(regexp.test(n))
     console.log("Numerical allowed"); 
    else{
     console.log("not allowed");   
    }
}
numva('abcd')


function checkurl(n){
    regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
    if(regexp.test(n))
        console.log('true')
    else{
        console.log('false')
    }
}
checkurl('https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php')





