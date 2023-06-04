import React from 'react';
import StarRating from './components/StarRating';
import ColorGenerator from './components/ColorGenerator';
import Tabs from './components/Tabs';
import DownloadProgressBar from './components/DownloadProgressBar ';
import LikeButton from './components/LikeButton';
import CommentForm from './components/CommentForm ';
import Calendar from './components/Calender';
import Chips from './components/Chips';
import Vote from './components/Vote';
import Calculator from './components/Calculater';
import Table from './components/DataTable';
import ReadMoreComponent from './components/ReadMore';
import TicTacToe from './components/Ticgame';
import ReviewSlider from './components/Review';
import BirthdayReminderApp from './components1/Birthday';
import AccordionMenu from './components1/accordationMenu';
import PortfolioPage from './components1/portfolioTabs';
import Hangman from './components1/Hangman/Hangman';
import FAQ from './components1/Faq/Faq';
import GradientGenerator from './components1/Gradient';
import ProgressBar from './components1/progress';
import HabitTracker from './components1/Habit';
import FlashcardApp from './components1/FlashCard';
import BookNoteApp from './components1/BookCard';
import PasswordGenerator from './components2/password';
import FamilyTreeApp from './components2/FamilyTree';



const data = [
  { id: 1, name: 'Alice', age: 25, gender: 'Female' },
  { id: 2, name: 'Bob', age: 30, gender: 'Male' },
  { id: 3, name: 'Charlie', age: 20, gender: 'Male' },
  { id: 4, name: 'Danielle', age: 35, gender: 'Female' },
  { id: 5, name: 'Edward', age: 28, gender: 'Male' },
  { id: 6, name: 'Fiona', age: 22, gender: 'Female' },
  { id: 7, name: 'George', age: 32, gender: 'Male' },
  { id: 8, name: 'Hannah', age: 27, gender: 'Female' },
  { id: 9, name: 'Isaac', age: 24, gender: 'Male' },
  { id: 10, name: 'Jane', age: 29, gender: 'Female' },
  { id: 11, name: 'Kevin', age: 33, gender: 'Male' },
  { id: 12, name: 'Linda', age: 26, gender: 'Female' },
  { id: 13, name: 'Mike', age: 31, gender: 'Male' },
  { id: 14, name: 'Nancy', age: 23, gender: 'Female' },
  { id: 15, name: 'Oliver', age: 34, gender: 'Male' },
  { id: 16, name: 'Patricia', age: 21, gender: 'Female' },
];



const App = () => {
  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Rate this product</h1>
        <StarRating totalStars={5} />
      </div>
      <ColorGenerator />
      <br />
      <Tabs />
      <DownloadProgressBar />
      <br />
      <LikeButton />
      <br />
      <CommentForm />
      <br />
      <br /><br /><br />
      <Calendar />
      <br />
      <br />
      <Chips />
      <br />
      <br />
      <hr />
      <Vote />
      <br />
      <br />
      <Calculator />
      <br /><br />
      <br /><br /><br />
      <Table data={data} />
      <br /><br /><br />
      <div className='bg-slate-400'>
        <h1>Read More Example</h1>
        <ReadMoreComponent />
      </div>
      <br /><br /><br /><br />
      <TicTacToe/>
      <br /><br /><br /><br />
      <ReviewSlider />
      <br /><br /><br /><br />
      <BirthdayReminderApp/>
      <br /><br /><br /><br />
      <AccordionMenu/>
      <br /><br /><br /><br />
      <PortfolioPage/>
      <br /><br /><br /><br />
      <Hangman/>
      <br /><br /><br /><br />
      <FAQ/>
      <br /><br /><br /><br />
      <GradientGenerator/>
      <br /><br /><br /><br />
      <ProgressBar/>
      <br /><br /><br /><br />
      <HabitTracker/>
      <br /><br /><br /><br />
      <FlashcardApp/>
      <br /><br /><br /><br />
      <BookNoteApp/>
      <br /><br /><br /><br />
      <PasswordGenerator/>
      <br /><br /><br /><br />
      <FamilyTreeApp/>
    </div>
  );
};

export default App;
