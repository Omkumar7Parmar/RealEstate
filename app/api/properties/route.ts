import { NextRequest, NextResponse } from 'next/server';
import { properties } from '@/lib/properties';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type'); // 'rent' or 'sale'

    let result = properties;

    // Filter by type if specified
    if (type === 'rent' || type === 'sale') {
      result = result.filter((p) => p.type === type);
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Properties API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch properties' },
      { status: 500 }
    );
  }
}
