<script>
    import { Mail, ArrowRight, ExternalLink } from '@lucide/svelte';
    import { resolve } from '$app/paths';
</script>

<section id="kontak" class="py-32">
    <div class="relative mx-auto max-w-4xl overflow-hidden rounded-[3rem] border border-slate-800 bg-slate-900/50 p-10 text-center md:p-20">
        
        <!-- Efek Glow di belakang teks -->
        <div class="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-cyan-600/20 blur-[80px]"></div>

        <h3 class="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">Let's Collaborate</h3>
        <p class="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-400">
            Whether you have a project in mind, a job opportunity, or just want to say hello, feel free to reach out. I'd be glad to connect with you.
        </p>

        <div class="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a href="{resolve('/kontak')}" class="group flex items-center gap-3 rounded-2xl bg-cyan-600 px-8 py-4 font-bold text-white shadow-[0_15px_30px_-10px_rgba(6,182,212,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:shadow-[0_20px_40px_-10px_rgba(6,182,212,0.7)]">
                <Mail class="h-5 w-5" /> 
                Send Message
                <ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <div class="flex items-center gap-4">
                <a href="https://linkedin.com/in/raihanrrizqullah" target="_blank" class="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950 px-6 py-4 font-bold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-slate-500 hover:bg-slate-800 hover:text-white">
                    <ExternalLink class="h-4 w-4 text-cyan-500" /> LinkedIn
                </a>
                <a href="https://github.com/RaihanRafi44" target="_blank" class="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950 px-6 py-4 font-bold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-slate-500 hover:bg-slate-800 hover:text-white">
                    <ExternalLink class="h-4 w-4 text-cyan-500" /> GitHub
                </a>
            </div>
        </div>
        
    </div>
</section>
