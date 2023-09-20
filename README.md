# Online C Compiler

This project aims to create an online compiler for the C programming language that is able to take the input code, input and expected output from the user. If after execution, the expected and actual output are equal, the result field displays 'Success' otherwise 'Failure'.

## API used
This project uses the [CodeX API](https://github.com/Jaagrav/CodeX-API). Upon the user clicking the 'Run Code' button, an API call is sent in order to compile and execute the code. The API responds back with the result (output or error) which is shown to the user.

## Libraries used
- Axios library: Axios is a promise-based HTTP Client for node.js and the browser which is used to send the API request.
-qs: A querystring parsing and stringifying library with some added security.

## Browsers Tested
This website has been tested in the following web browsers:
- Google Chrome
- Microsoft Edge