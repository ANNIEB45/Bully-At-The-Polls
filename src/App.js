import React from 'react';
import './App.css';
import ElectionsStore from './components/elections/Elections-Store';
import VotersStore from './components/voters/Voters-Store';
import Routes from './components/shared/routes'
import Header from  './components/shared/header'
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<ElectionsStore.Provider>
			<VotersStore.Provider>
				<React.Fragment>
					<BrowserRouter>
						<div className="App">
							<Header/>
							<Routes />
						</div>
					</BrowserRouter>
				</React.Fragment>
			</VotersStore.Provider>
		</ElectionsStore.Provider>
	);
}

export default App;
