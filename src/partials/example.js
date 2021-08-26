import templetConstructor from './template.hbs';
import menuItem from '../menu.json';

console.log(menuItem)
console.log(templetConstructor)

const menuRef = document.querySelector('.js-menu')
console.log(menuRef)

const markup = templetConstructor(menuItem)
console.log(markup)


menuRef.insertAdjacentHTML('afterbegin', markup)