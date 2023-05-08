
if (process.env.section === 'admin') {
    require('./webpack.mix.admin');
} else {
    require('./webpack.mix.site');
}
