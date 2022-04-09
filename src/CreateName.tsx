import { FormEvent } from 'react';
import { useAppDispatch } from './app/hooks';

import { addName } from './features/names/namesSlice';

const CreateName = () => {
  const dispatch = useAppDispatch();
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: {value: string};
    }

    dispatch(addName(target.name.value));
    target.name.value = '';
  }

  return (
    <>
    <br/>
      <form 
        className="create-name_form"
        onSubmit={handleSubmit}
      >
        <input className="create-name_form_input"
          name="name"
          type="text"
        />
        <button className="create-name_form_button"
          type="submit"
        >
          Adicionar nome
        </button>
      </form>
      <br/>
    </>
  )
} 

export default CreateName;