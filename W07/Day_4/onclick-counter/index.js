let count = 0;

document.getElementById("Increase").onclick = function() {
    count += 1;
    document.querySelector("div.Count").innerHTML = count;
};

document.getElementById("Decrease").onclick = function() {
    count -= 1;
    document.querySelector("div.Count").innerHTML = count;
};

document.getElementById("Reset").onclick = function() {
    count = 0;
    document.querySelector("div.Count").innerHTML = count;
};