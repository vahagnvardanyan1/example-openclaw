import { useState } from 'react';

type TaskStatus = 'open' | 'in_progress' | 'review' | 'testing' | 'done';

type Task = {
  id: string;
  status: TaskStatus;
};

type UseTaskStatusResult = {
  tasks: Task[];
  updateTaskStatus: (taskId: string, newStatus: TaskStatus) => void;
};

export const useTaskStatus = (initialTasks: Task[]): UseTaskStatusResult => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const updateTaskStatus = (taskId: string, newStatus: TaskStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return { tasks, updateTaskStatus };
};
