// // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// //     chrome.tabs.executeScript(tabs[0].id, {code: "document.body.innerText"}, function(text) {
// //       console.log(text);
// //     });
// //   });
// console.log("BACKGROUND WORKING ....")
// window.onload = function () {
//     document.getElementById("button").onclick = submitForm();
// }
console.log("BACKGROUND WORKING")
// document.getElementById("chat").addEventListener("click", submitForm);

// var wage = document.getElementById("chat");
// wage.addEventListener("keydown", function (e) {
//     if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
//         submitForm();
//     }
// });
promptProvider()
function promptProvider() {
    console.log("SUBMITTED!!")
    // var name = document.getElementById("name").value;
    console.log("name")
    var name = "PDFs run your world. You know you use PDFs to make your most important work happen. That's why we invented the Portable Document Format (better known by the abbreviation PDF), to present and exchange documents reliably — independent of software, hardware or operating system. The PDF is now an open standard, maintained by the International Organisation for Standardisation (ISO). PDF documents can contain links and buttons, form fields, audio, video and business logic."
    fetch('https://sngoy3fgtvvyv55gnjeg2voz7u0jxzhz.lambda-url.ap-south-1.on.aws', {
        method: "POST",
        body: JSON.stringify({ message: name }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(data => {
        //   console.log(data);
        //   console.log(data.choices[0].text)
          data = data.text()
          console.log(data)
          console.log(typeof(data))
        //   var array = JSON.parse(data).split();
        //   console.log(array)
          document.getElementById("pill-1").innerHTML = "afhakdfhkusagkgkwhg";
     }
    )
    var response = ['apple', 'ball', 'cat']
    console.log(response)
    console.log("done")
    //document.getElementById("response").innerHTML ="lorem ipsum"
}

// const request = require('request');
// // const request = require('request-promise');
// const cheerio = require('cheerio');

// // using request and callbacks

// const scrapeWebsiteData = (url) => {
//     request(url, (err, res, html) => {

//         const $ = cheerio.load(html);
//         const Product = {};

//         Product.Title = $('#productTitle').text().replace(/\s\s+/g, '');
//         Product.PriceText = $('#priceblock_ourprice').text();
//         Product.Image = $('#landingImage').attr('data-old-hires');

//         // calculate the price in terms of value
//         let price = parseInt(Product.PriceText.slice(2, Product.PriceText.length).replace(/,/g, ''));
//         Product.PriceValue = price;

//         // fetch feature details
//         let featureDetails = [];

//         $('#feature-bullets>ul>li>span').each((i, el) => {
//             featureDetails.push($(el).text().replace(/[\n\t]/g, '').trim());
//         });

//         Product.FeatureDetails = featureDetails;

//         console.log(Product);

//         return Product;

//     });
// };

// scrapeWebsiteData('https://www.amazon.in/Apple-MacBook-Pro-8th-Generation-Intel-Core-i5/dp/B07S8D1K3M/ref=sr_1_1_sspa?crid=PXJV2CGQP1HH&keywords=macbook+pro+13+inch&qid=1572790136&sprefix=macbook%2Caps%2C406&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE0SUtNODI5UVJFR04mZW5jcnlwdGVkSWQ9QTAxMzM5MTczTEVCUkNYQ1JPNUgxJmVuY3J5cHRlZEFkSWQ9QTAxNjAzMTAyWkxNUkxBUU5ER01FJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==');
