import './css/index.css';
import createComp from './js/comp';
import '@/js/resources';
import { add } from './js/math';

<<<<<<< HEAD
const texts: Array<string> = ['hello-5', 'CICD + 代码规范方案'];
=======
const texts: Array<string> = ['hello-4', 'CICD + 代码规范方案'];
>>>>>>> f708343faf7b33bd9849d4401e42043fcbcf8a62
// const comp = createComp('h2', { class: 'content' }, texts.at(-1));
const comp = createComp('h2', { class: 'content' }, texts.join(' '));
document.body.appendChild(comp);

console.log(texts.join('  '));

console.log(add(1, 2));
