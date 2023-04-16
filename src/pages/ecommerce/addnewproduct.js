import React from 'react'
import { styled } from '@mui/system';
import { size } from 'lodash';

const Container = styled('div')({
marginTop:"22px auto",
padding:'0px',

});

const Heading = styled('div')({
fontSize:'20px',
padding:'18px 0px',

});
const Wrapper = styled('div')({
padding:'26px 0px',
display:'flex',
background:"white",
border:'1px solid #d7d3d3',
justifyContent: 'space-evenly',

});

const Label = styled('label')({
width:'47%',
margin:'4px auto',
});

const Input = styled('input')({
width:'100%',
margin: '5px auto',
padding:'12px 8px',
borderRadius: '4px',
border:'1px solid #d7d3d3',
});

const Rightwrapper= styled('div')({
width:'46%',
padding: '10px 16px',
border:'1px solid #d7d3d3',

});

const Leftwrapper= styled('div')({
width:'46%',
padding: '10px 16px',
border:'1px solid #d7d3d3',
});

const Select = styled('select')({
width: '100%',
margin: '5px auto',
padding: '12px 8px',
background: 'white',
borderRadius: '4px',
border:'1px solid #d7d3d3',
});

const Option = styled('option')({
color:'gray',
padding:'4px 0px',
});

const Subwrap = styled('div')({
display: 'flex',
justifyContent: 'end',
});

const Submitbtn = styled('div')({
padding: '4px 12px',
flexDirection: 'row-reverse', 
margin: '32px 0px',
display: 'flex',
width: '60%',
});

const Button = styled('button')({
padding: '8px 6px',
margin: '0px 3px',
width: '100%',
color: 'black',
textAlign: 'center',
borderRadius: '4px',
textDecoration: 'none',
border: '1px solid #d7d1d1',

});

const Upload = styled('div')({
width: '38%',
position: 'relative',
color: '#5b5959',
display: 'flex',
});

const Image = styled('img')({
width: '14px',
height: '14px',
position: 'absolute',
left:'10px',
top: '10px',
});
const Addnewproduct = () => {
  return (
    <div>
      <Container>
       <Heading>Add New Product</Heading>
        <Wrapper>
          <Rightwrapper>
            <Label>
              Product Name
              <br/>
              <Input type='text' name='name' placeholder='enter your product-name'/>
            </Label>
            <Label>
            Product Details
              <br/>
              <Input type='text' name='name' placeholder='enter your product-details'/>
            </Label>
            <Label>
              Categorie
              <br/>
              <Input type='text' name='name' placeholder='enter your Categorie'/>
            </Label>
            <Label for="price">Price
            <br/>
              <Select name="price" id="price">
                  <Option value="volvo">$100</Option>
                  <Option value="saab">$200</Option>
                  <Option value="opel">$300</Option>
                  <Option value="audi">$400</Option>
              </Select>
            </Label>
            
          </Rightwrapper>
          <Leftwrapper>
              <Label>
                  Quantity
                  <br/>
                  <Input type="number" name="bonus" label="label"/>  
              </Label>
              <Label for="status">Status
              <br/>
                  <Select name="status" id="status">
                      <Option value="volvo">In Stock</Option>
                      <Option value="saab">Out Of Stock</Option>
                  </Select>
              </Label>
              <br/>
              <p>* Recommended resolution is 640*640 with file size</p>
              <Upload>
                 <Button type='file' name='filename' default=" ">Click to Upload</Button>
                 <Image src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/null/external-upload-ui-essentials-kmg-design-basic-outline-kmg-design.png" href="/" alt="icon"/>
              </Upload>
              <Subwrap>
                <Submitbtn>
                    <Button >Submit</Button>
                    <Button as="a" href="/">Cancle</Button>
                </Submitbtn> 
              </Subwrap>
          </Leftwrapper>
        </Wrapper>

      </Container>
    
    </div>
  )
}

export default Addnewproduct

