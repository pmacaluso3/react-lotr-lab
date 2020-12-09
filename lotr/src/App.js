import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie'

function App() {
  const movieData = [
    {
      title: "The Fellowship of the Ring",
      hours: "2",
      minutes: "58",
    },
    {
      title: "The Two Towers",
      hours: "2",
      minutes: "59",
    },
    {
      title: "The Return of the King",
      hours: "3",
      minutes: "21",
    },
  ]

  const movieComponents = movieData.map((d, index) => {
    // return <Movie title={d.title} hours={d.hours} minutes={d.minutes} key={'movie-' + index}/>
    return <Movie { ...d } key={`movie-${index}`}/>
  })

  return (
    <div className="App">
      {movieComponents}
    </div>
  );
}

export default App;
