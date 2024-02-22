## JWT Basic workflow
```js
const secret = 'my-secret';
const signed = jwt.sign(payload, secret, {
algorithm: 'HS256', // JWT Signing Algorithm
expiresIn: '5s' // if ommited, the token will not expire
});
```
## Setting the cookie
```js
res.cookie('tokenName', signed)
```
## Verifying the token is just as easy:
```js
const decoded = jwt.verify(signed, secret, {
// Never forget to make this explicit to prevent
// signature stripping attacks
algorithms: ['HS256'], 
});
```
## Middlewares, authentification basique.
```js
function isAuthenticated(req, res, next) { // Check if authorized
  const token = req.cookies.tokenName
  if(!token) res.status(302).redirect('/login'); // makanch token, ghyrha

  const verify = jwt.verify(token, secret);
  if(!verify) res.status(302).redirect('/login'); // kan w machi valide, ghyrha

  req.user = verify; // if all is good, asign the payload to req.user
  next(); 
}
```

```js
function avoidAuth(req, res, next) { // To avoid having to authorize again
  const token = req.cookies.tokenName
  if(!token) next(); // makanch? 3tih y'login again
  
  const verify = jwt.verify(token, secret); // kan token 
  if(!verify) res.status(302).redirect('/login'); // w valide

  return  res.status(302).redirect('/profile') // Tfdl mr7baa
}
```

## Cache workaround
```js
app.use((req, res, next) => { // To avoid tabbing back into the login page while already authenticated. Since it's cached.
  res.set('Cache-Control', 'no-store');
  next();
});
```