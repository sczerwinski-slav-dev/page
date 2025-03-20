import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export interface PostsFilterProps {
  items: string[]
  filter: string[]
  setFilter: (filter: string[]) => void
}

function PostsFilter(props: PostsFilterProps) {
  const {items, filter, setFilter} = props,
    availableItems = items
      .filter((item) => !filter.find((value) => value === item))
      .sort()

  function addFilterItem(item: string) {
    setFilter([...filter, item].sort())
  }

  function removeFilterItem(item: string) {
    setFilter(filter.filter((filterItem) => filterItem !== item))
  }

  return (
    <Stack direction='column' spacing={1}>
      <Stack direction='row' spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
        {availableItems.map((item) => (
          <Chip
            key={item}
            label={item}
            onClick={() => {addFilterItem(item)}}
            size="small" />
        ))}
      </Stack>
      <Typography variant='overline'>Selection:</Typography>
      <Stack direction='row' spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
        {filter.map((item) => (
          <Chip
            key={item}
            label={item}
            onDelete={() => {removeFilterItem(item)}}
            size="small" />
        ))}
      </Stack>
    </Stack>
  )
}

export default PostsFilter
