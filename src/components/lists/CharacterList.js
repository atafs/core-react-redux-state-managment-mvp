import React, { Component } from 'react';
import { connect } from 'react-redux';

import CharacterListItem from './listItem/CharacterListItem';

class CharacterList extends Component {
    render() {
        console.log('CharacterList this.props', this.props);
        const { characters } = this.props;

        return (
            <ul>
                {
                    characters.map(character => {
                        const { id, name } = character;
                        return (
                            <CharacterListItem key={id} name={name}/>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = state => {
    const { characters } = state;
    console.log('CharacterList mapStateToProps state', state);
    return {
        characters
    };
}

export default connect(mapStateToProps, null)(CharacterList);