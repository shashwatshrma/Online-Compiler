var input_code = document.getElementById("input-code");
var output = document.getElementsByClassName("output")[0];
var expected = document.getElementsByClassName("expected")[0];
var result = document.getElementsByClassName("result")[0];

var run_code = function () {
    output.value = get_result();
    if(output.value.trim() === expected.value.trim())
        result.value="Success";
    else
        result.value="Failure";
};

//TO-DO: Implement the API
var get_result = function () {
    return "Hello, World!"
};