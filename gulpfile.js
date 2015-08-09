var elixir = require('laravel-elixir');
var paths = {
'bootstrap': './node_modules/bootstrap-sass/assets/'
};
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss')
	.copy(paths.bootstrap + 'fonts/bootstrap', 'public/fonts/bootstrap')
	.copy(paths.bootstrap + 'javascripts', 'public/js')
    mix.styles([
    	"factura.css"
    ]);
});
