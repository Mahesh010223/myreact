{/* <div class="parent">
<div class="child2">
    <h1>h11 here</h1>
    <h2>h2 here</h2>
</div>
<div class="child2">
    <h1>h11 here</h1>
    <h2>h2 here</h2>
</div>
</div> */}


let parent = React.createElement("div",{di:"parent"}, [React.createElement("div",{di:"child1"},[React.createElement("h1",{},"hiii h1"),React.createElement("h1",{},"by h1")]),React.createElement("div",{di:"child2"},React.createElement("h2",{},"hiii h2"))])


let heading=React.createElement("h1",{id:"heading"},"hiiii")
console.log(heading)//object   >>> props: {id: 'heading', children: 'hiiii'}
let div=React.createElement("div",{},heading)
console.log(div)//object
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)