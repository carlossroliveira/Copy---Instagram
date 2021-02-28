gsap.from('.containerPartOne', {
    duration: 2.5,
    ease: "power2.out",
    x: -300
});

gsap.from('.containerPartTwo', {
    duration: 2.5,
    ease: "power2.out",
    x: 300
});

gsap.from('footer', {
    duration: 2.5,
    ease: "power2.out",
    y: -200
});
