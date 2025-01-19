import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableChips({ setYear }) {
  const years = ['2024', '2025'];

  return (
    <Stack direction="row" spacing={1} sx={{ marginTop: 5, marginBottom: 5 }}>
      {years.map((element) => (
        <Chip label={element} onClick={() => setYear(element)} />
      ))}
    </Stack>
  );
}
