document.getElementById("chat").addEventListener("click", submitForm);
function submitForm() {
    var name = document.getElementById("name").value;
    console.log(name)
    fetch('https://nqui5y.deta.dev/text', {
        method: "POST",
        body: JSON.stringify({ prompt: name }),
        headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json())
      .then(data => {
          console.log(data);
          document.getElementById("response").innerHTML = data.message;
      })
}