import F_Accordion from "@/components/features/accordion-sample/accordion-sample";
import ManagedAccordion from "@/components/ui-parts/accordion/managed-accordion";

export default function Home() {
  return (
    <main className="space-y-5 p-5">
      <F_Accordion
        content="Content"
        createdAt="createdAt"
        serialCode="12345"
        serialNo="12345"
        title="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        userId="userId"
      />
      <F_Accordion
        content="Content"
        createdAt="createdAt"
        serialCode="12345"
        serialNo="12345"
        title="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        userId="userId"
      />
      <F_Accordion
        content="Content"
        createdAt="createdAt"
        serialCode="12345"
        serialNo="12345"
        title="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        userId="userId"
      />
    </main>
  );
}
