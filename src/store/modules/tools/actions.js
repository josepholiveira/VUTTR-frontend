export function searchToolsRequest(searchParams = '') {
  return {
    type: '@tools/SEARCH_REQUEST',
    loading: true,
    searchParams,
  };
}

export function searchToolsSuccess(resultTools) {
  return {
    type: '@tools/SEARCH_SUCCESS',
    resultTools,
  };
}

export function addToolRequest(tool) {
  return {
    type: '@tools/ADD_REQUEST',
    tool,
  };
}

export function addToolSuccess(tool) {
  return {
    type: '@tools/ADD_SUCCESS',
    tool,
  };
}

export function removeToolRequest(id) {
  return { type: '@tools/REMOVE_REQUEST', id };
}

export function removeToolSuccess(id) {
  return { type: '@tools/REMOVE_SUCCESS', id };
}
