import styled from "styled-components";

const Wrapper=styled.div``
const FomeContainer=styled.div``
const Button=styled.button``
function App() {

  const [file,setFile]=useState(null)

  return (
    <Wrapper>
      <FomeContainer>
        <input type="file"/>
        <Button>Submit</Button>
      </FomeContainer>
    </Wrapper>
  );
}

export default App;
