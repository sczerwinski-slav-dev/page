import * as React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'

function PageSkeleton() {
  return (
    <React.Fragment>
      <Typography variant='h1'><Skeleton animation='wave' width='50%' /></Typography>
      <Typography variant='body1'><Skeleton animation='wave' width='100%' /></Typography>
      <Typography variant='body1'><Skeleton animation='wave' width='100%' /></Typography>
      <Typography variant='body1'><Skeleton animation='wave' width='30%' /></Typography>
    </React.Fragment>
  )
}

export default PageSkeleton
