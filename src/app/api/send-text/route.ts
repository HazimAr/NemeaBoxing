import { sendText } from "@lib/sendText";

export async function POST(request: Request) {
	const body = await request.json();
	const response = await sendText({
		to: "7029291601",
		body,
	});
	if (response.error) {
		return new Response(response.error, { status: 400 });
	}
	return new Response(response.message, { status: 200 });
}
