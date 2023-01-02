const heading = React.createElement('h1',
{
    id:"title",
    // style:{
    //     background-color:"red"
    // }
},    
"Namaste Everyone!!"); 
const heading1 = React.createElement('h1',
{
    id:"heading1",
    // style:{
    //     background-color:"red"
    // }
},    
"Heading one"); 
const heading2 = React.createElement('h2',
{
    id:"heading2",
    // style:{
    //     background-color:"red"
    // }
},    
"Heading two"); 
//{} props where we give parameters to h1 tag like class id style, etc..
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); //passing a react element inside the root

const container = React.createElement('div',
{
    id:"container"
},
[heading1,heading2]);
root.render(container);