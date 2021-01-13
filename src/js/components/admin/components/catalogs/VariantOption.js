import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'size', label: 'size' },
  { value: 'color', label: 'color' },
  { value: 'material', label: 'material' },
]

const VariantOption = () => <Select options={options} />
export default VariantOption
