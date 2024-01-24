
const values = ['Javascript', 'Ruby', 'Python', 'HTML', 'Java', 'C', "C++"]

// setup
const data = {
    datasets: [{
      label: 'Finance Information',
      tree: [
        {state: "Alabama", region: "South", gdpPerCapita: 50637, population: 5143033, medianHouseholdIncome: 53913, costOfLivingIndex: 88.8, medianHomePrice: 284900},
        {state: "Alaska", region: "Pacific", gdpPerCapita: 68919, population: 733536, medianHouseholdIncome: 77845, costOfLivingIndex: 124.4, medianHomePrice: 379600},
        {state: "Arizona", region: "West", gdpPerCapita: 56667, population: 7497004, medianHouseholdIncome: 69056, costOfLivingIndex: 107.2, medianHomePrice: 436100},
        {state: "Arkansas", region: "South", gdpPerCapita: 51787, population: 3089060, medianHouseholdIncome: 52528, costOfLivingIndex: 90.3, medianHomePrice: 258100},
        {state: "California", region: "West", gdpPerCapita: 77339, population: 38889770, medianHouseholdIncome: 84907, costOfLivingIndex: 134.5, medianHomePrice: 785900},
        {state: "Colorado", region: "West", gdpPerCapita: 74167, population: 5914181, medianHouseholdIncome: 82254, costOfLivingIndex: 105.5, medianHomePrice: 580900},
        {state: "Connecticut", region: "Northeast", gdpPerCapita: 84972, population: 3625646, medianHouseholdIncome: 83771, costOfLivingIndex: 113.1, medianHomePrice: 393700},
        {state: "Delaware", region: "Northeast", gdpPerCapita: 61387, population: 1044321, medianHouseholdIncome: 71091, costOfLivingIndex: 102.6, medianHomePrice: 327300},
        {state: "Florida", region: "South", gdpPerCapita: 63597, population: 22975931, medianHouseholdIncome: 63062, costOfLivingIndex: 102.3, medianHomePrice: 407200},
        {state: "Georgia", region: "South", gdpPerCapita: 57129, population: 11145304, medianHouseholdIncome: 66559, costOfLivingIndex: 91, medianHomePrice: 375300},
        {state: "Hawaii", region: "Pacific", gdpPerCapita: 61175, population: 1430877, medianHouseholdIncome: 84857, costOfLivingIndex: 179, medianHomePrice: 720200},
        {state: "Idaho", region: "West", gdpPerCapita: 54537, population: 1990456, medianHouseholdIncome: 66474, costOfLivingIndex: 106.1, medianHomePrice: 460900},
        {state: "Illinois", region: "Midwest", gdpPerCapita: 68822, population: 12516863, medianHouseholdIncome: 72205, costOfLivingIndex: 90.8, medianHomePrice: 280900},
        {state: "Indiana", region: "Midwest", gdpPerCapita: 57930, population: 6892124, medianHouseholdIncome: 62743, costOfLivingIndex: 91.5, medianHomePrice: 258000},
        {state: "Iowa", region: "Midwest", gdpPerCapita: 58905, population: 3214315, medianHouseholdIncome: 65600, costOfLivingIndex: 89.7, medianHomePrice: 230600},
        {state: "Kansas", region: "Midwest", gdpPerCapita: 60152, population: 2944376, medianHouseholdIncome: 64124, costOfLivingIndex: 87.7, medianHomePrice: 276300},
        {state: "Kentucky", region: "South", gdpPerCapita: 52109, population: 4540745, medianHouseholdIncome: 55573, costOfLivingIndex: 93.8, medianHomePrice: 251300},
        {state: "Louisiana", region: "South", gdpPerCapita: 54622, population: 4559475, medianHouseholdIncome: 52087, costOfLivingIndex: 92, medianHomePrice: 257400}, 
        {state: "Maine", region: "Northeast", gdpPerCapita: 59463, population: 1402106, medianHouseholdIncome: 64767, costOfLivingIndex: 111.5, medianHomePrice: 373700}, 
        {state: "Maryland", region: "Northeast", gdpPerCapita: 70730, population: 6196525, medianHouseholdIncome: 90203, costOfLivingIndex: 119.5, medianHomePrice: 421800}, 
        {state: "Massachusetts", region: "Northeast", gdpPerCapita: 84945, population: 7020058, medianHouseholdIncome: 89645, costOfLivingIndex: 148.4, medianHomePrice: 614700}, 
        {state: "Michigan", region: "Midwest", gdpPerCapita: 56813, population: 10041241, medianHouseholdIncome: 63498, costOfLivingIndex: 92.7, medianHomePrice: 252200}, 
        {state: "Minnesota", region: "Midwest", gdpPerCapita: 68010, population: 5761530, medianHouseholdIncome: 77720, costOfLivingIndex: 94.1, medianHomePrice: 341700}, 
        {state: "Mississippi", region: "South", gdpPerCapita: 46248, population: 2940452, medianHouseholdIncome: 48716, costOfLivingIndex: 85.3, medianHomePrice: 271200}, 
        {state: "Missouri", region: "Midwest", gdpPerCapita: 56551, population: 6215144, medianHouseholdIncome: 61847, costOfLivingIndex: 88.4, medianHomePrice: 255400}, 
        {state: "Montana", region: "West", gdpPerCapita: 57719, population: 1142746, medianHouseholdIncome: 63249, costOfLivingIndex: 103.7, medianHomePrice: 529000}, 
        {state: "Nebraska", region: "Midwest", gdpPerCapita: 63321, population: 1988698, medianHouseholdIncome: 66817, costOfLivingIndex: 90.1, medianHomePrice: 290500}, 
        {state: "Nevada", region: "West", gdpPerCapita: 61282, population: 3210931, medianHouseholdIncome: 66274, costOfLivingIndex: 101.3, medianHomePrice: 428100}, 
        {state: "New Hampshire", region: "Northeast", gdpPerCapita: 74663, population: 1405105, medianHouseholdIncome: 88465, costOfLivingIndex: 115, medianHomePrice: 452700}, 
        {state: "New Jersey", region: "Northeast", gdpPerCapita: 78700, population: 9320865, medianHouseholdIncome: 89296, costOfLivingIndex: 114.1, medianHomePrice: 477600}, 
        {state: "New Mexico", region: "West", gdpPerCapita: 51500, population: 2115266, medianHouseholdIncome: 53992, costOfLivingIndex: 94.2, medianHomePrice: 349200}, 
        {state: "New York", region: "Northeast", gdpPerCapita: 78089, population: 19469232, medianHouseholdIncome: 74314, costOfLivingIndex: 125.1, medianHomePrice: 819900}, 
        {state: "North Carolina", region: "South", gdpPerCapita: 57416, population: 10975017, medianHouseholdIncome: 61972, costOfLivingIndex: 96.1, medianHomePrice: 371100}, 
        {state: "North Dakota", region: "Midwest", gdpPerCapita: 66184, population: 788940, medianHouseholdIncome: 66519, costOfLivingIndex: 94.6, medianHomePrice: 270000}, 
        {state: "Ohio", region: "Midwest", gdpPerCapita: 57880, population: 11812173, medianHouseholdIncome: 62262, costOfLivingIndex: 94, medianHomePrice: 240900}, 
        {state: "Oklahoma", region: "South", gdpPerCapita: 54998, population: 4088377, medianHouseholdIncome: 55826, costOfLivingIndex: 86, medianHomePrice: 253200}, 
        {state: "Oregon", region: "West", gdpPerCapita: 62767, population: 4227337, medianHouseholdIncome: 71562, costOfLivingIndex: 115.1, medianHomePrice: 510900},
        {state: "Pennsylvania", region: "Northeast", gdpPerCapita: 65167, population: 12951275, medianHouseholdIncome: 68957, costOfLivingIndex: 99, medianHomePrice: 278700}, 
        {state: "Rhode Island", region: "Northeast", gdpPerCapita: 65377, population: 1098082, medianHouseholdIncome: 74008, costOfLivingIndex: 110.5, medianHomePrice: 462100}, 
        {state: "South Carolina", region: "South", gdpPerCapita: 53320, population: 5464155, medianHouseholdIncome: 59318, costOfLivingIndex: 96.5, medianHomePrice: 374200},
        {state: "South Dakota", region: "Midwest", gdpPerCapita: 65806, population: 928767, medianHouseholdIncome: 66143, costOfLivingIndex: 93.8, medianHomePrice: 305000},
        {state: "Tennessee", region: "South", gdpPerCapita: 58279, population: 7204002, medianHouseholdIncome: 59695, costOfLivingIndex: 90.4, medianHomePrice: 377200},
        {state: "Texas", region: "South", gdpPerCapita: 61985, population: 30976754, medianHouseholdIncome: 66963, costOfLivingIndex: 93, medianHomePrice: 357800}, 
        {state: "Utah", region: "West", gdpPerCapita: 57925, population: 3454232, medianHouseholdIncome: 79449, costOfLivingIndex: 101.5, medianHomePrice: 529600},
        {state: "Vermont", region: "Northeast", gdpPerCapita: 63206, population: 647818, medianHouseholdIncome: 72431, costOfLivingIndex: 114.9, medianHomePrice: 385300},
        {state: "Virginia", region: "South", gdpPerCapita: 68211, population: 8752297, medianHouseholdIncome: 80963, costOfLivingIndex: 103.1, medianHomePrice: 440200},
        {state: "Washington", region: "West", gdpPerCapita: 75698, population: 7841283, medianHouseholdIncome: 84247, costOfLivingIndex: 115.1, medianHomePrice: 618000},
        {state: "West Virginia", region: "South", gdpPerCapita: 49169, population: 1766107, medianHouseholdIncome: 51248, costOfLivingIndex: 90.3, medianHomePrice: 304400},
        {state: "Wisconsin", region: "Midwest", gdpPerCapita: 61210, population: 5931367, medianHouseholdIncome: 67125, costOfLivingIndex: 95, medianHomePrice: 297100},
        {state: "Wyoming", region: "West", gdpPerCapita: 71342, population: 586485, medianHouseholdIncome: 65204, costOfLivingIndex: 92.8, medianHomePrice: 276000},

    ],
      backgroundColor: (ctx) => colorFromRaw(ctx),
      borderColor: [
        'rgba(255, 26, 104, 1)',
      ],
      spacing: 3,
      borderWidth: 0,
      labels: {
        display: true,
        align: 'center',
        position: 'top',
        overflow: 'fit',
        font: "Poppins",
       /* formatter: (ctx) => {
            console.log(ctx)
            return `${values[ctx.raw._data._idx]}: ${ctx.raw.v} Company: ${ctx.raw._data.company}`;
        } */
      },
      key: 'gdpPerCapita',
      groups: ['region', 'state'],
      captions: {
        display: true
      }
    }]
  };

  // config 
  const config = {
    type: 'treemap',
    data,
    options: {
       plugins: {
        legend: {
            display: false
        }
       }
    }
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  //color function
  function colorFromRaw(ctx) {
    const colorArray = ['255, 26, 104','54, 162, 235', '255, 206, 86', '224, 176, 255', '207, 255, 176' ];
    const companyArray = [];

    if(ctx.type != 'data') {
        return 'transparent';
    }
    ctx.chart.data.datasets[0].tree.forEach(datastructure => {
        companyArray.push(datastructure.region);
    })
    //console.log(companyArray);
    const uniqueCompanyArray = [...new Set(companyArray)];

    const indexCompany = uniqueCompanyArray.indexOf(ctx.raw._data.region)

    const value = ctx.raw.v;
    let alpha = (Math.log(value) / 5); //fade color based on value
    return `rgba(${colorArray[indexCompany]}, .4)`;
    //${alpha}
  }

// changes treemap when button is clicked
function updateTreemap(key){
    myChart.data.datasets[0].key = key.value
    myChart.update();
}


  // Instantly assign Chart.js version
  const chartVersion = document.getElementById('chartVersion');
  chartVersion.innerText = Chart.version;