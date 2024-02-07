import { redirect } from '@sveltejs/kit';

const url = 'https://projectpartners.org/policies/cookies';

export function load() {
    redirect(307, url);
}
