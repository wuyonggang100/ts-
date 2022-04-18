
// way 1
// type Last<T> = T extends [...any[], infer R] ? R : never

// way 2
type Last<T extends any[]> = T extends [infer U,...infer P] ? P['length'] extends 0 ? U : Last<P> : never

// ---------测试代码-----------------
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1
let aa:tail1 = 'g'
// let aa:tail1 = 'g'
export {}