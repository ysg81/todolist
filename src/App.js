import React, {Component} from 'react';
import styled from "styled-components";
import Content from "./Components/Content";
import './App.css'

class App extends Component {

  state={
    query:""
  };
  
  handleInputKeyPress = (e) => {
    if(e.key === "Enter"){
      this.setState({
        query: e.target.value
      });
      e.target.value = "";
    }
  }

  render() {
    return (
      <div>
        <Container query={this.state.query}>

          <input className="theme"
            placeholder="사진 테마를 입력하세요 (Ex.candy)"
            onKeyPress={this.handleInputKeyPress}
          ></input>

          <Content></Content>
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:linear-gradient(
    to right,
    rgba(20,20,20,0.5)20%,
    rgba(20,20,20,0.8)70%,
    rgba(20,20,20,1)
  ),
    url(https://source.unsplash.com/random/1920x1080?${props=>props.query});
  background-size:cover;
`;



export default App;
