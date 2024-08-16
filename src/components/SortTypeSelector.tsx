import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'

import { productsRoute } from '../router'

export type SortDirection = 'asc' | 'desc' | 'default'
export type SortType = 'title' | 'price' | 'default'

export interface SortValue {
  direction: SortDirection
  type: SortType
}

interface SortTypeSelectorProps {
  defaultValue?: SortValue
}

const SortTypeSelector: React.FunctionComponent<SortTypeSelectorProps> = ({
  defaultValue = { direction: 'default', type: 'default' },
}) => {
  // TODO tanstack router
  // const [searchParams, setSearchParams] = useSearchParams()

  const handleChange = (event: SelectChangeEvent<string>) => {
    // TODO
    // const value = event.target.value as string
    // if (value === 'default:default') {
    //   searchParams.delete('sortBy')
    //   searchParams.delete('order')
    //   setSearchParams(searchParams)
    //   return
    // }
    // const [type, direction] = value.split(':') as [SortType, SortDirection]
    // searchParams.set('sortBy', type)
    // searchParams.set('order', direction)
    // setSearchParams(searchParams)
  }

  const formattedDefaultValue = `${defaultValue.type}:${defaultValue.direction}`

  return (
    <FormControl sx={{ width: 250 }}>
      <InputLabel id='sort-type-select'>Sort by</InputLabel>
      <Select
        defaultValue={formattedDefaultValue}
        onChange={handleChange}
        labelId='sort-type-select'
        label='Sort by'
      >
        <MenuItem value='default:default'>None</MenuItem>
        <MenuItem value='title:asc'>Name (A-Z)</MenuItem>
        <MenuItem value='title:desc'>Name (Z-A)</MenuItem>
        <MenuItem value='price:asc'>Price (Low to High)</MenuItem>
        <MenuItem value='price:desc'>Price (High to Low)</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SortTypeSelector
