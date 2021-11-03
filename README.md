![npm](https://img.shields.io/npm/v/react-ui-ox-anim?label=version)
![Libraries.io dependency status for specific release](https://img.shields.io/librariesio/release/npm/react-ui-ox-anim/1.0.43)
![GitHub last commit](https://img.shields.io/github/last-commit/Generalizers/react-ui-ox-anim)
[![GitHub issues](https://img.shields.io/github/issues/Generalizers/react-ui-ox-anim)](https://github.com/Generalizers/react-ui-ox-anim/issues)
[![GitHub license](https://img.shields.io/github/license/Generalizers/react-ui-ox-anim)](https://github.com/Generalizers/react-ui-ox-anim/blob/master/LICENSE)

# react-ui-ox-anim

An animation package for react-ui-ox and the community

# Getting Started

Add as a dependency

```bash
npm install react-ui-ox-anim
```

Add as a dev dependency

```bash
npm install -D react-ui-ox-anim
```

# Components

<img style="float:left" src="https://miro.medium.com/max/256/1*XgMpgjwwDrHLOiS748kpBg.png" width="35px" height="35px"/>

## Animation

### Interfaces

```typescript
interface AnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  animations: ANIMATION_TYPE | ANIMATION_OBJ;
}
```

```typescript
interface ANIMATION_OBJ_CSS extends React.CSSProperties {
  keyframe: "from" | "to" | Range_0_100;
}
```

```typescript
interface ANIMATION_OBJ extends React.CSSProperties {
  template?: ANIMATION_TYPE | Function;
  keyframes?: ANIMATION_OBJ_CSS[];
}
```

```typescript
interface ANIMATION_OBJS {
  [key: string]: ANIMATION_OBJ;
}
```

### Types

| Types                 | values                    | description                   |
| --------------------- | -----------------         | ----------------------------- |
| ANIMATION_TYPE        | `"wiggle"`, `"circle"`, `"poke"`, `"grow"`, `"swirve"`           | The kind of animation to play |

### Objects

| Object                | type                      | description               |
| --------------------- | ------------------------- | ------------------------- |
| ANIMATIONS            | `ANIMATION_OBJS`          | Contains default `ANIMATION_OBJ`s that you can pass in the `animations` prop |

### Functions


| Types                 | parameters | return type | description                   |
| --------------------- | ----------------- | ------ | ----------------------------- |
| createPercentAnim     | css1 : `React.CSSProperties`, css2 : `React.CSSProperties` | `ANIMATION_OBJ_CSS[]` | Create a `from` `to` animation out of 2 CSS states |
| createPercentAnim | perc : `({ keyframe: Range_0_100 } \| React.CSSProperties)[]` | `ANIMATION_OBJ_CSS[]` | Create an animation from defined keyframes |

<img style="float:left" src="https://miro.medium.com/max/256/1*XgMpgjwwDrHLOiS748kpBg.png" width="35px" height="35px"/>

## Transition

### Interfaces

```typescript
interface TransitionProps {
  animations: TRANSITION_TYPE | ANIMATION_OBJ;
}
```

```typescript
interface TRANSITION_OBJS {
  [key: string]: ANIMATION_OBJ;
}
```

### Types

| Types                 | values                    | description                   |
| --------------------- | -----------------         | ----------------------------- |
| TRANSITION_TYPE        | `"enterTop"`, `"enterBottom"`, `"enterLeft"`, `"enterRight"`, `"fadeInTop"`, `"fadeInBottom"`, `"fadeInLeft"`, `"fadeInRight"`, `"curveBottomFromTopLeft"`, `"curveRightFromTopLeft"`, `"curveBottomFromTopRight"`, `"curveLeftFromTopRight"`, `"curveRightFromBottomLeft"`, `"curveTopFromBottomLeft"`, `"curveLeftFromBottomRight"`, `"curveTopFromBottomRight"`, `"fadeInCurveBottomFromTopLeft"`, `"fadeInCurveRightFromTopLeft"`, `"fadeInCurveBottomFromTopRight"`, `"fadeInCurveLeftFromTopRight"`, `"fadeInCurveRightFromBottomLeft"`, `"fadeInCurveTopFromBottomLeft"`, `"fadeInCurveLeftFromBottomRight"`, `"fadeInCurveTopFromBottomRight"` | The kind of transition to play |

### Objects

| Object                | type                      | description               |
| --------------------- | ------------------------- | ------------------------- |
| TRANSITIONS           | `TRANSITION_OBJS`          | Contains default `TRANSITION_OBJS`s that you can pass in the `animations` prop |