import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
    makeStyles,
    Button,
    Card,
    CardHeader,
    CardContent,
    Divider,
    TableContainer,
    CardActions,
    Typography,
    CardMedia,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
} from '@material-ui/core';
import Flag1 from './../../../../assets/images/widget/AUSTRALIA.jpg';
import Flag2 from './../../../../assets/images/widget/BRAZIL.jpg';
import Flag3 from './../../../../assets/images/widget/GERMANY.jpg';
import Flag4 from './../../../../assets/images/widget/UK.jpg';
import Flag5 from './../../../../assets/images/widget/USA.jpg';

const useStyles = makeStyles((theme) => ({
    projecttablecard: {
        padding: '0px',
    },
    projecttablefooter: {
        justifyContent: 'flex-end',
    },
    imgflag: {
        width: '30px',
        height: 'auto',
    },
    ScrollHeight: {
        height: '345px',
        padding: 0,
    },
}));
function createData(image, subject, dept, date) {
    return { image, subject, dept, date };
}
const rows = [
    createData(Flag1, 'Germany', 'Anjalina Jolly', '56.23%'),
    createData(Flag2, 'USA', 'John Deo', '25.23%'),
    createData(Flag3, 'Australia', 'Jenifer Vintage', '12.45%'),
    createData(Flag4, 'United Kingdom', 'Lori Moore', '8.65%'),
    createData(Flag5, 'Brazil', 'Allina D’croze', '3.56%'),
    createData(Flag1, 'Australia', 'Jenifer Vintage', '12.45%'),
    createData(Flag3, 'USA', 'John Deo', '25.23%'),
    createData(Flag5, 'Australia', 'Jenifer Vintage', '12.45%'),
    createData(Flag2, 'United Kingdom', 'Lori Moore', '8.65%'),
];
const LatestcustomersCard = (props) => {
    const { title } = props;
    const classes = useStyles();

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
            <CardContent className={classes.projecttablecard}>
                <PerfectScrollbar className={classes.ScrollHeight}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Country</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Average</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <CardMedia component="img" image={row.image} title="image" className={classes.imgflag} />
                                        </TableCell>
                                        <TableCell>{row.subject}</TableCell>
                                        <TableCell>{row.dept}</TableCell>
                                        <TableCell>{row.date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </PerfectScrollbar>
            </CardContent>
            <Divider />
            <CardActions className="f-right">
                <Button variant="text" size="small" color="primary">
                    View all Latest Customers
                </Button>
            </CardActions>
        </Card>
    );
};

export default LatestcustomersCard;
