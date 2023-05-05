import './styles/App.css';
import Form from 'pages/Form';
import TestForm from 'components/TestForm';
import { AppStyled } from 'styles/styles';

function App() {
  return (
    <AppStyled>
      <Form />
      {/* <TestForm /> */}
    </AppStyled>
  );
}

export default App;
