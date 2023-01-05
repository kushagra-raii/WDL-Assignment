const calculateTemp = () => {


    const enterNum = document.getElementById('temp').value;
    // console.log(enterNum);

    const tempSelected = document.getElementById('temp-diff')
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value
    // console.log(valueTemp );

    // define function

    function celToFah(num) {
        let fah = Math.round((num * 9 / 5) + 32)
        return fah
    }
    function fahToCel(num) {
        let cel = Math.round((num - 32) * 5 / 9)
        return cel
    }

    let result;
    if (valueTemp == "cel") {

        result = celToFah(enterNum)
        document.getElementById('result').innerHTML = `= ${result}°Fahrenheit`

    } else {
        result = fahToCel(enterNum)
        document.getElementById('result').innerHTML = `= ${result}°Celsius`
    }
}
