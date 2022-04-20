import React from 'react'
import Select from 'react-select'
import { colors } from '../style/colors'

export default function SelectFilter(props) {
  const { value = 0, onChange } = props

  const options = [
    { value: 0, label: 'Todos os episódios' },
    { value: 1, label: 'Meus favoritos' },
    { value: 2, label: 'Vistos' },
  ]

  const customStyles = {
    menuList: (styles) => ({
      ...styles,
      background: colors.dark,
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid dark',
      backgroundColor: state.isSelected ? colors.primary : 'transparent',
      color: state.isSelected ? colors.secondary : colors.light,
      padding: 15,
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: colors.primary,
      border: 0,
      borderRadius: 0,
    }),
    valueContainer: (provided) => ({
      ...provided,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: colors.white,
      padding: 10,
      fontSize: 18,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      background: 'transparent',
    }),
  }

  return (
    <Select
      options={options}
      styles={customStyles}
      defaultValue={options[value]}
      onChange={(opt) => onChange(opt.value)}
    />
  )
}
