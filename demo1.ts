/**
 * Created by Alen on 2017/7/8.
 */

interface People{
    name:string
}
function whoAmI(people:People){
    console.log(people.name)
}

let ld={
    age:18,
    name:'lidan'
};



whoAmI(ld);