import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();


// Dark Mode - Theme Manager
class ThemeManager {
    constructor(moonElement, sunElement) {
        this.theme = this.getPreferredTheme();
        this.applyTheme(this.theme);
        this.setupSystemThemeListener();
        this.moon = moonElement;
        this.sun = sunElement;
    }

    getPreferredTheme() {
        if ('theme' in localStorage) {
            return localStorage.theme;
        }

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.moon.classList.add('dark-mode-toggle-icon-toggled');
            return 'dark';
        } else {
            this.moon.classList.add('dark-mode-toggle-icon-toggled');
        }

        return 'light';
    }

    applyTheme(theme) {
        this.theme = theme;
        localStorage.theme = theme;

        document.documentElement.classList.toggle('dark', theme === 'dark');

        window.dispatchEvent(new CustomEvent(
            'themechange', {
                detail: { theme }
            })
        );
    }

    toggleTheme() {
        this.moon.classList.toggle('dark-mode-toggle-icon-toggled');
        this.sun.classList.toggle('dark-mode-toggle-icon-toggled');
        this.applyTheme(this.theme === 'light' ? 'dark' : 'light');
    }

    setupSystemThemeListener() {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
            if (!('theme' in localStorage)) {
                this.applyTheme(event.matches ? 'dark' : 'light');
            }
        })
    }
}

const moon = document.querySelector('#moon---stars');
const sun = document.querySelector('#sun');
const themeManager  = new ThemeManager(moon, sun);
const toggleThemeBtn = document.querySelector('#themeToggle');
toggleThemeBtn?.addEventListener('click', () => themeManager.toggleTheme());
