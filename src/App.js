import './App.css';
import Users from './Components/Users/Users';
import Container from '@material-ui/core/Container';
function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Users></Users>
      </Container>
    </div>
  );
}

export default App;
