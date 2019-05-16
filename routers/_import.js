const path = require('path')

module.exports = file => import(path.join(__dirname, '../views') + file + '.vue')
// module.exports = file => require([path.join(__dirname, '../views') + file + '.vue'], resolve);
