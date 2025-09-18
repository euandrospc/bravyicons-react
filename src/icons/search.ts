import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Search
 * @description Renders Bravyicons Search svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Search = createBravyIconsComponent("Search", [
    ["circle", { cx: "6.6001", cy: "6.6001", r: "6", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M11 11L15.2426 15.2426", stroke: "currentColor", key: "k1" }]
]);

export default Search;
