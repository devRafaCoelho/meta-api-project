import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableChips({ symbols, setSelectedSymbol }) {
  const [selectedChip, setSelectedChip] = React.useState<string | null>(null);

  const handleClick = (chipLabel: string) => {
    setSelectedChip((prev) => {
      if (prev === chipLabel) {
        setSelectedSymbol(null);
        return null;
      } else {
        setSelectedSymbol(chipLabel);
        return chipLabel;
      }
    });
  };

  return (
    <Stack direction="row" spacing={1} sx={{ marginTop: 5, marginBottom: 5 }}>
      {symbols.map((element) => (
        <Chip
          key={element}
          label={element}
          onClick={() => handleClick(element)}
          variant={selectedChip === element ? 'filled' : 'outlined'}
        />
      ))}
    </Stack>
  );
}
