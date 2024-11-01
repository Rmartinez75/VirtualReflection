// app/api/products/route.js
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const filePath = path.join(process.cwd(), 'public', 'products.json');

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const jsonData = fs.readFileSync(filePath, 'utf8');

  try {
    const products = JSON.parse(jsonData);
    
    // Set the cookie with the correct attributes
    const res = NextResponse.json(products);
    res.cookies.set('__vercel_live_token', 'value', {
      sameSite: 'None',
      secure: true,
      httpOnly: true,
      path: '/',
    });

    return res;
  } catch (error) {
    return NextResponse.json({ error: "Error parsing JSON" }, { status: 500 });
  }
}


// // pages/api/products.js

// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//   const filePath = path.join(process.cwd(), 'public', 'products.json');

//   // Check if the file exists
//   if (!fs.existsSync(filePath)) {
//     return res.status(404).json({ error: "File not found" });
//   }

//   const jsonData = fs.readFileSync(filePath, 'utf8');

//   console.log("Response data:", jsonData); // Log the raw response data

//   try {
//     const products = JSON.parse(jsonData);
//     res.status(200).json(products);
//   } catch (error) {
//     console.error("Error parsing JSON:", error);
//     res.status(500).json({ error: "Error parsing JSON" });
//   }
// }
