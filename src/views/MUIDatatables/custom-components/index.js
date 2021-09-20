import React from 'react';
import MUIDataTable, { TableFilterList } from 'mui-datatables';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import MuiTooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import TableViewCol from './TableViewCol';

import Breadcrumb from './../../../component/Breadcrumb';

import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const CustomChip = (props) => {
    const { label, onDelete, columnNames, className, index } = props;
    return (
        <Chip
            className={className}
            variant="outlined"
            color={columnNames[index].name === 'Company' ? 'secondary' : 'primary'}
            label={label}
            onDelete={onDelete}
        />
    );
};

const CustomTooltip = (props) => {
    return (
        <MuiTooltip title={props.title} interactive={true} TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} leaveDelay={250}>
            {props.children}
        </MuiTooltip>
    );
};

const CustomCheckbox = (props) => {
    let newProps = Object.assign({}, props);
    newProps.color = props['data-description'] === 'row-select' ? 'secondary' : 'primary';

    if (props['data-description'] === 'row-select') {
        return <Radio {...newProps} />;
    } else {
        return <Checkbox {...newProps} />;
    }
};

const CustomFilterList = (props) => {
    return <TableFilterList {...props} ItemComponent={CustomChip} />;
};

class Example extends React.Component {
    render() {
        const columns = [
            { name: 'Name' },
            {
                name: 'Company',
                options: {
                    filter: true,
                    filterType: 'custom',
                    filterList: ['Test Corp'],
                    customFilterListOptions: {
                        render: (v) => {
                            if (v.length !== 0) {
                                return `Company: ${v[0]}`;
                            }
                            return false;
                        },
                        update: (filterList) => filterList,
                    },
                    filterOptions: {
                        names: [],
                        logic(status, filter) {
                            if (filter.length > 0) {
                                return status !== filter[0];
                            }
                            return false;
                        },
                        display: (filterList, onChange, index, column) => (
                            <Select
                                onChange={(event) => {
                                    filterList[index][0] = event.target.value;
                                    onChange(filterList[index], index, column);
                                }}
                                value={filterList[index]}
                            >
                                <MenuItem value="Test Corp">{'Test Corp'}</MenuItem>
                                <MenuItem value="Other Corp">{'Other Corp'}</MenuItem>
                            </Select>
                        ),
                    },
                },
            },
            { name: 'City', label: 'City Label', options: { filterList: ['Dallas'] } },
            { name: 'State' },
            {
                name: 'Empty',
                options: {
                    empty: true,
                    filterType: 'checkbox',
                    filterOptions: {
                        renderValue: (val) => (val ? val : '(Empty)'),
                    },
                },
            },
        ];
        const data = [
            ['Joe James', 'Test Corp', 'Yonkers', 'NY'],
            ['John Walsh', 'Test Corp', 'Hartford', null],
            ['Bob Herm', 'Other Corp', 'Tampa', 'FL'],
            ['James Houston', 'Test Corp', 'Dallas', 'TX'],
        ];

        let options = {
            onFilterChipClose: (index, removedFilter, filterList) => {
                console.log(index, removedFilter, filterList);
            },
            selectableRows: 'single',
            selectToolbarPlacement: 'none',
        };

        return (
            <React.Fragment>
                <Breadcrumb title="Custom Component Table">
                    <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                        Home
                    </Typography>
                    <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                        Tables
                    </Typography>
                    <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                        Custom Component Table
                    </Typography>
                </Breadcrumb>
                <MUIDataTable
                    title={'Custom Components List'}
                    data={data}
                    columns={columns}
                    options={options}
                    components={{
                        TableFilterList: CustomFilterList,
                        Tooltip: CustomTooltip,
                        Checkbox: CustomCheckbox,
                        TableViewCol: TableViewCol,
                    }}
                />
            </React.Fragment>
        );
    }
}

export default Example;
