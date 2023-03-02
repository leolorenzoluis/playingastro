import { APIRoute } from 'astro';

export const post: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const username = formData.get('username');
    const password = formData.get('password');

    console.log(username);
    console.log(password);
    return new Response("Success");
}