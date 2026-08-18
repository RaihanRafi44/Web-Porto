<script>
    /** @type {{ project: import('$lib/data/projects').Project }} */
    let { project } = $props();
</script>

<div class="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
    
    <!-- Kiri: Info Detail -->
    <div class="flex flex-col">
        <span class="mb-4 inline-block w-fit rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-cyan-300 uppercase backdrop-blur-sm">
            {project.tipe}
        </span>
        
        <h1 class="mb-6 text-5xl font-black tracking-tighter text-white md:text-7xl">
            {project.nama}<span class="animate-pulse text-cyan-500">.</span>
        </h1>
        
        <p class="mb-8 text-lg leading-relaxed text-slate-400 md:text-xl text-justify">
            {project.deskripsi}
        </p>

        <div class="mb-10">
            <h3 class="mb-4 text-sm font-bold tracking-wider text-slate-500 uppercase">Tech Stack</h3>
            <ul class="flex flex-wrap gap-3 font-mono text-sm text-slate-300">
                {#each project.tech as t (t)}
                    <li class="rounded-lg border border-white/5 bg-slate-900 px-4 py-2 shadow-inner">{t}</li>
                {/each}
            </ul>
        </div>

        {#if project.playStoreUrl}
            <div class="mb-10">
                <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
                <a 
                    href={project.playStoreUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer external"
                    class="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/40"
                >
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <span>Get it on Google Play</span>
                </a>
            </div>
        {/if}

    </div>

    <!-- Kanan: Mockup Raksasa / Preview Image -->
    <div class="relative flex h-full items-center justify-center py-10 lg:py-0">
        <div class="absolute h-[500px] w-[500px] animate-pulse rounded-full bg-cyan-600/10 blur-3xl"></div>
        
        <div class="group relative z-10 flex w-[320px] aspect-[9/20] flex-col rounded-3xl border-[10px] border-slate-800 bg-slate-800 shadow-[0_30px_80px_-20px_rgba(6,182,212,0.3)] transition-transform duration-700 hover:-translate-y-2 hover:shadow-[0_40px_100px_-20px_rgba(6,182,212,0.4)]">
            <!-- Hardware Buttons -->
            <div class="absolute -right-[13px] top-24 h-12 w-[4px] rounded-r-md bg-slate-700 transition-colors duration-500 group-hover:bg-cyan-800"></div>
            <div class="absolute -right-[13px] top-44 h-20 w-[4px] rounded-r-md bg-slate-700 transition-colors duration-500 group-hover:bg-cyan-800"></div>
            
            <!-- Inner Screen -->
            <div class="relative h-full w-full overflow-hidden rounded-2xl bg-slate-950">
                <!-- Camera Punch Hole -->
                <div class="absolute left-1/2 top-3 z-20 h-4 w-4 -translate-x-1/2 rounded-full bg-black shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)] ring-1 ring-slate-800/50"></div>
                
                <img 
                    src={project.thumbnail} 
                    alt="Thumbnail {project.nama}" 
                    class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fetchpriority="high"
                />
                <div class="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
        </div>
    </div>
</div>
