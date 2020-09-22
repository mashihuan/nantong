export function setStorage (name, value) {
  return new Promise((resolve, reject) => {
    resolve(localStorage.setItem(name, value))
  })
}

export function getStorage (name) {
  return new Promise((resolve, reject) => {
    resolve(localStorage.getItem(name))
  })
}

export function removeStorage (name) {
  return new Promise((resolve, reject) => {
    resolve(localStorage.removeItem(name))
  })
}
