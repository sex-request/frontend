import { useState } from 'react';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';

import Names from 'src/Names';
import {
  requestersStore,
  addRequester,
  removeRequester,
} from 'src/requesters.store';

export default function Requesters(): JSX.Element {
  const [value, setValue] = useState<string>('');
  const names = useAtomValue(requestersStore);
  const addName = useUpdateAtom(addRequester);
  const removeName = useUpdateAtom(removeRequester);

  const handleAdd = () => {
    addName(value);
    setValue('');
  };

  return (
    <Names
      value={value}
      names={names}
      onChange={setValue}
      onAdd={handleAdd}
      onRemove={removeName}
    />
  );
}
