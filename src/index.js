/**
 * File that handles running and evaluation of the code. It executes the code through an API call using the axios library 
 * 
 * Created by @Shashwat_Sharma
 * 9/2023
 * Copyright (c) 2023 Shashwat Sharma
 */
import {default as axios} from "axios"
import {stringify} from "qs"

var input = document.getElementsByClassName("input")[0]; //textarea that takes the user-input
var output = document.getElementsByClassName("output")[0]; //textarea that shows the output of the code
var expected = document.getElementsByClassName("expected")[0]; //textarea that takes the expected result
var result = document.getElementsByClassName("result")[0]; //textarea that shows if the output and expected output match

//called when the run button is pressed
window.run_code = async function() {
    output.value = "waiting";

    var input_code = document.getElementById("input-code").value;

    //object literal containing the input data
    var data = stringify({
        'code': input_code,
        'language': 'c',
        'input': input.value
    });

    //configuration object literal for the API call through axios
    var config = {
        method: 'post',
        url: 'https://api.codex.jaagrav.in',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };

    axios(config)
        .then(function (response) {
            var resp=JSON.stringify(response.data);

            //no output means there was some error, if there was no output expected and no error happens, the output field remains empty
            if(JSON.parse(resp).output === "")
                output.value = JSON.parse(resp).error
            else
                output.value = JSON.parse(resp).output;
            
            //checking if the output is correct and updating the result accordingly
            if(output.value.trim() === expected.value.trim())
                result.value = "Success";
            else
                result.value = "Failure";
        })
        .catch(function (error) {
            console.log(error);
            output.value = "Unknown error";
        });
};