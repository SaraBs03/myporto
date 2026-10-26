import { useEffect, useId, useRef } from "react";
import mermaid from "mermaid";

const mobileFlow = String.raw`
flowchart TD
    Visitor(["Visitor"]) --> Home["Homepage"]
    Home --> Products["Products overview"]
    Products --> Select{"Select a product"}

    Select --> Sugar["Sugar"]
    Select --> PalmOil["Palm Oil"]
    Select --> Hydrocarbons["Refined Hydrocarbons"]
    Select --> Gold["Gold & Precious Metals"]

    Sugar -->|"Request a Quote"| SugarRFQ["Request a Quote page"]
    Sugar -->|Contact| SugarContact["Contact page"]

    PalmOil -->|"Request a Quote"| PalmRFQ["Request a Quote page"]
    PalmOil -->|Contact| PalmContact["Contact page"]

    Hydrocarbons -->|"Request a Quote"| HydroRFQ["Request a Quote page"]
    Hydrocarbons -->|Contact| HydroContact["Contact page"]

    Gold -->|"Discuss a Request"| GoldForm["Pre-qualification form"]
    Gold -->|Contact| GoldContact["Contact page"]

    %% Encourage products to appear in vertical order
    Sugar ~~~ PalmOil
    PalmOil ~~~ Hydrocarbons
    Hydrocarbons ~~~ Gold

    %% Encourage each product's actions to stack vertically
    SugarRFQ ~~~ SugarContact
    SugarContact ~~~ PalmRFQ
    PalmRFQ ~~~ PalmContact
    PalmContact ~~~ HydroRFQ
    HydroRFQ ~~~ HydroContact
    HydroContact ~~~ GoldForm
    GoldForm ~~~ GoldContact

    classDef startEnd fill:#190A07,color:#F3E6D4,stroke:#190A07,stroke-width:1.5px,font-size:15px;
    classDef page fill:#F3E6D4,color:#190A07,stroke:#C33E23,stroke-width:1px,font-size:15px;
    classDef decision fill:#E8D1B8,color:#190A07,stroke:#C33E23,stroke-width:1.5px,font-size:15px;
    classDef outcome fill:#C33E23,color:#FFFFFF,stroke:#190A07,stroke-width:1px,font-size:15px;

    class Visitor startEnd;
    class Home,Products,Sugar,PalmOil,Hydrocarbons,Gold page;
    class Select decision;
    class SugarRFQ,SugarContact,PalmRFQ,PalmContact,HydroRFQ,HydroContact,GoldForm,GoldContact outcome;

    linkStyle default stroke:#8E5A46,stroke-width:1.2px;
`;

const desktopRowOne = String.raw`
flowchart LR
    Visitor(["Visitor"]) --> Home["Homepage"]
    Home --> Products["Products overview"]

    classDef startEnd fill:#190A07,color:#F3E6D4,stroke:#190A07,stroke-width:2px;
    classDef page fill:#F3E6D4,color:#190A07,stroke:#C33E23,stroke-width:1.5px;

    class Visitor startEnd;
    class Home,Products page;

    linkStyle default stroke:#8E5A46,stroke-width:1.5px;
`;

// Desktop row two: every product owns its own pair of destination nodes
// (same labels as before), so the graph is a pure tree with no shared
// nodes. A tree can be laid out left-to-right with no edge crossings.
const desktopRowTwo = String.raw`
flowchart LR
    Select{"Select a product"}

    Select --> Sugar["Sugar"]
    Select --> PalmOil["Palm Oil"]
    Select --> Hydrocarbons["Refined Hydrocarbons"]
    Select --> Gold["Gold & Precious Metals"]

    Sugar -->|"Request a Quote"| RFQ1["Request a Quote page"]
    Sugar -->|Contact| Contact1["Contact page"]

    PalmOil -->|"Request a Quote"| RFQ2["Request a Quote page"]
    PalmOil -->|Contact| Contact2["Contact page"]

    Hydrocarbons -->|"Request a Quote"| RFQ3["Request a Quote page"]
    Hydrocarbons -->|Contact| Contact3["Contact page"]

    Gold -->|"Discuss a Request"| GoldForm["Pre-qualification form"]
    Gold -->|Contact| Contact4["Contact page"]

    classDef page fill:#F3E6D4,color:#190A07,stroke:#C33E23,stroke-width:1.5px;
    classDef decision fill:#E8D1B8,color:#190A07,stroke:#C33E23,stroke-width:2px;
    classDef outcome fill:#C33E23,color:#FFFFFF,stroke:#190A07,stroke-width:1.5px;

    class Sugar,PalmOil,Hydrocarbons,Gold page;
    class Select decision;
    class RFQ1,RFQ2,RFQ3,Contact1,Contact2,Contact3,Contact4,GoldForm outcome;

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

export default function ExploreProductFlow() {
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
          svgElement.style.width = "100%";
          svgElement.style.maxWidth = "100%";
          svgElement.style.margin = "0 auto";
        } else {
          // Desktop: responsive horizontal rows
          const viewBoxWidth = svgElement.viewBox.baseVal.width;

          svgElement.style.width = "100%";
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
          `explore-mobile-${uniqueId}`,
          mobileFlow
        ),
        renderDiagram(
          rowOneRef,
          `explore-row-one-${uniqueId}`,
          desktopRowOne
        ),
        renderDiagram(
          rowTwoRef,
          `explore-row-two-${uniqueId}`,
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
    <div className="w-full mt-[20px] sm:mt-[40px] lg:mt-[60px]">
      {/* Mobile: compact vertical flow */}
      <div className="w-full lg:hidden">
        <div ref={mobileRef} className="w-full" />
      </div>

      {/* Desktop: first horizontal row */}
      <div className="hidden w-full lg:block">
        <div ref={rowOneRef} className="w-full" />

        {/* Continue to the product choices below */}
        <div className="flex justify-end pr-[8%] py-1 text-xl text-[#8E5A46]">
          ↓
        </div>

        {/* Desktop: second horizontal row */}
        <div ref={rowTwoRef} className="w-full" />
      </div>

      
    </div>
  );
}