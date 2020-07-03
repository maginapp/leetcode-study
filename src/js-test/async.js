async function async(name) {
  console.log(name)
}

async function async1() {
  console.log('async1-start')
  await async(1)
  console.log('async1-end')
}

async function async2() {
  console.log('async2-start')
  await new Promise(resolve => {
    console.log('async2-promise')
    resolve()
  })
    .then(() => {
      console.log('async2-promise-then')
      new Promise(resolve => {
        console.log('async2- in - Promise')
        setTimeout(() => {
          resolve()
        }, 100)
      }).then(() => {
        console.log('async2- in - Promise - then')
      })
    })
    .then(() => {
      console.log('async2-promise-then-then')
    })
  console.log('async2-end')
}

async1()
async2()

new Promise(resolve => {
  console.log('Promise')
  resolve()
}).then(() => {
  console.log('Promise-then')
})

const a = new Promise(resolve => {
  console.log('start')
  resolve(
    new Promise(resolve => {
      console.log('in-pro')
      setTimeout(() => {
        resolve()
      }, 100)
    })
      .then(() => {
        console.log('in-pro-then')
      })
      .then(() => {
        console.log('in-pro-then-then')
      })
  )
}).then(() => {
  console.log('end')
})

console.log(a)

// ;('async1-star')
// 1
// ;('async2-start')
// ;('async2-promise')
// ;('Promise')
// ;('async1-end')
// ;('async2-promise-then')
// ;('async2- in - Promise')
// ;('Promise-then')
// ;('async2-promise-then-then')
// ;('async2-end')
// ;('async2- in - Promise - then')
