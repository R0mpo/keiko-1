import * as React from 'react';

import Style from './Home.style';

interface Props {
    name: string;
    id: number;
}

class Pokemon extends React.Component<Props> {
    render(): React.ReactNode {

        return (
            <Style.Intro>
                <div>{this.props.name}</div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="" />
                <div>{this.props.id}</div>
            </Style.Intro>
        );
    }
}

export default Pokemon;
