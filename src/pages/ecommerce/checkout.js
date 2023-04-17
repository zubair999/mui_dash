import React from 'react'
import { styled } from '@mui/system';
import { constant } from 'lodash';


const Container = styled('div')({
marginTop:"22px auto",
padding:'0px',

});

const Title = styled('div')({
fontSize:'20px',
padding:'18px 0px',
});

const Topbar = styled('div')({
display:"flex",
width:'100%',
borderRadius:'4px',
background: 'white',
border:'1px solid #d5d3d3',
});

const Pymtprocess = styled('div')({
display:"flex",
padding: '14px 12px',
margin: 'auto 0px',
width:'33%',
});
const Text = styled('div')({
color: '#939191',
fontSize:'16px',
});

const Bottombar = styled('div')({
padding: '32px 0px',
width:'100%',
display:'flex',
background: 'white',
margin: '30px auto',
textAlign: 'center',
justifyContent: 'space-around',
});

const Righticon = styled('div')({
width:'25px',
height:'12px',
marginRight: '10px',
});

const Cartimg = styled('div')({
paddingLeft: '36px',
width:'40%',
});
const Image = styled('img')({
width:'100%',
});

const Textarea = styled('div')({
width:'60%',
margin:'auto 0px',
});

const Heading = styled('div')({
fontSize:'38px',
paddingBottom:'8px',
});

const Btntag = styled('div')({
width:'40%',
margin: '22px auto',
});
const Button = styled('button')({
display:'block',
width:'100%',
color:'black',
padding: '8px 6px',
textAlign: 'center',
borderRadius: '4px',
textDecoration: 'none',
border: '1px solid #d7d1d1',

});
const checkout = () => {
  return (
    <div>
        <Container>
          <Title>Checkout</Title>
          <Topbar>
            <Pymtprocess>
                <Righticon>
                    <Image src="https://img.icons8.com/ios/50/null/ok.png" alt="icon"/>
                </Righticon>
                <Text>Cart</Text>
            </Pymtprocess>
            <Pymtprocess>
               <Righticon>
                    <Image src="https://img.icons8.com/ios/50/null/ok.png" alt="icon"/>
                </Righticon>
                <Text>Shipping Information</Text>
            </Pymtprocess>
            <Pymtprocess>
               <Righticon>
                    <Image src="https://img.icons8.com/ios/50/null/ok.png" alt="icon"/>
                </Righticon>
               <Text>Payment</Text>
            </Pymtprocess>
          </Topbar>
          
          <Bottombar>
             <Cartimg>
                <Image src="data:image/jpeg;base64,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QJ+yGGf5TnOxNdpBQwtPXUY9x4ZzkcOIbjkesJn6jPqzHpfTOX7W7fPt4Tdl6OqjevZg+4pAUheJPb39mPvTqHRvUtbpanfmVI/VYqD8QBOPbERtXcSBlE5HwGOPvJ3se6dO0GrdEVAMKoAAHYBykuDj9OffzVfX9T97kvbxG1RKZNYxmddSZcwrKJXi8wbzAsIlW2qIke3XMOUCn6Z6wC6qp1BR1bmPrNwH8OPvTnt+yUVmTfzukjICkH5Td+kKNqk3WAJXO6T48x7uA+U0PZOsrru8nfkKp5dpH1hx5nIbv5iZefi9XvHrfTer+33xfHn+/wCG4f8ADyvT0XMC2bbBhCVAG6OLKCO08D92dJnDU1Svr6/NySFdcY7DvJjPAY4hjjAwO6dnq1WZbwztiRk67d3zXXwmxMSWZmQS1kexEQEREBERAREQEREBERA+GXMjW6cmTIga9rdmu4I5gjBB4gg9hmk6z/h0zvvLugdxXex7jn986vEDSdj9Gm0ybgHvOOJPjLyrZrDnLqIFauiIn2ulMnxAhDTmDpjJsQK9tITMTaAmWsQNev2W55TVtt9Bm1Lb43QTzyuQfHGec6VEDnewOhbaRt7gW7CBjd78D+c27T6N15y2iBgSvEzCexAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z" alt="cart"/>
             </Cartimg>
             <Textarea>
                <Heading>Add Items To Your Cart</Heading>
                <Text>Explore around to add items in your shopping bag.</Text>
                <Btntag>
                    <Button as="a" href="/">Explore Your Bag </Button>
                </Btntag>
             </Textarea>
          </Bottombar>

        </Container>
    </div>
  )
}

export default checkout
