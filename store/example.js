import { createContext, useMemo, useState } from 'react';

const ExampleContext = createContext();

const ExampleProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      createdAt: '2022-06-14T15:21:00.000Z',
      title:
        'Your order to purchase 1 pack of N3rvY-EZbunny pack for 35.00 USD was processed and confirmed',
    },
    {
      createdAt: '2022-06-13T16:15:00.000Z',
      title:
        'Your order to purchase 1 pack of Gambit pack for 50.00 USD was processed and confirmed',
    },
    {
      createdAt: '2022-06-13T16:11:00.000Z',
      title:
        'Your order to purchase 1 pack of Gambit pack for 50.00 USD was processed and confirmed',
    },
    {
      createdAt: '2022-06-09T16:03:00.000Z',
      title:
        'Your order to purchase 3 packs of Gambit pack for 150.00 USD was processed and confirmed',
    },
    {
      createdAt: '2022-06-02T16:06:00.000Z',
      title:
        'Your order to purchase 1 pack of Top Racers pack for 25.00 USD was processed and confirmed',
    },
    {
      createdAt: '2022-06-02T16:04:00.000Z',
      title:
        'Your order to purchase 1 pack of Top Racers pack for 25.00 USD was processed and confirmed',
    },
    {
      createdAt: '2022-06-02T15:59:00.000Z',
      title:
        'Your order to purchase 3 packs of Gambit pack for 150.00 USD was processed and confirmed',
    },
    {
      createdAt: '2022-06-02T13:56:00.000Z',
      title:
        'Your order to purchase 3 packs of Top Racers pack for 75.00 USD was processed and confirmed',
    },
    {
      createdAt: '2022-06-02T13:49:00.000Z',
      title:
        'Your order to purchase 3 packs of Gambit pack for 150.00 USD was processed and confirmed',
    },
    {
      createdAt: '2022-01-02T13:49:00.000Z',
      title: 'primero',
    },
    {
      createdAt: '2022-09-02T13:49:00.000Z',
      title: 'ultimo',
    },
  ]);

  const addItem = (item) => {
    setData([...data, item]);
  };

  //----------------------------------------------------------------------------------------------

  const dataOrder = useMemo(() => {
    const groupByDate = data.reduce((prev, item) => {
      const date = item.createdAt.split('T')[0];

      prev[date] = prev[date] ?? [];

      prev[date].push(item);

      return prev;
    }, {});

    const orderByDate = Object.keys(groupByDate)
      .sort((a, b) => {
        return new Date(b) - new Date(a);
      })
      .reduce((obj, key) => {
        obj[key] = groupByDate[key];

        obj[key] = obj[key].sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });

        return obj;
      }, {});

    return orderByDate;
  }, [data]);

  return (
    <ExampleContext.Provider value={{ data, dataOrder, addItem }}>
      {children}
    </ExampleContext.Provider>
  );
};

export { ExampleProvider, ExampleContext };
