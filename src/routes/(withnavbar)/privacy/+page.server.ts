import { redirect } from '@sveltejs/kit';

const url = 'https://projectpartners.org/policies/privacy';

export function load() {
    throw redirect(307, url);
}
