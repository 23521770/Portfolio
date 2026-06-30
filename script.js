const body = document.body;
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
const navLinks = Array.from(document.querySelectorAll('.main-nav a'));
const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

menuButton?.addEventListener('click', () => {
    const isOpen = body.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
});
<><script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script><div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="đỗ-ngọc-tường-vân-769ab0347" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://vn.linkedin.com/in/%C4%91%E1%BB%97-ng%E1%BB%8Dc-t%C6%B0%E1%BB%9Dng-v%C3%A2n-769ab0347?trk=profile-badge">Đỗ Ngọc Tường Vân</a></div></>
              
nav?.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
        body.classList.remove('menu-open');
        menuButton?.setAttribute('aria-expanded', 'false');
    }
});

const setActiveLink = () => {
    const current = sections.find((section) => {
        const box = section.getBoundingClientRect();
        return box.top <= 140 && box.bottom > 140;
    });

    navLinks.forEach((link) => {
        link.classList.toggle('active', current && link.getAttribute('href') === `#${current.id}`);
    });
};

document.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

const copyButton = document.querySelector('.copy-email');

copyButton?.addEventListener('click', async () => {
    const email = copyButton.getAttribute('data-email') || '';

    try {
        await navigator.clipboard.writeText(email);
        copyButton.textContent = 'Email Copied';
        copyButton.classList.add('copied');
        window.setTimeout(() => {
            copyButton.textContent = 'Copy Email';
            copyButton.classList.remove('copied');
        }, 1800);
    } catch {
        window.location.href = `mailto:${email}`;
    }
});
