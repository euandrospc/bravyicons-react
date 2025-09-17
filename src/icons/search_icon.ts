import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name SearchIcon
 * @description Renders Bravyicons SearchIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const SearchIcon = createBravyIconsComponent("SearchIcon", [
    ["circle", { cx: "6.6001", cy: "6.6001", r: "6", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M11 11L15.2426 15.2426", stroke: "currentColor", key: "k1" }]
]);

export default SearchIcon;
