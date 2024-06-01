import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import Reservations from './pages/Reservations';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// test('Renders the BookingForm heading', () => {
//     render(<BookingForm />);
//     const headingElement = screen.getByText("Choose date");
//     expect(headingElement).toBeInTheDocument();
// })

describe('Feedback Form', () => {
  test('It returns the same value that is provided in the state', () => {
    const updateTimes = jest.fn();
    const availableTimes = screen.getByTestId('availableTimes');
    render(<Reservations availableTimes={availableTimes} dispatch={dispatch}/>);

    fireEvent.change(availableTimes, {target: {value: '17:00'} });

    expect(updateTimes).toHaveValue('17:00');

  } );
}

);