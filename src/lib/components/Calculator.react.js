import React, { useState } from 'react';
import PropTypes from 'prop-types';


/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
const Calculator = (props) => {
    const { id, setProps } = props;
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleCalculate = () => {
        const sum = parseFloat(num1) + parseFloat(num2);
        setResult(sum.toString());
        setProps({ result: sum.toString() });
    };

    return (
        <div id={id} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <label>
                Number 1:
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
            </label>
            <label>
                Number 2:
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
            </label>
            <button onClick={handleCalculate}>
                Calculate
            </button>
            <label>
                Result:
                <input
                    type="text"
                    value={result}
                    readOnly
                />
            </label>
        </div>
    );
};

Calculator.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The result of the calculation.
     */
    result: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default Calculator;