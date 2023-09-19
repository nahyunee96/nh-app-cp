import React from 'react'
import { NextPage } from 'next'

interface FrameAniHTMLProps {
  boxRef: React.MutableRefObject<HTMLDivElement | null>;
  
}


const FrameAniHTML: NextPage<FrameAniHTMLProps> = ({ boxRef }) => {
  return (
    <article className="overflow-x-hidden">
      <section id="sticky" className="section04 bg-transparent h-[895px] 4xl:h-[600px] scene w-full relative`}">
        <div
          ref={boxRef}
          className="viewer bg-[url('/img/cinnamoroll_frame_b.png?new')] 4xl:bg-[url('/img/cinnamoroll_frame_1920.jpg?new')] bg-no-repeat bg-left-1/2 max-w-[1000px] 4xl:max-w-[720px] mx-auto w-full h-full"
        ></div>
      </section>
    </article>
  );
};

export default FrameAniHTML;