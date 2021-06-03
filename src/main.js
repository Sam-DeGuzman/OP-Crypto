import '@fortawesome/fontawesome-free/js/all.js';

import App from './Components/App.svelte';




const app = new App({
	target: document.body,
	props: {
		appName: 'OP-Crypto'
	}
});

export default app;