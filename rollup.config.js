import babel from 'rollup-plugin-babel'

export default {
    entry: 'src/index.js',
    format: 'cjs',
    plugins: [ babel() ],
    dest: 'dist/micro-middleware.js'
}
