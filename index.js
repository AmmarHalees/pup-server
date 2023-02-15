// const  { executablePath } = require("puppeteer");
// const puppeteer = require("puppeteer");
const express = require('express')
const app = express()
// const port = 8000

// const GetPDF = async (req, res) => {
//   /*---- Config  ----*/

//   let BaseUrl = "https://www.nuclue.com";
//   const path = "/en/resume/print/";
//   const env = process.env.NODE_ENV;
//   const viewport = { width: 2480, height: 3508 };
//   const config = {
//     headless: true,
//     args: ["--no-sandbox", "--disable-setuid-sandbox"],
//     ignoreHTTPSErrors: true,
//     executablePath: executablePath(),
//   };
//   const pdf_settings = {
//     format: "a4",
//     printBackground: true,
//     margin: {
//       top: "0px",
//       right: "0px",
//       bottom: "0px",
//       left: "0px",
//     },
//     scale: 1,
//   };

//   /*---- Server  ----*/
//   try {
//     const browser = await puppeteer.launch(config);

//     if (env === "development") {
//       BaseUrl = "http://localhost:3000";
//     } else if (env === "production") {
//       BaseUrl = "https://www.nuclue.com";
//     }

//     // create a new page in the opened browser
//     const page = (await browser.pages())[0];


//     // go to page
//     await page.goto(url, {
//       waitUntil: "networkidle2",
//     });


//     // get req params 
//     let url = BaseUrl + path + req.query.id;
//     let print_format = req.query.format;

//     // print pdf or png
//     if (print_format === "pdf") {

//       await page.emulateMediaType("screen");
//       await page.setViewport(viewport);

//       const pdfBuffer = await page.pdf(pdf_settings);

//      // send pdf binary as buffer stream
//       res.send(pdfBuffer);

//     } else {

//       await page.emulateMediaType("print");
//       await page.setViewport({
//         width: 950,
//         height: 1344,
//         deviceScaleFactor: 4,
//       });

//       const pngbuffer = await page.screenshot({
//         type: "png",
//         encoding: "binary",
//       });

//       // send png binary as buffer stream
//       res.send(pngbuffer);
//     }
//     await browser.close();
//   } catch (err) {
//     console.log(err);
//   }
// };

// // routes
// app.get('/', (req, res) => {
//     GetPDF(req, res);
// })

// // start server
// app.listen(port, function() {
//     console.log('Server is listening on port 8000')
// });
app.get('/', (req, res) => {
  res.send('Hello World!')
})