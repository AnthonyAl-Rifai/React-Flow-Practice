// import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// const handleStyleUp = { top: 10 };
// const handleStyleDown = { bottom: 10 };


function TableNode() {
  return (
    <div className="table-node">
      <Handle
        type="target"
        position={Position.Left}
        id="input1"
        style={{ top: 10 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="input2"
        style={{ bottom: 10, top: 'auto' }} // kind of confused by these
      />
      <div>
        <label htmlFor="text">bookstore.books</label>
      </div>
      <div>
        <button className="add-field">+ FIELD</button>
      </div>
      <div>
        <table>
          <thead>
            <tr className='head-row'>
              <th scope="col">Column</th>
              <th scope="col">Type</th>
              <th scope="col">Constraints</th>
              <th scope="col">PK</th>
              <th scope="col">FK</th>
            </tr>
          </thead>
          <tbody>
            <tr className='empty-row'>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>id</td>
              <td>integer</td>
              <td>NOT NULL</td>
              <td>true</td>
              <td>false</td>
              <td><button className='icon'><EditIcon className='icon-class'/></button></td>
              <td><button className='icon'><DeleteIcon className='icon-class'/></button></td>
            </tr>
            <tr>
              <td>title</td>
              <td>varchar(255)</td>
              <td>NOT NULL</td>
              <td>false</td>
              <td>false</td>
              <td><button className='icon'><EditIcon className='icon-class'/></button></td>
              <td><button className='icon'><DeleteIcon className='icon-class'/></button></td>
            </tr>
            <tr>
              <td>description</td>
              <td>varchar(255)</td>
              <td>NOT NULL</td>
              <td>false</td>
              <td>false</td>
              <td><button className='icon'><EditIcon className='icon-class'/></button></td>
              <td><button className='icon'><DeleteIcon className='icon-class'/></button></td>
            </tr>
            <tr>
              <td>isbn</td>
              <td>char(13)</td>
              <td>NOT NULL</td>
              <td>false</td>
              <td>false</td>
              <td><button className='icon'><EditIcon className='icon-class'/></button></td>
              <td><button className='icon'><DeleteIcon className='icon-class'/></button></td>
            </tr>
            <tr>
              <td>genre_id</td>
              <td>integer</td>
              <td>NOT NULL</td>
              <td>false</td>
              <td>true</td>
              <td><button className='icon'><EditIcon className='icon-class'/></button></td>
              <td><button className='icon'><DeleteIcon className='icon-class'/></button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="output1"
        style={{ top: 10 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="output2"
        style={{ bottom: 10, top: 'auto' }}
      />
    </div>
  );
}

export default TableNode;
