import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const tasks = [
  { id: 'task-1', content: 'Task 1' },
  { id: 'task-2', content: 'Task 2' },
  { id: 'task-3', content: 'Task 3' },
  // Add more tasks as needed
];

const KanbanBoard = () => {
  const onDragEnd = () => {
    // Implement onDragEnd logic
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: 'white',
                      margin: '0 0 8px 0',
                      ...provided.draggableProps.style,
                    }}
                  >
                    {task.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanBoard;
