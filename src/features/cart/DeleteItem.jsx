import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';

import { deleteItem } from './cartSlice';

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch(deleteItem(pizzaId));
  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}
