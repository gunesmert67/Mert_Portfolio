import { ContactData } from '@/data/Contact';
import { projectsData } from '@/data/Projects';

export async function GET() {
  const baseUrl = ContactData.website;

  const itemsXml = projectsData
    .map(
      (project) => `
    <item>
      <title><![CDATA[${project.title.tr}]]></title>
      <link>${baseUrl}/projects</link>
      <guid>${baseUrl}/projects#project-${project.id}</guid>
      <description><![CDATA[${project.description.tr}]]></description>
      <pubDate>${new Date(project.startDate || '2026-01-01').toUTCString()}</pubDate>
    </item>`,
    )
    .join('');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Mert Güneş | Mekatronik Mühendisi &amp; Yapay Zeka Uzmanı</title>
    <link>${baseUrl}</link>
    <description>Mert Güneş'in yapay zeka, otonom sistemler ve mekatronik mühendisliği projeleri ve güncellemeleri.</description>
    <language>tr-TR</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
