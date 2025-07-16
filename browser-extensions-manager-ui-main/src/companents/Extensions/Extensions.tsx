import styles from './Extensions.module.css';
import { cards, type Card} from '../../data/Card';

export function Extensions({ newCards, setNewCards , setFilter}: { newCards: Card[]}) {
	return (
		<article>
			<section className={styles.Extensions}>
				{/*Extensions */}
				<img
					src='/images/logo.svg'
					alt='logoExtensions'
					className={styles.StyleExtensions}
				/>
				<button className={styles.Theme}>
					<img src='images/icon-sun.svg' alt='ThemeLite' />
				</button>
			</section>

			<section className={styles.ExtensionsList}>
				{/*Extensions List */}
				<h1>Extensions List</h1>
				<div className={styles.FilterCards}>
					<button onClick={() => setFilter('ALL')}>All</button>
					<button onClick={() => setFilter('Active')}>Active</button>
					<button onClick={() => setFilter('Inactive')}>Inactive</button>
				</div>
			</section>
		</article>
	);
}
