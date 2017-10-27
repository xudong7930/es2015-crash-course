let items = new Set(['one', 'two', 'three']);
console.info(items.size);
console.info(items.values());
items.add('four');
items.has('four');
items.forEach((item) => {
    console.info(item);
});
console.info(items);
console.info([...items]);
