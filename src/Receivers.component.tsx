import { useState } from 'react';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';

import Names from 'src/Names';
import {
  receiversStore,
  addReceiver,
  removeReceiver,
} from 'src/receivers.store';

export default function Receivers(): JSX.Element {
  const [value, setValue] = useState<string>('');
  const names = useAtomValue(receiversStore);
  const addName = useUpdateAtom(addReceiver);
  const removeName = useUpdateAtom(removeReceiver);

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
