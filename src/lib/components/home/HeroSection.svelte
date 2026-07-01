

<script>
    import { fly, fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { heroData } from '$lib/data/hero.js';

    let indeksKeahlian = $state(0);
    let isLoaded = $state(false);

    onMount(() => {
        isLoaded = true;

        const interval = setInterval(() => {
            indeksKeahlian = (indeksKeahlian + 1) % heroData.roles.length;
        }, 3000);

        return () => clearInterval(interval);
    });
</script>

<section class="relative flex min-h-[85vh] flex-col justify-center overflow-hidden">
    
    {#if isLoaded}
        <!-- Efek cahaya ambien berteknologi tinggi di latar belakang -->
        <div in:fade={{ duration: 2000 }} class="absolute -left-20 -top-20 -z-10 h-[500px] w-[500px] rounded-full bg-linear-to-br from-cyan-900/20 to-blue-900/20 blur-[100px]"></div>
        <div in:fade={{ duration: 2000, delay: 500 }} class="absolute right-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-linear-to-tl from-indigo-900/10 to-transparent blur-[120px]"></div>
        
        <!-- Pola Grid Halus (Glassmorphism / Tech Aesthetic) -->
        <div class="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    {/if}

    <div class="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
        
        <div class="z-10 flex flex-col items-start">
            
            {#if isLoaded}

                
                <h1 in:fly={{ y: 20, duration: 800, delay: 400 }} class="mb-2 text-5xl font-black tracking-tighter text-white md:text-7xl">
                    {heroData.name}<span class="animate-pulse text-cyan-500">.</span>
                </h1>
                
                <div in:fly={{ y: 20, duration: 800, delay: 600 }} class="mb-8 h-12 overflow-hidden md:h-16">
                    {#key indeksKeahlian}
                        <h2 in:fly={{ y: 20, duration: 500 }} out:fly={{ y: -20, duration: 500 }} class="absolute bg-linear-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
                            {heroData.roles[indeksKeahlian]}
                        </h2>
                    {/key}
                </div>
                
                <p in:fly={{ y: 20, duration: 800, delay: 800 }} class="mb-10 max-w-lg text-lg leading-relaxed text-slate-400 md:text-xl">
                    Mobile developer focused on building high-performance applications with <span class="text-slate-200">clean UI</span>, scalable architecture, and attention to detail.
                </p>
                
            {/if}
        </div>

        {#if isLoaded}
            <div in:fly={{ x: 50, duration: 1000, delay: 600 }} class="relative flex h-full items-center justify-center py-10">
                
                <div class="absolute h-72 w-72 animate-pulse rounded-full bg-cyan-600/20 blur-3xl md:h-96 md:w-96"></div>
                
                <div class="group relative z-10 flex h-[520px] w-[260px] flex-col overflow-hidden rounded-[3rem] border-[8px] border-slate-800 bg-slate-950 shadow-[0_20px_50px_-10px_rgba(6,182,212,0.4)] transition-transform duration-500 hover:-translate-y-4 hover:rotate-2 hover:shadow-[0_30px_60px_-10px_rgba(59,130,246,0.4)]">
                    
                    <div class="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-800"></div>

                    <div class="absolute inset-0 bg-linear-to-br from-cyan-900/40 to-blue-900/40 opacity-60 transition-opacity duration-500 group-hover:opacity-100"></div>
                    
                    <div class="relative z-10 flex h-full flex-col gap-4 p-5 pt-12">
                        <div class="flex items-center justify-between">
                            <div class="h-10 w-10 animate-pulse rounded-full bg-slate-700/80"></div>
                            <div class="h-4 w-20 rounded-full bg-slate-700/80"></div>
                        </div>
                        
                        <div class="flex h-36 w-full flex-col justify-end rounded-2xl border border-white/10 bg-linear-to-r from-cyan-500/80 to-blue-500/80 p-4 shadow-lg backdrop-blur-md">
                            <div class="mb-2 h-3 w-16 rounded-full bg-white/70"></div>
                            <div class="h-4 w-24 rounded-full bg-white text-xs"></div>
                        </div>

                        <div class="mt-2 flex flex-1 flex-col gap-3">
                            <div class="h-14 w-full rounded-xl border border-white/5 bg-slate-800/80 backdrop-blur-md"></div>
                            <div class="h-14 w-full rounded-xl border border-white/5 bg-slate-800/80 backdrop-blur-md"></div>
                        </div>
                        
                        <div class="absolute bottom-6 right-6 h-12 w-12 animate-bounce rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50"></div>
                    </div>
                </div>

                {#each heroData.floatingBadges as badge, i (i)}
                    <div class="absolute z-20 flex items-center gap-3 rounded-2xl border border-slate-700/50 bg-slate-900/90 p-3 shadow-xl backdrop-blur-xl {badge.positionClass}">
                        <div class="flex h-10 w-10 items-center justify-center rounded-full {badge.iconContainerClass}">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="{badge.svgPath}"></path></svg>
                        </div>
                        <div>
                            <p class="text-xs font-bold text-slate-200">{badge.title}</p>
                            <p class="text-[10px] text-slate-400">{badge.subtitle}</p>
                        </div>
                    </div>
                {/each}

            </div>
        {/if}

    </div>
</section>