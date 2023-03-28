	window.addEventListener('load', () => {
 	const title = document.querySelector('.title').textContent;
 	console.log('title: ', title);
 	CoveoInProduct.setContext({
   	"searchTerm": title
	 });
	});

