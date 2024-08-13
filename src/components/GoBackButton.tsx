import { ArrowBack } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const GoBackButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <Button onClick={handleClick} startIcon={<ArrowBack />}>
      Go back
    </Button>
  )
}

export default GoBackButton
