import { useEffect } from "preact/hooks";

import { Rive, Layout } from '@rive-app/canvas';
import { createRef } from 'preact';

export default function ({src, classNames = ""}) {
    const ref = createRef();
    useEffect(() => {
        new Rive({
            canvas: ref.current,
            src: src,
            autoplay: true
        })
    });
    return (<canvas ref={ref} id="canvas" width="400" height="400" class={classNames}></canvas>
    );
  }