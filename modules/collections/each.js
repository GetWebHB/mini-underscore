import { isArray } from '../../utils'

export function each(list, iteratee, context) {
  if (isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      iteratee.call(context, list[i], i, list)
    }
  } else {
    for (let key in list) {
      iteratee.call(context, list[key], key, list)
    }
  }
}

// each([1, 2, 3], console.log)
// each({ name: 'ice', age: 24 }, console.log)
