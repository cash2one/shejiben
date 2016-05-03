var strIndex = require('../tpl/index.string');
var container = document.getElementById("container");
container.innerHTML = strIndex;
// SPA.defineView('index',{
// 	html:strIndex,
// 	plugins: ['delegated'],
// 	modules:[{
// 		name: 'indexContent',
// 		container: '.m-index-body',
// 		views: ['demo','my','pic','require','search'],
// 		defaultTag: 'demo',

// 	}],
// })
