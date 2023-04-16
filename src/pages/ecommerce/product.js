import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/system';

const TopWrapper = styled('div')({
display:'flex',
alignItems: 'center',
padding: '18px 8px',
borderBottom: '1px solid #efe4e4',
justifyContent: 'space-between',
});

const Input = styled('input')({
width: '100%',
padding: '6px 12px',
textAlign: 'center',
});

const Leftarea = styled('div')({
width:'22%',
position: 'relative',
borderRadius: '3px',
border: '1px solid #d2cdcd',
});

const Svg = styled('svg')({
width: '18px',
height: '18px',
margin: 'auto 0px',
position: 'absolute',
left:'12px',
top: '6px',
});

const Rightarea = styled('div')({
display: 'flex',
width: '40%',
});

const Select = styled('select')({
width: '60%',
margin: '5px 8px',
padding: '6px 8px',
textAlign: 'center',
background: 'white',
borderRadius: '3px',
border: '1px solid #d2cdcd',
});

const Option = styled('option')({
color:'gray',
padding:'3px 0px',
});

const Button = styled('button')({
width: '36%',
color: 'black',
marginLeft: '9px',
textAlign: 'center',
padding: '6px 8px',
margin: '5px auto',
textDecoration: 'none',
borderRadius: '3px',
background: 'gainsboro',
border: '1px solid #d2cdcd',

});

function createData(product, categories, price, quantity, status, action) {
  return {
    product,
    categories,
    price,
    quantity,
    status,
    action
  };
}

const rows = [
  createData('KASHMIR WILLOW CRICKET BAT 99.','SS', 2200, 2, 'In stock','Edit'),
  createData('KASHMIR WILLOW CRICKET BAT 59.','SG', 3200, 1, 'Outofstock','Edit'),
  createData('KASHMIR WILLOW CRICKET BAT 99.','SS', 2200, 2, 'In stock','Edit'),
  createData('KASHMIR WILLOW CRICKET BAT 59.','SG', 3200, 1, 'Outofstock','Edit'),
  createData('KASHMIR WILLOW CRICKET BAT 99.','SS', 2200, 2, 'In stock','Edit'),
  createData('KASHMIR WILLOW CRICKET BAT 59.','SG', 3200, 1, 'Outofstock','Edit'),
  createData('KASHMIR WILLOW CRICKET BAT 99.','SS', 2200, 2, 'In stock','Edit'),
  createData('KASHMIR WILLOW CRICKET BAT 59.','SG', 3200, 1, 'Outofstock','Edit'),
  createData('KASHMIR WILLOW CRICKET BAT 99.','SS', 2200, 2, 'In stock','Edit'),
  createData('KASHMIR WILLOW CRICKET BAT 59.','SG', 3200, 1, 'Outofstock','Edit'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'product',
    numeric: false,
    disablePadding: true,
    label: 'PRODUCT DETAILS',
  },
  {
    id: 'categories',
    numeric: true,
    disablePadding: false,
    label: 'categories',
  },
  {
    id: 'Price',
    numeric: true,
    disablePadding: false,
    label: 'PRICE',
  },
  {
    id: 'quantity',
    numeric: true,
    disablePadding: false,
    label: 'QTY',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'STATUS',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'ACTION',
  },
];

