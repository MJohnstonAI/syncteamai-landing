import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
    }

    // The path to our temporary database file
    const filePath = path.join(process.cwd(), 'data', 'subscribers.json');
    const dirPath = path.dirname(filePath);

    // Ensure the data directory exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // Read existing subscribers
    let subscribers = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      if(fileContent){
          subscribers = JSON.parse(fileContent);
      }
    }

    // Add the new subscriber if they're not already on the list
    if (!subscribers.includes(email)) {
      subscribers.push(email);
      fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));
    }
    
    // For now, this just saves to a file. Later, we can add code here to send to Mailchimp or your Gmail.

    return NextResponse.json({ message: 'Successfully subscribed!' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}
