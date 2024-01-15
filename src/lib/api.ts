import { ZodError } from "zod";

export function handleRequestError(error: any): string {
	console.log(error);
	if (error instanceof ZodError) {
		return error.issues[0].message;
	} else if (error instanceof Error) {
		return error.message;
	} else {
		return "Something went wrong";
	}
} 
