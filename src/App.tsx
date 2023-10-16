// App.tsx
import React  from 'react';
import Sidebar from './components/layout/SideBar';
import MainContent from './pages/MainContent';
import Callback from './lib/Callback';


const App: React.FC = () => {


  return (

    <div>
      <Callback />
      <Sidebar  >
        <MainContent />
      </Sidebar>
    </div>
  );
};

export default App;
