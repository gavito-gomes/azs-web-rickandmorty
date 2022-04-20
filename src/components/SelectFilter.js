import React from 'react'
import ReactSelect from 'react-select'
import { colors } from '../style/colors'

const options = [
  { value: 0, label: 'Todos os episódios' },
  { value: 1, label: 'Meus favoritos' },
  { value: 2, label: 'Vistos' },
]

function Select(props) {
  const { value = 0, onChange } = props

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
    <ReactSelect
      options={options}
      styles={customStyles}
      defaultValue={options[value]}
      onChange={(opt) => onChange(opt.value)}
    />
  )
}

function Tabs(props) {
  const { value = 0, onChange } = props

  return (
    <div className='flex mt-6'>
      {options.map((opt) => {
        return (
          <button
            key={opt.value}
            className={`flex-grow text-lg p-4 lg:p-3 lg:text-base lg:px-10
            ${value === opt.value ? 'text-secondary bg-primary' : 'bg-dark'}`}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}

export default function SelectFilter(props) {
  return (
    <div>
      <div className='md:hidden'>
        <Select {...props} />
      </div>
      <div className='hidden md:block'>
        <Tabs {...props} />
      </div>
    </div>
  )
}
