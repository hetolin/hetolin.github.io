// 导航栏动态阴影
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    window.scrollY > 50 ? nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)' : nav.style.boxShadow = 'none';
});

// 锚点平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});