//parikshit
function aq(x,z){
    return x*z;
}
console.log(aq(5,4))

console.log(('bob'+'ver').length)

//ques4
var st="Please locate where 'locate' occurs!";
function firstin(n){
    var k=0,t=0;
    var wh='where'
    for(i=0;i<n.length;i++){
        if(wh[k]==n[i])
            k=k+1
        else{
            k=0
        }
        if(k==wh.length){
            t=i
            break
        }
    }
    return t-wh.length+1
}
console.log(firstin(st))

function lastin(n){
    var k=0,t=0;
    var wh='etacol'
    for(i=n.length-1;i>=0;i--){
        if(wh[k]==n[i])
            k=k+1
        else{
            k=0
        }
        if(k==wh.length){
            t=i
            break
        }
    }
    return t
}
console.log(lastin(st))
const result=lastin(st)

console.log(st.slice(result,result+6))
var mir="Please visit Microsoft!"
var strn=mir.replace('Microsoft','Google')
console.log(strn)

var hel='Hello world'
console.log(hel.toUpperCase())
console.log(hel.toLowerCase())

var helar=[]
for(i in hel){
    helar.push(hel[i])
}
console.log(helar)

var fruit=['fsdf','ha','na','est']

fruit.push('new')
fruit.splice(fruit.indexOf('ha'),1)
fruit[0]='changed'
fruit[4]='new element'
var emp=''
for(i in fruit){
    emp=emp+fruit[i]
}
console.log(fruit)
console.log(emp)

var sd=7.65
console.log(Math.round(sd))
console.log(Math.sqrt(sd))
console.log(Math.round((Math.random()*100)%9))
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
console.log(points)
