'use client'

import DragBox from './DragBox';

export default function MotionValueExample() {
  const dragConstraints = { top: -400, right: 400, bottom: 400, left: -400 };

  return (
    <div className="h-full bg-slate-400">
      <div className="w-full h-[100vh] flex items-center justify-center text-xl ">
        <DragBox dragConstraints={dragConstraints}>
          <div className="cursor-pointer p-4 bg-red-500">empujame</div>
        </DragBox>
        <DragBox dragConstraints={dragConstraints}>
          <div className="cursor-pointer p-4 bg-blue-500">empujame</div>
        </DragBox>
        <DragBox dragConstraints={dragConstraints}>
          <div className="cursor-pointer p-4 bg-green-500">empujame</div>
        </DragBox>
      </div>
    </div>
  );
}
