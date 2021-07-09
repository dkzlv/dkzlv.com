import type { RequestHandler } from '@sveltejs/kit';

import { isEmail } from '$utils/validations/email';

export const post: RequestHandler<unknown, { email: string; language?: string }> = async req => {
  const email = req.body.email,
    language = req.body.language || 'en';

  if (!email || !isEmail(email)) return { status: 400, code: 'You hacker!' };

  await subscribeUser(email, language);
  return { status: 200, body: {} };
};

const mcAddMemberPath = `https://us3.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}`;
async function subscribeUser(email: string, language: string) {
  const body = {
    members: [
      {
        email_address: email,
        status: 'pending',
        language,
      },
    ],
    update_existing: true,
  };
  let result;
  try {
    result = await fetch(mcAddMemberPath, {
      method: 'POST',
      headers: {
        Authorization:
          'Basic ' + Buffer.from(`q:${process.env.MAILCHIMP_API_KEY}`).toString('base64'),
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });
    const jsonResult = await result.json();
    if (!result.ok || jsonResult.error_count > 0) {
      throw new Error();
    }
  } catch (err) {
    throw new Error('Something went wrong');
  }
}
