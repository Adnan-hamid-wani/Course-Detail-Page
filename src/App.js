import './App.css';
import CourseInfoCard from './components/CourseInfoCard';
import Header from './components/Header';
import MentorSection from './components/MentorSection';
import LessonsSection from './components/LessonsSection';

function App() {
  const cardsData = [
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJLmoNFPe87NVMmOpesD213akzbE7ATJl6w&s",
      name: "John Doe",
      rating: "⭐ 5",
      content: "This is the lesson content for John. This is the lesson content for John. This is the lesson content for John. This is the lesson content for John.This is the lesson content for John.✌️❤️",
      date: "2 weeks ago",
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTLxG4I5b-TQJ3iHv9K0tOG-22-UtGKN-UUvgiMQY5p10Jcs_RUeqUWM-guw1_guXOwU&usqp=CAU",
      name: "Jane Smith",
      rating: "⭐ 3",
      content: "This is the lesson content for Jane.😍👌This is the lesson content for Jane",
      date: "October 14, 2024",
    },
    
   
   
    
    // Add more cards as needed
  ];

  
  return ( <>
    <div className="app_header">
      <Header />
    </div>

    <div className='app_body'>
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
      <MentorSection
        mentorName={"Adnan wani"}
        mentorImage={"https://randomuser.me/api/portraits/men/1.jpg"}
        title={"I am a UI/UX designer with 5+ years of experience"}
        description={"I have worked with top companies and have a proven track record of delivering high-quality designs.I have worked with top companies and have a proven track record of delivering high-quality designs.I have worked with top companies and have a proven track record of delivering high-quality designs.I have worked with top companies and have a proven track record of delivering high-quality designs.The term  originates from Latin, meaning  or . In the realm of publishing and design, Lorem Ipsum is a commonly used piece of placeholder text, often used to demonstrate the appearance and layout of a webpage, book, or other publication. "}
        lastUpdated={'Aug 25 2024'}
        language={'English'}
        availabilty={"Access on laptops and mobile"}
        certificate={'Shareable certificate of completion'}
        access={"Online at your own place"}
        videoSrc={"https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"} // Pass the YouTube URL as a prop
        tag={"UI/UX Design"}
      />

<LessonsSection cardsData={cardsData} showCardOnly={false} />

      

      
    </div>
      
    </>
    
  );
}

export default App;
