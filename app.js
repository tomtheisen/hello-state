const fibers = new Set;
function App() {
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = fakeState(0);

    const fiber = reactInternals.getCurrentFiber();
    fibers.add(fiber);
    console.log(fibers.size, "fibers seen");

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

ReactDOM.createRoot(root).render(React.createElement(App, {}));
