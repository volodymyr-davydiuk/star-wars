import React, {FC, useState} from 'react';
import {Background, BackgroundVariant, ReactFlow} from 'reactflow';

import 'reactflow/dist/style.css';

type HeroGraphProps = {

}

const HeroGraph: FC<HeroGraphProps> = () => {
  const initialNodes = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Input Node' },
      position: { x: 250, y: 25 },
    },

    {
      id: '2',
      // you can also pass a React component as a label
      data: { label: <div>Default Node</div> },
      position: { x: 100, y: 125 },
    },
    {
      id: '3',
      type: 'output',
      data: { label: 'Output Node' },
      position: { x: 250, y: 250 },
    },
  ];

  const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
  ];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div style={{width:'100%', height:'400px'}}>
      <ReactFlow edges={edges} nodes={nodes} fitView>
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default HeroGraph;