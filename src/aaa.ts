function add(count:number){
    return function(num:number){
        return num+count
    }
}

const add10 = add(10)
console.log(add(5));
