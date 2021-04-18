/**
 * Redux 核心概念实现
 * https://hyf.js.org/react-naive-book/lesson34
 * @param {function(any, {type:string}):object} reducer 纯函数，返回新的 state
 */
function createStore (reducer) {
  // 闭包存放 state ，由外部的 reducer 来产生
  let state = null
  // 保存订阅者
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    // dispatch 后保存由 reducer 产生的新的 state
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({})
  return { getState, dispatch, subscribe }
}

// usage
function themeReducer (state, action) {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

export const store = createStore(themeReducer)
