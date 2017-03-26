import React from 'react';
import { Wrapper, Item } from './styles';

const SuggestedItemList = ({name, suggestedItems, handleSelect}) => {
  return (
    <Wrapper>
      {suggestedItems.map((suggestedItem) => {
        return(
          <Item key={suggestedItem} >
            <div onClick={() => handleSelect(name, suggestedItem)} >
              {suggestedItem}
            </div>
          </Item>
        )
      })
      }
    </Wrapper>
  )
}

export default SuggestedItemList;