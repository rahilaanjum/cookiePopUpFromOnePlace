	window.addEventListener('load', () => {
 	const title = document.querySelector('.title').textContent;
 	console.log('title: ', title);
    addStyle(styles) ;
 	CoveoInProduct.setContext({
   	"searchTerm": title
	 });
	});
