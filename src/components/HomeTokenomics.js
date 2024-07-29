import Chart from 'react-apexcharts';

const HomeTokenomics = () => {
  return (
    <div
      id="uni_tokenomics"
      className="uni-roadmap uk-section uk-panel uk-overflow-hidden"
    >
      <div className="uk-container uk-container-small">
        <header
          className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid"
          data-uk-grid
        >
          <div className="uk-panel">
            <h2 className="uk-h3 uk-h1@m text-primary">CannaConnect's Tokenomics</h2>
            {/* <div>
              <div style={{color:'00763D',fontSize:'24px',fontWeight:700}}>Total supply</div>
              <div style={{fontSize:'48px',fontWeight:'600'}}>1,000,000,000 Tokens</div>
            </div> */}
          </div>
        </header>
        <div className="uk-panel uk-margin-medium-top">
          <Chart
            options={{
              chart: {
                type: 'donut',
              },
              colors: ['#00763D', '#FF6384', '#FF9E40', '#FFCD56', '#4CC0C0'],
              labels: [
                'Pre-Sale & ICO',
                'Reserve',
                'Partner',
                'Team',
                'Marketing',
              ],
              dataLabels: {
                enabled: false,
              },
              // title: {
              //   text: 'Total Supply: 1,000,000,000 Tokens',
              //   align: 'center',
              // },
              legend: {
                formatter: function (seriesName, opts) {
                  return (
                    seriesName +
                    ': ' +
                    opts.w.globals.series[opts.seriesIndex] +
                    '%'
                  );
                },
                position: 'bottom',
                onItemHover: {
                  highlightDataSeries: true,
                },
                markers: {
                  radius: 0,
                },
                itemMargin: {
                  horizontal: 20,
                },
                stroke: {
                  width: 100,
                },
              },
              plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: true,
                      name: {
                        show: true,
                        fontSize: '22px',
                        color: '#373d3f',
                        offsetY: -10,
                      },
                      value: {
                        show: true,
                        fontSize: '22px',
                        color: '#00763D',
                        offsetY: 16,
                        formatter: function (val) {
                          console.log(val);
                          return `${(
                            (val / 100) *
                            1000000000
                          ).toLocaleString()} Tokens`;
                        },
                      },
                      total: {
                        show: true,
                        label: 'Total Supply',
                        color: '#373d3f',
                        formatter: function (w) {
                          return '1,000,000,000 Tokens';
                        },
                      },
                    },
                  },
                },
              },
              tooltip: {
                enabled: true,
                marker: {
                  show: true,
                  fillColors: [
                    '#00763D',
                    '#FF6384',
                    '#FF9E40',
                    '#FFCD56',
                    '#4CC0C0',
                  ],
                },
                y: {
                  formatter: function (val) {
                    return val + '%';
                  },
                  title: {
                    formatter: function (seriesName) {
                      return `${seriesName}: `;
                    },
                  },
                },
              },
              // responsive: [
              //   {
              //     breakpoint: 480,
              //     options: {
              //       chart: {
              //         width: 200,
              //       },
              //       legend: {
              //         position: 'bottom',
              //       },
              //     },
              //   },
              // ],
            }}
            series={[65, 10, 10, 10, 5]}
            height={500}
            type="donut"
          />
        </div>
      </div>
    </div>
  );
};
export default HomeTokenomics;
