import { Box, Button, Input, InputAdornment } from '@mui/material'

import { Search } from '@mui/icons-material'
import { useRef } from 'react'

interface SearchBarProps {
  defaultValue?: string
  onSearch: (value: string) => void
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  defaultValue = '',
  onSearch,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = () => {
    if (inputRef.current) {
      onSearch(inputRef.current.value)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Box width='100%' display='flex'>
      <Input
        inputRef={inputRef}
        defaultValue={defaultValue}
        onKeyDown={handleKeyDown}
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position='start'>
            <Search />
          </InputAdornment>
        }
      />
      <Button variant='contained' onClick={handleSearch}>
        Search
      </Button>
    </Box>
  )
}

export default SearchBar
