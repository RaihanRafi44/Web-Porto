<script>
    import Navbar from '$lib/components/shared/Navbar.svelte';
    import { ChevronLeft } from '@lucide/svelte';
    import { resolve } from '$app/paths';
    import { page } from '$app/stores';
    import DetailHero from '$lib/components/karya/DetailHero.svelte';
    import DetailFeatures from '$lib/components/karya/DetailFeatures.svelte';
    import DetailGallery from '$lib/components/karya/DetailGallery.svelte';

    /** @type {import('./$types').PageProps} */
    let { data } = $props();
    let project = $derived(data.project);
    let from = $derived($page.url.searchParams.get('from') || 'karya');
</script>

<svelte:head>
    <title>{project.nama} - Raihan</title>
</svelte:head>

<div class="min-h-screen bg-slate-950 font-sans text-slate-200">
    <div class="mx-auto max-w-6xl px-6 md:px-12">
        <Navbar />

        <main class="py-12 md:py-20">
            
            <!-- Tombol Kembali -->
            {#if from === 'home'}
                <a href="{resolve('/')}" class="mb-12 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400">
                    <ChevronLeft class="h-4 w-4" /> Back to Home
                </a>
            {:else}
                <a href="{resolve('/karya')}" class="mb-12 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400">
                    <ChevronLeft class="h-4 w-4" /> Back to All Projects
                </a>
            {/if}

            <DetailHero {project} />
            <DetailFeatures features={project.fiturUtama || []} title={project.featuresTitle} />
            <DetailGallery {project} />

        </main>
        
        <footer class="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Raihan Rafi. All rights reserved.</p>
        </footer>
        
    </div>
</div>
