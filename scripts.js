// scripts.js
let items = [];

function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemValue = itemInput.value.trim();
    if (itemValue !== '') {
        const newItem = { name: itemValue, category: 'category1' }; // 默認分類為category1
        items.push(newItem);
        itemInput.value = '';
        displayItems();
    }
}

function displayItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    const selectedCategory = document.getElementById('categorySelect').value;

    items.forEach(item => {
        if (selectedCategory === 'all' || item.category === selectedCategory) {
            const li = document.createElement('li');
            li.textContent = item.name;
            itemList.appendChild(li);
        }
    });
}

document.getElementById('categorySelect').addEventListener('change', displayItems);
