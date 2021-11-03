import React, { FunctionComponent } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface AnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  animations: ANIMATION_TYPE | ANIMATION_OBJ;
}

const Animation: FunctionComponent<AnimationProps> = (props) => {
  const { children, className, style, animations } = props;

  const applyTemplate = (anim: ANIMATION_OBJ): ANIMATION_OBJ => {
    if ('template' in anim && anim.template != undefined)
      return {
        ...applyTemplate(
          typeof anim.template == 'function'
            ? anim.template()
            : ANIMATIONS[anim.template]
        ),
        ...(anim as {})
      };
    return anim;
  };

  let anim = animations;

  if (typeof anim == 'string') {
    anim = ANIMATIONS[anim];
  }

  anim = applyTemplate(anim);

  const kfA = keyframes`0%{offset-distance:0%;}100%{offset-distance:100%;}`;

  let Anim;
  if (anim?.keyframes != undefined) {
    const kframes = anim.keyframes;
    const keyframesStr = kframes
      .map((obj: any) => {
        const vals = Object.entries(obj).filter(
          (v) => v[0] != 'keyframe' && v[0] != 'template'
        );
        return (
          (typeof obj.keyframe == 'number'
            ? `${obj.keyframe}%`
            : obj.keyframe) +
          `{${vals
            .map((kv) => `${kv[0]}:${kv[1]};`)
            .reduce((acc: any, val: any) => acc + val)}}`
        );
      })
      .reduce((acc: any, val: any) => acc + val);

    const kf = keyframes`${keyframesStr}`;
    Anim = styled.div(
      () => ({}),
      css`
        animation-name: ${kf}${typeof anim == 'object' ? css`, ${kfA}` : ''} !important;
        animation-iteration-count: infinite;
        animation-duration: 1s;
      `
    );
  } else {
    Anim = styled.div(
      () => ({}),
      css`
        animation: 1s ${kfA} infinite;
        display: inline-block;
      `
    );
  }

  const animProps = { ...props };
  delete animProps['className'];
  delete animProps['children'];

  const animStyle = Object.assign(
    { ...(style ?? {}) },
    { ...(anim as {}) } ?? {}
  );

  delete animProps['style'];

  return (
    <div
      style={{
        position: 'relative',
        top: 0,
        left: 0,
        display: 'inline-block',
        width: '100%',
        height: '100%'
      }}
      className={`${className}`}
    >
      <Anim style={animStyle} {...animProps}>
        {children}
      </Anim>
    </div>
  );
};

export default Animation;

export interface ANIMATION_OBJ_CSS extends React.CSSProperties {
  keyframe: 'from' | 'to' | Range_0_100;
}

export interface ANIMATION_OBJ extends React.CSSProperties {
  template?: ANIMATION_TYPE | Function;
  keyframes?: ANIMATION_OBJ_CSS[];
}

export interface ANIMATION_OBJS {
  [key: string]: ANIMATION_OBJ;
}

export const ANIMATIONS: ANIMATION_OBJS = {
  grow: {
    keyframes: [
      {
        keyframe: 0,
        transform: 'scale(120%)'
      },
      {
        keyframe: 50,
        transform: 'scale(100%)'
      },
      {
        keyframe: 100,
        transform: 'scale(120%)'
      }
    ]
  },
  poke: {
    transform: 'translate(50%, 50%)',
    offsetPath: "path('M0,0 V 10Z')",
    offsetRotate: '0deg',
    animationDuration: '0.5s',
    animationTimingFunction: 'ease-in',
    animationIterationCount: 'infinite'
  },
  wiggle: {
    transform: 'translate(50%, 50%)',
    offsetPath: "path('M0,0 H 5 H -5 H 5 H -5 H 5 H -5 H 5 H -5 H 5 H -5Z')",
    animationTimingFunction: 'ease',
    template: () => ANIMATIONS.poke
  },
  circle: {
    transform: 'translate(50%, 50%)',
    offsetPath: "path('M0,-10 C -10,-10 -10,10 0,10 C 10,10 10,-10 0,-10')",
    offsetRotate: '0deg',
    animationTimingFunction: 'linear',
    animationDuration: '0.5s',
    animationIterationCount: 'inifinite'
  },
  swirve: {
    transform: 'translate(50%, 50%)',
    position: 'relative',
    animationDuration: '5s',
    animationTimingFunction: 'linear',
    offsetPath: "path('M0,-3 C -5,-3 -5,3 0,3 C 5,3 5,-3 0,-3')",
    offsetRotate: '0deg'
  }
};

export const createFromToAnim = (
  css1: React.CSSProperties,
  css2: React.CSSProperties
): ANIMATION_OBJ_CSS[] => {
  return [
    {
      keyframe: 'from',
      ...css1
    },
    {
      keyframe: 'to',
      ...css2
    }
  ];
};

export const createPercentAnim = (
  perc: ({ keyframe: Range_0_100 } | React.CSSProperties)[]
): ANIMATION_OBJ_CSS[] => {
  return perc as ANIMATION_OBJ_CSS[];
};

export type ANIMATION_TYPE = 'wiggle' | 'circle' | 'poke' | 'grow' | 'swirve';

type Range_0_100 =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
  | 67
  | 68
  | 69
  | 70
  | 71
  | 72
  | 73
  | 74
  | 75
  | 76
  | 77
  | 78
  | 79
  | 80
  | 81
  | 82
  | 83
  | 84
  | 85
  | 86
  | 87
  | 88
  | 89
  | 90
  | 91
  | 92
  | 93
  | 94
  | 95
  | 96
  | 97
  | 98
  | 99
  | 100;
