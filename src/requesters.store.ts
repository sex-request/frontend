import { atom } from 'jotai';

export const requestersStore = atom<string[]>([]);
export const addRequester = atom<string[], string>(
  (get) => get(requestersStore),
  (get, set, name) => set(requestersStore, get(requestersStore).concat(name)),
);
export const removeRequester = atom<string[], number>(
  (get) => get(requestersStore),
  (get, set, index) => set(requestersStore, get(requestersStore).filter((_, i) => i !== index)),
);

export default addRequester;
