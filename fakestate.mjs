const TRACE_ON_DISPATCHER_TRANSITION = false;

let reactInternals;

function inject(internals) {
    Object.defineProperty(internals.currentDispatcherRef, "current", {
        get() { return this._current; },
        set(value) { 
            if (TRACE_ON_DISPATCHER_TRANSITION) console.trace("Dispatcher changed");
            this._current = value;
        }
    });
    return reactInternals = internals;
}

if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    // react devtools already created the global, just MitM the inject call
    const originalInject = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject;
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = internals => originalInject(inject(internals));
}
else {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = { supportsFiber: true, checkDCE: true, inject };
}

/** reactInternals properties:
 *   bundleType
 *   version
 *   rendererPackageName
 *   rendererConfig
 *   overrideHookState
 *   overrideHookStateDeletePath
 *   overrideHookStateRenamePath
 *   overrideProps
 *   overridePropsDeletePath
 *   overridePropsRenamePath
 *   setErrorHandler
 *   setSuspenseHandler
 *   scheduleUpdate
 *   currentDispatcherRef
 *   findHostInstanceByFiber
 *   findFiberByHostInstance
 *   findHostInstancesForRefresh
 *   scheduleRefresh
 *   scheduleRoot
 *   setRefreshHandler
 *   getCurrentFiber
 *   reconcilerVersion
 *   getLaneLabelMap
 *   injectProfilingHooks
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

export function fakeState(state) {
    if (!reactInternals) throw 'Failed to receive react internals injection';

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

        // change of props object identity guarantees render won't be suppressed
        fiber.memoizedProps = { ...fiber.memoizedProps }; 
        reactInternals.scheduleUpdate(fiber);
    }
    
    return [state, setState];
}
