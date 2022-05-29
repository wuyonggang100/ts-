
// 不要 T 对象中的 key 属性值，全部都不要,如果有,值就变成 undefined
type Without<T> = { [P in keyof T]?: never };
// T 和 U 只能且必定有一个
type XOR<T, U> = (Without<T> & U) | (Without<U> & T);

type NameOnly = { name: string };
type FirstAndLastName = { firstname: string; lastname: string };
// 要么有 name 属性，要么同时有 firstname 和 lastname
type Person = XOR<NameOnly, FirstAndLastName>;

const p1: Person = { name: "Foo" };
const p2: Person = { firstname: "Foo", lastname: "Bar" };

const bad1: Person = { name: "Foo", lastname: "Bar" };
const bad2: Person = { lastname: "Bar", name: "Foo" };
export {}