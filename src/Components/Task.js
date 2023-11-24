import { CheckCircleIcon, DeleteIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Task = (props) => {
  const [isdone, setIsdone] = useState(false);
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date();
  var full_date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

  const donestyle = {
    textDecoration: isdone ? 'line-through' : 'none',
  };

  const done = () => {
    console.log('done');
    setIsdone(!isdone);
  };

  const handleDelete = () => {
    if (props.onDelete) {
      props.onDelete(props.task);
    }
  };

  return (
    <>
      <table className="tb">
        <tbody>
          <tr style={donestyle}>
            <td>{props.task}</td>
            <td>
              <span id="day">{daysOfWeek[date.getDay()]}</span>
              {full_date}
            </td>
            <td style={{ textDecoration: 'none' }}>
              <CheckCircleIcon marginRight="10px" color="teal" onClick={done} />
              <DeleteIcon color="red" onClick={handleDelete} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Task;
