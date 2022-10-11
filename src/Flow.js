import { useState, useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import TextUpdaterNode from './TextUpdaterNode';
import TableNode from './TableNode';
import CustomTableNode from './CustomTableNode';

// manually add initial edges
const initialEdges = [
  {
    id: '1-2', // required
    source: '1', // required
    target: '2', // required
    label: 'Oo baby',
    type: 'step',
  },
  {
    id: '2-3', // required
    source: '2', // required
    target: '3', // required
    animated: true,
    label: 'Can add custom label here',
    style: { stroke: 'blue' },
  },
];

// manually add initial nodes
const initialNodes = [
  {
    id: '1', // required
    position: { x: 0, y: 0 }, // required
    data: { label: 'Im a sexy node ' },
    type: 'input',
  },
  {
    id: '2',
    position: { x: 100, y: 100 },
    data: { label: 'Im also a sexy node' },
  },
  {
    id: '3',
    type: 'textUpdater',
    position: { x: 200, y: 200 },
    data: { value: 123 },
  },
  {
    id: 'table1',
    type: 'table',
    position: { x: 100, y: 300 },
    data: { label: 'authors' },
  },
  {
    id: 'customTable1',
    type: 'customTable',
    position: { x: 300, y: 100 },
  },
];

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  table: TableNode,
  customTable: CustomTableNode,
};

function Flow() {
  // set up states for nodes and edges
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // when a node is dragged or selected, onNodesChange (noNodeChange doesn't work) handler gets called. With the help of applyNodeChanges function, you can then apply those changes to your current node state.
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  // when an edge is dragged or selected, onEdgesChange handler gets called. With the help of applyEdgeChanges function, you can then apply those changes to your current edge state.
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  // in order to connect nodes manually, we have to implement this onConnect handler and pass it to the <reactFlow /> component as well
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div className="flow" style={{ height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        // fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
