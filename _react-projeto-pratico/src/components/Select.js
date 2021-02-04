import React from 'react';
import M from 'materialize-css';

export default function Select({
     values=['a', 'b', 'c'],
     selectValue = 'c',
     onChange,
}) {
    React.useEffect(() => {
        M.AutoInit();
    }, []);

    const handleSelectChange = ({target}) => {
        const newValue = target.value;
        onChange(newValue)
    }

    return (
        <select value={selectValue} onChange={handleSelectChange}>
            {values.map(({ id, description, value}) => {
                    return (
                        <option key={id} value={value}>
                        {description}
                        </option>
                    );
            })}
        </select>
    );
}
