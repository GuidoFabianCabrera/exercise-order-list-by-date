import { useContext } from 'react';
import { makeStyles } from '@mui/styles';

import { ExampleContext } from '../store/example';
import { Button, Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: '50px',
  },
}));

const Home = () => {
  const classes = useStyles();
  const { dataOrder, addItem } = useContext(ExampleContext);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleSubmit = () => {
    const createdAt = new Date().toJSON();

    const title = `Your order to purchase ${
      Math.floor(Math.random() * 10) + 1
    } pack of Top Racers pack for ${
      Math.floor(Math.random() * 100) + 1
    }.00 USD was processed and confirmed`;

    addItem({
      createdAt,
      title,
    });
  };

  const handleSubmit2 = () => {
    const createdAt = `2022-0${Math.floor(Math.random() * 9) + 1}-11T${
      Math.floor(Math.random() * 10) + 1
    }:21:00.000Z`;

    const title = `Your order to purchase ${
      Math.floor(Math.random() * 10) + 1
    } pack of Top Racers pack for ${
      Math.floor(Math.random() * 100) + 1
    }.00 USD was processed and confirmed`;

    addItem({
      createdAt,
      title,
    });
  };

  const handleSubmit3 = () => {
    const createdAt = `2022-0${Math.floor(Math.random() * 9) + 1}-0${
      Math.floor(Math.random() * 9) + 1
    }T${Math.floor(Math.random() * 10) + 1}:21:00.000Z`;

    const title = `Your order to purchase ${
      Math.floor(Math.random() * 10) + 1
    } pack of Top Racers pack for ${
      Math.floor(Math.random() * 100) + 1
    }.00 USD was processed and confirmed`;

    addItem({
      createdAt,
      title,
    });
  };

  const handleSubmit4 = () => {
    const createdAt = `2022-12-24T0${Math.floor(
      Math.random() * 10
    )}:0${Math.floor(Math.random() * 10)}:00.000Z`;

    const title = `Your order to purchase ${
      Math.floor(Math.random() * 10) + 1
    } pack of Top Racers pack for ${
      Math.floor(Math.random() * 100) + 1
    }.00 USD was processed and confirmed`;

    addItem({
      createdAt,
      title,
    });
  };

  return (
    <Container className={classes.box} maxWidth="md">
      <Button onClick={handleSubmit} variant="contained">
        New Data
      </Button>
      <Button onClick={handleSubmit2} variant="contained">
        Random Month
      </Button>
      <Button onClick={handleSubmit3} variant="contained">
        Random Month/Day
      </Button>
      <Button onClick={handleSubmit4} variant="contained">
        Random Hour
      </Button>

      {Object.keys(dataOrder).map((item, index) => {
        const [year, month, day] = item.split('-');

        return (
          <div key={index}>
            <h2>
              {day} - {monthNames[parseInt(month) - 1]} - {year}
            </h2>
            <ul>
              {dataOrder[item].map((subItem, index) => (
                <li key={index}>
                  <small>{subItem.createdAt.split(/\.|[T]/)[1]}</small>
                  {' || '}
                  <span>{subItem.title}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </Container>
  );
};

export default Home;
