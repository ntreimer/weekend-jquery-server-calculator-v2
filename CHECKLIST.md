

## PHASE 1
- [x] git/npm init (--y)
- [x] npm install express
- [x] set up folders
- [x] move over jQuery
- [x] html, client, and server
## PHASE 2
- [x] require express
- [x] create app
- [x] app.use express.static on server/public
- [x] spin up server on port 5000
- [x] add start script to package.json ("start": "node server/server.js")
## PHASE 3
- [x] user interface with 2 input values (numbers) and 
- [x] 6 buttons for +, -, *, /, C (clear), and =
- [x] collect inputs on = press into object 
        {
    input1:
    input2:
    operation:
    }
- [x] clear input fields on C
- [x] send object to server via ajax POST
- [x] create function in server (or require a module) that can handle all the math operations
- [x] on POST, also run a GET that requests the output of the calculation
- [x] keep a record of all math operations and solutions on the server
- [x] display list of all previous calculations on the page when it loads using a GET request
- [x] update list when a new calculation is made
## STRETCH
- [ ] convert interface to look and behave like a calculator
- [x] only allow POST call to happen if all necessary input is ready
- [ ] allow user to clear the history by clicking on a button. 
        (Technically this shouldn't be a GET or a POST. Look into making a DELETE request!)
- [ ] allow user to click on an entry in the History list to re-run that calculation
        (This should display the answer on the calculator interface like a normal calculation)
- [ ] deploy to HEROKU!
## POLISH
- [ ] look for missing ; , . '' ""
- [ ] make sure everything has COMMENT EXPLANATIONS
- [ ] add some CSS for looks!
