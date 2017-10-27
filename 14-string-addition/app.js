let title = 'red string';

// es5
if (title.indexOf('blue') == -1) {
    console.info('blue string does not included.');
}

// es6
if (title.includes('red')) {
    console.info('red string included.');
}

// if (title.startsWith('s', 5)) {
if (title.startsWith('red')) {
    console.info('yes start with red');
}

if (title.endsWith('ing')) {
    console.info('yes, end with ing');
}

// repeat
let str = 'cod';
console.info(str.repeat(10));

let tmpl = `
    oh, ${'lol'.repeat(100)}.
`;
console.info(tmpl);
