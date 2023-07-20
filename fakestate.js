/* internals properties:
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

if (!reactInternals) throw 'getinternals.js needs to be loaded before react';

const fiberStateMap = new WeakMap;
// each fiber has two representations, and by the time i get them they're more or less interchangable.
// i need to arbitrarily pick on of the two to be the key for me weakmap holding state
// this function will pick one
function pickKey(fiber) {
    return fiber.alternate == null || fiberStateMap.has(fiber)
        ? fiber
        : fiber.alternate;
}
function fakeState(state) {
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
        reactInternals.scheduleUpdate(fiber);
    }
    return [state, setState];
}
