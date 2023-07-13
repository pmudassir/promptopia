import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async ({ params }) => {
    try {
        await connectToDB()

        const prompts = await Prompt.findById(params.id).populate("creator")

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts", { status: 500 })
    }
}

// params prop is used in dynamic cases here it will be users id as passed in api endpoint 