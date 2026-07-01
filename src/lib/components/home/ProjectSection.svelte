

<script>
    import { ChevronRight } from '@lucide/svelte'; // Pastikan Anda menginstal lucide-svelte
    import { projects, config } from '$lib/data/projects.js';
    import { resolve } from '$app/paths';
    import ProjectCard from '$lib/components/projects/ProjectCard.svelte';

    // Ambil karya unggulan berdasarkan ID yang diatur di config
    let featuredProjects = projects.filter(p => config.featuredProjectIds.includes(p.id));
</script>

<section id="karya">
    <div class="mb-16 flex items-center justify-between gap-4">
        <h3 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl">Featured Project</h3>
        <a href="{resolve('/karya')}" class="flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
            See All <ChevronRight class="h-4 w-4" />
        </a>
    </div>

    <div class="flex flex-col gap-12">
        
        {#each featuredProjects as project, index (project.id)}
            <ProjectCard {project} {index} from="home" />
        {/each}

    </div>
</section>