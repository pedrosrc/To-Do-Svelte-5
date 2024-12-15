// place files you want to import through the `$lib` alias in this folder.
export type FormProps = {
  id: number,
  title: string, 
  priority: string;
  project: string;
  done: boolean;
}

export type TaskProps = {
  title?: string;
  priority?: string;
  project?: string;
};
