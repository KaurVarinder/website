// 1.) Creating a promise

// Promise has more priority then callback. That is why resolve get printed first.
console.log('START');
const pr = new Promise((resolve, reject)=>{
    //  ....
    let flag = true;
    // ....
    if(flag===true){
        setTimeout(()=>{
            resolve(["aaple", "mango"])
        }, 9000);
    }
    else{
        reject("Not Done");
    }
});

console.log('MID');

// Callback less priority then promise. That is why Hello print later.
setTimeout(() => {
    console.log("Hello");
}, 4000);

// Telling state of promise : fullfilled, pending, rejected.
console.log(pr);
console.log(pr);

// 2.) Handling Promise
pr.then((val)=>{
    console.log('+++', val);
}).catch((err)=>{
    console.log(err);
})
console.log('END');


// ----------------------------------------------------------------------------------------------------------

// setTimeOut and setInterval(repeatedly) and clearInterval
const cb = () =>{
    console.log("Done");
};

const time =1000;

setTimeout(cb, time);
setInterval(cb, time);

// ---------------

let cnt =0;
let id;

const cback=()=>{
    cnt++;
    console.log("Done", cnt);
    if(cnt==4){
        clearInterval(id);
    }
};

const t = 1000;
id = setInterval(cback, t);

// splice

const arr = ['A', 'B', 'C', 'D'];
arr.splice(2, 1);
console.log(arr);

// forrEach() does not return but map() return and filter() return which is true or work on condition

const res1 = arr.forEach((a, b, c)=>{
    console.log(a, b, c);
    return "OK"; 
})

const res2 = arr.map((a, b, c)=>{
    console.log(a, b, c);
    return "OK"; 
})

console.log(res1);
console.log(res2);

if(arr==res2){
    console.log("OK");
}
else{
    console.log("Not OK");
}


// ---  filter()  ---
const a = ['A', 'B', 'C', 'D'];
const res3 = a.filter((a, b, c)=>{
    if(a.length==1){
        return True;
    }
    else{
        return False;
    }
})
