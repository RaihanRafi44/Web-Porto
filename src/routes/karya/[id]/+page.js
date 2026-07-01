import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        error(404, {
            message: 'Proyek tidak ditemukan'
        });
    }

    return {
        project
    };
}
