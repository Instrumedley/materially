import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    makeStyles,
    Card,
    TableContainer,
    CardHeader,
    CardContent,
    Divider,
    Grid,
    Typography,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    textsuccess: {
        color: theme.palette.success.main,
    },
    textprimary: {
        color: theme.palette.primary.main,
    },
    textwarning: {
        color: theme.palette.warning.main,
    },
    texterror: {
        color: theme.palette.error.main,
    },
    productsalesdata: {
        marginBottom: '15px',
    },
    ScrollHeight: {
        height: '338px',
        padding: 0,
    },
}));
function createData(sales, product, price, colorclass) {
    return { sales, product, price, colorclass };
}

const ProductsalesCard = (props) => {
    const { title } = props;
    const classes = useStyles();
    const rows = [
        createData('2136', 'HeadPhone', '$ 926.23', classes.textsuccess),
        createData('2546', 'Iphone 6', '$ 485.85', classes.texterror),
        createData('2681', 'Jacket', '$ 786.4', classes.textprimary),
        createData('2756', 'HeadPhone', '$ 563.45', classes.textsuccess),
        createData('8765', 'Sofa', '$ 769.45', classes.texterror),
        createData('3652', 'Iphone 7', '$ 754.45', classes.textwarning),
        createData('7456', 'Jacket', '$ 743.23', classes.textsuccess),
        createData('6502', 'T-Shirt', '$ 642.23', classes.texterror),
    ];

    return (
        <Card className={classes.projecttablecard}>
            <CardHeader
                title={
                    <Typography component="div" className="card-header">
                        {title}
                    </Typography>
                }
            />
            <Divider />
            <CardContent className="p-0">
                <Grid className="p-20" container direction="row" justify="space-around" alignItems="center">
                    <Grid item>
                        <Grid container direction="column" spacing={1} alignItems="center" justify="center">
                            <Grid item>
                                <Typography component="div" variant="subtitle2">
                                    Earning Product
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography component="div" variant="subtitle1">
                                    20,569$
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" spacing={1} alignItems="center" justify="center">
                            <Grid item>
                                <Typography component="div" variant="subtitle2">
                                    Yesterday
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography component="div" variant="subtitle1">
                                    580$
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" spacing={1} alignItems="center" justify="center">
                            <Grid item>
                                <Typography component="div" variant="subtitle2">
                                    This Week
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography component="div" variant="subtitle1">
                                    5,789$
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <PerfectScrollbar className={classes.ScrollHeight}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Last Sales</TableCell>
                                    <TableCell>Name Product</TableCell>
                                    <TableCell>Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <span className={row.colorclass}>{row.sales}</span>
                                        </TableCell>
                                        <TableCell>{row.product}</TableCell>
                                        <TableCell>
                                            <span className={row.colorclass}>{row.price}</span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </PerfectScrollbar>
            </CardContent>
        </Card>
    );
};

export default ProductsalesCard;
