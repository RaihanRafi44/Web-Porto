<script>
    import { resolve } from '$app/paths';
    // 1. Gunakan $state() untuk variabel yang nilainya akan berubah-ubah
    let scrollY = $state(0);
    let isMenuOpen = $state(false);
    
    // 2. Gunakan $derived() untuk variabel yang bergantung pada variabel lain
    let isScrolled = $derived(scrollY > 20);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<!-- 3. Fitur ajaib Svelte untuk memantau pergerakan scroll layar secara langsung -->
<svelte:window bind:scrollY={scrollY} />

<!-- 
  4. Menerapkan kelas dinamis:
  - Tetap pakai 'sticky top-0 z-50' agar posisinya terus terkunci di atas.
  - Tambahkan 'transition-all duration-300' agar perubahan warnanya halus (tidak kaku).
  - Jika isScrolled bernilai true, pakai background kaca (backdrop-blur-md).
  - Jika false (mentok atas), kembalikan ke transparan.
-->
<nav class="sticky top-0 z-50 flex flex-col w-full transition-all duration-300 {isScrolled || isMenuOpen ? 'bg-slate-950/80 shadow-lg backdrop-blur-md' : 'bg-transparent'}">
    <div class="flex w-full items-center justify-between py-6">
        <!-- Bagian Kiri: Logo / Nama -->
        <a href="{resolve('/')}" class="text-xl font-extrabold tracking-widest text-slate-200 transition-colors hover:text-cyan-400">
            RAIHAN<span class="text-cyan-500">.</span>
        </a>

        <!-- Bagian Kanan: Menu Navigasi -->
        <ul class="hidden items-center gap-8 text-sm font-medium tracking-wide text-slate-400 md:flex">
            <li><a href="{resolve('/')}#tentang" class="transition-colors hover:text-cyan-400">About Me</a></li>
            <li><a href="{resolve('/')}#karya" class="transition-colors hover:text-cyan-400">Project</a></li>
            <li><a href="{resolve('/')}#kontak" class="transition-colors hover:text-cyan-400">Contact</a></li>
        </ul>

        <!-- Ikon Hamburger untuk layar HP -->
        <button aria-label="Buka menu navigasi" class="text-slate-400 hover:text-cyan-400 md:hidden" onclick={toggleMenu}>
            {#if isMenuOpen}
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            {:else}
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            {/if}
        </button>
    </div>

    <!-- Dropdown Menu untuk Layar HP -->
    {#if isMenuOpen}
        <div class="md:hidden pb-6 border-t border-slate-800/50 pt-4">
            <ul class="flex flex-col gap-4 text-sm font-medium tracking-wide text-slate-400">
                <li><a href="{resolve('/')}#tentang" class="block transition-colors hover:text-cyan-400" onclick={toggleMenu}>About Me</a></li>
                <li><a href="{resolve('/')}#karya" class="block transition-colors hover:text-cyan-400" onclick={toggleMenu}>Project</a></li>
                <li><a href="{resolve('/')}#kontak" class="block transition-colors hover:text-cyan-400" onclick={toggleMenu}>Contact</a></li>
            </ul>
        </div>
    {/if}
</nav>