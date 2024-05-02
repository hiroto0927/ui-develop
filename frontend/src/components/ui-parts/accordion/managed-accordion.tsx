"use client";
/* eslint-disable react-hooks/exhaustive-deps */

import Accordion, {
  TPropsAccordion,
} from "@/components/ui-elements/accordions/accordion";
import { useAccordionContext } from "./providers/accordion-provider";
import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

type TPropsManagedAccordion = Omit<
  TPropsAccordion,
  "isOpen" | "onClickTitle" | "className"
>;

export default function ManagedAccordion(props: TPropsManagedAccordion) {
  const { accordionState, accordionDispatch } = useAccordionContext();
  const accordionId = useRef(uuidv4().toString()).current;

  useEffect(() => {
    accordionDispatch({ type: "setAccordion", payload: { id: accordionId } });
  }, []);

  return (
    <Accordion
      isOpen={
        accordionState.accordions.find(
          (accordion) => accordion.id === accordionId
        )?.isOpen ?? false
      }
      onClickTitle={() => {
        if (
          accordionState.accordions.find(
            (accordion) => accordion.id === accordionId
          )?.isOpen
        )
          accordionDispatch({ type: "close" });
        else accordionDispatch({ type: "open", payload: { id: accordionId } });
      }}
      {...props}
    >
      {props.children}
    </Accordion>
  );
}
