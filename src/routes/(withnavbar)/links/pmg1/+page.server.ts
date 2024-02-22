import { redirect } from '@sveltejs/kit';

const url = 'https://tally.so/r/nGdq6e';

export function load() {
    redirect(307, url);
}
