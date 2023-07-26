import Prompt from "@models/prompt";
import { connectDB } from "@utils/db";

export const GET = async (req, { params }) => {
	try {
		await connectDB();
		const prompts = await Prompt.find({ creator: params.id }).populate(
			"creator",
		);
		return new Response(JSON.stringify(prompts), { status: 200 });
	} catch (error) {
		return new Response("Failed to fetch prompts", { status: 500 });
	}
};
