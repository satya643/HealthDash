import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent';
import styles from './App.module.css';

function App() {
  return (
   

        <div className={styles.appContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <Header />
          <DashboardMainContent />
        </div>
     </div>
    
  );
}

export default App;

   