import { useEffect, useId, useRef } from "react";
import mermaid from "mermaid";

const mobileFlow = String.raw`
flowchart TD
    Entry(["Products · Compliance · Header"])
    Entry --> RFQ["Request a Quote"]
    RFQ --> Tip["Precise RFQs, faster quotes"]
    Tip --> Criteria["RFQ essentials"]

    Criteria --> Specs["Exact specifications"]
    Criteria --> Delivery["Volume + delivery window"]
    Criteria --> Origin["Origin / destination<br/>Port + Incoterm"]
    Criteria --> Packaging["Packaging + inspection"]
    Criteria --> Parties["Parties + roles"]
    Criteria --> Payment["Currency + payment"]

    %% Keep the criteria nodes ordered vertically
    Specs ~~~ Delivery
    Delivery ~~~ Origin
    Origin ~~~ Packaging
    Packaging ~~~ Parties
    Parties ~~~ Payment

    Payment --> Timeline["Process overview<br/>Review · clarify · validate<br/>Offer · contract · execute"]
    Timeline --> Form["Submit request form"]
    Form --> Submitted(["Submitted"])
    Submitted --> Next{"Next steps"}

    Next --> Notice["Confidentiality + conformity"]
    Next --> Contact["Contact Our Team"]
    Next --> Compliance["Compliance Contact"]

    %% Keep the final options vertically ordered
    Notice ~~~ Contact
    Contact ~~~ Compliance

    classDef startEnd fill:#190A07,color:#F3E6D4,stroke:#190A07,stroke-width:1.5px,font-size:17px;
    classDef page fill:#F3E6D4,color:#190A07,stroke:#C33E23,stroke-width:1px,font-size:17px;
    classDef decision fill:#E8D1B8,color:#190A07,stroke:#C33E23,stroke-width:1.5px,font-size:17px;
    classDef outcome fill:#C33E23,color:#FFFFFF,stroke:#190A07,stroke-width:1px,font-size:17px;

    class Entry,Submitted startEnd;
    class RFQ,Tip,Criteria,Specs,Delivery,Origin,Packaging,Parties,Payment,Timeline,Form,Notice page;
    class Next decision;
    class Contact,Compliance outcome;

    linkStyle default stroke:#8E5A46,stroke-width:1.2px;
`;

const desktopRowOne = String.raw`
flowchart LR
    Entry(["Products · Compliance · Header"])
    Entry --> RFQ["Request a Quote"]
    RFQ --> Tip["Precise RFQs, faster quotes"]
    Tip --> Criteria["RFQ essentials"]

    Criteria --> SpecsGroup
    Criteria --> TradeGroup

    subgraph SpecsGroup["Specifications & delivery"]
        direction TB
        Specs["Exact specifications"]
        Volume["Volume + delivery window"]
        Origin["Origin / destination<br/>Port + Incoterm"]

        Specs ~~~ Volume
        Volume ~~~ Origin
    end

    subgraph TradeGroup["Other RFQ requirements"]
        direction TB
        Packaging["Packaging + inspection"]
        Parties["Parties + roles"]
        Payment["Currency + payment"]

        Packaging ~~~ Parties
        Parties ~~~ Payment
    end

    classDef startEnd fill:#190A07,color:#F3E6D4,stroke:#190A07,stroke-width:2px,font-size:12px;
classDef page fill:#F3E6D4,color:#190A07,stroke:#C33E23,stroke-width:1.5px,font-size:12px;

    class Entry startEnd;
    class RFQ,Tip,Criteria,Specs,Volume,Origin,Packaging,Parties,Payment page;

    style SpecsGroup fill:transparent,stroke:transparent,color:#190A07;
style TradeGroup fill:transparent,stroke:transparent,color:#190A07;

    linkStyle default stroke:#8E5A46,stroke-width:1.5px;
`;

