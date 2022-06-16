import { useState } from "react";
import styled from "styled-components";
import app from './firebase'
import{ getStorage,ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'

const Wrapper=styled.div``
const FomeContainer=styled.div``
const Button=styled.button`
cursor: pointer;
`
function App() {

  const [file,setFile]=useState(null)

  const handleSubmit= (e)=>{
    e.preventDefault()
    
    //file upload

  const fileName=new Date().getTime() + file.name
  const storage = getStorage(app);
  const storageRef = ref(storage, fileName);

  const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');

                break;
                default:
            }
          }, 
          (error) => {
            console.log("Handle unsuccessful uploads")
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            alert(downloadURL)
            });
          }
        );
}

  return (
    <Wrapper>
      <FomeContainer>
        <input type="file"  onChange={(e)=>setFile(e.target.files[0])}/>
        <Button onClick={handleSubmit}>Submit</Button>
      </FomeContainer>
    </Wrapper>

  );
}

export default App;
