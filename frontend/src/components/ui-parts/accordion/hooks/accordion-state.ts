import { produce } from "immer";
import { useReducer } from "react";

type State = {
  accordions: {
    id: string;
    isOpen: boolean;
  }[];
};

type Action =
  | {
      type: "open";
      payload: {
        id: string;
      };
    }
  | {
      type: "close";
    }
  | {
      type: "setAccordion";
      payload: {
        id: string;
      };
    };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "open":
      return produce(state, (draft) => {
        draft.accordions.forEach((accordion) => {
          if (accordion.id === action.payload.id) accordion.isOpen = true;
          else accordion.isOpen = false;
        });
      });
    case "close":
      return produce(state, (draft) => {
        draft.accordions.forEach((accordion) => (accordion.isOpen = false));
      });

    case "setAccordion":
      return produce(state, (draft) => {
        if (
          !draft.accordions.find(
            (accordion) => accordion.id === action.payload.id
          )
        )
          draft.accordions.push({ isOpen: false, id: action.payload.id });
      });
  }
};

const initialState: State = {
  accordions: [],
};

export default function useAccordion() {
  const [accordionState, accordionDispatch] = useReducer(reducer, initialState);
  return { accordionState, accordionDispatch };
}
