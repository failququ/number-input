import React, { useState } from 'react'

const NumberInput = ({ maxValue, minValue, placeholder = 'Плейсхолдер' }) => {

  const [value, setValue] = useState('');

  const digitsRegEx = new RegExp(/[^-0-9]/g);

  const validateMinMax = () => {
    const formattedValue = value.replace(digitsRegEx, '');

    if(formattedValue > maxValue) {
      setValue(maxValue);
    } else if (formattedValue < minValue) {
      setValue(minValue);
    }
  }

  const handleInputChange = (event) => {
    const value =  event.target.value.replace(digitsRegEx, '');
    if((value[0] === '-' ? value.length - 1 : value.length) < 5) {
      setValue(value);
    } else {
    const formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    setValue(formattedValue);
    }
  }

  return (
  <label>
    <input
      placeholder=" "
      style={{width: `${145 + (value.length * 11)}px`}} 
      onBlur={validateMinMax} value={value} 
      onChange={(e) => handleInputChange(e)} 
      type="text"
      />
      <span>{placeholder}</span>
  </label>
  )
}

export default NumberInput;