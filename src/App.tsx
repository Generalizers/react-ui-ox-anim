import * as React from 'react';
import Animation from './components/Animation';
import Transition, { TRANSITIONS } from './components/Transition';

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Animation animations='wiggle'>
          <div>SALUT</div>
        </Animation>
        <Animation animations='circle'>
          <div>SALUT</div>
        </Animation>
        <Animation animations='poke'>
          <div>SALUT</div>
        </Animation>
        <Animation animations={`grow`}>HELLO YOU</Animation>
        <Transition
          animations={{
            template: () => TRANSITIONS.fadeInCurveBottomFromTopLeft
          }}
        >
          ENTER
        </Transition>
      </div>
    );
  }
}

export default App;
