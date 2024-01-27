import { redirect } from '@sveltejs/kit';

const url = 'https://projectpartners.org/policies/cookies';

export function load() {
    throw redirect(307, url);
}
