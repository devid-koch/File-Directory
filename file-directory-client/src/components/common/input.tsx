import { useState } from "react"
import { InputProps } from "../../utils/types";

export const Input = ({ name = "", saveDirectory, cancel }: InputProps) => {
    const [value, setValue] = useState(name);
    return (
        <>
            <input
                type="text"
                value={ value }
                onChange={ (e) => setValue(e.target.value) }
            />
            <span
                onClick={ () => {
                    saveDirectory(value);
                    cancel();
                } }
                className="button"
            >
                ✅
            </span>
            <span onClick={ cancel } className="button">
                ❌
            </span>
        </>
    )
}