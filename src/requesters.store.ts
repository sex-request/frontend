import { atom } from 'jotai';

export const requestersStore = atom<string[]>([]);
export const addRequester = atom<null, string>(
  null,
  (get, set, name) => set(requestersStore, get(requestersStore).concat(name)),
);
export const removeRequester = atom<null, number>(
  null,
  (get, set, index) => set(requestersStore, get(requestersStore).filter((_, i) => i !== index)),
);

export default addRequester;
