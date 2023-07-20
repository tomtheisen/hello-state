import { fakeState } from './fakestate.mjs'

// also faked createElement for bonus points, but don't need to
// jsx, createElement, or any normal react things will work here
function fakeElement(type, props = {}, ...children) {
    if (children.length) props.children = children;
    return { $$typeof: Symbol.for('react.element'), ref: null, type, props };
}

function App() {
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = fakeState(0);

    const br = fakeElement("br");
    const btn1 = fakeElement("button", { onClick: () => setCount1(c=>c+1) }, count1);
    const btn2 = fakeElement("button", { onClick: () => setCount2(c=>c+1) }, count2);

    // I think the key warning is issued only for certain component types.
    // This one is going to be "Indeterminate".
    return ["react state: ", btn1, br, "fake state: ", btn2, br];
}

const root = ReactDOM.createRoot(rootdiv);
root.render(fakeElement(App));
