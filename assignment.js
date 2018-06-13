//By Parikshit Verma

//ques1
function btd(n){
    ans=0
    for(i=(n.length-1);i>=0;i--){
        if(n[i]=='1')
            ans=ans+Math.pow(2,(n.length-i-1))
    }
    console.log(ans);
}

btd('1000');

//ques2
function dtbho(n){
    var bin,oct,hex;
    bin=(n).toString(2);
    oct=(n).toString(8); 
    hex=(n).toString(16);
    console.log(bin)
    console.log(oct)
    console.log(hex)
}
dtbho(15);

//ques 3
function genrand(){
var randint;
randint=parseInt(Math.random()*1000)
console.log(randint);
}
genrand()

//ques 4
 function parsetodecimal(n,d){
     var x=parseFloat(n).toFixed(d);
     console.log(x)
 }

parsetodecimal(1.3452,2)

//ques 5 and 6
var exar=[5,12,23,2,1,2,3,33,44];
function printval(arr){
    
    console.log(Math.max.apply(null,exar));
    console.log(Math.min.apply(null,exar));
}

printval(exar);

//ques7
function gcd(a,b){
    var d,tem;
    if(b>a){
        tem=a
        a=b
        b=tem
    }
    while(b){
        d=Math.abs(a%b)
        a=b
        b=d
    }
    console.log(a)
}

gcd(12,20)

//ques8
function check2pow(n){
    var x;
    while(true){
        x=n/2
        if(x==1){
        return 'power of 2'
        }
        if(x%2!=0)
            return 'not power of 2'
        n=x
    }
}
console.log(check2pow(26))

//ques10
  function promail(mail) {
    
    var split,p1, p2;
    split =mail.split("@");
    p1 = split[0];
    p1 = p1.substring(0,4);
    p2 = split[1];
    return p1 +"..@"+p2;
};
console.log(promail("robin_singh@example.com"));

//ques11
function cap1(n){
    console.log(n[0].toUpperCase()+n.slice(1))
}

cap1('bob')

//ques12
function regre(a,b){
    if(a>b)
        return a
    return b
}

console.log(regre(6,10))

//ques13
sr=[80,88,78,95,68]
function computeavg(s){
    var k=0,avg;
    for(i in s){
        k=k+s[i]
    }
    avg=k/(s.length);
    if(k>90)
        return 'A'
    if (k>80 && k<=90)
        return 'B'
    if (k>70 && k<=80)
        return 'C'
    if (k>60 && k<=70)
        return 'D'
    if (k>50 && k<=60)
        return 'F'  
}

console.log(computeavg(sr));

//ques14
function pattern(n){
    var x='';
    for(i=0;i<n;i++){
        for(j=0;j<=i;j++){
            x=x+'*'
        }
        console.log(x)
        x=''
    }
}

pattern(5)

//ques15

function combi(s){
    var list = []; 
    for(i=0;i<s.length;i++){ 
        for(j=i+1;j<s.length+1;j++){
            list.push(s.slice(i, j));
        } 
    } 
    return list;
}


console.log(combi('ABCD'))


