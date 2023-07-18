function areHookInputsEqual() {}
export function renderWithHooks() {
  renderWithHooksAgain();
  finishRenderingHooks();
}
function finishRenderingHooks() {
  checkIfWorkInProgressReceivedUpdate(); // from './ReactFiberBeginWork'
  checkIfContextChanged(); // from './ReactFiberNewContext'
  markWorkInProgressReceivedUpdate(); // from './ReactFiberBeginWork'
}
export function replaySuspendedComponentWithHooks() {
  renderWithHooksAgain();
  finishRenderingHooks();
}
function renderWithHooksAgain() {}
export function renderTransitionAwareHostComponentWithHooks() {
  renderWithHooks();
}
export function TransitionAwareHostComponent() {
  useThenable();
}
export function checkDidRenderIdHook() {}
export function bailoutHooks() {}
export function resetHooksAfterThrow() {}
export function resetHooksOnUnwind() {}
function mountWorkInProgressHook() {}
function updateWorkInProgressHook() {}
function createFunctionComponentUpdateQueue() {}
function useThenable() {
  createThenableState(); // from './ReactFiberThenable'
  trackUsedThenable(); // from './ReactFiberThenable'
}
function updateReducer() {
  updateWorkInProgressHook();
}
function updateReducerImpl() {
  removeLanes(); // from './ReactFiberLane'
  isSubsetOfLanes(); // from './ReactFiberLane'
  mergeLanes(); // from './ReactFiberLane'
  markSkippedUpdateLanes(); // from './ReactFiberLane'
  markWorkInProgressReceivedUpdate(); // from './ReactFiberBeginWork'
}
function rerenderReducer() {
  updateWorkInProgressHook();
  markWorkInProgressReceivedUpdate(); // from './ReactFiberBeginWork'
}
function mountStateImpl() {
  mountWorkInProgressHook();
}
function updateState() {
  updateReducer();
}
function rerenderState() {
  rerenderReducer();
}
function mountOptimistic() {
  mountWorkInProgressHook();
}
function updateOptimistic() {
  updateWorkInProgressHook();
  updateReducerImpl();
}
function rerenderOptimistic() {
  updateOptimistic();
  updateWorkInProgressHook();
}
function pushEffect() {}
function createEffectInstance() {}
function mountRef() {
  mountWorkInProgressHook();
}
function updateRef() {
  updateWorkInProgressHook();
}
function mountEffectImpl() {
  mountWorkInProgressHook();
  pushEffect();
}
function updateEffectImpl() {
  updateWorkInProgressHook();
  areHookInputsEqual();
  pushEffect();
}
function mountEffect() {
  mountEffectImpl();
}
function updateEffect() {
  updateEffectImpl();
}
function useEffectEventImpl() {
  createFunctionComponentUpdateQueue();
}
function mountEvent() {
  mountWorkInProgressHook();
}
function updateEvent() {
  updateWorkInProgressHook();
  useEffectEventImpl();
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
function mountDebugValue() {}
function mountCallback() {
  mountWorkInProgressHook();
}
function updateCallback() {
  updateWorkInProgressHook();
  areHookInputsEqual();
}
function mountMemo() {
  mountWorkInProgressHook();
}
function updateMemo() {
  updateWorkInProgressHook();
  areHookInputsEqual();
}
function mountDeferredValue() {
  mountWorkInProgressHook();
}
function updateDeferredValue() {
  updateWorkInProgressHook();
  updateDeferredValueImpl();
}
function rerenderDeferredValue() {
  updateWorkInProgressHook();
  updateDeferredValueImpl();
}
function updateDeferredValueImpl() {
  includesOnlyNonUrgentLanes(); // from './ReactFiberLane'
  claimNextTransitionLane(); // from './ReactFiberLane'
  mergeLanes(); // from './ReactFiberLane'
  markSkippedUpdateLanes(); // from './ReactFiberWorkLoop'
  markWorkInProgressReceivedUpdate(); // from './ReactFiberBeginWork'
}
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
export function startHostTransition() {
  startTransition();
}
function mountTransition() {
  mountStateImpl();
}
function updateTransition() {
  updateState();
  updateWorkInProgressHook();
  useThenable();
}
function rerenderTransition() {
  rerenderState();
  updateWorkInProgressHook();
  useThenable();
}
function useHostTransitionStatus() {
  readContext(); // from './ReactFiberNewContext'
}
function mountId() {
  mountWorkInProgressHook();
  getWorkInProgressRoot(); // from './ReactFiberWorkLoop'
  getIsHydrating() // from './ReactFiberHydrationContext'
  getTreeId(); // from './ReactFiberTreeContext'
}
function updateId() {
  updateWorkInProgressHook();
}
function mountRefresh() {
  mountWorkInProgressHook();
}
function updateRefresh() {
  updateWorkInProgressHook();
}
function dispatchSetState() {
  requestUpdateLane(); // from './ReactFiberWorkLoop'
  isRenderPhaseUpdate();
  enqueueRenderPhaseUpdate();
  enqueueConcurrentHookUpdateAndEagerlyBailout(); // from './ReactFiberConcurrentUpdates'
  enqueueConcurrentHookUpdate(); // from './ReactFiberConcurrentUpdates'
  scheduleUpdateOnFiber(); // from './ReactFiberWorkLoop'
  entangleTransitionUpdate();
  markUpdateInDevTools();
}
function dispatchOptimisticSetState() {
  requestTransitionLane(); // from './ReactFiberRootScheduler'
  isRenderPhaseUpdate();
  enqueueConcurrentHookUpdate(); // from './ReactFiberConcurrentUpdates'
  scheduleUpdateOnFiber(); // from './ReactFiberWorkLoop'
  markUpdateInDevTools();
}
function isRenderPhaseUpdate() {}
function enqueueRenderPhaseUpdate() {}
function entangleTransitionUpdate() {
  isTransitionLane(); // from './ReactFiberLane'
  intersectLanes(); // from './ReactFiberLane'
  mergeLanes(); // from './ReactFiberLane'
  markRootEntangled(); // from './ReactFiberLane'
}
function markUpdateInDevTools() {
  markStateUpdateScheduled(); // from './ReactFiberDevToolsHook'
}
