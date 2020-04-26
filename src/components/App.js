import React, { Component } from 'react';

import CharacterList from './lists/CharacterList';
import Title from './headers/Title';
import SubTitle from './headers/SubTitle';

class App extends Component {
    render() {
        return (
            <div>
                <Title text="SuperSquad" />
                <div>
                    <SubTitle text="Charaters" />
                    <CharacterList />
                </div>
            </div>
        )
    }
}

export default App;