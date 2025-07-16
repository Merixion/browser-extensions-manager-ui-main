import './App.css';
import { Extensions } from './companents/Extensions/Extensions';
import { Cards } from './companents/Carts/Carts';
import { cards } from './data/Card';
function App() {
	return (
		<>
			<header>
        <Extensions/>
      </header>
			<main>
				<Cards cards={cards}/>
			</main>
		</>
	);
}

export default App;
