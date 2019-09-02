import * as React from 'react';

import Style from './Home.style';

import Pokemon from 'components/Pokemon';

class Home extends React.Component {
  render(): React.ReactNode {
    const pokemon = "Carapuce";

    return (
      <Style.Intro>
        <Pokemon name="Carapuce" id={7} />
        <Pokemon name="Carabaffe" id={2} />
        <Pokemon name="Tortank" id={3} />
      </Style.Intro>
    );
  }
}

export default Home;
