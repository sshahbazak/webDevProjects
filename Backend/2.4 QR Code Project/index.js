/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'node:fs';

inquirer
  .prompt([
    {
        type: 'input',
        name: 'url',
        message: "What's the url",
      },
  ])
  .then((answers) => {
    var qr_svg = qr.image(answers.url, { type: 'svg' });
    qr_svg.pipe(fs.createWriteStream('QRCode.svg'));
     
    var svg_string = qr.imageSync('QRCode', { type: 'svg' });
    fs.writeFile("URL.txt", answers.url, (err) => {
            if (err) throw err;
            console.log("The file has been saved");
        });
    console.log(answers.url);
    });


  
 
    