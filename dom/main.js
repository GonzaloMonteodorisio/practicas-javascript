const title = document.getElementById('title');

//title.textContent = "DOM - Accediendo a nodos";

const paragraph = document.querySelector('.paragraph:nth-child(1)');

console.log(paragraph);

const span = paragraph.querySelector('span');

console.log(span);
console.log(span.textContent);

const paragraphs = document.querySelectorAll('.paragraph');

//convierte a paragraphs en un array (no funciona al 100% en todos los navegadores - problemas con algunas versiones de Firefox y Safari; e internet Explorer).
const paragraphsSpread = [...document.querySelectorAll('.paragraph')];
paragraphsSpread.map(p => p.style.color = 'green');

//convierte a paragraphs en un array 8funciona en todos los navegadores)
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'));
paragraphsSpread.map(p => p.style.fontSize = '25px');
//no es la forma correcta cambiar el CSS de esta forma, en línea
paragraphs[0].style.fontWeight = 'bold';

console.log(paragraphs);

////////////////////////////////////////////////////////////////////////
//Modificar atributos y clases

const name = document.getElementById('name');
const date = document.getElementById('date');
console.log(name.getAttribute('type'));

date.setAttribute('type', 'date');
console.log(date.getAttribute('type'));

title.classList.add('main-title', 'other-title');
title.classList.remove('main-title');

if(title.classList.contains('title')) {
	console.log('Contiene la clase "title"');
} else {
	console.log('No contiene la clase "title"');
}

title.classList.replace('title', 'main-title');
console.log(name);
console.log(title);
console.log(date);
console.log(title.innerHTML);
console.log(title.textContent);
console.log(name.value);