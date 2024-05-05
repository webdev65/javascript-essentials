const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $23', 'Oatmeal - $15', 'Frittata - $18'];
const mainCourseMenu = ['Steak - $32', 'Pasta - $20', 'Burger - $10', 'Salmon - $15'];
const dessertMenu = ['Cake - $10', 'Ice Cream - $5', 'Pudding - $7', 'Fruit Salad - $5'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;