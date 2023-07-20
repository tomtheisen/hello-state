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
