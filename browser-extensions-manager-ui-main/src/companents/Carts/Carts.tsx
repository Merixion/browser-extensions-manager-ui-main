import styles from './Carts.module.css'

export function Cards({cards}){
  return (
		<section className={styles.Cards}>
			{cards.map(card => (
				<article className={styles.Card}>
					<img src={card.logo} alt={card.title} />
					<div className={styles.InscriptionsCard}>
						<h1>{card.title}</h1>
						<p>{card.description}</p>
						<div className={styles.InputUsers}>
							<button>Remove</button>
							<input type='checkbox' />
						</div>
					</div>
				</article>
			))}
		</section>
	);
}