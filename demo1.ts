/**
 * Created by Alen on 2017/7/8.
 */

interface People{
    name:string,
    like?:string    //可选属性
}
function whoAmI(people:People){
    console.log(people.name)
}

let ld={
    age:18,
    name:'lidans'
};



whoAmI(ld);