<script>
    import { resolve } from '$app/paths';
    let { project, index = 0, from = 'karya' } = $props();
</script>

<div class="group relative flex flex-col md:flex-row items-center gap-10 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 p-8 transition-all duration-500 hover:bg-slate-900 hover:border-cyan-900/50 hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.2)] {index % 2 !== 0 ? 'md:flex-row-reverse' : ''}">
    
    <!-- Project Info (Text Side) -->
    <div class="flex flex-1 flex-col justify-center">
        <div class="mb-6 flex items-start justify-between gap-4">
            <h4 class="text-3xl font-black text-white transition-colors group-hover:text-cyan-400">{project.nama}</h4>
            <span class="rounded-full border border-cyan-900/50 bg-cyan-950/30 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-300">{project.tipe}</span>
        </div>
        <p class="mb-8 text-base leading-relaxed text-slate-400 text-justify">
            {project.deskripsi}
        </p>
        <ul class="mb-10 flex flex-wrap gap-2.5 font-mono text-xs text-slate-300">
            {#each project.tech as t (t)}
                <li class="rounded-lg bg-slate-800/80 px-3 py-1.5 backdrop-blur-md border border-white/5">{t}</li>
            {/each}
        </ul>
        <div class="flex items-center gap-4">
            <a href="{resolve(`/karya/${project.id}`)}?from={from}" class="flex items-center justify-center rounded-xl bg-cyan-600 px-6 py-3 font-bold text-white transition-all hover:bg-cyan-500 hover:shadow-[0_10px_20px_-10px_rgba(6,182,212,0.5)]">
                App Details
            </a>
        </div>
    </div>

    <!-- Phone Mockup (Image Side) -->
    <div class="relative flex w-full max-w-[240px] aspect-[9/20] shrink-0 flex-col rounded-3xl border-[8px] border-slate-800 bg-slate-800 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:border-cyan-900 group-hover:shadow-[0_20px_40px_-10px_rgba(6,182,212,0.3)]">
        <!-- Hardware Buttons -->
        <div class="absolute -right-[11px] top-16 h-10 w-[3px] rounded-r-md bg-slate-700 transition-colors duration-500 group-hover:bg-cyan-800"></div>
        <div class="absolute -right-[11px] top-28 h-14 w-[3px] rounded-r-md bg-slate-700 transition-colors duration-500 group-hover:bg-cyan-800"></div>
        
        <!-- Inner Screen -->
        <div class="relative h-full w-full overflow-hidden rounded-2xl bg-slate-950">
            <!-- Camera Punch Hole -->
            <div class="absolute left-1/2 top-2.5 z-20 h-3 w-3 -translate-x-1/2 rounded-full bg-black shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)] ring-1 ring-slate-800/50"></div>
            
            <img 
                src={project.thumbnail} 
                alt="Thumbnail {project.nama}" 
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
            />
            <div class="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        </div>
    </div>

</div>
