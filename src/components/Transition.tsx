import * as React from 'react';
import { FunctionComponent } from 'react';
import Animation, {
  ANIMATION_OBJ,
  ANIMATION_OBJS,
  createFromToAnim
} from './Animation';

interface TransitionProps {
  animations: TRANSITION_TYPE | ANIMATION_OBJ;
}

const Transition: FunctionComponent<TransitionProps> = ({
  animations,
  children
}) => {
  let anim = animations;

  if (typeof anim == 'string') {
    anim = TRANSITIONS[anim];
  }

  return <Animation animations={anim}>{children}</Animation>;
};

export default Transition;

interface FromToTransitionPos {
  name: string;
  params?: { from: React.CSSProperties; to: React.CSSProperties };
  pos?: string[];
}

const POS = ['top', 'bottom', 'left', 'right'];

const createFromToTransitionPos = (
  props: FromToTransitionPos[]
): ANIMATION_OBJS => {
  return props
    .map((propObj) => {
      const pos = propObj.pos ?? POS;
      return pos
        .map((p) => {
          const o: any = {};
          const t1: any = {};
          const t2: any = {};
          t1[`${p}`] = '-10px';
          t2[`${p}`] = '0px';
          Object.keys(propObj.params?.from ?? {}).forEach((css) => {
            const obj = propObj.params?.from as { [id: string]: string };
            t1[css] = obj[css];
          });
          Object.keys(propObj.params?.to ?? {}).forEach((css) => {
            const obj = propObj.params?.to as { [id: string]: string };
            t2[css] = obj[css];
          });
          o[`${propObj.name}${p.charAt(0).toUpperCase() + p.slice(1)}`] = {
            keyframes: createFromToAnim(t1, t2),
            position: 'relative',
            animationIterationCount: 1
          };
          return o;
        })
        .reduce((acc, val) => {
          return Object.assign(val, acc);
        }, {});
    })
    .reduce((acc, val) => {
      return Object.assign(val, acc);
    }, {});
};

export interface TRANSITION_OBJS {
  [key: string]: ANIMATION_OBJ;
}

export const TRANSITIONS: TRANSITION_OBJS = {
  ...createFromToTransitionPos([
    { name: 'enter' },
    { name: 'fadeIn', params: { from: { opacity: 0 }, to: { opacity: 1 } } }
  ]),
  curveBottomFromTopLeft: {
    transform: 'translate(50%, 50%)',
    animationIterationCount: '1',
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationFillMode: 'forwards',
    offsetPath: "path('M-10,-10 C -10,-10 -10,0 0,0')",
    offsetRotate: '0deg',
    template: () => TRANSITIONS['enterLeft']
  },
  curveRightFromTopLeft: {
    offsetPath: "path('M-10,-10 C -10,-10 0,-10 0,0')",
    template: () => TRANSITIONS.curveBottomFromTopLeft
  },
  curveBottomFromTopRight: {
    offsetPath: "path('M-10,-10 C -10,-10 0,-10 0,0')",
    template: () => TRANSITIONS.curveBottomFromTopLeft
  },
  curveLeftFromTopRight: {
    offsetPath: "path('M-10,-10 C -10,-10 0,-10 0,0')",
    template: () => TRANSITIONS.curveBottomFromTopLeft
  },
  curveRightFromBottomLeft: {
    offsetPath: "path('M-10,-10 C -10,-10 0,-10 0,0')",
    template: () => TRANSITIONS.curveBottomFromTopLeft
  },
  curveTopFromBottomLeft: {
    offsetPath: "path('M-10,-10 C -10,-10 0,-10 0,0')",
    template: () => TRANSITIONS.curveBottomFromTopLeft
  },
  curveLeftFromBottomRight: {
    offsetPath: "path('M-10,-10 C -10,-10 0,-10 0,0')",
    template: () => TRANSITIONS.curveBottomFromTopLeft
  },
  curveTopFromBottomRight: {
    offsetPath: "path('M-10,-10 C -10,-10 0,-10 0,0')",
    template: () => TRANSITIONS.curveBottomFromTopLeft
  },
  fadeInCurveBottomFromTopLeft: {
    keyframes: createFromToAnim({ opacity: 0 }, { opacity: 1 }),
    template: () => TRANSITIONS.curveBottomFromTopLeft
  },
  fadeInCurveRightFromTopLeft: {
    keyframes: createFromToAnim({ opacity: 0 }, { opacity: 1 }),
    template: () => TRANSITIONS.curveRightFromTopLeft
  },
  fadeInCurveBottomFromTopRight: {
    keyframes: createFromToAnim({ opacity: 0 }, { opacity: 1 }),
    template: () => TRANSITIONS.curveBottomFromTopRight
  },
  fadeInCurveLeftFromTopRight: {
    keyframes: createFromToAnim({ opacity: 0 }, { opacity: 1 }),
    template: () => TRANSITIONS.curveLeftFromTopRight
  },
  fadeInCurveRightFromBottomLeft: {
    keyframes: createFromToAnim({ opacity: 0 }, { opacity: 1 }),
    template: () => TRANSITIONS.curveBottomFromTopLeft
  },
  fadeInCurveTopFromBottomLeft: {
    keyframes: createFromToAnim({ opacity: 0 }, { opacity: 1 }),
    template: () => TRANSITIONS.curveTopFromBottomLeft
  },
  fadeInCurveLeftFromBottomRight: {
    keyframes: createFromToAnim({ opacity: 0 }, { opacity: 1 }),
    template: () => TRANSITIONS.curveLeftFromBottomRight
  },
  fadeInCurveTopFromBottomRight: {
    keyframes: createFromToAnim({ opacity: 0 }, { opacity: 1 }),
    template: () => TRANSITIONS.curveTopFromBottomRight
  }
};

export type TRANSITION_TYPE =
  | 'enterTop'
  | 'enterBottom'
  | 'enterLeft'
  | 'enterRight'
  | 'fadeInTop'
  | 'fadeInBottom'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'curveBottomFromTopLeft'
  | 'curveRightFromTopLeft'
  | 'curveBottomFromTopRight'
  | 'curveLeftFromTopRight'
  | 'curveRightFromBottomLeft'
  | 'curveTopFromBottomLeft'
  | 'curveLeftFromBottomRight'
  | 'curveTopFromBottomRight'
  | 'fadeInCurveBottomFromTopLeft'
  | 'fadeInCurveRightFromTopLeft'
  | 'fadeInCurveBottomFromTopRight'
  | 'fadeInCurveLeftFromTopRight'
  | 'fadeInCurveRightFromBottomLeft'
  | 'fadeInCurveTopFromBottomLeft'
  | 'fadeInCurveLeftFromBottomRight'
  | 'fadeInCurveTopFromBottomRight';
