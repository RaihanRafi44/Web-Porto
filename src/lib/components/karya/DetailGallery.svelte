<script>
    import { Image as ImageIcon } from '@lucide/svelte';
    let { project } = $props();
</script>

{#if project.images && project.images.length > 0}
    <div class="my-32 border-t border-slate-800/50 pt-20">
        <div class="mb-12 flex items-center gap-3">
            <ImageIcon class="h-8 w-8 text-cyan-500" />
            <h2 class="text-3xl font-bold text-white">Screenshots</h2>
        </div>
        
        <p class="mb-10 text-slate-400 text-lg">
            The following are screenshots of the  <span class="font-bold text-slate-200">{project.nama}</span>.
        </p>

        {#if project.needsDeviceFrame}
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {#each project.images as img, i (i)}
                    <div class="mx-auto flex w-[70%] flex-col gap-4 text-center sm:w-full">
                        <div class="group relative w-full rounded-3xl border-[8px] border-slate-800 bg-slate-800 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-900 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.3)]">
                            <!-- Hardware Buttons -->
                            <div class="absolute -right-[11px] top-16 h-10 w-[3px] rounded-r-md bg-slate-700 transition-colors duration-500 group-hover:bg-cyan-800"></div>
                            <div class="absolute -right-[11px] top-32 h-16 w-[3px] rounded-r-md bg-slate-700 transition-colors duration-500 group-hover:bg-cyan-800"></div>
                            
                            <!-- Inner Screen -->
                            <div class="relative overflow-hidden rounded-2xl bg-slate-950">
                                <!-- Camera Punch Hole -->
                                <div class="absolute left-1/2 top-2.5 z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-black shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)] ring-1 ring-slate-800/50"></div>
                                
                                <div class="relative w-full aspect-[9/20]">
                                    <img 
                                        src={img} 
                                        alt="Screenshot {i+1} dari {project.nama}" 
                                        class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div class="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                                </div>
                            </div>
                        </div>
                        <span class="text-sm font-bold text-slate-300">
                            {img.split('/').pop().replace(/^\d+_/, '').replace(/_/g, ' ').replace(/\.(png|webp)$/, '')}
                        </span>
                    </div>
                {/each}
            </div>
        {:else}
            {#if project.images.length > 1}
                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {#each project.images as img, i (i)}
                        <div class="mx-auto flex w-[70%] flex-col gap-4 text-center sm:w-full">
                            <div class="group relative overflow-hidden rounded-3xl bg-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.3)]">
                                <img 
                                    src={img} 
                                    alt="Screenshot {i+1} dari {project.nama}" 
                                    class="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <span class="text-sm font-bold text-slate-300">
                                {img.split('/').pop().replace(/^\d+_/, '').replace(/_/g, ' ').replace(/\.(png|webp)$/, '')}
                            </span>
                        </div>
                    {/each}
                </div>
            {:else}
                <!-- Layout Full Width layaknya Preview Readme GitHub -->
                <div class="flex flex-col gap-12">
                    {#each project.images as img, i (i)}
                        <div class="relative w-full overflow-hidden rounded-3xl border border-slate-800/50 bg-slate-900/20 shadow-2xl">
                            <img 
                                src={img} 
                                alt="Preview full {project.nama}" 
                                class="h-auto w-full object-contain"
                                loading="lazy"
                            />
                        </div>
                    {/each}
                </div>
            {/if}
        {/if}
    </div>
{/if}
