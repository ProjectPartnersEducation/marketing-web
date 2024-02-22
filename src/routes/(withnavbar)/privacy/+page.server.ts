import { redirect } from '@sveltejs/kit';

const url = 'https://projectpartners.org/policies/privacy';

export function load() {
    redirect(307, url);
}
