import { NextResponse } from 'next/server';
import { seedAllData } from '@/lib/seed-data';

export async function POST() {
  try {
    await seedAllData();
    return NextResponse.json({ 
      success: true, 
      message: 'Seed data successfully added to Firebase!' 
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to seed data' 
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Seed endpoint is ready. Use POST method to seed data.' 
  });
} 