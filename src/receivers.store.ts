import { atom } from 'jotai';

export const receiversStore = atom<string[]>([]);
export const addReceiver = atom<null, string>(
  null,
  (get, set, name) => set(receiversStore, get(receiversStore).concat(name)),
);
export const removeReceiver = atom<null, number>(
  null,
  (get, set, index) => set(receiversStore, get(receiversStore).filter((_, i) => i !== index)),
);
