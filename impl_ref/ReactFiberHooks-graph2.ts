export function renderTransitionAwareHostComponentWithHooks() {
  renderWithHooks();
}
export function renderWithHooks() {
  function renderWithHooksAgain() {}
  finishRenderingHooks();
}
export function replaySuspendedComponentWithHooks() {
  function renderWithHooksAgain() {}
  finishRenderingHooks();
}
function finishRenderingHooks() {
  checkIfWorkInProgressReceivedUpdate(); // from './ReactFiberBeginWork'
  checkIfContextChanged(); // from './ReactFiberNewContext'
  markWorkInProgressReceivedUpdate(); // from './ReactFiberBeginWork'
}
export function TransitionAwareHostComponent() {
  useThenable();
}
export function checkDidRenderIdHook() {}
export function bailoutHooks() {}
export function resetHooksAfterThrow() {}
export function resetHooksOnUnwind() {}
function mountOptimistic() {
  function mountWorkInProgressHook() {}
}
function updateOptimistic() {
  function updateWorkInProgressHook() {}
  function updateReducerImpl() {
    removeLanes(); // from './ReactFiberLane'
    isSubsetOfLanes(); // from './ReactFiberLane'
    mergeLanes(); // from './ReactFiberLane'
    markSkippedUpdateLanes(); // from './ReactFiberLane'
    markWorkInProgressReceivedUpdate(); // from './ReactFiberBeginWork'
  }
}
function rerenderOptimistic() {
  updateOptimistic();
  function updateWorkInProgressHook() {}
}
function createEffectInstance() {}
function mountRef() {
  function mountWorkInProgressHook() {}
}
function updateRef() {
  function updateWorkInProgressHook() {}
}
function mountEffect() {
  mountEffectImpl();
}
function mountEffectImpl() {
  function mountWorkInProgressHook() {}
  function pushEffect() {}
}
function updateEffect() {
  updateEffectImpl();
}
function mountEvent() {
  function mountWorkInProgressHook() {}
}
function updateEvent() {
  function updateWorkInProgressHook() {}
  function useEffectEventImpl() {
    function createFunctionComponentUpdateQueue() {}
  }
}
function mountInsertionEffect() {}
function updateInsertionEffect() {
  updateEffectImpl();
}
function mountLayoutEffect() {
  mountEffectImpl();
}
function updateLayoutEffect() {
  updateEffectImpl();
}
function imperativeHandleEffect() {}
function mountImperativeHandle() {
  mountEffectImpl();
}
function updateImperativeHandle() {
  updateEffectImpl();
}
function updateEffectImpl() {
  function updateWorkInProgressHook() {}
  function areHookInputsEqual() {}
  function pushEffect() {}
}
function mountDebugValue() {}
function mountCallback() {
  function mountWorkInProgressHook() {}
}
function updateCallback() {
  function updateWorkInProgressHook() {}
  function areHookInputsEqual() {}
}
function mountMemo() {
  function mountWorkInProgressHook() {}
}
function updateMemo() {
  function updateWorkInProgressHook() {}
  function areHookInputsEqual() {}
}
function mountDeferredValue() {
  function mountWorkInProgressHook() {}
}
function updateDeferredValue() {
  function updateWorkInProgressHook() {}
  updateDeferredValueImpl();
}
function rerenderDeferredValue() {
  function updateWorkInProgressHook() {}
  updateDeferredValueImpl();
}
function updateDeferredValueImpl() {
  includesOnlyNonUrgentLanes(); // from './ReactFiberLane'
  claimNextTransitionLane(); // from './ReactFiberLane'
  mergeLanes(); // from './ReactFiberLane'
  markSkippedUpdateLanes(); // from './ReactFiberWorkLoop'
  markWorkInProgressReceivedUpdate(); // from './ReactFiberBeginWork'
}
export function startHostTransition() {
  function startTransition() {
    getCurrentUpdatePriority(); // from './ReactEventPriorities'
    higherEventPriority();  // from './ReactEventPriorities'
    setCurrentUpdatePriority(); // from './ReactEventPriorities'
    dispatchOptimisticSetState();
    dispatchSetState();
    now(); // from './Scheduler';
    requestAsyncActionContext(); // from './ReactFiberAsyncAction'
    dispatchSetState();
    setCurrentUpdatePriority(); // from './ReactEventPriorities'
  }
}
function mountTransition() {
  function mountStateImpl() {
    function mountWorkInProgressHook() {}
  }  
}
function updateTransition() {
  function updateState() {
    function updateReducer() {
      function updateWorkInProgressHook() {}
    }
  }
  function updateWorkInProgressHook() {}
  useThenable();
}
function rerenderTransition() {
  function rerenderState() {
    function rerenderReducer() {
      function updateWorkInProgressHook() {}
      markWorkInProgressReceivedUpdate(); // from './ReactFiberBeginWork'
    }
  }
  function updateWorkInProgressHook() {}
  useThenable();
}
function useThenable() {
  createThenableState(); // from './ReactFiberThenable'
  trackUsedThenable(); // from './ReactFiberThenable'
}
function useHostTransitionStatus() {
  readContext(); // from './ReactFiberNewContext'
}
function mountId() {
  function mountWorkInProgressHook() {}
  getWorkInProgressRoot(); // from './ReactFiberWorkLoop'
  getIsHydrating() // from './ReactFiberHydrationContext'
  getTreeId(); // from './ReactFiberTreeContext'
}
function updateId() {
  function updateWorkInProgressHook() {}
}
function mountRefresh() {
  function mountWorkInProgressHook() {}
}
function updateRefresh() {
  function updateWorkInProgressHook() {}
}

function dispatchSetState() {
  requestUpdateLane(); // from './ReactFiberWorkLoop'
  function isRenderPhaseUpdate() {}
  function enqueueRenderPhaseUpdate() {}
  enqueueConcurrentHookUpdateAndEagerlyBailout(); // from './ReactFiberConcurrentUpdates'
  enqueueConcurrentHookUpdate(); // from './ReactFiberConcurrentUpdates'
  scheduleUpdateOnFiber(); // from './ReactFiberWorkLoop'
  function entangleTransitionUpdate() {
    isTransitionLane(); // from './ReactFiberLane'
    intersectLanes(); // from './ReactFiberLane'
    mergeLanes(); // from './ReactFiberLane'
    markRootEntangled(); // from './ReactFiberLane'
  }
  markUpdateInDevTools();
}
function dispatchOptimisticSetState() {
  requestTransitionLane(); // from './ReactFiberRootScheduler'
  function isRenderPhaseUpdate() {}
  enqueueConcurrentHookUpdate(); // from './ReactFiberConcurrentUpdates'
  scheduleUpdateOnFiber(); // from './ReactFiberWorkLoop'
  markUpdateInDevTools();
}

function markUpdateInDevTools() {
  markStateUpdateScheduled(); // from './ReactFiberDevToolsHook'
}
