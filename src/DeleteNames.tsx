import { FormEvent } from 'react';
import { useAppDispatch } from './app/hooks';
import {
  popName, 
  removeByName, 
} from './features/names/namesSlice';


const PopNames = () => {
  const dispatch = useAppDispatch();

  function handleDeleteByName (event: FormEvent) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: {value: string};
    }

    dispatch(removeByName(target.name.value))
    target.name.value = '';
  }

  return (
    <div>
      <button className="delete-name_button"
        onClick={() => dispatch(popName())}
      >
        Excluir ultimo nome
      </button>

      <br />

      <p className="delete-name_p-options-delete">
        Ou se preferir:
      </p>

      <form onSubmit={handleDeleteByName}>
        <input 
          className="delete-name_form_input"
          type="text"
          name="name"
        />
        <button type="submit" className="delete-name_button">
          Excluir por nome
        </button>
      </form>
    </div>
  )
}

export default PopNames;