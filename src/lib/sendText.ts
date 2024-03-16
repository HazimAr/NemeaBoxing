"use server";

import twilio from "twilio";

const client = twilio(process.env.accountSid, process.env.authToken);

export async function sendText({ body, to }: { body: string; to: string }) {
	return client.messages.create({
		from: process.env.twilioNumber,
		to,
		body,
	});
}
