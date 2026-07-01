<script>
    // Import komponen Navbar yang baru saja dibuat
    import Navbar from '$lib/components/shared/Navbar.svelte';
    import HeroSection from '$lib/components/home/HeroSection.svelte';
    import AboutSection from '$lib/components/home/AboutSection.svelte';
    import CardSection from '$lib/components/home/ProjectSection.svelte';
    import ContactSection from '$lib/components/home/ContactSection.svelte';
</script>

<svelte:head>
    <title>Home - Raihan</title>
</svelte:head>

<div class="min-h-screen bg-slate-950 font-sans text-slate-200">
    <div class="mx-auto max-w-6xl px-6 md:px-12">
        
        <Navbar />

        <main class="py-12">
            <HeroSection />
            
            <div class="my-32"></div>
            
            <AboutSection />
            
            <div class="my-32"></div>

            <CardSection />
            
            <div class="my-32"></div>
            
            <ContactSection />
        </main>
        
    </div>
</div>