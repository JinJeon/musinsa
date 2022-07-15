import Styles from 'Styles';
import { GoodsProvider } from 'Context/GoodsContext';
import { FilterProvider } from 'Context/FiltersContext';
import Header from 'Components/Header';
import Main from 'Components/Main';

const App = () => {
	return (
		<div className="App">
			<Styles>
				<FilterProvider>
					<Header />
					<GoodsProvider>
						<Main />
					</GoodsProvider>
				</FilterProvider>
			</Styles>
		</div>
	);
};

export default App;
