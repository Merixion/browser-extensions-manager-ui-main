import './App.css';
import { Extensions } from './companents/Extensions/Extensions';
import { Cards } from './companents/Carts/Carts';
import type { Card } from './data/Card';
import { cards } from './data/Card';
import { useState } from 'react';


function App() {
	const [newCards, setNewCards] = useState<Card[]>(cards);
	const [filter, setFilter] = useState();
	const filteredCards: Card[] = newCards.filter(card => {
		if (filter === 'Active') return card.isActive;
		if (filter === 'Inactive') return !card.isActive;
		return true; // All
	});
	return (
		<>
			<header>
        <Extensions newCards={newCards} setNewCards={setNewCards} setFilter={setFilter}/>
      </header>
			<main>
				<Cards newCards={filteredCards} setNewCards={setNewCards}/>
			</main>
		</>
	);
}

export default App;
