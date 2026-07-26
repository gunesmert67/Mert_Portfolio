import { NextResponse } from 'next/server';
import { ContactData } from '@/data/Contact';

/**
 * API route to submit all portfolio URLs to Bing & Yandex via IndexNow protocol.
 */
export async function POST() {
  const host = 'www.mertgunes.com';
  const key = process.env.INDEXNOW_KEY || 'mertgunes2026indexnowkey';
  const keyLocation = `${ContactData.website}/${key}.txt`;

  const urlList = [
    `${ContactData.website}/`,
    `${ContactData.website}/services`,
    `${ContactData.website}/career`,
    `${ContactData.website}/projects`,
    `${ContactData.website}/skills`,
    `${ContactData.website}/certifications`,
    `${ContactData.website}/contact`,
  ];

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList,
      }),
    });

    if (response.ok || response.status === 202) {
      return NextResponse.json({
        success: true,
        message: 'Successfully submitted URLs to IndexNow (Bing & Yandex)',
      });
    }

    return NextResponse.json(
      {
        success: false,
        status: response.status,
        message: 'IndexNow endpoint returned non-OK status',
      },
      { status: response.status },
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
