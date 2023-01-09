const calculateTemp = () => {

    // Get the temperature value entered by the user
    const enterNum = document.getElementById('temp').value;

    // Get the temperature unit selected by the user
    const tempSelected = document.getElementById('temp-diff')
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value

    // Define functions to convert from Celsius to Fahrenheit and vice versa
    function celToFah(num) {
        let fah = Math.round((num * 9 / 5) + 32)
        return fah
    }
    function fahToCel(num) {
        let cel = Math.round((num - 32) * 5 / 9)
        return cel
    }

    // Convert the temperature based on the user's selection
    let result;
    if (valueTemp == "cel") {
        result = celToFah(enterNum)
        document.getElementById('result').innerHTML = `= ${result}°Fahrenheit`
    } else {
        result = fahToCel(enterNum)
        document.getElementById('result').innerHTML = `= ${result}°Celsius`
    }
}
