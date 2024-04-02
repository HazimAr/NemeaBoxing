import { sendText } from "@lib/sendText";

export async function POST(request: Request) {
	const body = await request.json();
	const response = await sendText({
		to: "7029291601",
		body: `New lead from website!\nName: ${body.full_name}\nEmail: ${body.email}\nPhone: ${body.phone}`,
	});

	if (!response.errorCode)
		return new Response(response.errorMessage, { status: 500 });

	return new Response(null, { status: 200 });
}
