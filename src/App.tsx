import Styles from 'Styles';
import { QueryClient, QueryClientProvider } from 'react-query';
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
						<Main />
					</FilterProvider>
				</QueryClientProvider>
			</Styles>
		</div>
	);
};

export default App;
