/**
 * Created by Alen on 2017/7/10.
 */
//解构
let arr:[number,string]=[18,'lidan'];
let [age,nam]=arr;

let output=`age+${age}
nam+${nam}`
console.log(output)

let myAdd: (x:number, y:number) => number =
    function(x: number, y: number): number { return x+y; };
console.log(myAdd(5,6))

function buildName(firstName: string, lastName: string){
    return firstName + " " + lastName;
}



