import { hi } from './src/test/hi'

if (typeof document !== 'undefined' && document && document.body) document.body.innerHTML = 'Hello'

console.log(hi(1))
