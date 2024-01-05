import { isArray } from '../../utils'
export function map(list, iteratee, context) {
  const res = []

  if (isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      res.push(iteratee.call(context, list[i], i, list))
    }
  } else {
    for (let key in list) {
      res.push(iteratee.call(context, list[key], key, list))
    }
  }

  return res
}
// console.log(
//   map([2, 4, 5], function (val) {
//     return val * 2
//   })
// )
// console.log(
//   map({ age: 20 }, function (val) {
//     return val + 1
//   })
// )
