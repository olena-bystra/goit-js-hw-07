const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const potatoRef = document.createElement('li');
potatoRef.textContent = 'Картошка';

const mushroomsRef = document.createElement('li');
mushroomsRef.textContent = 'Грибы';

const garlicRef = document.createElement('li');
garlicRef.textContent = 'Чеснок';

const tomatoesRef = document.createElement('li');
tomatoesRef.textContent = 'Помидоры';

const greensRef = document.createElement('li');
greensRef.textContent = 'Зелень';

const seasoningsRef = document.createElement('li');
seasoningsRef.textContent = 'Приправы';

const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(potatoRef, mushroomsRef, garlicRef, tomatoesRef, greensRef, seasoningsRef);
   
   