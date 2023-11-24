import { Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import Task from './Task';

const InputTasks = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const check = () => {
    if (input.length > 4) {
      setTasks((prevTasks) => [...prevTasks, input]);
      setInput('');
    }
  };


  const handleDelete = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Input
        placeholder='Add task'
        width='50vw'
        padding="3"
        margin="2"
        marginBottom="100px"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button colorScheme='teal' variant='outline' onClick={check}>
        Add
      </Button>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default InputTasks;
