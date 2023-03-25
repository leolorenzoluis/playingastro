import { APIRoute } from 'astro';

// Get the env vars
// const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = 'Emails';


const something: any[] = []
export const post: APIRoute = async ({ request, redirect }) => {
    const { email } = await request.json();
    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        },
        body: JSON.stringify({
            fields: {
                'Email': email,
            },
        }),
    });
    console.log(response);
    const data = await response.json();
    const recordId = data.id;
    const emaiResponse = data.fields.Email;
    console.log(`New record created with ID ${recordId} and email address ${emaiResponse}.`);
    // Return 200
    return {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

}