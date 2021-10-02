import { atom } from 'jotai';

const initialValue = atom<string[]>([]);

const receivers = atom<string[], string>(
  (get) => get(initialValue),
  (get, set, name) => set(initialValue, [...get(initialValue), name]),
);

export default receivers;
