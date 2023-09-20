import {default as axios} from "axios"
import {stringify} from "qs"

var input = document.getElementsByClassName("input")[0];
var output = document.getElementsByClassName("output")[0];
var expected = document.getElementsByClassName("expected")[0];
var result = document.getElementsByClassName("result")[0];

window.run_code = async function() {
    output.value = "waiting";

    var input_code = document.getElementById("input-code").value;

    var data = stringify({
        'code': input_code,
        'language': 'c',
        'input': input.value
    });
    
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
            if(JSON.parse(resp).output === "")
                output.value = JSON.parse(resp).error
            else
                output.value = JSON.parse(resp).output;
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