// import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

// const handleStyleUp = { top: 10 };
// const handleStyleDown = { bottom: 10 };

function CustomTableNode() {
  return (
    <div className="custom-table-node">
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
        <label htmlFor="text">Custom Table</label>
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

export default CustomTableNode;
