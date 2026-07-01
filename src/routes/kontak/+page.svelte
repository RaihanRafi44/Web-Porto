<script>
    import Navbar from '$lib/components/shared/Navbar.svelte';
    import { MessageCircle, Send, Mail, ChevronLeft, ExternalLink, Copy, Check } from '@lucide/svelte';
    import { resolve } from '$app/paths';
    import { fly } from 'svelte/transition';

    let copiedEmail = $state(false);

    /**
     * @param {MouseEvent} e
     * @param {string} email
     */
    async function handleEmailClick(e, email) {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(email);
            copiedEmail = true;
            setTimeout(() => {
                copiedEmail = false;
            }, 2000);
        } catch (err) {
            console.error('Gagal menyalin email: ', err);
        }
    }

    // Konfigurasi Kontak Anda
    const contacts = [
        {
            id: 'whatsapp',
            name: 'WhatsApp',
            url: 'https://wa.me/62895397833055', // Ganti dengan nomor WA Anda (gunakan 62)
            icon: MessageCircle,
            colorClass: 'text-emerald-400',
            bgClass: 'bg-emerald-500/10',
            borderHoverClass: 'group-hover:border-emerald-500/50',
            glowClass: 'group-hover:shadow-[0_15px_30px_-10px_rgba(16,185,129,0.4)]'
        },
        {
            id: 'telegram',
            name: 'Telegram',
            url: 'https://t.me/raihanrrizqullah', // Ganti dengan username Telegram Anda
            icon: Send,
            colorClass: 'text-sky-400',
            bgClass: 'bg-sky-500/10',
            borderHoverClass: 'group-hover:border-sky-500/50',
            glowClass: 'group-hover:shadow-[0_15px_30px_-10px_rgba(14,165,233,0.4)]'
        },
        {
            id: 'email',
            name: 'Email',
            url: 'raihanrrizqullah@gmail.com', // Ganti dengan email cadangan Anda (TANPA mailto:)
            icon: Mail,
            colorClass: 'text-indigo-400',
            bgClass: 'bg-indigo-500/10',
            borderHoverClass: 'group-hover:border-indigo-500/50',
            glowClass: 'group-hover:shadow-[0_15px_30px_-10px_rgba(99,102,241,0.4)]'
        }
    ];
</script>

<svelte:head>
    <title>Contact Me - Raihan</title>
</svelte:head>

<div class="min-h-screen bg-slate-950 font-sans text-slate-200">
    <div class="mx-auto max-w-6xl px-6 md:px-12">
        <Navbar />

        <main class="py-16 md:py-24">
            <!-- Tombol Kembali -->
            <a href="{resolve('/')}" class="mb-12 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400">
                <ChevronLeft class="h-4 w-4" /> Back to Home
            </a>

            <!-- Header Halaman -->
            <div class="mb-16 max-w-2xl">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                    Get in <span class="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Touch</span>
                </h1>
                <p class="text-lg leading-relaxed text-slate-400">
                    Choose your preferred way to get in touch. I'll do my best to respond as soon as possible.
                </p>
            </div>

            <!-- Daftar Kontak (Grid) -->
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                {#each contacts as contact (contact.id)}
                    {#if contact.id === 'email'}
                        <button type="button" onclick={(e) => handleEmailClick(e, contact.url)}
                            class="w-full text-left group relative flex items-center gap-6 overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800/60 {contact.borderHoverClass} {contact.glowClass}"
                        >
                            <!-- Ikon Utama -->
                            <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl transition-colors {contact.bgClass} {contact.colorClass}">
                                {#if contact.icon}
                                    <contact.icon class="h-8 w-8" />
                                {/if}
                            </div>

                            <!-- Konten Teks -->
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-white transition-colors group-hover:{contact.colorClass}">
                                    {contact.name}
                                </h3>
                            </div>

                            <!-- Ikon Navigasi Panah Kanan Atas -->
                            <div class="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                                <Copy class="h-6 w-6 {contact.colorClass}" />
                            </div>
                        </button>
                    {:else}
                        <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
                        <a href={contact.url} target="_blank" rel="noopener noreferrer"
                            class="group relative flex items-center gap-6 overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800/60 {contact.borderHoverClass} {contact.glowClass}"
                        >
                            <!-- Ikon Utama -->
                            <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl transition-colors {contact.bgClass} {contact.colorClass}">
                                {#if contact.icon}
                                    <contact.icon class="h-8 w-8" />
                                {/if}
                            </div>

                            <!-- Konten Teks -->
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-white transition-colors group-hover:{contact.colorClass}">
                                    {contact.name}
                                </h3>
                            </div>

                            <!-- Ikon Navigasi Panah Kanan Atas -->
                            <div class="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                                <ExternalLink class="h-6 w-6 {contact.colorClass}" />
                            </div>
                        </a>
                    {/if}
                {/each}
            </div>

        </main>
    </div>

    <!-- Snackbar Notification -->
    {#if copiedEmail}
        <div 
            transition:fly={{ y: 50, duration: 300 }}
            class="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-indigo-500 px-6 py-3 text-white shadow-lg shadow-indigo-500/25"
        >
            <Check class="h-5 w-5" />
            <span class="font-medium">Email berhasil disalin!</span>
        </div>
    {/if}
</div>
