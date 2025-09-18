import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name SearchStatus
 * @description Renders Bravyicons SearchStatus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const SearchStatus = createBravyIconsComponent("SearchStatus", [
    ["path", { d: "M14 5H20", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M14 8H17", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M22 22L20 20", stroke: "currentColor", key: "k3" }]
]);

export default SearchStatus;
