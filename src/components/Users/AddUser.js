import { useState, useRef } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.scss';

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input!',
        message: 'Please enter a valid username and age!',
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age!',
        message: 'Please enter a valid age (age > 0)!',
      });
      return;
    }

    props.onAddUser(enteredUsername, +enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name=""
            id="username"
            ref={nameInputRef}
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            name=""
            id="age"
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
