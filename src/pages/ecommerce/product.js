import React from 'react'
import { styled } from '@mui/system';
import { size } from 'lodash';
import Checkbox from 'themes/overrides/Checkbox';


const Wrapper = styled('div')({
padding:12,
margin:'12px 0px'
});

const Label = styled('label')({
width:'47%',
margin:'4px auto',
});

const Input = styled('input')({
width:'100%',
margin: '5px auto',
padding:'7px 6px',
});

const Innerwrapper = styled('div')({
display:'flex',

'@media(maxWidth: 522px)' : {
  display:'block',
}

});

const Innerbox = styled('div')({
width:'33%',
display: 'flex',
cursor: 'pointer',
}); 

const Checkboxctn = styled('div')({
width:'12%',
});

const Button = styled('button')({
  padding: '3px 2px',
  margin: '0px auto',
  width: '14%',
})

const Submitbtn = styled('div')({
  padding: '4px 12px',
  margin: '12px 0px',
});
const product = () => {
  return (
    <div>
      <Wrapper>
        <Innerwrapper className="md-block">
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
        </Innerwrapper>
        <Innerwrapper>
          <Label>
            Quantity
            <br/>
            <Input type="number" name="bonus" label="label"/>  
          </Label>
          <Label>
           Price
            <br/>
            <Input type='text' name='price' placeholder='enter your price'/>
          </Label>
        </Innerwrapper>
        <Innerwrapper>
          <Label>
            Phone No
            <br/>
            <Input type='text' name='phn no' placeholder='enter your phone no'/>
          </Label>
          <Label>
            Address
            <br/>
            <Input type='text' name='address' placeholder='enter your address'/>
          </Label>
        </Innerwrapper>
        <Innerwrapper>
          <Label>
            Date
            <br/>
            <Input type='date' name='date' placeholder='enter your phone no'/>
          </Label>
          <Label>
            Action
            <br/>
            <Input type='action' name='action'/>
          </Label>
        </Innerwrapper>
        <Innerbox className="mb-1.5" label="label">
        <Checkboxctn>
             <Input type="checkbox" id="vehicle1" name="yes" label="label"/> 
        </Checkboxctn>
        Are you sure
      </Innerbox>
     
     <Submitbtn><Button>Submit</Button></Submitbtn> 
      </Wrapper>
    
    </div>
  )
}

export default product
