import Header from './components/Header/Header'
import FilterableCourseList from './components/FilterableCourseList/FilterableCourseList'
import './scss/styles.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <FilterableCourseList />
      </div>
    </div>
  );
}

export default App;
