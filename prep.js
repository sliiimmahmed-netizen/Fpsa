const fs=require('fs');fs.mkdirSync('www/lib',{recursive:true});
fs.copyFileSync('node_modules/html2canvas/dist/html2canvas.min.js','www/lib/html2canvas.min.js');
fs.copyFileSync('node_modules/jspdf/dist/jspdf.umd.min.js','www/lib/jspdf.umd.min.js');
