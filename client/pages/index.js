import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// middleware
import { updateUser } from '../store/actions/updateUser';

const Home = () => {
  const [form, setForm] = useState('');
  const dispatch = useDispatch();

  const changeHandler = e => {
    setForm(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(updateUser(form));
  };
  return (
    <div>
      <form onSubmit={submitHandler} className='userform'>
        <input type='text' onChange={changeHandler} value={form} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Home;
