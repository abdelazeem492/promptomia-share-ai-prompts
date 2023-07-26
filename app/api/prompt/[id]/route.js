import Prompt from "@models/prompt";
import { connectDB } from "@utils/db";

//* GET request (read)
export const GET = async (req, { params }) => {
	try {
		await connectDB();

		const prompt = await Prompt.findById(params.id).populate("creator");

		!prompt && new Response("Prompt not found", { status: 404 });
		return new Response(JSON.stringify(prompt), { status: 200 });
	} catch (error) {
		return new Response("Failed to fetch prompt", { status: 500 });
	}
};

//* PATCH request (update)
export const PATCH = async (req, { params }) => {
	const { prompt, tag } = await req.json();

	try {
		await connectDB();

		const existingPrompt = await Prompt.findById(params.id);

		!existingPrompt && new Response("Prompt not found", { status: 404 });

		existingPrompt.prompt = prompt;
		existingPrompt.tag = tag;

		await existingPrompt.save();

		return new Response(JSON.stringify(existingPrompt), { status: 200 });
	} catch (error) {
		return new Response("Failed to update prompt", { status: 500 });
	}
};

//* DELETE request (delete)
export const DELETE = async (req, { params }) => {
	try {
		await connectDB();

		await Prompt.findByIdAndRemove(params.id);

		return new Response("Prompt deleted successfully", { status: 200 });
	} catch (error) {
		return new Response("Failed to delete prompt", { status: 500 });
	}
};
