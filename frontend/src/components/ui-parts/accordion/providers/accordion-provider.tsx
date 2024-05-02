"use client";
import { createContext, useContext } from "react";
import useAccordion from "../hooks/accordion-state";

const defaultAccordionContext: ReturnType<typeof useAccordion> = {
  accordionState: {
    accordions: [],
  },
  accordionDispatch: () => {},
};

const AccordionContext = createContext(defaultAccordionContext);

export default function AccordionProvider(props: {
  children: React.ReactNode;
}) {
  const { accordionState, accordionDispatch } = useAccordion();

  return (
    <AccordionContext.Provider value={{ accordionState, accordionDispatch }}>
      {props.children}
    </AccordionContext.Provider>
  );
}

export function useAccordionContext() {
  const { accordionState, accordionDispatch } = useContext(AccordionContext);
  return { accordionState, accordionDispatch };
}
