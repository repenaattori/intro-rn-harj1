import { render, screen } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import App from '../App';

test('Text added', () => {
    const x = render(<App/>).toJSON();
    console.log(x);
    expect(screen.getByText('0')).toBeOnTheScreen();
});

test('Style added', () => {
    const x = render(<App/>).toJSON();
 
    console.log(x);
    
    expect(screen.getByText('0')).toHaveStyle({backgroundColor: 'yellow'});
});