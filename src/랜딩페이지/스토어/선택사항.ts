import { atom } from 'jotai';

export const 날짜_스토어 = atom<string>('');
export const 날짜_사용함_스토어 = atom<boolean>(true);

export const 시간_스토어 = atom<string>('');
export const 시간_사용함_스토어 = atom<boolean>(true);

export const 장소_스토어 = atom<string>('');
export const 장소_사용함_스토어 = atom<boolean>(true);

export const 약속_스토어 = atom<string>('');
export const 약속_사용함_스토어 = atom<boolean>(true);
