// 获取函数第一个参数的类型

type ParamType<T> = T extends (...param: [infer P, ...infer R]) => any ? P : never;
type Fn = (name:number, age: number,address: string)=>any
type AA = ParamType<Fn> // number


interface User {
    name: string;
    age: number;
}

type Func = (user: User) => void

type Param = ParamType<Func>;   // Param = User
type BB = ParamType<string>;    // string


type Constructor = new (...args: any[]) => any;


//-----------------获取构造函数实例类型------------------------------------
// 获取参数类型
type ConstructorParameters<T extends new(...args:any[])=>any> = T extends new(...args: infer R) => any ? R: never


type InstanceType<T extends new(...args:any[])=>any> = T extends new(...args:any[]) => infer R ? R:never


class TestClass {

    constructor( public name: string, public string: number ) {}
}

type Params = ConstructorParameters<typeof TestClass>;  // [string, numbder]

type Instance = InstanceType<typeof TestClass>;         // TestClass


type Unpromise<T> = T extends Promise<infer U> ? U : T;

type Test1 = Unpromise<number>; // number
type Test2 = Unpromise<Promise<string>>; // string



export {}