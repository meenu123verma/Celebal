import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          {/* Add more routes for other pages */}
        </Switch>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
