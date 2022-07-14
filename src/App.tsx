import Styles from 'Styles';
import { GoodsProvider } from 'Context';
import Header from 'Components/Header';
import Main from 'Components/Main';

const App = () => {
	return (
		<div className="App">
			<Styles>
				<Header />
				<GoodsProvider>
					<Main />
				</GoodsProvider>
			</Styles>
		</div>
	);
};

export default App;
