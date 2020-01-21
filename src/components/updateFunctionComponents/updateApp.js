import React, { useCallback } from 'react';

function UpdateApp() {
    const [, updateState] = React.useState();
    const forceUpdate = useCallback(() => updateState({}), []);
}

export default UpdateApp