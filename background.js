
console.log("inside background js ");

    console.log("hello")

    //receiving a message
    chrome.runtime.onMessage.addListener(
        
        async (request, sender, sendResponse) => {
            if(!request.paraString)
        console.log('request', request.paraString);
        // var text = "1. arXiv is an open access repository of scientific research papers. 2. It is a valuable resource for researchers, providing access to the latest research in a wide range of disciplines. 3. arXiv is a great way to stay up to date with the latest developments in science and technology."
        // document.getElementById("response").innerHTML = text;
        // promptProvider(text)
        fetch('https://grkp5f3qtjwlnkrhjus3c3pc7u0ttuef.lambda-url.ap-south-1.on.aws', {
            method: "POST",
            body: JSON.stringify({ message: "Summarize in three points and under 100 words"+ request.paraString }),
            headers: { 'Content-Type': 'application/json' }
          }).then(response => response.json())
          .then(data => {
           // data ="Hello World!";
            const text= data.choices[0].text;
            console.log("text", text)
            console.log("text", text.length)
            document.getElementById("response").innerHTML = text;
            promptProvider(text)
            // chrome.tabs.query({active:true,currentWindow:true}, (tabs) => {
            //     let activeTab = tabs[0];
            //     console.log('tabs:', activeTab);
            //     chrome.tabs.sendMessage("true", activeTab.id, {text: text});
            // }
            // );
            
         }) 
        }


    );


    
    function promptProvider(summary) {
        console.log("SUBMITTED!!")
        // var name = document.getElementById("name").value;
        console.log("summary", summary)
        // var name = 'Recently, Google announced it was laying off approximately 6% of its workforce (or 12,000 people). This brings it in line with most of the rest of the tech industry. The reason given by a publicly contrite CEO was that they’d overhired in the boom following the COVID pandemic and that now they had to address it but they were oh-so-sorry and took full responsibility. Like many others my first reaction to this rationale was “bullshit”. I imagine the same is true for the people at Meta, Amazon, Microsoft et al going through this. I spent 10 years at Google so I have some views on how these things come about and they don’t reflect well on the people running the company. Before getting into that it’s worth noting that all publicly listed companies operate under a fiduciary duty to act for the benefit of their shareholders. This has been enshrined since the (in)famous case of Dodge vs Ford Motor Company (1919). The backstory there was that Henry Ford wanted to reduce payments to shareholders on the basis of being able to offer cheaper cars to his customers and better wages to his staff. At the time Ford said. My ambition is to employ still more men, to spread the benefits of this industrial system to the greatest possible number, to help them build up their lives and their homes. To do this we are putting the greatest share of our profits back in the business. The Dodge brothers owned 10% of Ford and opposed this and took Ford to court because they wanted the payments to be able to start their own company. They won and Ford was not allowed to lower prices or raise salaries at the company. It’s worth understanding that if you have a sufficiently vocal group of shareholders with the resources to take you to court then you have to be able to show you are acting in their best interests. Shareholders have primacy in terms of a company’s priorities. This almost enshrines seeking short term profit over longer term thinking by giving activist investors a stick to threaten you with.'
        fetch('https://sngoy3fgtvvyv55gnjeg2voz7u0jxzhz.lambda-url.ap-south-1.on.aws', {
            method: "POST",
            body: JSON.stringify({ message: summary }),
            headers: { 'Content-Type': 'application/json' }
          }).then(response =>  {
            response.text().then(prompt => {
                console.log("aaaaaaa:", prompt)
                var array = JSON.parse(prompt);
                console.log(array)
                document.getElementById("q1").innerHTML = array[0]
                document.getElementById("q2").innerHTML = array[1]
                document.getElementById("q3").innerHTML = array[2]
                // document.getElementById("q-button").style.display = 'block'
            }
            )
          })
        console.log("done")
    }
    

//     async function sendMessageToPopup(message) {
//       chrome.runtime.onMessage.addListener(
//         async (request, sender, sendResponse) => {
//             if(!request.paraString)
//         console.log('request', request.paraString);
//         return fetch('https://grkp5f3qtjwlnkrhjus3c3pc7u0ttuef.lambda-url.ap-south-1.on.aws', {
//             method: "POST",
//             body: JSON.stringify({ message: "Summarize "+request.paraString }),
//             headers: { 'Content-Type': 'application/json' }
//           }).then(response => response.json())
//           .then(data => {
//            // data ="Hello World!";
//             const text= data.choices[0].text;
//             chrome.tabs.query({active:true,currentWindow:true}, (tabs) => {
//                 let activeTab = tabs[0];
//                 console.log('tabs:', activeTab);
//                 chrome.tabs.sendMessage(activeTab.id, {text: text});
//             });
//           })
//         })
//       // return new Promise((resolve, reject) => {
//       //   const port = chrome.runtime.connect({ name: "popup" });
//       //   port.postMessage(message);
//       //   port.onMessage.addListener(response => {
//       //     resolve(response);
//       //   });
//       //   port.onDisconnect.addListener(() => {
//       //     reject(new Error("Port closed"));
//       //   });
//       // });
//     }


// // // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// // //     chrome.tabs.executeScript(tabs[0].id, {code: "document.body.innerText"}, function(text) {
// // //       console.log(text);
// // //     });
// // //   });
// // console.log("BACKGROUND WORKING ....")
// // window.onload = function () {
// //     document.getElementById("button").onclick = submitForm();
// // }
// console.log("BACKGROUND WORKING")
// // document.getElementById("chat").addEventListener("click", submitForm);

// // var wage = document.getElementById("chat");
// // wage.addEventListener("keydown", function (e) {
// //     if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
// //         submitForm();
// //     }
// // });


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
