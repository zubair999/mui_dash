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
borderBottom: '1px solid #e1dddd',

});

const Wrapper = styled('div')({
background:"white",
padding:'18px 22px',
});

const Inputsection = styled('div')({
display:'grid',
gridGap: '1rem',
padding: '14px 0px',
gridTemplateColumns:'repeat(2, 1fr)',

});

const Label = styled('label')({
width:'100%',
margin:'4px auto',
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
    
const Input = styled('input')({
width:'100%',
color:'#272323',
fontSize:'15px',
margin: '7px auto',
padding:'10px 12px',
borderRadius: '4px',
border:'1px solid #d7d3d3',
});

const StyledTextarea = styled('textarea')({
width:'100%',
color:'#272323',
margin: '7px auto',
fontSize:'15px',
borderRadius: '4px',
padding:'10px 12px',
border:'1px solid #d7d3d3',
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
width: '40%',
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
const User = () => {
  return (
    <div>
      <Container>
 
        <Wrapper>
            <Heading>Personal Information</Heading>
            <Inputsection>
                <Label>
                First Name 
                <br/>
                <Input type='text' name='firstname' placeholder='enter your first-name'/>
                </Label>
                <Label>
                Last Name
                <br/>
                <Input type='text' name='lastname' placeholder='enter your last-name'/>
                </Label>
                <Label>
                Email
                <br/>
                <Input type='text' name='email' placeholder='enter your email'/>
                </Label>
                <Label>Date
                <br/>
                <Input type="date" name="date"/>
                </Label>
                <Label>
                Phone No
                <br/>
                <Input type='number' name='phn no'/>
                </Label>
                <Label>
                Designation
                <br/>
                <Input type='text' name='designation' placeholder="Full Stack Developer"/>
                </Label>
            </Inputsection>
             <Heading>Address</Heading>
            <Inputsection>
                <Label>
                 Address 01
                <br/>
                <StyledTextarea type="text" name='address' placeholder="Subsh market 01, flat-22, On road Mx ppl-0.5"/>
                </Label>
                <Label>
                 Address 02
                <br/>
                <StyledTextarea type="text"  name='address' placeholder="Bagumpul Road, 6th Floar, Frount of KKR Farms, Flat NO-22, 0.444cc"/>
                </Label>
                <Label for="price">Country
                <br/>
                <Select name="country" id="country">
                    <Option value="india">India</Option>
                    <Option value="america">America</Option>
                    <Option value="algeria">Algeria</Option>
                    <Option value="south africa">South Africa</Option>
                    <Option value="brazil">Brazil</Option>
               </Select>
               </Label>
               <Label for="">State
                <br/>
                <Select name="state" id="state">
                    <Option value="up">UP</Option>
                    <Option value="uk">Uk</Option>
                    <Option value="bihar">Bihar</Option>
                    <Option value="chhattisgarh">Chhattisgarh</Option>
                    <Option value="gujarat">Gujarat</Option>
               </Select>
               </Label>
            </Inputsection>
            <Label>Skill
                <Input type="text" name="skill"/>
            </Label>
            <Label>Note
                <StyledTextarea type="text" name="note" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged &  Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"/>
            </Label>
            <Subwrap>
                <Submitbtn>
                    <Button >Save</Button>
                    <Button as="a" href="/">Cancle</Button>
                </Submitbtn> 
              </Subwrap>
        </Wrapper>

      </Container>
    
    </div>
  )
}

export default User

