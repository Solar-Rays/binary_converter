import { useState } from "react";

function Converter() {

    const [decimalValue, setDecimalValue] = useState("")
    const [binaryValue, setBinaryValue] = useState("")
    const error = "Please enter a number";

    function handleValueInput(e) {
        setDecimalValue(e.target.value)
    }

    function handleBiValueInput(e) {
        setBinaryValue(e.target.value)
    }

    function handleConversion() {

        if (decimalValue !== "") {
            if (!isNaN(decimalValue)) {
                let decimal = Number(decimalValue).toString(2);
                setBinaryValue(decimal)
            } else { alert (error) }
        } else if (binaryValue !== "") {
            if (!isNaN(binaryValue)) {
                let binary = parseInt (binaryValue, 2)
                setDecimalValue(binary)
            } else { alert (error) }
        } else {
            alert("Please enter either a binary value or a decimal value")
        }
        //Check if binary input is not blank 
        //If 
    }


    return (
        <div>
            <h2>Version 1</h2>
            <p>Input either a decimal value or a binary value then click convert</p>

            <p>Input a decimal number: </p>
            <input type="text" value={decimalValue} onChange={handleValueInput} placeholder="Decimal Number" />
            <br />
            <p>Input a Binary number: </p>
            <input type="text" value={binaryValue} onChange={handleBiValueInput} placeholder="Binary Number" />
            <br /> <br />

            <button onClick={handleConversion}>Convert</button>
        </div>
    )
}

export default Converter;