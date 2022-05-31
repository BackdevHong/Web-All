// @ts-check

new Promise((resolve, reject) => {
	console.log("inside promise");
	reject(new Error("First reject"));
	console.log("before resolve");
	resolve("First resolve");
	console.log("after resolve");
})
	.then((value) => {
		console.log("inside first then");
		console.log("value", value);
	})
	.catch((error) => {
		console.log(error);
	});
