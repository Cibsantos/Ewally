import React, { Component } from 'react';
import styled from 'styled-components'
class Footer extends Component {
  render() {


    return (
      <React.Fragment>
        <DivFooter>
          <List>
            <SubTitle>Serviços</SubTitle>
            <li>
              <Link target="_blank" href="https://www.ewally.com.br/para-voce-conta-digital/">Para Você</Link>
            </li>
            <br />
            <li >
              <Link target="_blank" href="https://www.ewally.com.br/para-sua-empresa/">Para Sua Empresa </Link>
            </li>
            <br />
            <li>
              <Link target="_blank" href="https://www.ewally.com.br/solucoes/">Soluções </Link>
            </li>
            <br />
          </List>
          <List>
            <SubTitle>Contato</SubTitle>
            <li>
              <Link target="_blank" href="https://www.linkedin.com/in/cibelesantoscs/">
                Linkedin
            </Link>
            </li>
            <br />
            <li >
              <Link target="_blank" href="https://wa.me/+5511976769337?text=Ol%C3%A1%20Sou%20Cliente%20Ewally%20e%20gostaria%20de%20tirar%20d%C3%BAvidas%20!">Whatsapp </Link>
            </li>
            <br />
            <li >
              <Link target="_blank" href="https://github.com/Cibsantos">Suporte Técnico </Link>
            </li>
          </List>
          <Copy>
            &copy; C.S 2021
          </Copy>
        </DivFooter>
      </React.Fragment>
    );
  }
}

const DivFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background: #00BFC7;
    justify-content: space-around;

    @media (max-width: 680px) {     
     top: 70%;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: #fff;
`
const List = styled.ul`
  list-style-type: none;
`

const SubTitle = styled.p`
  font-size: 18px;
  color:#006D76;
  font-weight:bold;

  @media (max-width: 680px) {     
    font-size: 12px;
   }

`
const Copy = styled.p`
  font-size: 18px;
  color:#006D76;
  font-weight:bold;

  @media (max-width: 680px) {     
    display: none;
   }
`

export default Footer;
