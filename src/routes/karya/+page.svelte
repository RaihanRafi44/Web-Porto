<script>
    import Navbar from '$lib/components/shared/Navbar.svelte';
    import { projects } from '$lib/data/projects.js';
    import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
</script>

<svelte:head>
    <title>All Projects - Raihan</title>
</svelte:head>

<div class="min-h-screen bg-slate-950 font-sans text-slate-200">
    <div class="mx-auto max-w-6xl px-6 md:px-12">
        
        <Navbar />

        <main class="py-20">
            
            <div class="mb-20 text-center">
                <h1 class="mb-6 text-5xl font-black tracking-tighter text-white md:text-7xl">
                    All <span class="text-cyan-500">Projects.</span>
                </h1>
                <p class="mx-auto max-w-2xl text-lg text-slate-400">
                    Explore my mobile application development portfolio, featuring both personal and team projects.
                </p>
            </div>

            <div class="flex flex-col gap-16">
                {#each projects as project, index (project.id)}
                    <ProjectCard {project} {index} />
                {/each}
            </div>

        </main>
        
        <!-- Footer sederhana -->
        <footer class="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Raihan Rafi. All rights reserved.</p>
        </footer>
        
    </div>
</div>
