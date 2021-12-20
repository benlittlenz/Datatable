import { TableState, Action } from "./types";

export function tableReducer(state: TableState, action: Action): TableState {
  switch (action.type) {
    case "CHANGE_ROWS_PER_PAGE": {
      const { rowsPerPage, page } = action;

      return {
        ...state,
        currentPage: page,
        rowsPerPage,
      };
    }
  }
}
