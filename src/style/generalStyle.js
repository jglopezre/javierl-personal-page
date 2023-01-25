import styled from 'styled-components'

const color = {
  primary: '#ff5153',
  secondary: '#ffb925', 
  background: '#fffedc',
  font: '#5c5d50'  
};

/* const color = {
  primary: '#ff5153',
  secondary: '#ffb925', 
  font: '#fffedc',
  background: '#5c5d50'  
}; */

const flexDivConfig = (justify = 'center', align = 'center', direction = 'column') => {
  return `
    display: flex;
    justify-content: ${ justify };
    align-items: ${ align };
    flex-direction: ${ direction }; 
  `
}

export {
  color,
  flexDivConfig
}
