<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" />
	<div style="text-align: start">
		<TestMd />
	</div>
</template>

<script setup lang="ts">
import HelloWorld from "~/components/HelloWorld.vue";
import TestMd from "~/components/TestMD.vue";
import { onMounted } from "vue";

// const BASE_URL = "http://xxx.xxx.xxx.xxx/api";
// const BASE_URL = "/api";
// 请求数据
// async function reqData() {
// 	const response = await fetch(BASE_URL + "/ship/info/list/all", {
// 		method: "GET",
// 	});
// 	return response.json();
// }

let a: number = 10;

onMounted(() => {
	console.log("import.meta.env.BASE_URL", import.meta.env.BASE_URL);
	console.log("import.meta.env.MODE", import.meta.env.MODE);
	console.log("import.meta.env.PROD", import.meta.env.PROD);
	console.log("import.meta.env.DEV", import.meta.env.DEV);
	console.log("import.meta.env.SSR", import.meta.env.SSR);
	console.log("import.meta.env", import.meta.env);

	// reqData().then((res) => {
	// 	console.log(res);
	// });
});
</script>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
