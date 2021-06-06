import '@fortawesome/fontawesome-free/js/all.js';

import App from './Components/App.svelte';




const app = new App({
	target: document.body,
	props: {
		appName: 'Overpowered'
	}
});

export default app;