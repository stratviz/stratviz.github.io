import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { csv } from 'd3';
import data from './data'

console.log(data);

const App = () => {
	const [data, setData] = useState(null);
	
	useEffect(() => {
		csv(csvUrl.then(setData);)
	}, []);
	
	if(!data){
		return <pre>Loading...</pre>;
	}
	
	return data.map(d => <div />);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
