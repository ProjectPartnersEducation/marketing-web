import { redirect } from '@sveltejs/kit';

const url = '/';

export function load() {
    throw redirect(307, url);
}
