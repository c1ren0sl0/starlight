// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '6point.co',
			sidebar: [
				{
					label: 'Perspectives',
					items: [
						{ label: 'Imperatives', slug: 'perspectives/imperatives' },
						{ label: 'Technology', slug: 'perspectives/technology' },
						{ label: 'Practices', slug: 'perspectives/practices' },
						{ label: 'Enterprise', slug: 'perspectives/enterprise' },
						{ label: 'Industry', slug: 'perspectives/industry' },
						{ label: 'Forces', slug: 'perspectives/forces' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ label: 'Overview', slug: 'resources' },
					],
				},
				{
					label: 'Approach',
					items: [
						{ label: 'How We Think', slug: 'approach' },
					],
				},
			],
		}),
	],
});
