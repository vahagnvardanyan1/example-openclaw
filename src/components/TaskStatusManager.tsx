import React, { useState, useEffect } from 'react';

type TaskStatus = 'open' | 'in_progress' | 'review' | 'testing' | 'done';

type Task = {
  id: string;
  status: TaskStatus;
};

type TaskStatusManagerProps = {
  initialTasks: Task[];
  onUpdate: (updatedTasks: Task[]) => void;
};

const TaskStatusManager: React.FC<TaskStatusManagerProps> = ({ initialTasks, onUpdate }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
    onUpdate(updatedTasks);
  };

  return (
    <div role="list" aria-label="Task Status List">
      {tasks.map(task => (
        <div key={task.id} role="listitem">
          <span>{task.id}</span>
          <select
            value={task.status}
            onChange={e => handleStatusChange(task.id, e.target.value as TaskStatus)}
          >
            {['open', 'in_progress', 'review', 'testing', 'done'].map(status => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default TaskStatusManager;
