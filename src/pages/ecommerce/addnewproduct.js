import React from 'react'
import { styled } from '@mui/system';
import { size } from 'lodash';
import Checkbox from 'themes/overrides/Checkbox';


const Wrapper = styled('div')({
padding:12,
margin:'12px 0px',
display:'flex',

});

const Label = styled('label')({
width:'47%',
margin:'4px auto',
});

const Input = styled('input')({
width:'100%',
margin: '5px auto',
padding:'7px 5px',
});

const Rightwrapper= styled('div')({
width:'46%',
padding: '8px 12px',

});

const Leftwrapper= styled('div')({
width:'46%',
padding: '8px 12px',

});

const Select = styled('select')({
width: '100%',
margin: '5px auto',
padding: '7px 5px',
background: 'white',
border:'1px solid #acabab',
});

const Option = styled('option')({
color:'gray',
padding:'4px 0px',
});
const Submitbtn = styled('div')({
padding: '4px 12px',
flexDirection: 'row-reverse', 
margin: '22px 0px',
display: 'flex',
});

const Button = styled('button')({
padding: '3px 2px',
margin: '0px 3px',
width: '33%',
color: 'black',
textDecoration: 'none',
});

const Link = styled('div')({
width:'18%',
padding: '3px 7px',
});

const Addnewproduct = () => {
  return (
    <div>
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
            <Submitbtn>
                <Button >Add Neew Product</Button>
                <Link><Button as="a" href="/">Cancle</Button></Link>
                
            </Submitbtn> 
        </Leftwrapper>
      </Wrapper>
    
    </div>
  )
}

export default Addnewproduct

