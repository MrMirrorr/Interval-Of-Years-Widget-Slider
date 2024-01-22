import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders Hello Typescript', () => {
	render(<App />);
	const element = screen.getByText(/Hello Typescript/i);
	expect(element).toBeInTheDocument();
});
