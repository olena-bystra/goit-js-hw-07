const categoriesRef = document.querySelector('#categories');
console.log(categoriesRef);

console.log(categoriesRef.children);

const itemRef = document.querySelectorAll('.item');
console.log(`В списке ${itemRef.length} категории`);
const categoryTitleRef = document.querySelectorAll(".item h2");
const categoryListItemRef = document.querySelectorAll(".item ul");
categoryTitleRef.forEach((title) => {
  console.log('Категория:', title.textContent);
  console.log('Количество элементов:', itemRef.length); 
});




