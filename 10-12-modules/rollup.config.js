import buble from 'rollup-plugin-buble';

export default {
    input: 'src/main.js',
    output: {
        file: './output/main.js',
        format: 'cjs'
    },
    plugins: [buble()]
}
