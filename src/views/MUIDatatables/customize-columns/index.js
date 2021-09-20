import React from 'react';

import MUIDataTable from 'mui-datatables';

import Breadcrumb from './../../../component/Breadcrumb';

import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Example extends React.Component {
    render() {
        const columns = [
            {
                name: 'Name',
                options: {
                    filter: true,
                    //display: 'excluded',
                    sortThirdClickReset: true,
                    sortDescFirst: true,
                },
            },
            {
                label: 'Modified Title Label',
                name: 'Title',
                options: {
                    filter: true,
                    sortThirdClickReset: true,
                },
            },
            {
                name: 'Location',
                options: {
                    filter: false,
                    sortThirdClickReset: true,
                    customHeadRender: (columnMeta, updateDirection) => (
                        <th
                            key={2}
                            onClick={() => updateDirection(2)}
                            style={{ cursor: 'pointer', backgroundColor: 'rgba(0, 0, 0, 0.08)' }}
                        >
                            {columnMeta.name}
                        </th>
                    ),
                },
            },
            {
                name: 'Age',
                options: {
                    filter: true,
                    sortThirdClickReset: true,
                },
            },
            {
                name: 'Salary',
                options: {
                    filter: true,
                    sort: true,
                    sortThirdClickReset: true,
                    sortDescFirst: true,
                    sortCompare: (order) => {
                        return (obj1, obj2) => {
                            var val1 = parseInt(obj1.data.substr(1).replace(/,/g, ''), 10);
                            var val2 = parseInt(obj2.data.substr(1).replace(/,/g, ''), 10);
                            return (val1 - val2) * (order === 'asc' ? 1 : -1);
                        };
                    },
                },
            },
        ];

        const data = [
            ['Gabby George', 'Business Analyst', 'Minneapolis', 30, '$100,000'],
            ['Aiden Lloyd', 'Business Consultant', 'Dallas', 55, '$200,000'],
            ['Jaden Collins', 'Attorney', 'Santa Ana', 27, '$500,000'],
            ['Franky Rees', 'Business Analyst', 'St. Petersburg', 22, '$50,000'],
            ['Aaren Rose', 'Business Consultant', 'Toledo', 28, '$75,000'],
            ['Blake Duncan', 'Business Management Analyst', 'San Diego', 65, '$94,000'],
            ['Frankie Parry', 'Agency Legal Counsel', 'Jacksonville', 71, '$210,000'],
            ['Lane Wilson', 'Commercial Specialist', 'Omaha', 19, '$65,000'],
            ['Robin Duncan', 'Business Analyst', 'Los Angeles', 20, '$77,000'],
            ['Mel Brooks', 'Business Consultant', 'Oklahoma City', 37, '$135,000'],
            ['Harper White', 'Attorney', 'Pittsburgh', 52, '$420,000'],
            ['Kris Humphrey', 'Agency Legal Counsel', 'Laredo', 30, '$150,000'],
            ['Frankie Long', 'Industrial Analyst', 'Austin', 31, '$170,000'],
            ['Brynn Robbins', 'Business Analyst', 'Norfolk', 22, '$90,000'],
            ['Justice Mann', 'Business Consultant', 'Chicago', 24, '$133,000'],
            ['Addison Navarro', 'Business Management Analyst', 'New York', 50, '$295,000'],
            ['Jesse Welch', 'Agency Legal Counsel', 'Seattle', 28, '$200,000'],
            ['Eli Mejia', 'Commercial Specialist', 'Long Beach', 65, '$400,000'],
            ['Gene Leblanc', 'Industrial Analyst', 'Hartford', 34, '$110,000'],
            ['Danny Leon', 'Computer Scientist', 'Newark', 60, '$220,000'],
            ['Lane Lee', 'Corporate Counselor', 'Cincinnati', 52, '$180,000'],
            ['Jesse Hall', 'Business Analyst', 'Baltimore', 44, '$99,000'],
            ['Danni Hudson', 'Agency Legal Counsel', 'Tampa', 37, '$90,000'],
            ['Terry Macdonald', 'Commercial Specialist', 'Miami', 39, '$140,000'],
            ['Justice Mccarthy', 'Attorney', 'Tucson', 26, '$330,000'],
            ['Silver Carey', 'Computer Scientist', 'Memphis', 47, '$250,000'],
            ['Franky Miles', 'Industrial Analyst', 'Buffalo', 49, '$190,000'],
            ['Glen Nixon', 'Corporate Counselor', 'Arlington', 44, '$80,000'],
            ['Gabby Strickland', 'Business Process Consultant', 'Scottsdale', 26, '$45,000'],
            ['Mason Ray', 'Computer Scientist', 'San Francisco', 39, '$142,000'],
        ];

        const options = {
            filter: true,
            filterType: 'dropdown',
            responsive: 'vertical',
            sortOrder: {
                name: 'Title',
                direction: 'asc',
            },
        };

        return (
            <React.Fragment>
                <Breadcrumb title="Customize Column Table">
                    <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                        Home
                    </Typography>
                    <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                        Tables
                    </Typography>
                    <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                        Customize Column Table
                    </Typography>
                </Breadcrumb>
                <MUIDataTable title={'Customize Coluns'} data={data} columns={columns} options={options} />
            </React.Fragment>
        );
    }
}

export default Example;
