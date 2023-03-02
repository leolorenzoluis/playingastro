import { APIRoute } from 'astro';

const something: any[] = []
export const post: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    console.log(formData)
    const email = formData.get('email');
    // TODO: Add email to database
    console.log(email);
    something.push(email);
    return {
        body: JSON.stringify(something),
    };
}