import { writable } from 'svelte/store';
import { type FormProps } from "$lib";

export let isOpen = writable<boolean>(false);
export const selectedTask = writable<FormProps | null>(null);

export const toggleModal = () => {
  isOpen.update(value => !value);
};