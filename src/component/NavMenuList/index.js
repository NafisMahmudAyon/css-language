const NavMenuList = {
	a: {
		selectors: [
			{
				label: "After",
				value: "::after",
				link: "/selectors/after",
			},
			{
				label: "Active",
				value: ":active",
				link: "/selectors/active",
			},
			{
				label: "Anu Link",
				value: ":any-link",
				link: "/selectors/any-link",
			},
			{
				label: "Adjacent sibling",
				value: "selector + selector",
				link: "/selectors/adjacent-sibling",
			},
			{
				label: "Attribute",
				value: "[attribute]",
				link: "/selectors/attribute",
			},
		],
		properties: [
			{
				label: "Accent Color",
				value: "accent-color",
				link: "/properties/accent-color",
				demo: [".element {", "  accent-color: #f8a100;", "}"],
				details: {
					title: "accent-color",
					definition: {
						label: "Definition",
						value:
							"The <code>accent-color</code> property in CSS is capable of re-tinting the accented color of form controls provided by the browser’s default styles with a custom color value.",
					},
					syntax: { label: "Syntax", value: `accent-color: auto | <color>;` },
					formalDefinition: {
						label: "Formal Definition",
						value: {
							initialValue: {
								label: "Initial Value",
								value: "auto",
							},
							appliesTo: {
								label: "Applies to",
								value: "all elements",
							},
							inherited: {
								label: "Inherited",
								value: "yes",
							},
							computedValue: {
								label: "Computed value",
								value:
									"<code>auto</code> is computed as specified and <color> values are computed as defined for the color property",
							},
							animationType: {
								label: "Animation type",
								value: "by computed value type",
							},
						},
					},
					syntaxes: {
						label: "Values",
						value: `/* Keyword values */
accent-color: auto;

/* <color> values */
accent-color: darkred;
accent-color: #5729e9;
accent-color: rgb(0 200 0);
accent-color: hsl(228 4% 24%);

/* Global values */
accent-color: inherit;
accent-color: initial;
accent-color: revert;
accent-color: revert-layer;
accent-color: unset;`,
					},
				},
			},
			{
				label: "Align Content",
				value: "align-content",
				link: "/properties/align-content",
				details: {
					title: "align-content",
					definition: {
						label: "Definition",
						value:
							"The CSS <code>align-content</code> property sets the distribution of space between and around content items along a <a href='/properties/flex'>flexbox</a>'s cross-axis or a <a href='/properties/grid'>grid</a>'s block axis.",
					},
					syntax: {
						label: "Syntax",
						value: `align-content: flex-start | flex-end | center | space-between | space-around | stretch

.flex-container {
  align-content: space-around;
}`,
					},
					formalDefinition: {
						label: "Formal Definition",
						value: {
							initialValue: {
								label: "Initial Value",
								value: "normal",
							},
							appliesTo: {
								label: "Applies to",
								value: "multi-line flex containers",
							},
							inherited: {
								label: "Inherited",
								value: "no",
							},
							computedValue: {
								label: "Computed value",
								value: "as specified",
							},
							animationType: {
								label: "Animation type",
								value: "discrete",
							},
						},
					},
					syntaxes: {
						label: "Values",
						value: `align-content = 
  normal                                   |
  <baseline-position>                      |
  <content-distribution>                   |
  <overflow-position>? <content-position>  

<baseline-position> = 
  [ first | last ]?  &&
  baseline           

<content-distribution> = 
  space-between  |
  space-around   |
  space-evenly   |
  stretch        

<overflow-position> = 
  unsafe  |
  safe    

<content-position> = 
  center      |
  start       |
  end         |
  flex-start  |
  flex-end    
`,
					},
				},
			},
			{
				label: "Align Items",
				value: "align-items",
				link: "/properties/align-items",
			},
			{
				label: "Align Self",
				value: "align-self",
				link: "/properties/align-self",
			},
			{
				label: "All",
				value: "all",
				link: "/properties/all",
			},
			{
				label: "Animation",
				value: "animation",
				link: "/properties/animation",
			},
			{
				label: "Appearance",
				value: "appearance",
				link: "/properties/appearance",
			},
			{
				label: "Aspect Ratio",
				value: "aspect-ratio",
				link: "/properties/aspect-ratio",
			},
		],
	},
	b: {
		selectors: [
			{
				label: "Backdrop",
				value: "::backdrop",
				link: "/selectors/backdrop",
			},
			{
				label: "Blank",
				value: ":blank",
				link: "/selectors/blank",
			},
		],
		properties: [
			{
				label: "Backdrop Filter",
				value: "backdrop-filter",
				link: "/properties/backdrop-filter",
			},
			{
				label: "Backface Visibility",
				value: "backface-visibility",
				link: "/properties/backface-visibility",
			},
			{
				label: "Background",
				value: "background",
				link: "/properties/background",
			},
			{
				label: "Background Attachment",
				value: "background-attachment",
				link: "/properties/background-attachment",
			},
			{
				label: "Background Blend Mode",
				value: "background-blend-mode",
				link: "/properties/background-blend-mode",
			},
			{
				label: "Background Clip",
				value: "background-clip",
				link: "/properties/background-clip",
			},
			{
				label: "Background Color",
				value: "background-color",
				link: "/properties/background-color",
			},
			{
				label: "Background Image",
				value: "background-image",
				link: "/properties/background-image",
			},
			{
				label: "Background Origin",
				value: "background-origin",
				link: "/properties/background-origin",
			},
			{
				label: "Background Position",
				value: "background-position",
				link: "/properties/background-position",
			},
			{
				label: "Background Repeat",
				value: "background-repeat",
				link: "/properties/background-repeat",
			},
			{
				label: "Background Size",
				value: "background-size",
				link: "/properties/background-size",
			},
			{
				label: "Bleed",
				value: "bleed",
				link: "/properties/bleed",
			},
			{
				label: "Block Overflow",
				value: "block-overflow",
				link: "/properties/block-overflow",
			},
			{
				label: "Block Size",
				value: "block-size",
				link: "/properties/block-size",
			},
			{
				label: "Border",
				value: "border",
				link: "/properties/border",
			},
			{
				label: "Border Block",
				value: "border-block",
				link: "/properties/border-block",
			},
			{
				label: "Border Boundary",
				value: "border-boundary",
				link: "/properties/border-boundary",
			},
			{
				label: "Border Collapse",
				value: "border-collapse",
				link: "/properties/border-collapse",
			},
			{
				label: "Border Image",
				value: "border-image",
				link: "/properties/border-image",
			},
			{
				label: "Border Image Outset",
				value: "border-image-outset",
				link: "/properties/border-image-outset",
			},
			{
				label: "Border Image Repeat",
				value: "border-image-repeat",
				link: "/properties/border-image-repeat",
			},
			{
				label: "Border Image Slice",
				value: "border-image-slice",
				link: "/properties/border-image-slice",
			},
			{
				label: "Border Image Source",
				value: "border-image-source",
				link: "/properties/border-image-source",
			},
			{
				label: "Border Image Width",
				value: "border-image-width",
				link: "/properties/border-image-width",
			},
			{
				label: "Border Inline",
				value: "border-inline",
				link: "/properties/border-inline",
			},
			{
				label: "Border Radius",
				value: "border-radius",
				link: "/properties/border-radius",
			},
			{
				label: "Border Spacing",
				value: "border-spacing",
				link: "/properties/border-spacing",
			},
			{
				label: "Bottom",
				value: "bottom",
				link: "/properties/bottom",
			},
			{
				label: "Box Decoration Break",
				value: "box-decoration-break",
				link: "/properties/box-decoration-break",
			},
			{
				label: "Box Shadow",
				value: "box-shadow",
				link: "/properties/box-shadow",
			},
			{
				label: "Box Sizing",
				value: "box-sizing",
				link: "/properties/box-sizing",
			},
			{
				label: "Break After",
				value: "break-after",
				link: "/properties/break-after",
			},
			{
				label: "Break Before",
				value: "break-before",
				link: "/properties/break-before",
			},
			{
				label: "Break Inside",
				value: "break-inside",
				link: "/properties/break-inside",
			},
		],
	},
	c: {
		selectors: [
			{
				label: "Checked",
				value: ":checked",
				link: "/selectors/checked",
			},
			{
				label: "Current",
				value: ":current",
				link: "/selectors/current",
			},
			{
				label: "Child",
				value: ">",
				link: "/selectors/child",
			},
			{
				label: "Class",
				value: ".className",
				link: "/selectors/class",
			},
		],
		properties: [
			{
				label: "Caption Side",
				value: "caption-side",
				link: "/properties/caption-side",
			},
			{
				label: "Caret",
				value: "caret",
				link: "/properties/caret",
			},
			{
				label: "Caret Color",
				value: "caret-color",
				link: "/properties/caret-color",
			},
			{
				label: "Caret Shape",
				value: "caret-shape",
				link: "/properties/caret-shape",
			},
			{
				label: "Clear",
				value: "clear",
				link: "/properties/clear",
			},
			{
				label: "Clip Path",
				value: "clip-path",
				link: "/properties/clip-path",
			},
			{
				label: "Color",
				value: "color",
				link: "/properties/color",
			},
			{
				label: "Color Scheme",
				value: "color-scheme",
				link: "/properties/color-scheme",
			},
			{
				label: "Column Count",
				value: "column-count",
				link: "/properties/column-count",
			},
			{
				label: "Column Fill",
				value: "column-fill",
				link: "/properties/column-fill",
			},
			{
				label: "Column Gap",
				value: "column-gap",
				link: "/properties/column-gap",
			},
			{
				label: "Column Rule",
				value: "column-rule",
				link: "/properties/column-rule",
			},
			{
				label: "Column Rule Color",
				value: "column-rule-color",
				link: "/properties/column-rule-color",
			},
			{
				label: "Column Rule Style",
				value: "column-rule-style",
				link: "/properties/column-rule-style",
			},
			{
				label: "Column Rule Width",
				value: "column-rule-width",
				link: "/properties/column-rule-width",
			},
			{
				label: "Column Span",
				value: "column-span",
				link: "/properties/column-span",
			},
			{
				label: "Column Width",
				value: "column-width",
				link: "/properties/column-width",
			},
			{
				label: "Columns",
				value: "columns",
				link: "/properties/columns",
			},
			{
				label: "Contain",
				value: "contain",
				link: "/properties/contain",
			},
			{
				label: "Content",
				value: "content",
				link: "/properties/content",
			},
			{
				label: "Content Visibility",
				value: "content-visibility",
				link: "/properties/content-visibility",
			},
			{
				label: "Counter Increment",
				value: "counter-increment",
				link: "/properties/counter-increment",
			},
			{
				label: "Counter Reset",
				value: "counter-reset",
				link: "/properties/counter-reset",
			},
			{
				label: "Counter Set",
				value: "counter-set",
				link: "/properties/counter-set",
			},
			{
				label: "Cursor",
				value: "cursor",
				link: "/properties/cursor",
			},
		],
	},
	d: {
		selectors: [
			{
				label: "Default",
				value: ":default",
				link: "/selectors/default",
			},
			{
				label: "Dir",
				value: ":dir()",
				link: "/selectors/dir",
			},
			{
				label: "Disabled",
				value: ":disabled",
				link: "/selectors/disabled",
			},
			{
				label: "Descendant",
				value: "ancestor descendant",
				link: "/selectors/descendant",
			},
		],
		properties: [
			{
				label: "Direction",
				value: "direction",
				link: "/properties/direction",
			},
			{
				label: "Display",
				value: "display",
				link: "/properties/display",
			},
		],
	},
	e: {
		selectors: [
			{
				label: "Empty",
				value: ":empty",
				link: "/selectors/empty",
			},
			{
				label: "Enabled",
				value: ":enabled",
				link: "/selectors/enabled",
			},
		],
		properties: [
			{
				label: "Empty Cells",
				value: "empty-cells",
				link: "/properties/empty-cells",
			},
		],
	},
	f: {
		selectors: [
			{
				label: "File Selector Button",
				value: "::file-selector-button",
				link: "/selectors/file-selector-button",
			},
			{
				label: "First Letter",
				value: "::first-letter",
				link: "/selectors/first-letter",
			},
			{
				label: "First Line",
				value: "::first-line",
				link: "/selectors/first-line",
			},
			{
				label: "First",
				value: ":first",
				link: "/selectors/first",
			},
			{
				label: "First Child",
				value: ":first-child",
				link: "/selectors/first-child",
			},
			{
				label: "First of Type",
				value: ":first-of-type",
				link: "/selectors/first-of-type",
			},
			{
				label: "Focus",
				value: ":focus",
				link: "/selectors/focus",
			},
			{
				label: "Focus Visible",
				value: ":focus-visible",
				link: "/selectors/focus-visible",
			},
			{
				label: "Focus Within",
				value: ":focus-within",
				link: "/selectors/focus-within",
			},
			{
				label: "Fullscreen",
				value: ":fullscreen",
				link: "/selectors/fullscreen",
			},
			{
				label: "Future",
				value: ":future",
				link: "/selectors/future",
			},
		],
		properties: [
			{
				label: "Fill",
				value: "fill",
				link: "/properties/fill",
			},
			{
				label: "Filter",
				value: "filter",
				link: "/properties/filter",
			},
			{
				label: "Flex",
				value: "flex",
				link: "/properties/flex",
			},
			{
				label: "Flex Basis",
				value: "flex-basis",
				link: "/properties/flex-basis",
			},
			{
				label: "Flex Direction",
				value: "flex-direction",
				link: "/properties/flex-direction",
			},
			{
				label: "Flex Flow",
				value: "flex-flow",
				link: "/properties/flex-flow",
			},
			{
				label: "Flex Grow",
				value: "flex-grow",
				link: "/properties/flex-grow",
			},
			{
				label: "Flex Shrink",
				value: "flex-shrink",
				link: "/properties/flex-shrink",
			},
			{
				label: "Flex Wrap",
				value: "flex-wrap",
				link: "/properties/flex-wrap",
			},
			{
				label: "Float",
				value: "float",
				link: "/properties/float",
			},
			{
				label: "Font",
				value: "font",
				link: "/properties/font",
			},
			{
				label: "Font Display",
				value: "font-display",
				link: "/properties/font-display",
			},
			{
				label: "Font Family",
				value: "font-family",
				link: "/properties/font-family",
			},
			{
				label: "Font Feature Settings",
				value: "font-feature-settings",
				link: "/properties/font-feature-settings",
			},
			{
				label: "Font Kerning",
				value: "font-kerning",
				link: "/properties/font-kerning",
			},
			{
				label: "Font Optical Sizing",
				value: "font-optical-sizing",
				link: "/properties/font-optical-sizing",
			},
			{
				label: "Font Size",
				value: "font-size",
				link: "/properties/font-size",
			},
			{
				label: "Font Size Adjust",
				value: "font-size-adjust",
				link: "/properties/font-size-adjust",
			},
			{
				label: "Font Stretch",
				value: "font-stretch",
				link: "/properties/font-stretch",
			},
			{
				label: "Font Style",
				value: "font-style",
				link: "/properties/font-style",
			},
			{
				label: "Font Synthesis",
				value: "font-synthesis",
				link: "/properties/font-synthesis",
			},
			{
				label: "Font Variant",
				value: "font-variant",
				link: "/properties/font-variant",
			},
			{
				label: "Font Variant Numeric",
				value: "font-variant-numeric",
				link: "/properties/font-variant-numeric",
			},
			{
				label: "Font Weight",
				value: "font-weight",
				link: "/properties/font-weight",
			},
		],
	},
	g: {
		selectors: [
			{
				label: "General Sibling",
				value: "selector ~ selector",
				link: "/selectors/general-sibling",
			},
		],
		properties: [
			{
				label: "Gap",
				value: "gap",
				link: "/properties/gap",
			},
			{
				label: "Grid",
				value: "grid",
				link: "/properties/grid",
			},
			{
				label: "Grid Area",
				value: "grid-area",
				link: "/properties/grid-area",
			},
			{
				label: "Grid Auto Columns",
				value: "grid-auto-columns",
				link: "/properties/grid-auto-columns",
			},
			{
				label: "Grid Auto Flow",
				value: "grid-auto-flow",
				link: "/properties/grid-auto-flow",
			},
			{
				label: "Grid Auto Rows",
				value: "grid-auto-rows",
				link: "/properties/grid-auto-rows",
			},
			{
				label: "Grid Column",
				value: "grid-column",
				link: "/properties/grid-column",
			},
			{
				label: "Grid Column End",
				value: "grid-column-end",
				link: "/properties/grid-column-end",
			},
			{
				label: "Grid Column Start",
				value: "grid-column-start",
				link: "/properties/grid-column-start",
			},
			{
				label: "Grid Row",
				value: "grid-row",
				link: "/properties/grid-row",
			},
			{
				label: "Grid Row / Grid Column",
				value: "grid-row / grid-column",
				link: "/properties/grid-row-column",
			},
			{
				label: "Grid Row End",
				value: "grid-row-end",
				link: "/properties/grid-row-end",
			},
			{
				label: "Grid Row Start",
				value: "grid-row-start",
				link: "/properties/grid-row-start",
			},
			{
				label: "Grid Template",
				value: "grid-template",
				link: "/properties/grid-template",
			},
			{
				label: "Grid Template Areas",
				value: "grid-template-areas",
				link: "/properties/grid-template-areas",
			},
			{
				label: "Grid Template Columns",
				value: "grid-template-columns",
				link: "/properties/grid-template-columns",
			},
			{
				label: "Grid Template Rows",
				value: "grid-template-rows",
				link: "/properties/grid-template-rows",
			},
		],
	},
	h: {
		selectors: [
			{
				label: "Has",
				value: ":has()",
				link: "/selectors/has",
			},
			{
				label: "Hover",
				value: ":hover",
				link: "/selectors/hover",
			},
		],
		properties: [
			{
				label: "Hanging Punctuation",
				value: "hanging-punctuation",
				link: "/properties/hanging-punctuation",
			},
			{
				label: "Height",
				value: "height",
				link: "/properties/height",
			},
			{
				label: "Hyphenate Limit Chars",
				value: "hyphenate-limit-chars",
				link: "/properties/hyphenate-limit-chars",
			},
			{
				label: "Hyphens",
				value: "hyphens",
				link: "/properties/hyphens",
			},
		],
	},
	i: {
		selectors: [
			{
				label: "In Range",
				value: ":in-range",
				link: "/selectors/in-range",
			},
			{
				label: "Indeterminate",
				value: ":indeterminate",
				link: "/selectors/indeterminate",
			},
			{
				label: "Invalid",
				value: ":invalid",
				link: "/selectors/invalid",
			},
			{
				label: "Is",
				value: ":is()",
				link: "/selectors/is",
			},
			{
				label: "ID",
				value: "#id",
				link: "/selectors/id",
			},
		],
		properties: [
			{
				label: "Image Rendering",
				value: "image-rendering",
				link: "/properties/image-rendering",
			},
			{
				label: "Initial Letter",
				value: "initial-letter",
				link: "/properties/initial-letter",
			},
			{
				label: "Inline Size",
				value: "inline-size",
				link: "/properties/inline-size",
			},
			{
				label: "Inset",
				value: "inset",
				link: "/properties/inset",
			},
			{
				label: "Inset Block",
				value: "inset-block",
				link: "/properties/inset-block",
			},
			{
				label: "Inset Block End",
				value: "inset-block-end",
				link: "/properties/inset-block-end",
			},
			{
				label: "Inset Block Start",
				value: "inset-block-start",
				link: "/properties/inset-block-start",
			},
			{
				label: "Inset Inline",
				value: "inset-inline",
				link: "/properties/inset-inline",
			},
			{
				label: "Inset Inline End",
				value: "inset-inline-end",
				link: "/properties/inset-inline-end",
			},
			{
				label: "Inset Inline Start",
				value: "inset-inline-start",
				link: "/properties/inset-inline-start",
			},
			{
				label: "Isolation",
				value: "isolation",
				link: "/properties/isolation",
			},
		],
	},
	j: {
		properties: [
			{
				label: "Justify Content",
				value: "justify-content",
				link: "/properties/justify-content",
			},
			{
				label: "Justify Items",
				value: "justify-items",
				link: "/properties/justify-items",
			},
			{
				label: "Justify Self",
				value: "justify-self",
				link: "/properties/justify-self",
			},
		],
	},
	l: {
		selectors: [
			{
				label: "Lang",
				value: ":lang()",
				link: "/selectors/lang",
			},
			{
				label: "Last Child",
				value: ":last-child",
				link: "/selectors/last-child",
			},
			{
				label: "Last of Type",
				value: ":last-of-type",
				link: "/selectors/last-of-type",
			},
			{
				label: "Left",
				value: ":left",
				link: "/selectors/left",
			},
			{
				label: "Link",
				value: ":link",
				link: "/selectors/link",
			},
		],
		properties: [
			{
				label: "Left",
				value: "left",
				link: "/properties/left",
			},
			{
				label: "Letter Spacing",
				value: "letter-spacing",
				link: "/properties/letter-spacing",
			},
			{
				label: "Line Break",
				value: "line-break",
				link: "/properties/line-break",
			},
			{
				label: "Line Clamp",
				value: "line-clamp",
				link: "/properties/line-clamp",
			},
			{
				label: "Line Height",
				value: "line-height",
				link: "/properties/line-height",
			},
			{
				label: "List Style",
				value: "list-style",
				link: "/properties/list-style",
			},
		],
	},
	m: {
		selectors: [
			{
				label: "Marker",
				value: "::marker",
				link: "/selectors/marker",
			},
		],
		properties: [
			{
				label: "Margin",
				value: "margin",
				link: "/properties/margin",
			},
			{
				label: "Margin Block",
				value: "margin-block",
				link: "/properties/margin-block",
			},
			{
				label: "Margin Block End",
				value: "margin-block-end",
				link: "/properties/margin-block-end",
			},
			{
				label: "Margin Block Start",
				value: "margin-block-start",
				link: "/properties/margin-block-start",
			},
			{
				label: "Margin Inline",
				value: "margin-inline",
				link: "/properties/margin-inline",
			},
			{
				label: "Margin Inline End",
				value: "margin-inline-end",
				link: "/properties/margin-inline-end",
			},
			{
				label: "Margin Inline Start",
				value: "margin-inline-start",
				link: "/properties/margin-inline-start",
			},
			{
				label: "Mask",
				value: "mask",
				link: "/properties/mask",
			},
			{
				label: "Mask Border",
				value: "mask-border",
				link: "/properties/mask-border",
			},
			{
				label: "Mask Clip",
				value: "mask-clip",
				link: "/properties/mask-clip",
			},
			{
				label: "Mask Composite",
				value: "mask-composite",
				link: "/properties/mask-composite",
			},
			{
				label: "Mask Image",
				value: "mask-image",
				link: "/properties/mask-image",
			},
			{
				label: "Mask Mode",
				value: "mask-mode",
				link: "/properties/mask-mode",
			},
			{
				label: "Mask Origin",
				value: "mask-origin",
				link: "/properties/mask-origin",
			},
			{
				label: "Mask Position",
				value: "mask-position",
				link: "/properties/mask-position",
			},
			{
				label: "Mask Repeat",
				value: "mask-repeat",
				link: "/properties/mask-repeat",
			},
			{
				label: "Mask Size",
				value: "mask-size",
				link: "/properties/mask-size",
			},
			{
				label: "Mask Type",
				value: "mask-type",
				link: "/properties/mask-type",
			},
			{
				label: "Max Height",
				value: "max-height",
				link: "/properties/max-height",
			},
			{
				label: "Max Inline Size",
				value: "max-inline-size",
				link: "/properties/max-inline-size",
			},
			{
				label: "Max Width",
				value: "max-width",
				link: "/properties/max-width",
			},
			{
				label: "Min Height",
				value: "min-height",
				link: "/properties/min-height",
			},
			{
				label: "Min Width",
				value: "min-width",
				link: "/properties/min-width",
			},
			{
				label: "Mix Blend Mode",
				value: "mix-blend-mode",
				link: "/properties/mix-blend-mode",
			},
		],
	},
	n: {
		selectors: [
			{
				label: "Not",
				value: ":not()",
				link: "/selectors/not",
			},
			{
				label: "Nth Child",
				value: ":nth-child()",
				link: "/selectors/nth-child",
			},
			{
				label: "Nth Last Child",
				value: ":nth-last-child()",
				link: "/selectors/nth-last-child",
			},
			{
				label: "Nth Last of Type",
				value: ":nth-last-of-type()",
				link: "/selectors/nth-last-of-type",
			},
			{
				label: "Nth of Type",
				value: ":nth-of-type()",
				link: "/selectors/nth-of-type",
			},
		],
	},
	o: {
		selectors: [
			{
				label: "Only Child",
				value: ":only-child",
				link: "/selectors/only-child",
			},
			{
				label: "Only of Type",
				value: ":only-of-type",
				link: "/selectors/only-of-type",
			},
			{
				label: "Optional",
				value: ":optional",
				link: "/selectors/optional",
			},
			{
				label: "Out of Range",
				value: ":out-of-range",
				link: "/selectors/out-of-range",
			},
		],
		properties: [
			{
				label: "Object Fit",
				value: "object-fit",
				link: "/properties/object-fit",
			},
			{
				label: "Object Position",
				value: "object-position",
				link: "/properties/object-position",
			},
			{
				label: "Offset Anchor",
				value: "offset-anchor",
				link: "/properties/offset-anchor",
			},
			{
				label: "Offset Distance",
				value: "offset-distance",
				link: "/properties/offset-distance",
			},
			{
				label: "Offset Path",
				value: "offset-path",
				link: "/properties/offset-path",
			},
			{
				label: "Offset Rotate",
				value: "offset-rotate",
				link: "/properties/offset-rotate",
			},
			{
				label: "Opacity",
				value: "opacity",
				link: "/properties/opacity",
			},
			{
				label: "Order",
				value: "order",
				link: "/properties/order",
			},
			{
				label: "Orphans",
				value: "orphans",
				link: "/properties/orphans",
			},
			{
				label: "Outline",
				value: "outline",
				link: "/properties/outline",
			},
			{
				label: "Outline Color",
				value: "outline-color",
				link: "/properties/outline-color",
			},
			{
				label: "Outline Offset",
				value: "outline-offset",
				link: "/properties/outline-offset",
			},
			{
				label: "Outline Style",
				value: "outline-style",
				link: "/properties/outline-style",
			},
			{
				label: "Outline Width",
				value: "outline-width",
				link: "/properties/outline-width",
			},
			{
				label: "Overflow",
				value: "overflow",
				link: "/properties/overflow",
			},
			{
				label: "Overflow Anchor",
				value: "overflow-anchor",
				link: "/properties/overflow-anchor",
			},
			{
				label: "Overflow Clip Margin",
				value: "overflow-clip-margin",
				link: "/properties/overflow-clip-margin",
			},
			{
				label: "Overflow Wrap",
				value: "overflow-wrap",
				link: "/properties/overflow-wrap",
			},
			{
				label: "Overscroll Behavior",
				value: "overscroll-behavior",
				link: "/properties/overscroll-behavior",
			},
		],
	},
	p: {
		selectors: [
			{
				label: "Placeholder",
				value: "::placeholder",
				link: "/selectors/placeholder",
			},
			{
				label: "Past",
				value: ":past",
				link: "/selectors/past",
			},
			{
				label: "Placeholder Shown",
				value: ":placeholder-shown",
				link: "/selectors/placeholder-shown",
			},
		],
		properties: [
			{
				label: "Padding",
				value: "padding",
				link: "/properties/padding",
			},
			{
				label: "Padding Block",
				value: "padding-block",
				link: "/properties/padding-block",
			},
			{
				label: "Padding Inline",
				value: "padding-inline",
				link: "/properties/padding-inline",
			},
			{
				label: "Page Break",
				value: "page-break",
				link: "/properties/page-break",
			},
			{
				label: "Paint Order",
				value: "paint-order",
				link: "/properties/paint-order",
			},
			{
				label: "Perspective",
				value: "perspective",
				link: "/properties/perspective",
			},
			{
				label: "Perspective Origin",
				value: "perspective-origin",
				link: "/properties/perspective-origin",
			},
			{
				label: "Place Content",
				value: "place-content",
				link: "/properties/place-content",
			},
			{
				label: "Place Items",
				value: "place-items",
				link: "/properties/place-items",
			},
			{
				label: "Place Self",
				value: "place-self",
				link: "/properties/place-self",
			},
			{
				label: "Pointer Events",
				value: "pointer-events",
				link: "/properties/pointer-events",
			},
			{
				label: "Position",
				value: "position",
				link: "/properties/position",
			},
			{
				label: "Print Color Adjust",
				value: "print-color-adjust",
				link: "/properties/print-color-adjust",
			},
		],
	},
	q: {
		properties: [
			{
				label: "Quotes",
				value: "quotes",
				link: "/properties/quotes",
			},
		],
	},
	r: {
		selectors: [
			{
				label: "Read-Write / Read-Only",
				value: ":read-write / :read-only",
				link: "/selectors/read-write-read-only",
			},
			{
				label: "Required",
				value: ":required",
				link: "/selectors/required",
			},
			{
				label: "Right",
				value: ":right",
				link: "/selectors/right",
			},
			{
				label: "Root",
				value: ":root",
				link: "/selectors/root",
			},
		],
		properties: [
			{
				label: "Resize",
				value: "resize",
				link: "/properties/resize",
			},
			{
				label: "Right",
				value: "right",
				link: "/properties/right",
			},
			{
				label: "Rotate",
				value: "rotate",
				link: "/properties/rotate",
			},
			{
				label: "Row Gap",
				value: "row-gap",
				link: "/properties/row-gap",
			},
		],
	},
	s: {
		selectors: [
			{
				label: "Selection",
				value: "::selection",
				link: "/selectors/selection",
			},
		],
		properties: [
			{
				label: "Scale",
				value: "scale",
				link: "/properties/scale",
			},
			{
				label: "Scroll Behavior",
				value: "scroll-behavior",
				link: "/properties/scroll-behavior",
			},
			{
				label: "Scroll Margin",
				value: "scroll-margin",
				link: "/properties/scroll-margin",
			},
			{
				label: "Scroll Padding",
				value: "scroll-padding",
				link: "/properties/scroll-padding",
			},
			{
				label: "Scroll Snap Align",
				value: "scroll-snap-align",
				link: "/properties/scroll-snap-align",
			},
			{
				label: "Scroll Snap Stop",
				value: "scroll-snap-stop",
				link: "/properties/scroll-snap-stop",
			},
			{
				label: "Scroll Snap Type",
				value: "scroll-snap-type",
				link: "/properties/scroll-snap-type",
			},
			{
				label: "Scrollbar",
				value: "scrollbar",
				link: "/properties/scrollbar",
			},
			{
				label: "Scrollbar Color",
				value: "scrollbar-color",
				link: "/properties/scrollbar-color",
			},
			{
				label: "Scrollbar Gutter",
				value: "scrollbar-gutter",
				link: "/properties/scrollbar-gutter",
			},
			{
				label: "Scrollbar Width",
				value: "scrollbar-width",
				link: "/properties/scrollbar-width",
			},
			{
				label: "Shape Image Threshold",
				value: "shape-image-threshold",
				link: "/properties/shape-image-threshold",
			},
			{
				label: "Shape Margin",
				value: "shape-margin",
				link: "/properties/shape-margin",
			},
			{
				label: "Shape Outside",
				value: "shape-outside",
				link: "/properties/shape-outside",
			},
			{
				label: "Speak",
				value: "speak",
				link: "/properties/speak",
			},
			{
				label: "Stroke",
				value: "stroke",
				link: "/properties/stroke",
			},
			{
				label: "Stroke Dasharray",
				value: "stroke-dasharray",
				link: "/properties/stroke-dasharray",
			},
			{
				label: "Stroke Dashoffset",
				value: "stroke-dashoffset",
				link: "/properties/stroke-dashoffset",
			},
			{
				label: "Stroke Linecap",
				value: "stroke-linecap",
				link: "/properties/stroke-linecap",
			},
			{
				label: "Stroke Linejoin",
				value: "stroke-linejoin",
				link: "/properties/stroke-linejoin",
			},
			{
				label: "Stroke Width",
				value: "stroke-width",
				link: "/properties/stroke-width",
			},
		],
	},
	t: {
		selectors: [
			{
				label: "Target",
				value: ":target",
				link: "/selectors/target",
			},
			{
				label: "Type",
				value: "Type",
				link: "/selectors/type",
			},
		],
		properties: [
			{
				label: "Tab Size",
				value: "tab-size",
				link: "/properties/tab-size",
			},
			{
				label: "Table Layout",
				value: "table-layout",
				link: "/properties/table-layout",
			},
			{
				label: "Text Align",
				value: "text-align",
				link: "/properties/text-align",
			},
			{
				label: "Text Align Last",
				value: "text-align-last",
				link: "/properties/text-align-last",
			},
			{
				label: "Text Combine Upright",
				value: "text-combine-upright",
				link: "/properties/text-combine-upright",
			},
			{
				label: "Text Decoration",
				value: "text-decoration",
				link: "/properties/text-decoration",
			},
			{
				label: "Text Decoration Color",
				value: "text-decoration-color",
				link: "/properties/text-decoration-color",
			},
			{
				label: "Text Decoration Line",
				value: "text-decoration-line",
				link: "/properties/text-decoration-line",
			},
			{
				label: "Text Decoration Skip",
				value: "text-decoration-skip",
				link: "/properties/text-decoration-skip",
			},
			{
				label: "Text Decoration Skip Ink",
				value: "text-decoration-skip-ink",
				link: "/properties/text-decoration-skip-ink",
			},
			{
				label: "Text Decoration Style",
				value: "text-decoration-style",
				link: "/properties/text-decoration-style",
			},
			{
				label: "Text Decoration Thickness",
				value: "text-decoration-thickness",
				link: "/properties/text-decoration-thickness",
			},
			{
				label: "Text Emphasis",
				value: "text-emphasis",
				link: "/properties/text-emphasis",
			},
			{
				label: "Text Indent",
				value: "text-indent",
				link: "/properties/text-indent",
			},
			{
				label: "Text Justify",
				value: "text-justify",
				link: "/properties/text-justify",
			},
			{
				label: "Text Orientation",
				value: "text-orientation",
				link: "/properties/text-orientation",
			},
			{
				label: "Text Overflow",
				value: "text-overflow",
				link: "/properties/text-overflow",
			},
			{
				label: "Text Rendering",
				value: "text-rendering",
				link: "/properties/text-rendering",
			},
			{
				label: "Text Shadow",
				value: "text-shadow",
				link: "/properties/text-shadow",
			},
			{
				label: "Text Stroke",
				value: "text-stroke",
				link: "/properties/text-stroke",
			},
			{
				label: "Text Transform",
				value: "text-transform",
				link: "/properties/text-transform",
			},
			{
				label: "Text Underline Offset",
				value: "text-underline-offset",
				link: "/properties/text-underline-offset",
			},
			{
				label: "Text Underline Position",
				value: "text-underline-position",
				link: "/properties/text-underline-position",
			},
			{
				label: "Top / Bottom / Left / Right",
				value: "top / bottom / left / right",
				link: "/selectors/top-bottom-left-right",
			},
			{
				label: "Touch Action",
				value: "touch-action",
				link: "/properties/touch-action",
			},
			{
				label: "Transform",
				value: "transform",
				link: "/properties/transform",
			},
			{
				label: "Transform Origin",
				value: "transform-origin",
				link: "/properties/transform-origin",
			},
			{
				label: "Transform Style",
				value: "transform-style",
				link: "/properties/transform-style",
			},
			{
				label: "Transition",
				value: "transition",
				link: "/properties/transition",
			},
			{
				label: "Transition Delay",
				value: "transition-delay",
				link: "/properties/transition-delay",
			},
			{
				label: "Transition Duration",
				value: "transition-duration",
				link: "/properties/transition-duration",
			},
			{
				label: "Transition Property",
				value: "transition-property",
				link: "/properties/transition-property",
			},
			{
				label: "Transition Timing Function",
				value: "transition-timing-function",
				link: "/properties/transition-timing-function",
			},
			{
				label: "Translate",
				value: "translate",
				link: "/properties/translate",
			},
		],
	},
	u: {
		selectors: [
			{
				label: "User Invalid",
				value: ":user-invalid",
				link: "/selectors/user-invalid",
			},
			{
				label: "Universal",
				value: "Universal",
				link: "/selectors/universal",
			},
		],
		properties: [
			{
				label: "Unicode Bidi",
				value: "unicode-bidi",
				link: "/properties/unicode-bidi",
			},
			{
				label: "Unicode Range",
				value: "unicode-range",
				link: "/properties/unicode-range",
			},
			{
				label: "User Select",
				value: "user-select",
				link: "/properties/user-select",
			},
		],
	},
	v: {
		selectors: [
			{
				label: "Valid",
				value: ":valid",
				link: "/selectors/valid",
			},
			{
				label: "Visited",
				value: ":visited",
				link: "/selectors/visited",
			},
		],
		properties: [
			{
				label: "Vertical Align",
				value: "vertical-align",
				link: "/properties/vertical-align",
			},
			{
				label: "Visibility",
				value: "visibility",
				link: "/properties/visibility",
			},
		],
	},
	w: {
		selectors: [
			{
				label: "Where",
				value: ":where",
				link: "/selectors/where",
			},
		],
		properties: [
			{
				label: "White Space",
				value: "white-space",
				link: "/properties/white-space",
			},
			{
				label: "Widows",
				value: "widows",
				link: "/properties/widows",
			},
			{
				label: "Width",
				value: "width",
				link: "/properties/width",
			},
			{
				label: "Will Change",
				value: "will-change",
				link: "/properties/will-change",
			},
			{
				label: "Word Break",
				value: "word-break",
				link: "/properties/word-break",
			},
			{
				label: "Word Spacing",
				value: "word-spacing",
				link: "/properties/word-spacing",
			},
			{
				label: "Writing Mode",
				value: "writing-mode",
				link: "/properties/writing-mode",
			},
		],
	},
	z: {
		properties: [
			{
				label: "Z-Index",
				value: "z-index",
				link: "/properties/z-index",
			},
			{
				label: "Zoom",
				value: "zoom",
				link: "/properties/zoom",
			},
		],
	},
};

export default NavMenuList;
