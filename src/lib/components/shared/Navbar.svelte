<script>
    import { resolve } from '$app/paths';
    // 1. Gunakan $state() untuk variabel yang nilainya akan berubah-ubah
    let scrollY = $state(0);
    
    // 2. Gunakan $derived() untuk variabel yang bergantung pada variabel lain
    let isScrolled = $derived(scrollY > 20);
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
<nav class="sticky top-0 z-50 flex w-full items-center justify-between py-6 transition-all duration-300 {isScrolled ? 'bg-slate-950/80 shadow-lg backdrop-blur-md' : 'bg-transparent'}">
    
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
    <button aria-label="Buka menu navigasi" class="text-slate-400 hover:text-cyan-400 md:hidden">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    </button>

</nav>