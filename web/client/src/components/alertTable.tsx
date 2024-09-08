import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';
import AlertModal from './alertModal';
import ChatModal from './chats';
import { FullDuplexConnection, socket } from '../socket';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import { apiConnector } from '../services/apiConnector';
import { ALERT } from '../services/apis';
interface Data {
  sosId: string,
  firstname: string,
  lastname: string,
  username: string,
  mobile: string,
  time: string,
  longitude: string,
  latitude: string,
  gender: string,
  occupation: string,
  maritalStatus: boolean,
  image: string,
  employer: string,
  criminalBackground: boolean,
  isEmployed: boolean,
  bookmarkedContacts: string[]
}

function createData(
  sosId: string,
  firstname: string,
  lastname: string,
  username: string,
  mobile: string,
  time: string,
  longitude: string,
  latitude: string,
  gender: string,
  occupation: string,
  maritalStatus: boolean,
  image: string,
  employer: string,
  criminalBackground: boolean,
  isEmployed: boolean,
  bookmarkedContacts: string[]
): Data {
  return {
    sosId,
    username,
    mobile,
    time,
    firstname,
    lastname,
    latitude,
    longitude,
    gender,
    occupation,
    maritalStatus,
    image,
    employer,
    criminalBackground,
    isEmployed,
    bookmarkedContacts
  };
}


export default function AlertTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('time');
  const [alerts, setAlerts] = React.useState<Data[]>([]);

  
  const {officer} = useSelector((state : RootState)=>{
    return state.profile
  })

  React.useEffect(()=>{
    (async()=>{
      if(officer){
        console.log("pls wait....");
        const response = await apiConnector({method: "POST", url : ALERT.alert, bodyData: {station_id: officer.thana_id}});
        console.log(response);
        setAlerts([]);
        response.alerts.map((alert : {
          longitude: string,
          latitude: string,
          user: {
            firstname: string,
            lastname: string,
            gender: string,
            occupation: string,
            maritalStatus: boolean,
            image: string,
            employer: string,
            mobile: string,
            criminalBackground: boolean,
            isEmployed: boolean,
            bookmarkedContact: string[]
          }
          _id: string
        })=>{
          setAlerts(prev => [...prev, createData(
            alert._id,
            alert.user.firstname,
            alert.user.lastname,
            alert.user.firstname + " " + alert.user.lastname,
            alert.user.mobile,
            `${Math.floor(Math.random() * 60)} minutes ago`,
            alert.longitude,
            alert.latitude,
            alert.user.gender,
            alert.user.occupation,
            alert.user.maritalStatus,
            alert.user.image,
            alert.user.employer,
            alert.user.criminalBackground,
            alert.user.isEmployed,
            alert.user.bookmarkedContact
          )])
        })
      }

    })();
  }, [socket, officer])


  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          }}
        >
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            SOS Alerts
          </Typography>
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <TableHead>
              <TableRow>
                <TableCell>SOS ID</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>Time</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alerts.map((row, index) => {
                console.log(row);
                return (
                  <TableRow hover key={row.sosId}>
                    <TableCell>{row.sosId}</TableCell>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.mobile}</TableCell>
                    <TableCell>{row.time}</TableCell>
                    <TableCell>
                      <div className='flex flex-row justify-end gap-4'>
                        <div>
                          <ChatModal/>
                        </div>
                        <div>
                          <AlertModal/>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={alerts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}

// Helper functions
type Order = 'asc' | 'desc';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
