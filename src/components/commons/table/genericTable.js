import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableButtons from './tableButtons'
import TableHead from '@material-ui/core/TableHead';
import ButtonDelete from '../actionButtons/buttonDelete'
import ButtonEdit from '../actionButtons/buttonEdit'

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const CategoriesTableWrapped = withStyles(actionsStyles, { withTheme: true })(
  TableButtons,
);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class GenericTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 5,
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  renderTableHead = (data) => {
    let rows = []
    for(let h in data[0]) {
      if(h !== "_id" && h !== "__v")
        rows.push(<CustomTableCell style={{"textTransform": "capitalize"}} key={h}>{h}</CustomTableCell>)
    }
    rows.push(<CustomTableCell numeric style={{"textTransform": "capitalize"}} key="actions">actions</CustomTableCell>)
    return (
      <TableRow>
        {rows.map(row => row)}
      </TableRow>
    );
  }

  renderTableBody = (data, page, rowsPerPage) => {
    if(!data.slice) {
      return (
        <TableRow>
          <TableCell component="th" scope="row">Carregando</TableCell>
        </TableRow>
      )
    }
    return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
      let rows = []
      for(let d in n) {
        if(d !== "_id" && d !== "__v")
          rows.push(<TableCell key={`${n[d]}${n._id}`} component="th" scope="row">{n[d]}</TableCell>)
      }
      rows.push(
        <TableCell numeric key={`actions${n._id}`} component="th" scope="row">
          <ButtonEdit payload={null} action={null} />
          <ButtonDelete payload={n.id} action={null} />
        </TableCell>
      )
      return (
        <TableRow key={n._id}>
          {rows.map(row => row)}
        </TableRow>
      );
    })
  }

  render() {
    const { classes, data } = this.props;
    const { rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              {this.renderTableHead(data)}
            </TableHead>
            <TableBody>
              {this.renderTableBody(data, page, rowsPerPage)}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={CategoriesTableWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

GenericTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(GenericTable));