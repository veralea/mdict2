AUTORIZATION:

to auturize a page or a CRUD, in the body, you must send {requestedPage: '/admin'} (or othe link to the page you are in)
in the server, to permit usage, use req.permision . it will return true, if permision granted.
keep "secret" a secret, and never give it to anyone. never changed it, otherwise, you will have to reset all password.