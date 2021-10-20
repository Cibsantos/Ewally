import React, { Component } from 'react';
import styled from 'styled-components';




class Header extends Component {

  render() {
    return (
      <React.Fragment>
        <DivHeader>
          <List>
            <Link target="_blank" href="https://www.ewally.com.br/">
              <SubTitle> Ewally</SubTitle>
            </Link>
            <ListItem>
              <Link target="_blank" href="https://www.ewally.com.br/para-voce-conta-digital/">Você</Link>
            </ListItem>
            <br />
            <ListItem >
              <Link target="_blank" href="https://www.ewally.com.br/para-sua-empresa/">Sua Empresa </Link>
            </ListItem>
            <br />
            <ListItem>
              <Link target="_blank" href="https://www.ewally.com.br/solucoes/">Soluções </Link>
            </ListItem>
            <br />
          </List>
        </DivHeader>
      </React.Fragment>
    );
  }
}

const DivHeader = styled.footer`
    position:absolute;
    top:0;
    width:100%;
    display: inline;
    align-items: center;
    background: #00BFC7;
    height: 90px;
    justify-content:space-between;

    @media (max-width: 680px) {     
      font-size: 14px;     
    }
`

const Link = styled.a`
    text-decoration: none;
    color: #fff;
  
    
`
const List = styled.ul`
  display: flex;
  text-transform: uppercase;
  list-style-type: none;
 
`
const ListItem = styled.li`
  display: inline;
  text-transform: uppercase;
  padding: 1em 1em 1em 2em;
  @media (max-width: 680px) {     
    padding: 1em 1.5em 1em 1em;
  }
`

const SubTitle = styled.p`
  font-size: 18px;
  color:#006D76;
  font-weight:bold;
  padding-bottom: 5px; 

`

export default Header;
