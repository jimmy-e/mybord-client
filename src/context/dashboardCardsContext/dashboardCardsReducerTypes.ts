import { UserCard } from 'schema/card';

// ----- CONSTANTS ----- //

export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const RECEIVE_FILTERED_CARDS = 'RECEIVE_FILTERED_CARDS';
export const SET_CARDS = 'SET_CARDS';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

// ----- INTERFACES ----- //

interface AddCard {
  type: typeof ADD_CARD;
  card: UserCard;
}

interface DeleteCard {
  type: typeof DELETE_CARD;
  id: UserCard['id'];
}

interface ReceiveFilteredCards {
  type: typeof RECEIVE_FILTERED_CARDS;
  cards: UserCard[];
  filters: {
    isFavorite?: boolean;
    isToDo?: boolean;
  };
}

interface SetCards {
  type: typeof SET_CARDS;
  cards: UserCard[];
}

interface ToggleFilter {
  type: typeof TOGGLE_FILTER;
  filter: 'favorite' | 'toDo';
  id: UserCard['id'];
}

export type DashboardCardsDispatchTypes = AddCard
| DeleteCard
| ReceiveFilteredCards
| SetCards
| ToggleFilter;
