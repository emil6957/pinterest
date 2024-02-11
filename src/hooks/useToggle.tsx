import { useState } from "react";

const useToggle = (defaultState: boolean):[boolean, () => void] => {
    const [state, setState] = useState(defaultState);

    const toggleState = () => {
        setState(curr => !curr);
    }

    return [state, toggleState]
}

export default useToggle;