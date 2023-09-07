import { Button, Stack } from '@mui/material';


export default function Footer({ updateCurrPage,filteredData}) {

    const mealPerpage = 3    
    const totalpages = Math.ceil(filteredData.length / mealPerpage);
    const pageNumbers = [...Array(totalpages + 1).keys()].slice(1)
    
  return (
      <Stack flexDirection={'row'} justifyContent={'end'}>
          {
              pageNumbers.map((n) => (
                  <Button
                      variant='outlined'
                      size='small' key={n}
                      onClick={() => { updateCurrPage(n) }}>
                      {n}
                  </Button>
              ))
          }
    </Stack>
  )
}
