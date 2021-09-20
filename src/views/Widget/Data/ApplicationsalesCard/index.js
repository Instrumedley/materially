import React from 'react';

import {
    makeStyles,
    Button,
    Card,
    CardHeader,
    Divider,
    CardContent,
    TableContainer,
    CardActions,
    Typography,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    projecttablecard: {
        padding: '0px',
    },
    textprimary: {
        color: theme.palette.primary.main,
    },
}));
function createData(name, designation, product, date, badgetext, badgetype) {
    return { name, designation, product, date, badgetext, badgetype };
}
const rows = [
    createData('Materially', 'Powerful Admin Theme', '16,300', '$53', '$15,652'),
    createData('Photoshop', 'Design Software', '26,421', '$35', '$8,785'),
    createData('Guruable', 'Best Admin Template', '8,265', '$98', '$9,652'),
    createData('Flatable', 'Admin App', '10,652', '$20', '$7,856'),
];
const ApplicationsalesCard = (props) => {
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
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Application</TableCell>
                                <TableCell>Sales</TableCell>
                                <TableCell>Avg. Price</TableCell>
                                <TableCell>Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Typography align="left" component="div" variant="subtitle1">
                                            {row.name}
                                        </Typography>
                                        <Typography align="left" component="div" variant="subtitle2">
                                            {row.designation}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>{row.product}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>
                                        <span className={classes.textprimary}>{row.badgetext}</span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
            <Divider />
            <CardActions className="f-right">
                <Button variant="text" size="small" color="primary">
                    View all Projects
                </Button>
            </CardActions>
        </Card>
    );
};

export default ApplicationsalesCard;
