import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function BasicTabs({ pages }) {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      {pages.map((page) => (
        <Tab
          component={Link}
          to={`/${page.toLowerCase()}`}
          label={page}
          value={`/${page.toLowerCase()}`}
          sx={{ height: 65 }}
        />
      ))}
    </Tabs>
  );
}
