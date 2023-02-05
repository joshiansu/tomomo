

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
