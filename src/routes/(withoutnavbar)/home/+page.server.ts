import { redirect } from '@sveltejs/kit';

const url = '/';

export function load() {
    redirect(307, url);
}
