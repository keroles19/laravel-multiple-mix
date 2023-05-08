const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 |Mix Asset Management For Admin Dashboard
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/admin/app.js', 'public/admin_dashboard/js')
    .sass('resources/sass/admin/app.scss', 'public/admin_dashboard/css')
    .version();
