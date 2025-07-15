import styles from './Extensions.module.css';
export function Extensions() {
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
					<button>All</button>
					<button>Active</button>
					<button>Inactive</button>
				</div>
			</section>
		</article>
	);
}
