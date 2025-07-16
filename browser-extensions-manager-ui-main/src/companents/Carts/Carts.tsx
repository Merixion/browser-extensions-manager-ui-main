import styles from './Carts.module.css'
import type {Card } from '../../data/Card';


export function Cards({newCards, setNewCards} : {newCards: Card[]}){
	function IsActive( id: number){
		setNewCards(newCards.map(card => card.id === id ? {...card, isActive: !IsActive }: card));
		
	}

	function Delete(id:number){
		setNewCards(newCards.filter(card => card.id !== id))
	}
  return (
		<section className={styles.Cards}>
			{newCards.map(card => (
				<article key={card.id} className={styles.Card}>
					<img src={card.logo} alt={card.title} />
					<div className={styles.InscriptionsCard}>
						<h1>{card.title}</h1>
						<p>{card.description}</p>
						<div className={styles.InputUsers}>
							<button onClick={()=>Delete(card.id)}>Remove</button>
							<input
								type='checkbox'
								checked = {card.isActive}
								onClick={() => IsActive(card.id)}
							/>
						</div>
					</div>
				</article>
			))}
		</section>
	);
}