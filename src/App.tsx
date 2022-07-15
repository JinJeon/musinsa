import Styles from 'Styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GoodsProvider } from 'Context/GoodsContext';
import { FilterProvider } from 'Context/FiltersContext';
import Header from 'Components/Header';
import Main from 'Components/Main';

const queryClient = new QueryClient();

const App = () => {
	return (
		<div className="App">
			<Styles>
				<QueryClientProvider client={queryClient}>
					<FilterProvider>
						<Header />
						<GoodsProvider>
							<Main />
						</GoodsProvider>
					</FilterProvider>
				</QueryClientProvider>
			</Styles>
		</div>
	);
};

export default App;
