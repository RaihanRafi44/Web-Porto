<script>
    /** @type {{ features?: string[], title?: string }} */
    let { features = [], title = "Sorotan Fitur Utama" } = $props();
</script>

{#if features && features.length > 0}
<div class="my-32 border-t border-slate-800/50 pt-20">
    <div class="mb-12 flex items-center gap-3">
        <h2 class="text-3xl font-bold text-white">{title}</h2>
    </div>
    
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        {#each features as fitur, index (index)}
            <div class="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 hover:bg-slate-900 transition-colors">
                <div class="mb-6 h-12 w-12 rounded-xl bg-cyan-950/50 border border-cyan-900 flex items-center justify-center text-cyan-400 font-bold">
                    0{index + 1}
                </div>
                <p class="text-slate-400 leading-relaxed">
                    {fitur}
                </p>
            </div>
        {/each}
    </div>
</div>
{/if}
