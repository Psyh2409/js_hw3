function promptArray(strng = prompt("Put some elements over space")) {
    if (!strng) { //For generating an array with a controlled random length and a random content.
        try {
            strng = parseInt(Math.random()*Math.pow(10, Math.floor(Math.random() * 10)+1), 32).toString(40); //for testing error.
        } catch (error) {//Because toString(param) may throws RangeError.
            alert(`Oops, we have an error: ${error}.`);
            strng = `${Math.random()*Math.pow(10, Math.floor(Math.random() * 10)+1)}`; //It`s counter-hypothesis.
        }
    }
        return strng.includes(' ') ? strng.split(' ') : strng.split(''); // for the naughty users
}
// 3.1
function lastElement(arr = promptArray()){
// if (arr && Array.isArray(arr)) {// I get some array anyway. 
        let last = arr[arr.length-1];// Actually task 3.1
        alert(`${arr} \n ${last}`);
        return last;
    // }
}
// 3.2
function musicStyles() {
    let styles = ["Jazz", "Blues"];
    console.log(styles);
    styles.push("Rock-n-Roll");
    console.log(styles);
    styles.splice(styles.length-2, 1, "Classic");
    console.log(styles);
    console.log(styles.shift());
    console.log(styles);
    styles.unshift("Rap", "Reggae");
    console.log(styles);
}
// 3.3
function find(arr = promptArray(), value = prompt("What value of array`s element do you want to search?")) {
    alert(arr);
    let index = arr.indexOf(value);
    alert(index);
    return index;
}
// 3.4
function filterRange(
    array = promptArray().map(each => parseInt(each, 32)), 
    a = parseInt(Math.random() * (
        ((Math.max.apply(Math, array) + Math.min.apply(Math, array))/2) - Math.min.apply(Math, array)) + Math.min.apply(Math, array)), 
    b = parseInt(Math.random() * (array.slice(0).sort((x, y) => x - y)[array.length-1] - a) + a)) {
    alert(array + "\n" + a + "\n" + b);
    let newArr = array.filter((x) => x >= a && x < b);
    alert(newArr);
    return newArr;
}
// 3.5
function camelCase(strng = "Lorem-ipSum-dolOr") {
    alert(strng);
    let arr = strng.split('-').map(each => each.toLowerCase());
    let first = arr.shift();
    let result = arr.map(each => (each.toString()[0].toUpperCase() + each.toString().slice(1).toLowerCase()));
    result.unshift(first);
    let str = result.join('');
    alert(str);
    return str;
}