const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'categories';
const DEFAULT_ROWS_PER_PAGE = 5;

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (newOrderBy) => (event) => {
    onRequestSort(event, newOrderBy);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    // <Toolbar
    //   sx={{
    //     pl: { sm: 2 },
    //     pr: { xs: 1, sm: 1 },
    //     ...(numSelected > 0 && {
    //       bgcolor: (theme) =>
    //         alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
    //     }),
    //   }}
    // >
   
    //   {numSelected > 0 ? (
    //     <Typography
    //       sx={{ flex: '1 1 100%' }}
    //       color="inherit"
    //       variant="subtitle1"
    //       component="div"
    //     >
    //       {numSelected} selected
    //     </Typography>
    //   ) : (
    //     <Typography
    //       sx={{ flex: '1 1 100%' }}
    //       variant="h6"
    //       id="tableTitle"
    //       component="div"
    //     >
    //     Product Details
    //     </Typography>
    //   )}

    //   {numSelected > 0 ? (
    //     <Tooltip title="Delete">
    //       <IconButton>
    //         <DeleteIcon />
    //       </IconButton>
    //     </Tooltip>
    //   ) : (
    //     <Tooltip title="Filter list">
    //       <IconButton>
    //         <FilterListIcon />
    //       </IconButton>
    //     </Tooltip>
    //   )}
     
    // </Toolbar>

     <TopWrapper>
      <Leftarea>
        <Input type='search' placeholder='Search 9 recoards...'/>
        <Svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="50" height="50"
            viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </Svg>
      </Leftarea>
        <Rightarea>
          <Select name="status" id="status">
                <Option value="volvo">Sort by (Product Details)</Option>
                <Option value="saab">Out Of Stock</Option>
          </Select>
          <Button as="a" href="/addnew">Add New Product</Button>
       </Rightarea>
    </TopWrapper>
    
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState(DEFAULT_ORDER);
  const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [visibleRows, setVisibleRows] = React.useState(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
  const [paddingHeight, setPaddingHeight] = React.useState(0);

  React.useEffect(() => {
    let rowsOnMount = stableSort(
      rows,
      getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY),
    );

    rowsOnMount = rowsOnMount.slice(
      0 * DEFAULT_ROWS_PER_PAGE,
      0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE,
    );

    setVisibleRows(rowsOnMount);
  }, []);

  const handleRequestSort = React.useCallback(
    (event, newOrderBy) => {
      const isAsc = orderBy === newOrderBy && order === 'asc';
      const toggledOrder = isAsc ? 'desc' : 'asc';
      setOrder(toggledOrder);
      setOrderBy(newOrderBy);

      const sortedRows = stableSort(rows, getComparator(toggledOrder, newOrderBy));
      const updatedRows = sortedRows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      );

      setVisibleRows(updatedRows);
    },
    [order, orderBy, page, rowsPerPage],
  );

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.product);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, product) => {
    const selectedIndex = selected.indexOf(product);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, product);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = React.useCallback(
    (event, newPage) => {
      setPage(newPage);

      const sortedRows = stableSort(rows, getComparator(order, orderBy));
      const updatedRows = sortedRows.slice(
        newPage * rowsPerPage,
        newPage * rowsPerPage + rowsPerPage,
      );

      setVisibleRows(updatedRows);

      // Avoid a layout jump when reaching the last page with empty rows.
      const numEmptyRows =
        newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - rows.length) : 0;

      const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows;
      setPaddingHeight(newPaddingHeight);
    },
    [order, orderBy, dense, rowsPerPage],
  );

  const handleChangeRowsPerPage = React.useCallback(
    (event) => {
      const updatedRowsPerPage = parseInt(event.target.value, 10);
      setRowsPerPage(updatedRowsPerPage);

      setPage(0);

      const sortedRows = stableSort(rows, getComparator(order, orderBy));
      const updatedRows = sortedRows.slice(
        0 * updatedRowsPerPage,
        0 * updatedRowsPerPage + updatedRowsPerPage,
      );

      setVisibleRows(updatedRows);

      // There is no layout jump to handle on the first page.
      setPaddingHeight(0);
    },
    [order, orderBy],
  );

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (product) => selected.indexOf(product) !== -1;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows
                ? visibleRows.map((row, index) => {
                    const isItemSelected = isSelected(row.product);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.product)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.product}
                        selected={isItemSelected}
                        sx={{ cursor: 'pointer' }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.product}
                        </TableCell>
                        <TableCell align="right">{row.categories}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                        <TableCell align="right">{row.action}</TableCell>
                      </TableRow>
                    );
                  })
                : null}
              {paddingHeight > 0 && (
                <TableRow
                  style={{
                    height: paddingHeight,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
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