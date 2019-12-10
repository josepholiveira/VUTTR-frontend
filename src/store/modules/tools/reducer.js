import produce from 'immer';

export default function tools(state = [], action) {
  switch (action.type) {
    case '@tools/SEARCH_SUCCESS': {
      const { data } = action.resultTools;

      return data;
    }

    case '@tools/ADD_SUCCESS':
      return produce(state, draft => {
        const { tool } = action;

        draft.push(tool);

        return draft;
      });

    case '@tools/REMOVE_SUCCESS':
      return produce(state, draft => {
        const toolIndex = draft.findIndex(t => t.id === action.id);

        if (toolIndex >= 0) {
          draft.splice(toolIndex, 1);
        }
      });

    default:
      return state;
  }
}
