interface IA {
    name: string;
    age: number;
    address: string
}
// 得到 interface 的值的联合类型
type AA<T> = T[keyof T]

type Iss = AA<IA>   // string | number

let name = '434'
let age = 4534

let aa:Iss = age
// ------------------------------------------------------
// 保护类型
interface Eg1 {
    name: string,
    readonly age: number,
}
// T1的类型实则是 name | age
type T1 = keyof Eg1 // name | age

class Eg2 {
    private name: string;
    public readonly age: number;
    protected home: string;
}
// T2实则被约束为 age
// 而name和home不是公有属性，所以不能被keyof获取到
type T2 = keyof Eg2 // age

// -------------------------------------------------------



export {}