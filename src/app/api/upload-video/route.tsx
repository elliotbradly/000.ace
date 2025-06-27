// app/api/upload-video/route.js (or .ts)
import { NextResponse } from 'next/server';
import formidable from 'formidable';
import { promises as fs } from 'fs'; // For file system operations

export async function POST(request) {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true; // Important for preserving file extensions

  try {
    const files = await new Promise((resolve, reject) => {
      form.parse(request, (err, fields, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(files);
        }
      });
    });

    const videoFile = files['video']; // 'video' is the field name from the client

    if (!videoFile) {
      return NextResponse.json({ error: 'No video file uploaded' }, { status: 400 });
    }

    const oldPath = videoFile.filepath;
    const newPath = `./public/uploads/${videoFile.originalFilename}`; // Destination path

    await fs.copyFile(oldPath, newPath); // Copy the file

    return NextResponse.json({ message: 'Video uploaded successfully', filename: videoFile.originalFilename }, { status: 200 });

  } catch (error) {
    console.error('Error uploading video:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}