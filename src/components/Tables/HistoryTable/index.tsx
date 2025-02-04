import { useTheme } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const tableHead = ['Symbol', 'Volume', 'Time', 'Profit'];

export default function BasicTable({ data }) {
  const theme = useTheme();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHead.map((element) => (
              <TableCell align="left">{element.toUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{row.symbol}</TableCell>
                <TableCell align="left">{row.volume}</TableCell>
                <TableCell align="left">{new Date(row.time).toLocaleString()}</TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: row.profit < 0 ? theme.palette.error.main : theme.palette.common.white
                  }}
                >
                  {'$ ' + row.profit}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
