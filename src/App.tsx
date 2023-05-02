import './App.css';
import { Button } from './components/Button';

function App() {
	return (
		<div className='App'>
			<Button
				size='sm'
				text='Shop'
				variant='primary'
				onClick={() => console.log('asdasds')}
			/>

			<Button
				text='Shop'
				variant='primary'
				onClick={() => console.log('asdasds')}
			/>

			<Button
				size='lg'
				text='Shop'
				variant='primary'
				onClick={() => console.log('asdasds')}
			/>

			<Button
				text='Shop'
				variant='secondary'
				onClick={() => console.log('asdasds')}
			/>

			<h1 className='font-roboto'>Shop</h1>
			<br />
			<button className='primary'>Primary</button>
			<br />
			<br />
			<button className='secondary'>Secondary</button>
		</div>
	);
}

export default App;
