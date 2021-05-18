function simplicity_test(a){
    let answer = true;
    let end_check = Math.ceil(Math.sqrt(a));
    for(let i=2; i<=end_check; i++){
        if (a%i===0){
            answer=false;
            break;
        }
    }
    return answer;
}

function search_e(fi){
    let list_e = [];
    for(let i=1; i<fi; i++){
        if (simplicity_test(i)){
            list_e.push(i);
        }
    }
    return list_e[Math.floor(Math.random() * list_e.length)];
}

function open_key(e, n){
    let two = [];
    two.push(e, n);
    return two;
}


function search_d(e, fi){
    let list_d = [];
    for(let i=e+1; list_d.length!=2; i++){
        if ((i*e)%fi===1){
            list_d.push(i);
        }
    }
    return list_d[Math.floor(Math.random() * list_d.length)];
}

function private_key(d, n){
    let two = [];
    two.push(d, n);
    return two;
}


function remainder_of_the_division(number,  degree, divider){
    if (degree===1){
        answer = (number[0] * number[1])%divider
        return answer;
    }
    if (number[1]>divider){
        number = [number[0], number[1]%divider];
        number = remainder_of_the_division(number, degree, divider);
    }
    else{
        if (degree%2===0){
            number = [number[0], Math.pow(number[1], 2)];
            number = remainder_of_the_division(number, degree/2, divider);
        }
        else{
            number = [number[0]*number[1], number[1]];
            number = remainder_of_the_division(number, degree-1, divider);
        }
    }
    return number;
}


function encryption(password, open_key){
    return remainder_of_the_division([1, password], open_key[0], open_key[1]) ;
}

function decipher(password, private_key){
    return remainder_of_the_division([1, password], private_key[0], private_key[1]);
}

let p = 17, q = 61, fi = (p-1)*(q-1), n = p * q;

let e = search_e(fi)
let ee = [e, n]

let d = search_d(e, fi)
let dd = [d, n]

let private_password = encryption(999, ee)
console.log(private_password)

let decipher_passwrod = decipher(private_password, dd)
console.log(decipher_passwrod)


