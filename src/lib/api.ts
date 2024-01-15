import { ZodError } from "zod";
import { toasts } from "svelte-toasts";

export function handleRequestError(error: any): string {
	console.log(error);
	if (error instanceof ZodError) {
		// toasts.add({
		// 	title: "Invalid input",
		// 	description: error.issues[0].message,
		// 	type: "error",
		// });
		return error.issues[0].message;
	} else if (error instanceof Error) {
		// toasts.add({
		// 	title: "Error",
		// 	description: error.message,
		// 	type: "error",
		// });
		return error.message;
	} else {
		// toasts.add({
		// 	title: "Error",
		// 	description: "Something went wrong",
		// 	type: "error",
		// });
		return "Something went wrong";
	}
} 
