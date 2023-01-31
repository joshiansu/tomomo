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
    fetch('https://dbarf8.deta.dev/text', {
        method: "POST",
        body: JSON.stringify({ prompt: name }),
        headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json())
      .then(data => {
          console.log(data);
          document.getElementById("response").innerHTML = data.message;
     })
    //document.getElementById("response").innerHTML ="lorem ipsum"
}