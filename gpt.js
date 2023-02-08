console.log("inside gpt js ");
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    
    if(!message.text)
    console.log('in con js, in listener', message);
    document.getElementById("response").innerHTML = message.text;
    
  })

document.getElementById("chat").addEventListener("click", submitForm);

var wage = document.getElementById("chat");
wage.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        submitForm();
    }
});


function submitForm() {
    console.log("SUBMITTED!!")
    var name = document.getElementById("name").value;
    fetch('https://grkp5f3qtjwlnkrhjus3c3pc7u0ttuef.lambda-url.ap-south-1.on.aws', {
        method: "POST",
        body: JSON.stringify({ message: name }),
        headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json())
      .then(data => {
          console.log(data.choices[0].text)
          document.getElementById("response").innerHTML = data.choices[0].text;
     })
}






document.getElementById("q1").addEventListener("click", pill1Response);


function pill1Response() {
    // console.log("SUBMITTED!!")
    // var content = "PDFs run your world. You know you use PDFs to make your most important work happen. Thats why we invented the Portable Document Format (better known by the abbreviation PDF), to present and exchange documents reliably — independent of software, hardware or operating system. The PDF is now an open standard, maintained by the International Organisation for Standardisation (ISO). PDF documents can contain links and buttons, form fields, audio, video and business logic."
    var name = document.getElementById("q1").innerHTML;
    // console.log(content)
    // var name = "Summarise " + content;
    console.log(name)
    // console.log(content)

    console.log("name")
    fetch('https://grkp5f3qtjwlnkrhjus3c3pc7u0ttuef.lambda-url.ap-south-1.on.aws', {
        method: "POST",
        body: JSON.stringify({ message: name }),
        headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json())
      .then(data => {
          console.log(data);
          console.log(data.choices[0].text)
          document.getElementById("response").innerHTML = data.choices[0].text;
     })
    //document.getElementById("response").innerHTML ="lorem ipsum"
}

