import { UserDashboardState } from './userDashboardState';
import reducerUtil from './userDashboardReducerUtil';
import {
  ADD_CARD,
  UserDashboardDispatchTypes,
  DELETE_CARD,
  RECEIVE_FILTERED_CARDS,
  SET_CARDS,
  SET_CARD_CATEGORIES_FILTER,
  TOGGLE_CARD_FILTER,
} from './userDashboardReducerTypes';

export const initialUserDashboardState: UserDashboardState = {
  allIds: [],
  byId: {},
  filters: {
    categories: [],
    hasFilters: false,
    isFavorite: false,
    isToDo: false,
  },
  isHydrated: false,
};

export const userDashboardReducer = (
  state: UserDashboardState,
  action: UserDashboardDispatchTypes,
): UserDashboardState => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        allIds: reducerUtil.addAllId(state.allIds, action.card.id),
        byId: reducerUtil.addById(state.byId, action.card),
      };
    case DELETE_CARD:
      return {
        ...state,
        allIds: reducerUtil.removeAllId(state.allIds, action.id),
        byId: reducerUtil.removeById(state.byId, action.id),
      };
    case RECEIVE_FILTERED_CARDS: {
      const { categories, isFavorite, isToDo } = action.filters;
      const hasFilters = (categories && categories.length > 0) || isFavorite || isToDo;
      return {
        ...state,
        allIds: reducerUtil.getAllIds(action.cards),
        byId: reducerUtil.getById(action.cards),
        isHydrated: true,
        filters: {
          categories,
          hasFilters,
          isFavorite: !!isFavorite,
          isToDo: !!isToDo,
        },
      };
    }
    case SET_CARDS:
      return {
        ...state,
        allIds: reducerUtil.getAllIds(action.cards),
        byId: reducerUtil.getById(action.cards),
        isHydrated: true,
      };
    case SET_CARD_CATEGORIES_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: [...action.categories],
        },
      };
    case TOGGLE_CARD_FILTER:
      return reducerUtil.toggleCardFilter(action.filter, action.id, state);
    default:
      return state;
  }
};
