{
    const TRACE_ON_DISPATCHER_TRANSITION = false;

    const inject = internals => {
        Object.defineProperty(internals.currentDispatcherRef, "current", {
            get() { return this._current; },
            set(value) { 
                if (TRACE_ON_DISPATCHER_TRANSITION) {
                    console.trace("Dispatcher changed");
                }
                this._current = value;
            }
        });
        return window.reactInternals = internals;
    }

    if (__REACT_DEVTOOLS_GLOBAL_HOOK__) {
        // react devtools already created the global, just MitM the inject call
        const originalInject = __REACT_DEVTOOLS_GLOBAL_HOOK__.inject;
        __REACT_DEVTOOLS_GLOBAL_HOOK__.inject = internals => originalInject(inject(internals));
    }
    else {
        var __REACT_DEVTOOLS_GLOBAL_HOOK__ = { supportsFiber: true, checkDCE: true, inject };
    }
}

/* reactInternals properties:
    bundleType
    version
    rendererPackageName
    rendererConfig
    overrideHookState
    overrideHookStateDeletePath
    overrideHookStateRenamePath
    overrideProps
    overridePropsDeletePath
    overridePropsRenamePath
    setErrorHandler
    setSuspenseHandler
    scheduleUpdate
    currentDispatcherRef
    findHostInstanceByFiber
    findFiberByHostInstance
    findHostInstancesForRefresh
    scheduleRefresh
    scheduleRoot
    setRefreshHandler
    getCurrentFiber
    reconcilerVersion
    getLaneLabelMap
    injectProfilingHooks
*/

const fiberStateMap = new WeakMap;
// each fiber has two representations, and by the time i get them they're more or less interchangable.
// i need to arbitrarily pick on of the two to be the key for me weakmap holding state
// this function will pick one
function pickKey(fiber) {
    return fiber.alternate == null || fiberStateMap.has(fiber)
        ? fiber
        : fiber.alternate;
}
function fakeState(refresh, state) {
    const fiber = reactInternals.getCurrentFiber();
    const key = pickKey(fiber);
    if (fiberStateMap.has(key)) {
        state = fiberStateMap.get(key);
    }
    else {
        fiberStateMap.set(key, state);
    }
    function setState(newState) {
        if (typeof newState === 'function') {
            newState = newState(fiberStateMap.get(key));
        }
        fiberStateMap.set(key, newState);
        refresh();
    }
    return [state, setState];
}
