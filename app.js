const fibers = new Set;
function App() {
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = fakeState(render, 0);

    const fiber = reactInternals.getCurrentFiber();
    fibers.add(fiber);
    console.log(fibers.size, "fibers seen");

    // inlined createElement, but don't need to
    const btn1 = {
        $$typeof: Symbol.for('react.element'), 
        type: "button", 
        ref: null, 
        props: { onClick: () => setCount1(c=>c+1), children: count1 },
    };
    const btn2 = {
        $$typeof: Symbol.for('react.element'), 
        type: "button", 
        ref: null, 
        props: { onClick: () => setCount2(c=>c+1), children: count2 },
    };
    return [btn1, btn2];
}

const root = ReactDOM.createRoot(rootdiv);
function render() {
    root.render(React.createElement(App, {}));
}
render();
