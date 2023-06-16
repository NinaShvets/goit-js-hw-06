// --------перший варіант

// const itemEl = document.querySelectorAll('.item');

// console.log('Number of categories:', itemEl.length);

// itemEl.forEach(item => {
//   const titleEl = document.querySelector('h2').textContent;

//   console.log('Category:', titleEl);

//   const allItemEl = item.querySelectorAll('li');

//   console.log('Elements:', allItemEl.length);
// });

// ------------другий варіант

const itemEl = document.querySelectorAll('.item');

console.log('Number of categories:', itemEl.length);

itemEl.forEach(item => {
  const titleEl = item.firstElementChild.textContent;

  console.log('Category:', titleEl);

  const allItemEl = item.children[1].children.length;

  console.log('Elements:', allItemEl);
});
