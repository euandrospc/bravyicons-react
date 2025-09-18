import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name MainComponent
 * @description Renders Bravyicons MainComponent svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const MainComponent = createBravyIconsComponent("MainComponent", [
    ["path", { d: "M20.95 14.55L14.56 20.94C13.16 22.34 10.86 22.34 9.45002 20.94L3.06001 14.55C1.66001 13.15 1.66001 10.85 3.06001 9.44001L9.45002 3.05C10.85 1.65 13.15 1.65 14.56 3.05L20.95 9.44001C22.35 10.85 22.35 13.15 20.95 14.55Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M6.25 6.25L17.75 17.75", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M17.75 6.25L6.25 17.75", stroke: "currentColor", key: "k2" }]
]);

export default MainComponent;
