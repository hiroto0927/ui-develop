import ManagedAccordion from "@/components/ui-parts/accordion/managed-accordion";

export default function Home() {
  return (
    <main className="space-y-5 p-5">
      <ManagedAccordion renderTitle={"AAA"} color="secondary">
        <div className="p-5">
          <div className="">Content</div>
          <div className="">Content</div>
          <div className="">Content</div>
          <div className="">Content</div>
          <div className="">Content</div>
          <div className="">Content</div>
          <div className="">Content</div>
          <div className="">Content</div>
          <div className="">Content</div>
          <div className="">Content</div>
        </div>
      </ManagedAccordion>
      <ManagedAccordion renderTitle={"AAA"}>
        <div className="p-5">
          <div className="">Content</div>
          <div className="">Content</div>
          <div className="">Content</div>
          <div className="">Content</div>
          <div className="">Content</div>
        </div>
      </ManagedAccordion>
      <ManagedAccordion renderTitle={"AAA"}>
        <div className="p-5">
          <div className="">Content</div>
          <div className="">Content</div>
          <div className="">Content</div>
          <div className="">Content</div>
          <div className="">Content</div>
        </div>
      </ManagedAccordion>
    </main>
  );
}
