import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, propertyId } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Simulate email sending or database storage
    console.log('Contact form submission:', {
      name,
      email,
      message,
      propertyId,
      timestamp: new Date().toISOString(),
    });

    // In a real app, you'd:
    // - Send email to admin
    // - Store in database
    // - Send confirmation email to user

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully. We will contact you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
