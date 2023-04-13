import React, { Component } from 'react'
import { styled } from '@mui/system';
import { size } from 'lodash';


const MyComponent = styled('div')({
margin:0,
padding:'0px 33px',
  });

const Wrapper = styled('div')({
display:'flex',
});

const Brandimg = styled('div')({
height: '260px',
width: '44%',
border:'0px solid gray',
});
const Image = styled('img')({
height:'100%',
width:'100%',
});

const Discription = styled('div')({
margin:'0px 18px',
width:'100%',
});

const Heading = styled('div')({
size:"32px",
});

const Span = styled('div')({
size:'18px',
});

const Data = styled('div')({
display:'flex',
margin: '4px auto',
fontsize: '18px',
});

const Btnwrapper = styled('divg')({
display:'flex',
margin: '10px auto',
});

const TextButton = styled('div')({
margin:'0px 12px',
fontweight: 'bold',
cursor: 'pointer',
});

const Indec = styled('div')({
display:'flex',
});

const Spantext =styled('div')({
margin:'0px 5px',
});

const Downwrapper = styled('div')({
margin:'28px auto',
});

const Button = styled('btn')({
padding:'3px 6px',
cursor: 'pointer',
border: '1px solid',
background: '#e3e3e3',
});

const Checkout = styled('div')({
margin:'8px 0px',
});
export default class productdetails extends Component {
  render() {
    return (
      <div>
        <MyComponent>
                <Wrapper>
                    <Brandimg>
                        <Image src="https://tse4.mm.bing.net/th?id=OIP.BHG6E1OZinmb9yFXM6aXvwHaGL&pid=Api&P=0"/>
                    </Brandimg>
                    <Discription>
                        <div class="sc-hxaYUE liRqHl">
                            <Heading className="text-3xl">SS</Heading>
                            <Data>
                                <Span>Categories: </Span> A
                            </Data>
                            <Data>
                                <Span>Qty: </Span> 2
                            </Data>
                            <Data>
                                <Span>Price: </Span>  Rs. 2499.00
                            </Data>
                            <Data>
                                <Span>Action </Span>  Yes
                            </Data>
                         </div>
                        <Btnwrapper>
                            <Indec>
                                <Button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="2px" viewBox="0 0 12 1.5">
                                        <rect data-name="Rectangle 970" width="12px" height="2px" fill="currentColor"></rect>
                                    </svg>
                                </Button>
                                <Spantext>1</Spantext>
                                <Button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="2px" viewBox="0 0 12 1.5">
                                        <rect data-name="Rectangle 970" width="12px" height="2px" fill="currentColor"></rect>
                                    </svg>
                                </Button>
                            </Indec>
                            <TextButton type="button">Remove</TextButton>
                        </Btnwrapper>
                    </Discription>
                </Wrapper>
            <Downwrapper>
                <div class="sc-QRSkp jQMJHd">
                    <div class="sc-hUXBLa cwLITA">
                        <Span>Subtotal</Span>
                        <Span>Rs. 2499.00</Span>
                    </div>
                    <Checkout><Button>Checkout</Button></Checkout>
                    <Span>Safe and Secure Payments.Easy returns.100% Authentic products.</Span>
                </div>
            </Downwrapper>
        </MyComponent>
    </div>
    )
  }
}

