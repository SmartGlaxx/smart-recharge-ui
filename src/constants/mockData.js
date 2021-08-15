
function createData(date, number, bundle, network, status) {
    return { date, number, bundle, network, status};
  }


export const mockData = [
    createData('Date', +2348103948156, "1gb/N320", 'MTN', 'Pending'),
    createData('Date', +2348103448156, "1gb/N520", 'Airtel', 'Declined'),
    createData('Date', +2348103979156, "1gb/N720", 'Glo', 'Delivered'),
    createData('Date', +2348103948156, "1gb/N620", '9mobile', 'Delivered'),
    createData('Date', +2348103924156, "1gb/N720", 'Airtel', 'Delivered'),
    createData('Date', +2348104648156, "1gb/N820", '9mobile', 'Pending'),
    createData('Date', +23481014832156, "1gb/N320", 'MTN', 'Delivered'),
    createData('Date', +23481032478156, "1gb/Nw20", 'Glo', 'Declined'),
    createData('Date', +2348103948141, "1gb/N330", '9mobile', 'Delivered'),
    createData('Date', +2348103948454, "1gb/N120", 'MTN', 'Delivered'),
    createData('Date', +23481032494815, "1gb/N620", '9mobile', 'Pending'),
    createData('Date', +2348103848196, "1gb/N820", 'Airtel', 'Delivered'),
    createData('Date', +2348114315516, "1gb/N920", 'Airtel', 'Declined'),
    createData('Date', +2348103689956, "1gb/N520", '9mobile', 'Delivered'),
  ];

  