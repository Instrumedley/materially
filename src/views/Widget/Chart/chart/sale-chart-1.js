const chartData = {
    type: 'line',
    height: 115,
    options: {
        chart: {
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#fff'],

        stroke: {
            curve: 'smooth',
            width: 3,
        },
        yaxis: {
            min: 20,
            max: 100,
        },
        xaxis: {
            position: 'top',
            labels: {
                show: true,
            },
            categories: [
                "01 Jan",
                "02 Jan",
                "03 Jan",
                "04 Jan",
                "05 Jan",
                "06 Jan"
            ],
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: '#78909C',
                height: 6,
                offsetX: 0,
                offsetY: 0
            },
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false,
            },
            x: {
                show: true,
            },
            y: {
                title: {
                    formatter: (seriesName) => 'Sales/Order Per Day',
                },
            },
            marker: {
                show: false,
            },
        },
    },
    series: [
        {
            name: 'series1',
            data: [55, 35, 75, 25, 90, 50],
        },
    ],
};

export default chartData;
