const parent=React.createElement("div",
{id:"div1"},[
React.createElement("div",
{id:"div2"},
[React.createElement("h1",
{id:"h1"},
"This is a h1 tag"),
React.createElement("h2",
{id:"h2"},
"This is a h2 tag")]),React.createElement("div",
{id:"div2"},
[React.createElement("h1",
{id:"h1"},
"This is a h1 tag"),
React.createElement("h2",
{id:"h2"},
"This is a h2 tag")])]);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);