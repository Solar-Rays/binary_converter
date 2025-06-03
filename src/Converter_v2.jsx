import { useState } from "react";

function Converter2 () {
    const [decimalValue, setDecimalValue] = useState("")
    const [binaryValue, setBinaryValue] = useState("")

    function handleValueChange (e) {
        let value = e.target.value;
        setDecimalValue (value)

        if (value === "") {
            setBinaryValue("")
        } else if (!isNaN(value)) {
            let decimal = Number(value).toString(2)
            setBinaryValue(decimal)
        }
    }
    
    function handleBiValueChange (e) {
        let value = e.target.value;
        setBinaryValue (value)

        if (value === "") {
            setDecimalValue("")
        } else if (!isNaN(value)) {
            let binary = parseInt(value, 2).toString()
            setDecimalValue(binary)
        }
    }

    return (        
        <div>
            <h2>Version 2</h2>
            <p>Just input a decimal value or a binary value and it converts automatically!</p>

            <p>Input a decimal number: </p>
            <input type="text" value={decimalValue} onChange={handleValueChange} placeholder="Decimal Number" />
            <br />
            <p>Input a Binary number: </p>
            <input type="text" value={binaryValue} onChange={handleBiValueChange} placeholder="Binary Number" />
            <br /> <br />

            {/* <button onClick={handleConversion}>Convert</button> */}
        </div>
    )
}

export default Converter2;