import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name GalleryTickIcon
 * @description Renders Bravyicons GalleryTickIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const GalleryTickIcon = createBravyIconsComponent("GalleryTickIcon", [
    ["path", { d: "M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M16 4.99005L17.46 6.45005L21.36 2.55005", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001", stroke: "currentColor", key: "k3" }]
]);

export default GalleryTickIcon;
