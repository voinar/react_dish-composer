import './styles/App.css';
import Form from 'pages/Form';
import { AppStyled } from 'styles/styles';
import { BackgroundStyled } from 'components/Background/styles';

function App() {
  return (
    <>
      <AppStyled>
        <Form />
      </AppStyled>
      <BackgroundStyled />
    </>
  );
}

export default App;
