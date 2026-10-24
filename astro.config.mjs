import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import rehypeSectionNumber from './src/plugins/rehype-section-number.mjs';

export default defineConfig({
	site: 'https://ytalharabaci.github.io',
	base: '/siber-guvenlik-operasyonlari',
	compressHTML: true,
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'hover',
	},
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
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3,
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
			components: {
				Footer: './src/components/Footer.astro',
			},
			customCss: [
				'./src/styles/tokens.css',
				'./src/styles/typography.css',
				'./src/styles/layout.css',
				'./src/styles/responsive.css',
			],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: true,
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Geist:wght@400;500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=Fira+Code:wght@400;500&display=swap',
					},
				},
				{
					tag: 'script',
					content: `
						(function () {
							function splitSidebarLabels() {
								var labels = document.querySelectorAll('.sidebar-content a > span:first-child');
								for (var i = 0; i < labels.length; i++) {
									var span = labels[i];
									if (span.querySelector('.chapter-num')) continue;
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
								if (active) active.scrollIntoView({ block: 'nearest', inline: 'nearest' });
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
							document.addEventListener('astro:page-load', init);
						})();
					`,
				},
			],
			sidebar: [
				{
					label: '🌐 Ağ Yönetimi ve Güvenliği Kitabı ↗',
					link: 'https://ytalharabaci.github.io/ag-yonetimi-ve-guvenligi/',
					attrs: { target: '_blank', rel: 'noopener' },
				},
				{
					label: '🔐 Uygulamalı Kriptoloji Kitabı ↗',
					link: 'https://ytalharabaci.github.io/uygulamali-kriptoloji/',
					attrs: { target: '_blank', rel: 'noopener' },
				},
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
