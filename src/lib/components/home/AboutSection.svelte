<script>
    import { User, Code, Briefcase, GraduationCap, Smartphone } from '@lucide/svelte';
    import { aboutData } from '$lib/data/about.js';
    
    // Mapping string names from data to actual Lucide components
    /** @type {Record<string, any>} */
    const iconMap = {
        Smartphone,
        Code
    };
</script>

<section id="tentang" class="py-24">
    <div class="mb-16 flex items-center gap-4">
        <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
            <User class="h-6 w-6" />
        </div>
        <h3 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl">About Me</h3>
    </div>

    <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
        
        <!-- Bagian Kiri: Biografi & Keahlian -->
        <div class="flex flex-col gap-8">
            <div class="rounded-[2.5rem] border border-slate-800 bg-slate-900/50 p-8 md:p-10">
                <h4 class="mb-6 text-2xl font-bold text-white">Background</h4>
                <div class="space-y-6 text-lg leading-relaxed text-slate-400">
                    {#each aboutData.paragraphs as paragraph, i (i)}
                        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                        <p class="text-justify">{@html paragraph}</p>
                    {/each}
                </div>

                <h4 class="mb-6 mt-12 text-xl font-bold text-white">Tech Stack & Skills</h4>
                <div class="flex flex-wrap gap-3">
                    {#each aboutData.techStack as tech (tech.name)}
                        <div class="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-bold {tech.classes}">
                            {#if tech.icon && iconMap[tech.icon]}
                                {@const Icon = iconMap[tech.icon]}
                                <svelte:component this={Icon} class="h-4 w-4" />
                            {/if}
                            {tech.name}
                        </div>
                    {/each}
                </div>
            </div>
        </div>

        <!-- Bagian Kanan: Linimasa Pengalaman & Pendidikan -->
        <div class="flex flex-col gap-8 justify-center">
            
            <!-- Pengalaman Kerja -->
            <div class="flex flex-col">
                <h4 class="mb-6 flex items-center gap-4 text-2xl font-bold text-white">
                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 shadow-inner">
                        <Briefcase class="h-6 w-6" />
                    </div>
                    Work Experience
                </h4>
                <div class="relative ml-6 border-l border-slate-800 pl-8 md:pl-12">
                    
                    {#each aboutData.experience as exp, i (i)}
                        <div class="group relative {i !== aboutData.experience.length - 1 ? 'mb-10' : ''}">
                            {#if exp.active}
                                <div class="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-cyan-500 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] md:-left-[54px]"></div>
                            {:else}
                                <div class="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-slate-700 bg-slate-950 transition-colors group-hover:border-cyan-500 group-hover:bg-cyan-500 md:-left-[54px]"></div>
                            {/if}
                            <div class="mb-1 text-sm font-bold tracking-wider text-slate-500 uppercase">{exp.period}</div>
                            <h5 class="mb-1 text-xl font-bold text-white">{exp.role}</h5>
                            <div class="mb-3 font-semibold text-cyan-400">{exp.company}</div>
                            <p class="text-justify text-slate-400">{exp.description}</p>
                        </div>
                    {/each}

                </div>
            </div>

            <!-- Pendidikan -->
            <div class="mt-4 flex flex-col">
                <h4 class="mb-6 flex items-center gap-4 text-2xl font-bold text-white">
                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 shadow-inner">
                        <GraduationCap class="h-6 w-6" />
                    </div>
                    Education
                </h4>
                <div class="relative ml-6 border-l border-slate-800 pl-8 md:pl-12">
                    
                    {#each aboutData.education as edu, i (i)}
                        <div class="group relative">
                            <div class="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-slate-700 bg-slate-950 transition-colors group-hover:border-cyan-500 group-hover:bg-cyan-500 md:-left-[54px]"></div>
                            <div class="mb-1 text-sm font-bold tracking-wider text-slate-500 uppercase">{edu.period}</div>
                            <h5 class="mb-1 text-xl font-bold text-white">{edu.degree}</h5>
                            <div class="mb-3 font-semibold text-cyan-400">{edu.institution}</div>
                            <p class="text-justify text-slate-400">{edu.description}</p>
                        </div>
                    {/each}

                </div>
            </div>

        </div>

    </div>
</section>
