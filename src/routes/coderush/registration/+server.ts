import { json } from '@sveltejs/kit'
import { RegistrationSchema } from '$lib/types'

export async function POST({ request }) {
    const payload = await request.json();

    const data = RegistrationSchema.parse(payload);
    console.log(data)

    return json({ message: 'success' }, { status: 201 });
}
