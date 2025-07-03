// const fs = require('fs');
import fs from "fs"
import ytdl from "ytdl-core";
// const ytdl = require('ytdl-core');

const videoUrl = 'https://youtu.be/BcqxLCWn-CE?si=iod-fA0QYz4DBcuS'; // replace with your YouTube video URL
const outputFileName = 'youtube_video.mp4';

ytdl(videoUrl, { quality: 'highest' })
    .pipe(fs.createWriteStream(outputFileName))
    .on('finish', () => {
        console.log('✅ Download complete');
    });
