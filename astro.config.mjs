import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import rehypeSectionNumber from './src/plugins/rehype-section-number.mjs';

export default defineConfig({
	site: 'https://yusufarbc.github.io',
	base: '/siber-guvenlik-operasyonlari',
	markdown: {
		rehypePlugins: [rehypeSectionNumber],
	},
	integrations: [
		mermaid({
			theme: 'neutral',
			autoTheme: true,
		}),
		starlight({
			title: 'Siber Güvenlik Operasyonları',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Türkçe',
					lang: 'tr',
				},
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/yusufarbc/siber-guvenlik-operasyonlari',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/yusufarbc/siber-guvenlik-operasyonlari/edit/main/',
			},
			customCss: [
				'./src/styles/tokens.css',
				'./src/styles/typography.css',
				'./src/styles/layout.css',
				'./src/styles/responsive.css',
			],
			head: [
				{
					tag: 'script',
					content: `
						(function () {
							function splitSidebarLabels() {
								var labels = document.querySelectorAll('.sidebar-content a > span:first-child');
								for (var i = 0; i < labels.length; i++) {
									var span = labels[i];
									var match = /^(\\d+\\.\\d+)\\s+(.+)$/.exec(span.textContent);
									if (!match) continue;
									span.textContent = '';
									var numEl = document.createElement('span');
									numEl.className = 'chapter-num';
									numEl.textContent = match[1];
									span.appendChild(numEl);
									span.appendChild(document.createTextNode(match[2]));
								}
							}
							function revealActiveSidebarLink() {
								var active = document.querySelector('.sidebar-content [aria-current="page"]');
								if (active) active.scrollIntoView({ block: 'center' });
							}
							function init() {
								splitSidebarLabels();
								revealActiveSidebarLink();
							}
							if (document.readyState === 'loading') {
								document.addEventListener('DOMContentLoaded', init);
							} else {
								init();
							}
						})();
					`,
				},
			],
			sidebar: [
				{
					label: '01. Bilgi Güvenliği',
					collapsed: true,
					items: [{ autogenerate: { directory: '01-bilgi-guvenligi' } }],
				},
				{
					label: '02. Fiziksel Güvenlik',
					collapsed: true,
					items: [{ autogenerate: { directory: '02-fiziksel-guvenlik' } }],
				},
				{
					label: '03. Donanım Güvenliği',
					collapsed: true,
					items: [{ autogenerate: { directory: '03-donanim-guvenligi' } }],
				},
				{
					label: '04. Kimlik Güvenliği',
					collapsed: true,
					items: [{ autogenerate: { directory: '04-kimlik-guvenligi' } }],
				},
				{
					label: '05. Veri Güvenliği',
					collapsed: true,
					items: [{ autogenerate: { directory: '05-veri-guvenligi' } }],
				},
				{
					label: '06. Ağ Güvenliği',
					collapsed: true,
					items: [{ autogenerate: { directory: '06-ag-guvenligi' } }],
				},
				{
					label: '07. Uç Nokta Güvenliği',
					collapsed: true,
					items: [{ autogenerate: { directory: '07-uc-nokta-guvenligi' } }],
				},
				{
					label: '08. Mobil Güvenlik',
					collapsed: true,
					items: [{ autogenerate: { directory: '08-mobil-guvenlik' } }],
				},
				{
					label: '09. E-Posta Güvenliği',
					collapsed: true,
					items: [{ autogenerate: { directory: '09-e-posta-guvenligi' } }],
				},
				{
					label: '10. Uygulama Güvenliği',
					collapsed: true,
					items: [{ autogenerate: { directory: '10-uygulama-guvenligi' } }],
				},
				{
					label: '11. Bulut Güvenliği',
					collapsed: true,
					items: [{ autogenerate: { directory: '11-bulut-guvenligi' } }],
				},
				{
					label: '12. Endüstriyel Sistem Güvenliği',
					collapsed: true,
					items: [{ autogenerate: { directory: '12-endustriyel-sistem-guvenligi' } }],
				},
				{
					label: '13. Yapay Zeka Güvenliği',
					collapsed: true,
					items: [{ autogenerate: { directory: '13-yapay-zeka-guvenligi' } }],
				},
				{
					label: '14. Operasyonel Güvenlik',
					collapsed: true,
					items: [{ autogenerate: { directory: '14-operasyonel-guvenlik' } }],
				},
			],
		}),
	],
});