const desktopRowTwo = String.raw`
flowchart LR
    Timeline["Process overview"]

    Timeline --> Review["01 · Acknowledgement + review"]
    Review --> Clarify["02 · Clarifications"]
    Clarify --> Validate["03 · Feasibility validation"]
    Validate --> PartyCheck["04 · Party validation · KYB"]
    PartyCheck --> Offer["05 · Structured offer"]
    Offer --> Contract["06 · Contract + execution"]

    Timeline --> Form["Submit request form"]
    Form --> Submitted(["Submitted"])
    Submitted --> Next{"Next steps"}

    Next --> Notice["Confidentiality + conformity"]
    Next -->|"Contact Our Team"| Contact["Contact page"]
    Next -->|"Compliance Contact"| Compliance["Compliance page"]

   classDef startEnd fill:#190A07,color:#F3E6D4,stroke:#190A07,stroke-width:2px,font-size:15px;
classDef page fill:#F3E6D4,color:#190A07,stroke:#C33E23,stroke-width:1.5px,font-size:15px;
classDef decision fill:#E8D1B8,color:#190A07,stroke:#C33E23,stroke-width:2px,font-size:15px;
classDef outcome fill:#C33E23,color:#FFFFFF,stroke:#190A07,stroke-width:1.5px,font-size:15px;

    class Submitted startEnd;
    class Timeline,Review,Clarify,Validate,PartyCheck,Offer,Contract,Form,Notice page;
    class Next decision;
    class Contact,Compliance outcome;

    linkStyle default stroke:#8E5A46,stroke-width:1.5px;
`;

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "strict",
  theme: "base",
  flowchart: {
    nodeSpacing: 8,
    rankSpacing: 12,
    diagramPadding: 3,
  },
  themeVariables: {
    fontFamily: "Alegreya, serif",
    fontSize: "12px",
    lineColor: "#8E5A46",
    textColor: "#190A07",
    mainBkg: "#F3E6D4",
  },
});

export default function SubmitRequestFlow() {
  const mobileRef = useRef(null);
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);
  const uniqueId = useId().replace(/:/g, "");

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram(ref, id, definition) {
      try {
        const { svg } = await mermaid.render(id, definition);

        if (cancelled || !ref.current) return;

        ref.current.innerHTML = svg;

        const svgElement = ref.current.querySelector("svg");

        if (!svgElement) return;

        svgElement.style.display = "block";
        svgElement.style.height = "auto";

        if (ref === mobileRef) {
          // Mobile: compact vertical flow
          svgElement.style.width = "55%";
          svgElement.style.maxWidth = "100%";
          svgElement.style.margin = "0 auto";
        } else {
          // Desktop: each row can shrink responsively
          // while retaining its natural maximum size.
          const viewBoxWidth = svgElement.viewBox.baseVal.width;

          svgElement.style.width = "110%";
          svgElement.style.maxWidth = `${viewBoxWidth}px`;
          svgElement.style.margin = "0 auto";
        }
      } catch (error) {
        console.error(`Unable to render diagram ${id}:`, error);
      }
    }

    async function renderAll() {
      await Promise.all([
        renderDiagram(
          mobileRef,
          `submit-mobile-${uniqueId}`,
          mobileFlow
        ),
        renderDiagram(
          rowOneRef,
          `submit-row-one-${uniqueId}`,
          desktopRowOne
        ),
        renderDiagram(
          rowTwoRef,
          `submit-row-two-${uniqueId}`,
          desktopRowTwo
        ),
      ]);
    }

    renderAll();

    return () => {
      cancelled = true;
    };
  }, [uniqueId]);

  return (
     <div className="w-full mt-[40px] sm:mt-[60px] lg:mt-[80px]">
      {/* Mobile: unchanged vertical flow */}
      <div className="w-full lg:hidden">
        <div ref={mobileRef} className="w-full" />
      </div>

      {/* Desktop: first horizontal row */}
      <div className="hidden w-full lg:block">
        <div ref={rowOneRef} className="w-full" />

        {/* Continue from the right side into row two */}
        <div className="flex justify-end pr-[8%] py-1 text-xl text-[#8E5A46]">
          ↓
        </div>

        {/* Desktop: second row flows from right to left */}
        <div ref={rowTwoRef} className="w-full" />
      </div>
    </div>
  );
}