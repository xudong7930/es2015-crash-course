var elixir = require('laravel-elixir');

// 不生成map文件
elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.sass('app.scss');
    mix.browserify('app.js');
})

