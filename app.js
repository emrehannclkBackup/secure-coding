const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Potansiyel güvenlik açığı: HTTP parametreleriyle doğrudan dosya yolu kullanımı
app.get('/hello', (req, res) => {
  const user = req.query.user; // Kullanıcıdan gelen input (SQL Injection için uygun)
  res.send(`Hello, ${user}.\n`);
});

// Potansiyel güvenlik açığı: CORS zafiyeti
// Herhangi bir kaynağa izin verilmesi
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');  // Bu, herhangi bir kaynağın erişmesine izin verir
  next();
});

// Potansiyel güvenlik açığı: 'eval' kullanımı (XSS açığı)
app.get('/eval', (req, res) => {
  const script = req.query.script;
  eval(script); // Kullanıcıdan gelen zararlı JavaScript kodu çalıştırılabilir
  res.send('Executed script\n');
});

// Potansiyel güvenlik açığı: Güvensiz şifre saklama (text formatında saklama)
app.get('/login', (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  // Şifreyi düz metin olarak kullanmak güvenlik açığı yaratır
  console.log(`User: ${username}, Password: ${password}`);
  res.send('Login attempt\n');
});

// Potansiyel güvenlik açığı: XSS (Cross-Site Scripting) açığı
app.get('/search', (req, res) => {
  const query = req.query.query;
  res.send(`Search results for: ${query}`); // Kullanıcıdan gelen girdi, doğrulama yapılmadan doğrudan ekleniyor
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
