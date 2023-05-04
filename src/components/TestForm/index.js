import { Title } from 'components/Title/styles';
import { useAppSelector, useAppDispatch } from 'hooks/hooks';
import {
  increment,
  decrement,
  incrementByAmount,
} from 'features/form/formSlice';

const TestForm = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      {/* name{JSON.stringify(name.form.firstName)} */}
      <header className="App-header">
        <Title>
          Edit <code>src/App.tsx</code> and save to reload.
        </Title>
        <h2>{count}</h2>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(2));
          }}
        >
          increment by 2
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </>
  );
};

export default TestForm;
