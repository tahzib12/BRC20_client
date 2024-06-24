import React, { useState } from 'react';

function DropdownCheckbox() {
    const [checkedItems, setCheckedItems] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setCheckedItems((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    return (
        <div>
            <div onClick={toggleDropdown} style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }}>
                {checkedItems.length > 0 ? checkedItems.join(', ') : 'Select options'}
            </div>
            {dropdownOpen && (
                <div style={{ border: '1px solid black', padding: '10px' }}>
                    {options.map((option) => (
                        <div key={option}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={option}
                                    checked={checkedItems.includes(option)}
                                    onChange={handleCheckboxChange}
                                />
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropdownCheckbox;
