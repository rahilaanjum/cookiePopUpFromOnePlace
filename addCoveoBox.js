	window.addEventListener('load', () => {
 	const title = document.querySelector('.title').textContent;
 	console.log('title: ', title);
    addStyle(styles) ;
 	CoveoInProduct.setContext({
   	"searchTerm": title
	 });
	});

    /* Function to add style */
    const addStyle = styles => {
         
        /* Create style element */
        var css = document.createElement('style');
        css.type = 'text/css';
  
        if (css.styleSheet)
            css.styleSheet.cssText = styles;
        else
            css.appendChild(document.createTextNode(styles));
         
        /* Append style to the head element */
        document.getElementsByTagName("head")[0].appendChild(css);
    };

    /* Declare the style element */
    var styles = 'coveo-in-app-widget-loader::part(button) {   width: 200px;   background-image:linear-gradient(#0a8276, #0a8276);   justify-content: flex-start; }';
    styles += ' coveo-in-app-widget-loader::part(button):before {   background-image:linear-gradient(#0a8276, #0a8276); }';
    styles += ' coveo-in-app-widget-loader::part(button):hover:before {background-image:linear-gradient(#0a8276, #0a8276);  }';
    styles += 'coveo-in-app-widget-loader::part(button-text) {color: #fff; background-image:linear-gradient(#0a8276, #0a8276);    overflow: initial;  }'; 
