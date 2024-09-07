



fetch('http://localhost:3000/log')
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
