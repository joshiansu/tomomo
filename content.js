console.log("inside content js ");

let paraString = '';
const pTotal = document.getElementsByTagName('p').length;
for(let i= 0; i<pTotal; i++){
    paraString = paraString.concat(document.getElementsByTagName('p')[i].innerHTML.replace(/<\/?[^>]+(>|$)/g, "")," ");
}
paraString =document.getElementsByTagName('p')[0].innerHTML;
console.log('funnn::', paraString);

    chrome.runtime.sendMessage({paraString: paraString}, (response) => {
     
    });
    
    // chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    //   console.log('in con js, in listener', message);
    //   document.getElementById("response").innerHTML = message;
      
    // })
    // do something with response here, not outside the function
  //  console.log(response);


// document.getElementById("chat").addEventListener("click", submitForm);

// var wage = document.getElementById("chat");
// wage.addEventListener("keydown", function (e) {
//     if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
//         submitForm();
//     }
// });


// const preloader = document.querySelector('.preloader');
// const fadeEffect = setInterval(() => {
//     // if we don't set opacity 1 in CSS, then
//     // it will be equaled to "" -- that's why
//     // we check it, and if so, set opacity to 1
//     if (!preloader.style.opacity) {
//       preloader.style.opacity = 1;
//     }
//     if (preloader.style.opacity > 0) {
//       preloader.style.opacity -= 0.1;
//     } else {
//         preloader.style.display = "none";
//       clearInterval(fadeEffect);
//     }
//   }, 1000);

//   document.getElementById("chat").addEventListener('load', fadeEffect);

// function submitForm() {
//     console.log("SUBMITTED!!")
//     var name = document.getElementById("name").value;
//     console.log("name")
//     fetch('https://grkp5f3qtjwlnkrhjus3c3pc7u0ttuef.lambda-url.ap-south-1.on.aws', {
//         method: "POST",
//         body: JSON.stringify({ message: name }),
//         headers: { 'Content-Type': 'application/json' }
//       }).then(response => response.json())
//       .then(data => {
//           console.log(data);
//           console.log(data.choices[0].text)
//           document.getElementById("response").innerHTML = data.choices[0].text;
//      })
//     //document.getElementById("response").innerHTML ="lorem ipsum"
// }
// paraString =document.getElementsByTagName('p')[0].innerHTML;

// document.getElementById("q1").addEventListener("click", pill1Response);


// function pill1Response() {
//     // console.log("SUBMITTED!!")
//     var content = 'Recently, Google announced it was laying off approximately 6% of its workforce (or 12,000 people). This brings it in line with most of the rest of the tech industry. The reason given by a publicly contrite CEO was that they’d overhired in the boom following the COVID pandemic and that now they had to address it but they were oh-so-sorry and took full responsibility. Like many others my first reaction to this rationale was “bullshit”. '
//     // var name = document.getElementById("name").value;
//     console.log(content)
//     var name = "Summarise " + content;
//     console.log(name)
//     console.log(content)

//     console.log("name")
//     fetch('https://grkp5f3qtjwlnkrhjus3c3pc7u0ttuef.lambda-url.ap-south-1.on.aws', {
//         method: "POST",
//         body: JSON.stringify({ message: name }),
//         headers: { 'Content-Type': 'application/json' }
//       }).then(response => response.json())
//       .then(data => {
//           console.log(data);
//           console.log(data.choices[0].text)
//           document.getElementById("response").innerHTML = data.choices[0].text;
//      })
//     //document.getElementById("response").innerHTML ="lorem ipsum"
// }

