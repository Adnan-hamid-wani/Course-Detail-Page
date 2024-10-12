import './App.css';
import CourseInfoCard from './components/CourseInfoCard';
import Header from './components/Header';

function App() {
  return ( <>
    <div className="app_header">
      <Header />
    </div>

    <div className='app_body'>
    
    </div>
    <CourseInfoCard
        title="Intro to UI/UX Design"
        courseName={'UI/UX Design'}
        price={75}
        discountedPrice={40}
        students={9839}
        duration={2.5}
        rating={4.8}
        reviews={4479}
        certificate={true}
      />
      
    </>
    
  );
}

export default App;
