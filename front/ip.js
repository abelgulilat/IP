



fetch('https://ipv3bv3.onrender.com/log')
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

console.log(data)