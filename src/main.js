import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		status: 'Not Logged In'
	}
});

export default app;