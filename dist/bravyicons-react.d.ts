import { ForwardRefExoticComponent, RefAttributes, SVGProps, ReactSVG } from 'react';

type IconSvgElement = [elementName: keyof ReactSVG, attrs: Record<string, string>][];
type IconSvgObject = IconSvgElement;
type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface BravyIconsProps extends ComponentAttributes {
    size?: string | number;
    className?: string;
    color?: string;
    strokeWidth?: string | number;
}
type BravyIconsIcon = ForwardRefExoticComponent<BravyIconsProps>;
declare const createBravyIconsComponent: (iconName: string, svgObject: IconSvgElement) => BravyIconsIcon;

/**
 * @component @name AirplaneSquareIcon
 * @description Renders Bravyicons AirplaneSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AirplaneSquareIcon: BravyIconsIcon;

/**
 * @component @name AirplaneIcon
 * @description Renders Bravyicons AirplaneIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AirplaneIcon: BravyIconsIcon;

/**
 * @component @name ArrangeCircle2Icon
 * @description Renders Bravyicons ArrangeCircle2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrangeCircle2Icon: BravyIconsIcon;

/**
 * @component @name ArrangeCircleIcon
 * @description Renders Bravyicons ArrangeCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrangeCircleIcon: BravyIconsIcon;

/**
 * @component @name ArrangeSquare2Icon
 * @description Renders Bravyicons ArrangeSquare2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrangeSquare2Icon: BravyIconsIcon;

/**
 * @component @name ArrangeSquareIcon
 * @description Renders Bravyicons ArrangeSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrangeSquareIcon: BravyIconsIcon;

/**
 * @component @name Arrow2Icon
 * @description Renders Bravyicons Arrow2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Arrow2Icon: BravyIconsIcon;

/**
 * @component @name Arrow3Icon
 * @description Renders Bravyicons Arrow3Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Arrow3Icon: BravyIconsIcon;

/**
 * @component @name ArrowBottomIcon
 * @description Renders Bravyicons ArrowBottomIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowBottomIcon: BravyIconsIcon;

/**
 * @component @name ArrowCircleDownIcon
 * @description Renders Bravyicons ArrowCircleDownIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowCircleDownIcon: BravyIconsIcon;

/**
 * @component @name ArrowCircleLeftIcon
 * @description Renders Bravyicons ArrowCircleLeftIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowCircleLeftIcon: BravyIconsIcon;

/**
 * @component @name ArrowCircleRightIcon
 * @description Renders Bravyicons ArrowCircleRightIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowCircleRightIcon: BravyIconsIcon;

/**
 * @component @name ArrowDown1Icon
 * @description Renders Bravyicons ArrowDown1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowDown1Icon: BravyIconsIcon;

/**
 * @component @name ArrowDown2Icon
 * @description Renders Bravyicons ArrowDown2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowDown2Icon: BravyIconsIcon;

/**
 * @component @name ArrowDownIcon
 * @description Renders Bravyicons ArrowDownIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowDownIcon: BravyIconsIcon;

/**
 * @component @name ArrowLeft1Icon
 * @description Renders Bravyicons ArrowLeft1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowLeft1Icon: BravyIconsIcon;

/**
 * @component @name ArrowLeft2Icon
 * @description Renders Bravyicons ArrowLeft2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowLeft2Icon: BravyIconsIcon;

/**
 * @component @name ArrowLeft3Icon
 * @description Renders Bravyicons ArrowLeft3Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowLeft3Icon: BravyIconsIcon;

/**
 * @component @name ArrowLeftIcon
 * @description Renders Bravyicons ArrowLeftIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowLeftIcon: BravyIconsIcon;

/**
 * @component @name ArrowRight1Icon
 * @description Renders Bravyicons ArrowRight1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowRight1Icon: BravyIconsIcon;

/**
 * @component @name ArrowRight2Icon
 * @description Renders Bravyicons ArrowRight2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowRight2Icon: BravyIconsIcon;

/**
 * @component @name ArrowRight3Icon
 * @description Renders Bravyicons ArrowRight3Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowRight3Icon: BravyIconsIcon;

/**
 * @component @name ArrowRightIcon
 * @description Renders Bravyicons ArrowRightIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowRightIcon: BravyIconsIcon;

/**
 * @component @name ArrowSquareDownIcon
 * @description Renders Bravyicons ArrowSquareDownIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowSquareDownIcon: BravyIconsIcon;

/**
 * @component @name ArrowSquareLeftIcon
 * @description Renders Bravyicons ArrowSquareLeftIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowSquareLeftIcon: BravyIconsIcon;

/**
 * @component @name ArrowSquareRightIcon
 * @description Renders Bravyicons ArrowSquareRightIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowSquareRightIcon: BravyIconsIcon;

/**
 * @component @name ArrowSquareUpIcon
 * @description Renders Bravyicons ArrowSquareUpIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowSquareUpIcon: BravyIconsIcon;

/**
 * @component @name ArrowSwapHorizontalIcon
 * @description Renders Bravyicons ArrowSwapHorizontalIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowSwapHorizontalIcon: BravyIconsIcon;

/**
 * @component @name ArrowUp1Icon
 * @description Renders Bravyicons ArrowUp1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowUp1Icon: BravyIconsIcon;

/**
 * @component @name ArrowUp2Icon
 * @description Renders Bravyicons ArrowUp2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowUp2Icon: BravyIconsIcon;

/**
 * @component @name ArrowUp3Icon
 * @description Renders Bravyicons ArrowUp3Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowUp3Icon: BravyIconsIcon;

/**
 * @component @name ArrowUpIcon
 * @description Renders Bravyicons ArrowUpIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowUpIcon: BravyIconsIcon;

/**
 * @component @name AttachCircleIcon
 * @description Renders Bravyicons AttachCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AttachCircleIcon: BravyIconsIcon;

/**
 * @component @name AttachSquareIcon
 * @description Renders Bravyicons AttachSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AttachSquareIcon: BravyIconsIcon;

/**
 * @component @name AudioSquareIcon
 * @description Renders Bravyicons AudioSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AudioSquareIcon: BravyIconsIcon;

/**
 * @component @name BackSquareIcon
 * @description Renders Bravyicons BackSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BackSquareIcon: BravyIconsIcon;

/**
 * @component @name Backward10SecondsIcon
 * @description Renders Bravyicons Backward10SecondsIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Backward10SecondsIcon: BravyIconsIcon;

/**
 * @component @name Backward15SecondsIcon
 * @description Renders Bravyicons Backward15SecondsIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Backward15SecondsIcon: BravyIconsIcon;

/**
 * @component @name Backward5SecondsIcon
 * @description Renders Bravyicons Backward5SecondsIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Backward5SecondsIcon: BravyIconsIcon;

/**
 * @component @name BackwardIcon
 * @description Renders Bravyicons BackwardIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BackwardIcon: BravyIconsIcon;

/**
 * @component @name BusIcon
 * @description Renders Bravyicons BusIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BusIcon: BravyIconsIcon;

/**
 * @component @name CameraSlashIcon
 * @description Renders Bravyicons CameraSlashIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CameraSlashIcon: BravyIconsIcon;

/**
 * @component @name CameraIcon
 * @description Renders Bravyicons CameraIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CameraIcon: BravyIconsIcon;

/**
 * @component @name CarIcon
 * @description Renders Bravyicons CarIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CarIcon: BravyIconsIcon;

/**
 * @component @name CloudCrossIcon
 * @description Renders Bravyicons CloudCrossIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudCrossIcon: BravyIconsIcon;

/**
 * @component @name CloudDrizzleIcon
 * @description Renders Bravyicons CloudDrizzleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudDrizzleIcon: BravyIconsIcon;

/**
 * @component @name CloudFogIcon
 * @description Renders Bravyicons CloudFogIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudFogIcon: BravyIconsIcon;

/**
 * @component @name CloudLightningIcon
 * @description Renders Bravyicons CloudLightningIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudLightningIcon: BravyIconsIcon;

/**
 * @component @name CloudMinusIcon
 * @description Renders Bravyicons CloudMinusIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudMinusIcon: BravyIconsIcon;

/**
 * @component @name CloudNotifIcon
 * @description Renders Bravyicons CloudNotifIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudNotifIcon: BravyIconsIcon;

/**
 * @component @name CloudPlusIcon
 * @description Renders Bravyicons CloudPlusIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudPlusIcon: BravyIconsIcon;

/**
 * @component @name CloudSnowIcon
 * @description Renders Bravyicons CloudSnowIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudSnowIcon: BravyIconsIcon;

/**
 * @component @name CloudSunnyIcon
 * @description Renders Bravyicons CloudSunnyIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudSunnyIcon: BravyIconsIcon;

/**
 * @component @name CloudIcon
 * @description Renders Bravyicons CloudIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudIcon: BravyIconsIcon;

/**
 * @component @name ConvertIcon
 * @description Renders Bravyicons ConvertIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ConvertIcon: BravyIconsIcon;

/**
 * @component @name DevicesIcon
 * @description Renders Bravyicons DevicesIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DevicesIcon: BravyIconsIcon;

/**
 * @component @name DrivingIcon
 * @description Renders Bravyicons DrivingIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DrivingIcon: BravyIconsIcon;

/**
 * @component @name DropIcon
 * @description Renders Bravyicons DropIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DropIcon: BravyIconsIcon;

/**
 * @component @name EraserIcon
 * @description Renders Bravyicons EraserIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EraserIcon: BravyIconsIcon;

/**
 * @component @name Export1Icon
 * @description Renders Bravyicons Export1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Export1Icon: BravyIconsIcon;

/**
 * @component @name Export2Icon
 * @description Renders Bravyicons Export2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Export2Icon: BravyIconsIcon;

/**
 * @component @name Export3Icon
 * @description Renders Bravyicons Export3Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Export3Icon: BravyIconsIcon;

/**
 * @component @name ExportIcon
 * @description Renders Bravyicons ExportIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ExportIcon: BravyIconsIcon;

/**
 * @component @name FirstlineIcon
 * @description Renders Bravyicons FirstlineIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FirstlineIcon: BravyIconsIcon;

/**
 * @component @name FlashIcon
 * @description Renders Bravyicons FlashIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FlashIcon: BravyIconsIcon;

/**
 * @component @name Folder2Icon
 * @description Renders Bravyicons Folder2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Folder2Icon: BravyIconsIcon;

/**
 * @component @name FolderAddIcon
 * @description Renders Bravyicons FolderAddIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FolderAddIcon: BravyIconsIcon;

/**
 * @component @name FolderCloudIcon
 * @description Renders Bravyicons FolderCloudIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FolderCloudIcon: BravyIconsIcon;

/**
 * @component @name FolderCrossIcon
 * @description Renders Bravyicons FolderCrossIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FolderCrossIcon: BravyIconsIcon;

/**
 * @component @name FolderFavoriteIcon
 * @description Renders Bravyicons FolderFavoriteIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FolderFavoriteIcon: BravyIconsIcon;

/**
 * @component @name FolderMinusIcon
 * @description Renders Bravyicons FolderMinusIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FolderMinusIcon: BravyIconsIcon;

/**
 * @component @name FolderOpenIcon
 * @description Renders Bravyicons FolderOpenIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FolderOpenIcon: BravyIconsIcon;

/**
 * @component @name FolderIcon
 * @description Renders Bravyicons FolderIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FolderIcon: BravyIconsIcon;

/**
 * @component @name Forward10SecondsIcon
 * @description Renders Bravyicons Forward10SecondsIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Forward10SecondsIcon: BravyIconsIcon;

/**
 * @component @name Forward15SecondsIcon
 * @description Renders Bravyicons Forward15SecondsIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Forward15SecondsIcon: BravyIconsIcon;

/**
 * @component @name Forward5SecondsIcon
 * @description Renders Bravyicons Forward5SecondsIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Forward5SecondsIcon: BravyIconsIcon;

/**
 * @component @name ForwardSquareIcon
 * @description Renders Bravyicons ForwardSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ForwardSquareIcon: BravyIconsIcon;

/**
 * @component @name ForwardIcon
 * @description Renders Bravyicons ForwardIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ForwardIcon: BravyIconsIcon;

/**
 * @component @name Frame1Icon
 * @description Renders Bravyicons Frame1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Frame1Icon: BravyIconsIcon;

/**
 * @component @name Frame2Icon
 * @description Renders Bravyicons Frame2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Frame2Icon: BravyIconsIcon;

/**
 * @component @name FrameIcon
 * @description Renders Bravyicons FrameIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FrameIcon: BravyIconsIcon;

/**
 * @component @name GalleryAddIcon
 * @description Renders Bravyicons GalleryAddIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryAddIcon: BravyIconsIcon;

/**
 * @component @name GalleryEditIcon
 * @description Renders Bravyicons GalleryEditIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryEditIcon: BravyIconsIcon;

/**
 * @component @name GalleryExportIcon
 * @description Renders Bravyicons GalleryExportIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryExportIcon: BravyIconsIcon;

/**
 * @component @name GalleryFavoriteIcon
 * @description Renders Bravyicons GalleryFavoriteIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryFavoriteIcon: BravyIconsIcon;

/**
 * @component @name GalleryImportIcon
 * @description Renders Bravyicons GalleryImportIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryImportIcon: BravyIconsIcon;

/**
 * @component @name GalleryRemoveIcon
 * @description Renders Bravyicons GalleryRemoveIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryRemoveIcon: BravyIconsIcon;

/**
 * @component @name GallerySlashIcon
 * @description Renders Bravyicons GallerySlashIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GallerySlashIcon: BravyIconsIcon;

/**
 * @component @name GalleryTickIcon
 * @description Renders Bravyicons GalleryTickIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryTickIcon: BravyIconsIcon;

/**
 * @component @name GalleryIcon
 * @description Renders Bravyicons GalleryIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryIcon: BravyIconsIcon;

/**
 * @component @name GasStationIcon
 * @description Renders Bravyicons GasStationIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GasStationIcon: BravyIconsIcon;

/**
 * @component @name GroupIcon
 * @description Renders Bravyicons GroupIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GroupIcon: BravyIconsIcon;

/**
 * @component @name ImageIcon
 * @description Renders Bravyicons ImageIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ImageIcon: BravyIconsIcon;

/**
 * @component @name Import1Icon
 * @description Renders Bravyicons Import1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Import1Icon: BravyIconsIcon;

/**
 * @component @name Import2Icon
 * @description Renders Bravyicons Import2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Import2Icon: BravyIconsIcon;

/**
 * @component @name ImportIcon
 * @description Renders Bravyicons ImportIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ImportIcon: BravyIconsIcon;

/**
 * @component @name LanguageCircleIcon
 * @description Renders Bravyicons LanguageCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LanguageCircleIcon: BravyIconsIcon;

/**
 * @component @name LanguageSquareIcon
 * @description Renders Bravyicons LanguageSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LanguageSquareIcon: BravyIconsIcon;

/**
 * @component @name Link1Icon
 * @description Renders Bravyicons Link1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Link1Icon: BravyIconsIcon;

/**
 * @component @name Link2Icon
 * @description Renders Bravyicons Link2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Link2Icon: BravyIconsIcon;

/**
 * @component @name Link21Icon
 * @description Renders Bravyicons Link21Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Link21Icon: BravyIconsIcon;

/**
 * @component @name LinkCircleIcon
 * @description Renders Bravyicons LinkCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LinkCircleIcon: BravyIconsIcon;

/**
 * @component @name LinkSquareIcon
 * @description Renders Bravyicons LinkSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LinkSquareIcon: BravyIconsIcon;

/**
 * @component @name LinkIcon
 * @description Renders Bravyicons LinkIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LinkIcon: BravyIconsIcon;

/**
 * @component @name Login1Icon
 * @description Renders Bravyicons Login1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Login1Icon: BravyIconsIcon;

/**
 * @component @name LoginIcon
 * @description Renders Bravyicons LoginIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LoginIcon: BravyIconsIcon;

/**
 * @component @name Logout1Icon
 * @description Renders Bravyicons Logout1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Logout1Icon: BravyIconsIcon;

/**
 * @component @name LogoutIcon
 * @description Renders Bravyicons LogoutIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LogoutIcon: BravyIconsIcon;

/**
 * @component @name MaximizeCircleIcon
 * @description Renders Bravyicons MaximizeCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MaximizeCircleIcon: BravyIconsIcon;

/**
 * @component @name MaximizeIcon
 * @description Renders Bravyicons MaximizeIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MaximizeIcon: BravyIconsIcon;

/**
 * @component @name Microphone2Icon
 * @description Renders Bravyicons Microphone2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Microphone2Icon: BravyIconsIcon;

/**
 * @component @name MicrophoneSlash1Icon
 * @description Renders Bravyicons MicrophoneSlash1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MicrophoneSlash1Icon: BravyIconsIcon;

/**
 * @component @name MicrophoneSlashIcon
 * @description Renders Bravyicons MicrophoneSlashIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MicrophoneSlashIcon: BravyIconsIcon;

/**
 * @component @name MicrophoneIcon
 * @description Renders Bravyicons MicrophoneIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MicrophoneIcon: BravyIconsIcon;

/**
 * @component @name MiniMusicSqaureIcon
 * @description Renders Bravyicons MiniMusicSqaureIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MiniMusicSqaureIcon: BravyIconsIcon;

/**
 * @component @name MoonIcon
 * @description Renders Bravyicons MoonIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MoonIcon: BravyIconsIcon;

/**
 * @component @name MusicCircleIcon
 * @description Renders Bravyicons MusicCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicCircleIcon: BravyIconsIcon;

/**
 * @component @name MusicDashboardIcon
 * @description Renders Bravyicons MusicDashboardIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicDashboardIcon: BravyIconsIcon;

/**
 * @component @name MusicFilterIcon
 * @description Renders Bravyicons MusicFilterIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicFilterIcon: BravyIconsIcon;

/**
 * @component @name MusicLibrary2Icon
 * @description Renders Bravyicons MusicLibrary2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicLibrary2Icon: BravyIconsIcon;

/**
 * @component @name MusicPlaylistIcon
 * @description Renders Bravyicons MusicPlaylistIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicPlaylistIcon: BravyIconsIcon;

/**
 * @component @name MusicSquareAddIcon
 * @description Renders Bravyicons MusicSquareAddIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicSquareAddIcon: BravyIconsIcon;

/**
 * @component @name MusicSquareRemoveIcon
 * @description Renders Bravyicons MusicSquareRemoveIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicSquareRemoveIcon: BravyIconsIcon;

/**
 * @component @name MusicSquareSearchIcon
 * @description Renders Bravyicons MusicSquareSearchIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicSquareSearchIcon: BravyIconsIcon;

/**
 * @component @name MusicSquareIcon
 * @description Renders Bravyicons MusicSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicSquareIcon: BravyIconsIcon;

/**
 * @component @name MusicIcon
 * @description Renders Bravyicons MusicIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicIcon: BravyIconsIcon;

/**
 * @component @name MusicnoteIcon
 * @description Renders Bravyicons MusicnoteIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicnoteIcon: BravyIconsIcon;

/**
 * @component @name NextIcon
 * @description Renders Bravyicons NextIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NextIcon: BravyIconsIcon;

/**
 * @component @name NoteSquareIcon
 * @description Renders Bravyicons NoteSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NoteSquareIcon: BravyIconsIcon;

/**
 * @component @name Paperclip2Icon
 * @description Renders Bravyicons Paperclip2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Paperclip2Icon: BravyIconsIcon;

/**
 * @component @name PaperclipIcon
 * @description Renders Bravyicons PaperclipIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PaperclipIcon: BravyIconsIcon;

/**
 * @component @name PauseCircleIcon
 * @description Renders Bravyicons PauseCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PauseCircleIcon: BravyIconsIcon;

/**
 * @component @name PauseIcon
 * @description Renders Bravyicons PauseIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PauseIcon: BravyIconsIcon;

/**
 * @component @name PeopleIcon
 * @description Renders Bravyicons PeopleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PeopleIcon: BravyIconsIcon;

/**
 * @component @name PharagraphspacingIcon
 * @description Renders Bravyicons PharagraphspacingIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PharagraphspacingIcon: BravyIconsIcon;

/**
 * @component @name PlayAddIcon
 * @description Renders Bravyicons PlayAddIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PlayAddIcon: BravyIconsIcon;

/**
 * @component @name PlayCircleIcon
 * @description Renders Bravyicons PlayCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PlayCircleIcon: BravyIconsIcon;

/**
 * @component @name PlayCricleIcon
 * @description Renders Bravyicons PlayCricleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PlayCricleIcon: BravyIconsIcon;

/**
 * @component @name PlayRemoveIcon
 * @description Renders Bravyicons PlayRemoveIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PlayRemoveIcon: BravyIconsIcon;

/**
 * @component @name PlayIcon
 * @description Renders Bravyicons PlayIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PlayIcon: BravyIconsIcon;

/**
 * @component @name PreviousIcon
 * @description Renders Bravyicons PreviousIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PreviousIcon: BravyIconsIcon;

/**
 * @component @name Profile2UserIcon
 * @description Renders Bravyicons Profile2UserIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Profile2UserIcon: BravyIconsIcon;

/**
 * @component @name ProfileAddIcon
 * @description Renders Bravyicons ProfileAddIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ProfileAddIcon: BravyIconsIcon;

/**
 * @component @name ProfileCircleIcon
 * @description Renders Bravyicons ProfileCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ProfileCircleIcon: BravyIconsIcon;

/**
 * @component @name ProfileDeleteIcon
 * @description Renders Bravyicons ProfileDeleteIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ProfileDeleteIcon: BravyIconsIcon;

/**
 * @component @name ProfileRemoveIcon
 * @description Renders Bravyicons ProfileRemoveIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ProfileRemoveIcon: BravyIconsIcon;

/**
 * @component @name ProfileTickIcon
 * @description Renders Bravyicons ProfileTickIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ProfileTickIcon: BravyIconsIcon;

/**
 * @component @name ProfileIcon
 * @description Renders Bravyicons ProfileIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ProfileIcon: BravyIconsIcon;

/**
 * @component @name QuoteDownCircleIcon
 * @description Renders Bravyicons QuoteDownCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QuoteDownCircleIcon: BravyIconsIcon;

/**
 * @component @name QuoteDownSquareIcon
 * @description Renders Bravyicons QuoteDownSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QuoteDownSquareIcon: BravyIconsIcon;

/**
 * @component @name QuoteDownIcon
 * @description Renders Bravyicons QuoteDownIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QuoteDownIcon: BravyIconsIcon;

/**
 * @component @name QuoteUpCircleIcon
 * @description Renders Bravyicons QuoteUpCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QuoteUpCircleIcon: BravyIconsIcon;

/**
 * @component @name QuoteUpSquareIcon
 * @description Renders Bravyicons QuoteUpSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QuoteUpSquareIcon: BravyIconsIcon;

/**
 * @component @name QuoteUpIcon
 * @description Renders Bravyicons QuoteUpIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QuoteUpIcon: BravyIconsIcon;

/**
 * @component @name RadioIcon
 * @description Renders Bravyicons RadioIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RadioIcon: BravyIconsIcon;

/**
 * @component @name ReceiveSquare2Icon
 * @description Renders Bravyicons ReceiveSquare2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiveSquare2Icon: BravyIconsIcon;

/**
 * @component @name ReceiveSquareIcon
 * @description Renders Bravyicons ReceiveSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiveSquareIcon: BravyIconsIcon;

/**
 * @component @name ReceivedIcon
 * @description Renders Bravyicons ReceivedIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceivedIcon: BravyIconsIcon;

/**
 * @component @name RecordCircleIcon
 * @description Renders Bravyicons RecordCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RecordCircleIcon: BravyIconsIcon;

/**
 * @component @name RecordIcon
 * @description Renders Bravyicons RecordIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RecordIcon: BravyIconsIcon;

/**
 * @component @name RedoIcon
 * @description Renders Bravyicons RedoIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RedoIcon: BravyIconsIcon;

/**
 * @component @name Refresh2Icon
 * @description Renders Bravyicons Refresh2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Refresh2Icon: BravyIconsIcon;

/**
 * @component @name RefreshCircleIcon
 * @description Renders Bravyicons RefreshCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RefreshCircleIcon: BravyIconsIcon;

/**
 * @component @name RefreshLeftSquareIcon
 * @description Renders Bravyicons RefreshLeftSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RefreshLeftSquareIcon: BravyIconsIcon;

/**
 * @component @name RefreshRightSquareIcon
 * @description Renders Bravyicons RefreshRightSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RefreshRightSquareIcon: BravyIconsIcon;

/**
 * @component @name RefreshSquare2Icon
 * @description Renders Bravyicons RefreshSquare2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RefreshSquare2Icon: BravyIconsIcon;

/**
 * @component @name RefreshIcon
 * @description Renders Bravyicons RefreshIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RefreshIcon: BravyIconsIcon;

/**
 * @component @name RepeatCircleIcon
 * @description Renders Bravyicons RepeatCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RepeatCircleIcon: BravyIconsIcon;

/**
 * @component @name RepeatIcon
 * @description Renders Bravyicons RepeatIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RepeatIcon: BravyIconsIcon;

/**
 * @component @name RepeateMusicIcon
 * @description Renders Bravyicons RepeateMusicIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RepeateMusicIcon: BravyIconsIcon;

/**
 * @component @name RepeateOneIcon
 * @description Renders Bravyicons RepeateOneIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RepeateOneIcon: BravyIconsIcon;

/**
 * @component @name RotateLeftIcon
 * @description Renders Bravyicons RotateLeftIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RotateLeftIcon: BravyIconsIcon;

/**
 * @component @name RotateRightIcon
 * @description Renders Bravyicons RotateRightIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RotateRightIcon: BravyIconsIcon;

/**
 * @component @name ScissorIcon
 * @description Renders Bravyicons ScissorIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ScissorIcon: BravyIconsIcon;

/**
 * @component @name ScreenmirroringIcon
 * @description Renders Bravyicons ScreenmirroringIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ScreenmirroringIcon: BravyIconsIcon;

/**
 * @component @name SendSqaure2Icon
 * @description Renders Bravyicons SendSqaure2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SendSqaure2Icon: BravyIconsIcon;

/**
 * @component @name SendSquareIcon
 * @description Renders Bravyicons SendSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SendSquareIcon: BravyIconsIcon;

/**
 * @component @name SendIcon
 * @description Renders Bravyicons SendIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SendIcon: BravyIconsIcon;

/**
 * @component @name ShipIcon
 * @description Renders Bravyicons ShipIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ShipIcon: BravyIconsIcon;

/**
 * @component @name SmallcapsIcon
 * @description Renders Bravyicons SmallcapsIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SmallcapsIcon: BravyIconsIcon;

/**
 * @component @name SmartCarIcon
 * @description Renders Bravyicons SmartCarIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SmartCarIcon: BravyIconsIcon;

/**
 * @component @name StopCircleIcon
 * @description Renders Bravyicons StopCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const StopCircleIcon: BravyIconsIcon;

/**
 * @component @name StopIcon
 * @description Renders Bravyicons StopIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const StopIcon: BravyIconsIcon;

/**
 * @component @name SubtitleIcon
 * @description Renders Bravyicons SubtitleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SubtitleIcon: BravyIconsIcon;

/**
 * @component @name Sun1Icon
 * @description Renders Bravyicons Sun1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Sun1Icon: BravyIconsIcon;

/**
 * @component @name SunFogIcon
 * @description Renders Bravyicons SunFogIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SunFogIcon: BravyIconsIcon;

/**
 * @component @name SunIcon
 * @description Renders Bravyicons SunIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SunIcon: BravyIconsIcon;

/**
 * @component @name TagUserIcon
 * @description Renders Bravyicons TagUserIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TagUserIcon: BravyIconsIcon;

/**
 * @component @name TextBlockIcon
 * @description Renders Bravyicons TextBlockIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextBlockIcon: BravyIconsIcon;

/**
 * @component @name TextBoldIcon
 * @description Renders Bravyicons TextBoldIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextBoldIcon: BravyIconsIcon;

/**
 * @component @name TextItalicIcon
 * @description Renders Bravyicons TextItalicIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextItalicIcon: BravyIconsIcon;

/**
 * @component @name TextUnderlineIcon
 * @description Renders Bravyicons TextUnderlineIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextUnderlineIcon: BravyIconsIcon;

/**
 * @component @name TextIcon
 * @description Renders Bravyicons TextIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextIcon: BravyIconsIcon;

/**
 * @component @name TextalignCenterIcon
 * @description Renders Bravyicons TextalignCenterIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextalignCenterIcon: BravyIconsIcon;

/**
 * @component @name TextalignJustifycenterIcon
 * @description Renders Bravyicons TextalignJustifycenterIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextalignJustifycenterIcon: BravyIconsIcon;

/**
 * @component @name TextalignJustifyleftIcon
 * @description Renders Bravyicons TextalignJustifyleftIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextalignJustifyleftIcon: BravyIconsIcon;

/**
 * @component @name TextalignJustifyrightIcon
 * @description Renders Bravyicons TextalignJustifyrightIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextalignJustifyrightIcon: BravyIconsIcon;

/**
 * @component @name TextalignLeftIcon
 * @description Renders Bravyicons TextalignLeftIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextalignLeftIcon: BravyIconsIcon;

/**
 * @component @name TextalignRightIcon
 * @description Renders Bravyicons TextalignRightIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextalignRightIcon: BravyIconsIcon;

/**
 * @component @name TranslateIcon
 * @description Renders Bravyicons TranslateIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TranslateIcon: BravyIconsIcon;

/**
 * @component @name UndoIcon
 * @description Renders Bravyicons UndoIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UndoIcon: BravyIconsIcon;

/**
 * @component @name UserAddIcon
 * @description Renders Bravyicons UserAddIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserAddIcon: BravyIconsIcon;

/**
 * @component @name UserCirlceAddIcon
 * @description Renders Bravyicons UserCirlceAddIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserCirlceAddIcon: BravyIconsIcon;

/**
 * @component @name UserEditIcon
 * @description Renders Bravyicons UserEditIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserEditIcon: BravyIconsIcon;

/**
 * @component @name UserMinusIcon
 * @description Renders Bravyicons UserMinusIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserMinusIcon: BravyIconsIcon;

/**
 * @component @name UserOctagonIcon
 * @description Renders Bravyicons UserOctagonIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserOctagonIcon: BravyIconsIcon;

/**
 * @component @name UserRemoveIcon
 * @description Renders Bravyicons UserRemoveIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserRemoveIcon: BravyIconsIcon;

/**
 * @component @name UserSearchIcon
 * @description Renders Bravyicons UserSearchIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserSearchIcon: BravyIconsIcon;

/**
 * @component @name UserSquareIcon
 * @description Renders Bravyicons UserSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserSquareIcon: BravyIconsIcon;

/**
 * @component @name UserTagIcon
 * @description Renders Bravyicons UserTagIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserTagIcon: BravyIconsIcon;

/**
 * @component @name UserTickIcon
 * @description Renders Bravyicons UserTickIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserTickIcon: BravyIconsIcon;

/**
 * @component @name UserIcon
 * @description Renders Bravyicons UserIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserIcon: BravyIconsIcon;

/**
 * @component @name VideoAddIcon
 * @description Renders Bravyicons VideoAddIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoAddIcon: BravyIconsIcon;

/**
 * @component @name VideoCircleIcon
 * @description Renders Bravyicons VideoCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoCircleIcon: BravyIconsIcon;

/**
 * @component @name VideoHorizontalIcon
 * @description Renders Bravyicons VideoHorizontalIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoHorizontalIcon: BravyIconsIcon;

/**
 * @component @name VideoOctagonIcon
 * @description Renders Bravyicons VideoOctagonIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoOctagonIcon: BravyIconsIcon;

/**
 * @component @name VideoPlayIcon
 * @description Renders Bravyicons VideoPlayIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoPlayIcon: BravyIconsIcon;

/**
 * @component @name VideoRemoveIcon
 * @description Renders Bravyicons VideoRemoveIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoRemoveIcon: BravyIconsIcon;

/**
 * @component @name VideoSlashIcon
 * @description Renders Bravyicons VideoSlashIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoSlashIcon: BravyIconsIcon;

/**
 * @component @name VideoSquareIcon
 * @description Renders Bravyicons VideoSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoSquareIcon: BravyIconsIcon;

/**
 * @component @name VideoTickIcon
 * @description Renders Bravyicons VideoTickIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoTickIcon: BravyIconsIcon;

/**
 * @component @name VideoTimeIcon
 * @description Renders Bravyicons VideoTimeIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoTimeIcon: BravyIconsIcon;

/**
 * @component @name VideoVerticalIcon
 * @description Renders Bravyicons VideoVerticalIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoVerticalIcon: BravyIconsIcon;

/**
 * @component @name VideoIcon
 * @description Renders Bravyicons VideoIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoIcon: BravyIconsIcon;

/**
 * @component @name VoiceCricleIcon
 * @description Renders Bravyicons VoiceCricleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VoiceCricleIcon: BravyIconsIcon;

/**
 * @component @name VoiceSquareIcon
 * @description Renders Bravyicons VoiceSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VoiceSquareIcon: BravyIconsIcon;

/**
 * @component @name VolumeCrossIcon
 * @description Renders Bravyicons VolumeCrossIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VolumeCrossIcon: BravyIconsIcon;

/**
 * @component @name VolumeHighIcon
 * @description Renders Bravyicons VolumeHighIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VolumeHighIcon: BravyIconsIcon;

/**
 * @component @name VolumeLow1Icon
 * @description Renders Bravyicons VolumeLow1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VolumeLow1Icon: BravyIconsIcon;

/**
 * @component @name VolumeLowIcon
 * @description Renders Bravyicons VolumeLowIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VolumeLowIcon: BravyIconsIcon;

/**
 * @component @name VolumeMuteIcon
 * @description Renders Bravyicons VolumeMuteIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VolumeMuteIcon: BravyIconsIcon;

/**
 * @component @name VolumeSlashIcon
 * @description Renders Bravyicons VolumeSlashIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VolumeSlashIcon: BravyIconsIcon;

/**
 * @component @name VolumeUpIcon
 * @description Renders Bravyicons VolumeUpIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VolumeUpIcon: BravyIconsIcon;

/**
 * @component @name Wind2Icon
 * @description Renders Bravyicons Wind2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Wind2Icon: BravyIconsIcon;

/**
 * @component @name WindIcon
 * @description Renders Bravyicons WindIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WindIcon: BravyIconsIcon;

/**
 * @component @name Camera2Icon
 * @description Renders Bravyicons Camera2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Camera2Icon: BravyIconsIcon;

/**
 * @component @name TruckIcon
 * @description Renders Bravyicons TruckIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TruckIcon: BravyIconsIcon;

/**
 * @component @name Profile2Icon
 * @description Renders Bravyicons Profile2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Profile2Icon: BravyIconsIcon;

/**
 * @component @name LinkAltIcon
 * @description Renders Bravyicons LinkAltIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LinkAltIcon: BravyIconsIcon;

/**
 * @component @name PercentCircleIcon
 * @description Renders Bravyicons PercentCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PercentCircleIcon: BravyIconsIcon;

/**
 * @component @name CirclesIcon
 * @description Renders Bravyicons CirclesIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CirclesIcon: BravyIconsIcon;

/**
 * @component @name Redo2Icon
 * @description Renders Bravyicons Redo2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Redo2Icon: BravyIconsIcon;

/**
 * @component @name AlternativeIcon
 * @description Renders Bravyicons AlternativeIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AlternativeIcon: BravyIconsIcon;

/**
 * @component @name AmountIcon
 * @description Renders Bravyicons AmountIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AmountIcon: BravyIconsIcon;

/**
 * @component @name ArchiveIcon
 * @description Renders Bravyicons ArchiveIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArchiveIcon: BravyIconsIcon;

/**
 * @component @name AttentionIcon
 * @description Renders Bravyicons AttentionIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AttentionIcon: BravyIconsIcon;

/**
 * @component @name BabyIcon
 * @description Renders Bravyicons BabyIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BabyIcon: BravyIconsIcon;

/**
 * @component @name Baby2Icon
 * @description Renders Bravyicons Baby2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Baby2Icon: BravyIconsIcon;

/**
 * @component @name BackIcon
 * @description Renders Bravyicons BackIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BackIcon: BravyIconsIcon;

/**
 * @component @name BackArrowIcon
 * @description Renders Bravyicons BackArrowIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BackArrowIcon: BravyIconsIcon;

/**
 * @component @name BagIcon
 * @description Renders Bravyicons BagIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BagIcon: BravyIconsIcon;

/**
 * @component @name BellIcon
 * @description Renders Bravyicons BellIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BellIcon: BravyIconsIcon;

/**
 * @component @name BicycleIcon
 * @description Renders Bravyicons BicycleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BicycleIcon: BravyIconsIcon;

/**
 * @component @name Bicycle2Icon
 * @description Renders Bravyicons Bicycle2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bicycle2Icon: BravyIconsIcon;

/**
 * @component @name BirthdayIcon
 * @description Renders Bravyicons BirthdayIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BirthdayIcon: BravyIconsIcon;

/**
 * @component @name BoxIcon
 * @description Renders Bravyicons BoxIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BoxIcon: BravyIconsIcon;

/**
 * @component @name BrushIcon
 * @description Renders Bravyicons BrushIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BrushIcon: BravyIconsIcon;

/**
 * @component @name BusinessIcon
 * @description Renders Bravyicons BusinessIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BusinessIcon: BravyIconsIcon;

/**
 * @component @name CalenderIcon
 * @description Renders Bravyicons CalenderIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CalenderIcon: BravyIconsIcon;

/**
 * @component @name CallcentarIcon
 * @description Renders Bravyicons CallcentarIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CallcentarIcon: BravyIconsIcon;

/**
 * @component @name CartIcon
 * @description Renders Bravyicons CartIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CartIcon: BravyIconsIcon;

/**
 * @component @name CashIcon
 * @description Renders Bravyicons CashIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CashIcon: BravyIconsIcon;

/**
 * @component @name CategoryIcon
 * @description Renders Bravyicons CategoryIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CategoryIcon: BravyIconsIcon;

/**
 * @component @name ChartSquareIcon
 * @description Renders Bravyicons ChartSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ChartSquareIcon: BravyIconsIcon;

/**
 * @component @name ChatIcon
 * @description Renders Bravyicons ChatIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ChatIcon: BravyIconsIcon;

/**
 * @component @name CheckBoxIcon
 * @description Renders Bravyicons CheckBoxIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CheckBoxIcon: BravyIconsIcon;

/**
 * @component @name CheckedIcon
 * @description Renders Bravyicons CheckedIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CheckedIcon: BravyIconsIcon;

/**
 * @component @name CloseIcon
 * @description Renders Bravyicons CloseIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloseIcon: BravyIconsIcon;

/**
 * @component @name CloseCircleIcon
 * @description Renders Bravyicons CloseCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloseCircleIcon: BravyIconsIcon;

/**
 * @component @name EyeIcon
 * @description Renders Bravyicons EyeIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EyeIcon: BravyIconsIcon;

/**
 * @component @name EyeSlashIcon
 * @description Renders Bravyicons EyeSlashIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EyeSlashIcon: BravyIconsIcon;

/**
 * @component @name FaqIcon
 * @description Renders Bravyicons FaqIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FaqIcon: BravyIconsIcon;

/**
 * @component @name FemaleIcon
 * @description Renders Bravyicons FemaleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FemaleIcon: BravyIconsIcon;

/**
 * @component @name FilterIcon
 * @description Renders Bravyicons FilterIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FilterIcon: BravyIconsIcon;

/**
 * @component @name Filter2Icon
 * @description Renders Bravyicons Filter2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Filter2Icon: BravyIconsIcon;

/**
 * @component @name FullRedoIcon
 * @description Renders Bravyicons FullRedoIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FullRedoIcon: BravyIconsIcon;

/**
 * @component @name GenderIcon
 * @description Renders Bravyicons GenderIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GenderIcon: BravyIconsIcon;

/**
 * @component @name Gender2CompIcon
 * @description Renders Bravyicons Gender2CompIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Gender2CompIcon: BravyIconsIcon;

/**
 * @component @name Gender2CompManIcon
 * @description Renders Bravyicons Gender2CompManIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Gender2CompManIcon: BravyIconsIcon;

/**
 * @component @name Gender2CompWomanIcon
 * @description Renders Bravyicons Gender2CompWomanIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Gender2CompWomanIcon: BravyIconsIcon;

/**
 * @component @name GenderFaceChangeIcon
 * @description Renders Bravyicons GenderFaceChangeIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GenderFaceChangeIcon: BravyIconsIcon;

/**
 * @component @name GenderFaceManIcon
 * @description Renders Bravyicons GenderFaceManIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GenderFaceManIcon: BravyIconsIcon;

/**
 * @component @name GenderFaceWomanIcon
 * @description Renders Bravyicons GenderFaceWomanIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GenderFaceWomanIcon: BravyIconsIcon;

/**
 * @component @name GenderManAndWomanIcon
 * @description Renders Bravyicons GenderManAndWomanIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GenderManAndWomanIcon: BravyIconsIcon;

/**
 * @component @name GiftIcon
 * @description Renders Bravyicons GiftIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GiftIcon: BravyIconsIcon;

/**
 * @component @name GlobalIcon
 * @description Renders Bravyicons GlobalIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GlobalIcon: BravyIconsIcon;

/**
 * @component @name Group1Icon
 * @description Renders Bravyicons Group1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Group1Icon: BravyIconsIcon;

/**
 * @component @name HeartIcon
 * @description Renders Bravyicons HeartIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HeartIcon: BravyIconsIcon;

/**
 * @component @name HelpIcon
 * @description Renders Bravyicons HelpIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HelpIcon: BravyIconsIcon;

/**
 * @component @name HomeIcon
 * @description Renders Bravyicons HomeIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HomeIcon: BravyIconsIcon;

/**
 * @component @name HospitalIcon
 * @description Renders Bravyicons HospitalIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HospitalIcon: BravyIconsIcon;

/**
 * @component @name IdIcon
 * @description Renders Bravyicons IdIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const IdIcon: BravyIconsIcon;

/**
 * @component @name LanguagesIcon
 * @description Renders Bravyicons LanguagesIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LanguagesIcon: BravyIconsIcon;

/**
 * @component @name PaperclipAttachIcon
 * @description Renders Bravyicons PaperclipAttachIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PaperclipAttachIcon: BravyIconsIcon;

/**
 * @component @name PercentageSquareIcon
 * @description Renders Bravyicons PercentageSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PercentageSquareIcon: BravyIconsIcon;

/**
 * @component @name PhoneIcon
 * @description Renders Bravyicons PhoneIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PhoneIcon: BravyIconsIcon;

/**
 * @component @name PlusIcon
 * @description Renders Bravyicons PlusIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PlusIcon: BravyIconsIcon;

/**
 * @component @name PrescriptionsIcon
 * @description Renders Bravyicons PrescriptionsIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PrescriptionsIcon: BravyIconsIcon;

/**
 * @component @name Prescriptions2Icon
 * @description Renders Bravyicons Prescriptions2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Prescriptions2Icon: BravyIconsIcon;

/**
 * @component @name QrCodeIcon
 * @description Renders Bravyicons QrCodeIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QrCodeIcon: BravyIconsIcon;

/**
 * @component @name QuestionMarkIcon
 * @description Renders Bravyicons QuestionMarkIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QuestionMarkIcon: BravyIconsIcon;

/**
 * @component @name Receipt1Icon
 * @description Renders Bravyicons Receipt1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Receipt1Icon: BravyIconsIcon;

/**
 * @component @name Receipt21Icon
 * @description Renders Bravyicons Receipt21Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Receipt21Icon: BravyIconsIcon;

/**
 * @component @name Receipt2Icon
 * @description Renders Bravyicons Receipt2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Receipt2Icon: BravyIconsIcon;

/**
 * @component @name ReceiptAddIcon
 * @description Renders Bravyicons ReceiptAddIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptAddIcon: BravyIconsIcon;

/**
 * @component @name ReceiptDiscountIcon
 * @description Renders Bravyicons ReceiptDiscountIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptDiscountIcon: BravyIconsIcon;

/**
 * @component @name ReceiptDisscountIcon
 * @description Renders Bravyicons ReceiptDisscountIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptDisscountIcon: BravyIconsIcon;

/**
 * @component @name ReceiptEditIcon
 * @description Renders Bravyicons ReceiptEditIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptEditIcon: BravyIconsIcon;

/**
 * @component @name ReceiptItemIcon
 * @description Renders Bravyicons ReceiptItemIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptItemIcon: BravyIconsIcon;

/**
 * @component @name ReceiptMinusIcon
 * @description Renders Bravyicons ReceiptMinusIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptMinusIcon: BravyIconsIcon;

/**
 * @component @name ReceiptSearchIcon
 * @description Renders Bravyicons ReceiptSearchIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptSearchIcon: BravyIconsIcon;

/**
 * @component @name ReceiptTextIcon
 * @description Renders Bravyicons ReceiptTextIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptTextIcon: BravyIconsIcon;

/**
 * @component @name ReceiptIcon
 * @description Renders Bravyicons ReceiptIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptIcon: BravyIconsIcon;

/**
 * @component @name RecieptIcon
 * @description Renders Bravyicons RecieptIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RecieptIcon: BravyIconsIcon;

/**
 * @component @name RecycleIcon
 * @description Renders Bravyicons RecycleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RecycleIcon: BravyIconsIcon;

/**
 * @component @name WalletAdd1Icon
 * @description Renders Bravyicons WalletAdd1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WalletAdd1Icon: BravyIconsIcon;

/**
 * @component @name WalletAddIcon
 * @description Renders Bravyicons WalletAddIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WalletAddIcon: BravyIconsIcon;

/**
 * @component @name WalletCheckIcon
 * @description Renders Bravyicons WalletCheckIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WalletCheckIcon: BravyIconsIcon;

/**
 * @component @name WalletMinusIcon
 * @description Renders Bravyicons WalletMinusIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WalletMinusIcon: BravyIconsIcon;

/**
 * @component @name WalletMoneyIcon
 * @description Renders Bravyicons WalletMoneyIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WalletMoneyIcon: BravyIconsIcon;

/**
 * @component @name WalletRemoveIcon
 * @description Renders Bravyicons WalletRemoveIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WalletRemoveIcon: BravyIconsIcon;

/**
 * @component @name WalletSearchIcon
 * @description Renders Bravyicons WalletSearchIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WalletSearchIcon: BravyIconsIcon;

/**
 * @component @name WalletIcon
 * @description Renders Bravyicons WalletIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WalletIcon: BravyIconsIcon;

/**
 * @component @name WiFiIcon
 * @description Renders Bravyicons WiFiIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WiFiIcon: BravyIconsIcon;

declare const index_AirplaneIcon: typeof AirplaneIcon;
declare const index_AirplaneSquareIcon: typeof AirplaneSquareIcon;
declare const index_AlternativeIcon: typeof AlternativeIcon;
declare const index_AmountIcon: typeof AmountIcon;
declare const index_ArchiveIcon: typeof ArchiveIcon;
declare const index_ArrangeCircle2Icon: typeof ArrangeCircle2Icon;
declare const index_ArrangeCircleIcon: typeof ArrangeCircleIcon;
declare const index_ArrangeSquare2Icon: typeof ArrangeSquare2Icon;
declare const index_ArrangeSquareIcon: typeof ArrangeSquareIcon;
declare const index_Arrow2Icon: typeof Arrow2Icon;
declare const index_Arrow3Icon: typeof Arrow3Icon;
declare const index_ArrowBottomIcon: typeof ArrowBottomIcon;
declare const index_ArrowCircleDownIcon: typeof ArrowCircleDownIcon;
declare const index_ArrowCircleLeftIcon: typeof ArrowCircleLeftIcon;
declare const index_ArrowCircleRightIcon: typeof ArrowCircleRightIcon;
declare const index_ArrowDown1Icon: typeof ArrowDown1Icon;
declare const index_ArrowDown2Icon: typeof ArrowDown2Icon;
declare const index_ArrowDownIcon: typeof ArrowDownIcon;
declare const index_ArrowLeft1Icon: typeof ArrowLeft1Icon;
declare const index_ArrowLeft2Icon: typeof ArrowLeft2Icon;
declare const index_ArrowLeft3Icon: typeof ArrowLeft3Icon;
declare const index_ArrowLeftIcon: typeof ArrowLeftIcon;
declare const index_ArrowRight1Icon: typeof ArrowRight1Icon;
declare const index_ArrowRight2Icon: typeof ArrowRight2Icon;
declare const index_ArrowRight3Icon: typeof ArrowRight3Icon;
declare const index_ArrowRightIcon: typeof ArrowRightIcon;
declare const index_ArrowSquareDownIcon: typeof ArrowSquareDownIcon;
declare const index_ArrowSquareLeftIcon: typeof ArrowSquareLeftIcon;
declare const index_ArrowSquareRightIcon: typeof ArrowSquareRightIcon;
declare const index_ArrowSquareUpIcon: typeof ArrowSquareUpIcon;
declare const index_ArrowSwapHorizontalIcon: typeof ArrowSwapHorizontalIcon;
declare const index_ArrowUp1Icon: typeof ArrowUp1Icon;
declare const index_ArrowUp2Icon: typeof ArrowUp2Icon;
declare const index_ArrowUp3Icon: typeof ArrowUp3Icon;
declare const index_ArrowUpIcon: typeof ArrowUpIcon;
declare const index_AttachCircleIcon: typeof AttachCircleIcon;
declare const index_AttachSquareIcon: typeof AttachSquareIcon;
declare const index_AttentionIcon: typeof AttentionIcon;
declare const index_AudioSquareIcon: typeof AudioSquareIcon;
declare const index_Baby2Icon: typeof Baby2Icon;
declare const index_BabyIcon: typeof BabyIcon;
declare const index_BackArrowIcon: typeof BackArrowIcon;
declare const index_BackIcon: typeof BackIcon;
declare const index_BackSquareIcon: typeof BackSquareIcon;
declare const index_Backward10SecondsIcon: typeof Backward10SecondsIcon;
declare const index_Backward15SecondsIcon: typeof Backward15SecondsIcon;
declare const index_Backward5SecondsIcon: typeof Backward5SecondsIcon;
declare const index_BackwardIcon: typeof BackwardIcon;
declare const index_BagIcon: typeof BagIcon;
declare const index_BellIcon: typeof BellIcon;
declare const index_Bicycle2Icon: typeof Bicycle2Icon;
declare const index_BicycleIcon: typeof BicycleIcon;
declare const index_BirthdayIcon: typeof BirthdayIcon;
declare const index_BoxIcon: typeof BoxIcon;
declare const index_BrushIcon: typeof BrushIcon;
declare const index_BusIcon: typeof BusIcon;
declare const index_BusinessIcon: typeof BusinessIcon;
declare const index_CalenderIcon: typeof CalenderIcon;
declare const index_CallcentarIcon: typeof CallcentarIcon;
declare const index_Camera2Icon: typeof Camera2Icon;
declare const index_CameraIcon: typeof CameraIcon;
declare const index_CameraSlashIcon: typeof CameraSlashIcon;
declare const index_CarIcon: typeof CarIcon;
declare const index_CartIcon: typeof CartIcon;
declare const index_CashIcon: typeof CashIcon;
declare const index_CategoryIcon: typeof CategoryIcon;
declare const index_ChartSquareIcon: typeof ChartSquareIcon;
declare const index_ChatIcon: typeof ChatIcon;
declare const index_CheckBoxIcon: typeof CheckBoxIcon;
declare const index_CheckedIcon: typeof CheckedIcon;
declare const index_CirclesIcon: typeof CirclesIcon;
declare const index_CloseCircleIcon: typeof CloseCircleIcon;
declare const index_CloseIcon: typeof CloseIcon;
declare const index_CloudCrossIcon: typeof CloudCrossIcon;
declare const index_CloudDrizzleIcon: typeof CloudDrizzleIcon;
declare const index_CloudFogIcon: typeof CloudFogIcon;
declare const index_CloudIcon: typeof CloudIcon;
declare const index_CloudLightningIcon: typeof CloudLightningIcon;
declare const index_CloudMinusIcon: typeof CloudMinusIcon;
declare const index_CloudNotifIcon: typeof CloudNotifIcon;
declare const index_CloudPlusIcon: typeof CloudPlusIcon;
declare const index_CloudSnowIcon: typeof CloudSnowIcon;
declare const index_CloudSunnyIcon: typeof CloudSunnyIcon;
declare const index_ConvertIcon: typeof ConvertIcon;
declare const index_DevicesIcon: typeof DevicesIcon;
declare const index_DrivingIcon: typeof DrivingIcon;
declare const index_DropIcon: typeof DropIcon;
declare const index_EraserIcon: typeof EraserIcon;
declare const index_Export1Icon: typeof Export1Icon;
declare const index_Export2Icon: typeof Export2Icon;
declare const index_Export3Icon: typeof Export3Icon;
declare const index_ExportIcon: typeof ExportIcon;
declare const index_EyeIcon: typeof EyeIcon;
declare const index_EyeSlashIcon: typeof EyeSlashIcon;
declare const index_FaqIcon: typeof FaqIcon;
declare const index_FemaleIcon: typeof FemaleIcon;
declare const index_Filter2Icon: typeof Filter2Icon;
declare const index_FilterIcon: typeof FilterIcon;
declare const index_FirstlineIcon: typeof FirstlineIcon;
declare const index_FlashIcon: typeof FlashIcon;
declare const index_Folder2Icon: typeof Folder2Icon;
declare const index_FolderAddIcon: typeof FolderAddIcon;
declare const index_FolderCloudIcon: typeof FolderCloudIcon;
declare const index_FolderCrossIcon: typeof FolderCrossIcon;
declare const index_FolderFavoriteIcon: typeof FolderFavoriteIcon;
declare const index_FolderIcon: typeof FolderIcon;
declare const index_FolderMinusIcon: typeof FolderMinusIcon;
declare const index_FolderOpenIcon: typeof FolderOpenIcon;
declare const index_Forward10SecondsIcon: typeof Forward10SecondsIcon;
declare const index_Forward15SecondsIcon: typeof Forward15SecondsIcon;
declare const index_Forward5SecondsIcon: typeof Forward5SecondsIcon;
declare const index_ForwardIcon: typeof ForwardIcon;
declare const index_ForwardSquareIcon: typeof ForwardSquareIcon;
declare const index_Frame1Icon: typeof Frame1Icon;
declare const index_Frame2Icon: typeof Frame2Icon;
declare const index_FrameIcon: typeof FrameIcon;
declare const index_FullRedoIcon: typeof FullRedoIcon;
declare const index_GalleryAddIcon: typeof GalleryAddIcon;
declare const index_GalleryEditIcon: typeof GalleryEditIcon;
declare const index_GalleryExportIcon: typeof GalleryExportIcon;
declare const index_GalleryFavoriteIcon: typeof GalleryFavoriteIcon;
declare const index_GalleryIcon: typeof GalleryIcon;
declare const index_GalleryImportIcon: typeof GalleryImportIcon;
declare const index_GalleryRemoveIcon: typeof GalleryRemoveIcon;
declare const index_GallerySlashIcon: typeof GallerySlashIcon;
declare const index_GalleryTickIcon: typeof GalleryTickIcon;
declare const index_GasStationIcon: typeof GasStationIcon;
declare const index_Gender2CompIcon: typeof Gender2CompIcon;
declare const index_Gender2CompManIcon: typeof Gender2CompManIcon;
declare const index_Gender2CompWomanIcon: typeof Gender2CompWomanIcon;
declare const index_GenderFaceChangeIcon: typeof GenderFaceChangeIcon;
declare const index_GenderFaceManIcon: typeof GenderFaceManIcon;
declare const index_GenderFaceWomanIcon: typeof GenderFaceWomanIcon;
declare const index_GenderIcon: typeof GenderIcon;
declare const index_GenderManAndWomanIcon: typeof GenderManAndWomanIcon;
declare const index_GiftIcon: typeof GiftIcon;
declare const index_GlobalIcon: typeof GlobalIcon;
declare const index_Group1Icon: typeof Group1Icon;
declare const index_GroupIcon: typeof GroupIcon;
declare const index_HeartIcon: typeof HeartIcon;
declare const index_HelpIcon: typeof HelpIcon;
declare const index_HomeIcon: typeof HomeIcon;
declare const index_HospitalIcon: typeof HospitalIcon;
declare const index_IdIcon: typeof IdIcon;
declare const index_ImageIcon: typeof ImageIcon;
declare const index_Import1Icon: typeof Import1Icon;
declare const index_Import2Icon: typeof Import2Icon;
declare const index_ImportIcon: typeof ImportIcon;
declare const index_LanguageCircleIcon: typeof LanguageCircleIcon;
declare const index_LanguageSquareIcon: typeof LanguageSquareIcon;
declare const index_LanguagesIcon: typeof LanguagesIcon;
declare const index_Link1Icon: typeof Link1Icon;
declare const index_Link21Icon: typeof Link21Icon;
declare const index_Link2Icon: typeof Link2Icon;
declare const index_LinkAltIcon: typeof LinkAltIcon;
declare const index_LinkCircleIcon: typeof LinkCircleIcon;
declare const index_LinkIcon: typeof LinkIcon;
declare const index_LinkSquareIcon: typeof LinkSquareIcon;
declare const index_Login1Icon: typeof Login1Icon;
declare const index_LoginIcon: typeof LoginIcon;
declare const index_Logout1Icon: typeof Logout1Icon;
declare const index_LogoutIcon: typeof LogoutIcon;
declare const index_MaximizeCircleIcon: typeof MaximizeCircleIcon;
declare const index_MaximizeIcon: typeof MaximizeIcon;
declare const index_Microphone2Icon: typeof Microphone2Icon;
declare const index_MicrophoneIcon: typeof MicrophoneIcon;
declare const index_MicrophoneSlash1Icon: typeof MicrophoneSlash1Icon;
declare const index_MicrophoneSlashIcon: typeof MicrophoneSlashIcon;
declare const index_MiniMusicSqaureIcon: typeof MiniMusicSqaureIcon;
declare const index_MoonIcon: typeof MoonIcon;
declare const index_MusicCircleIcon: typeof MusicCircleIcon;
declare const index_MusicDashboardIcon: typeof MusicDashboardIcon;
declare const index_MusicFilterIcon: typeof MusicFilterIcon;
declare const index_MusicIcon: typeof MusicIcon;
declare const index_MusicLibrary2Icon: typeof MusicLibrary2Icon;
declare const index_MusicPlaylistIcon: typeof MusicPlaylistIcon;
declare const index_MusicSquareAddIcon: typeof MusicSquareAddIcon;
declare const index_MusicSquareIcon: typeof MusicSquareIcon;
declare const index_MusicSquareRemoveIcon: typeof MusicSquareRemoveIcon;
declare const index_MusicSquareSearchIcon: typeof MusicSquareSearchIcon;
declare const index_MusicnoteIcon: typeof MusicnoteIcon;
declare const index_NextIcon: typeof NextIcon;
declare const index_NoteSquareIcon: typeof NoteSquareIcon;
declare const index_Paperclip2Icon: typeof Paperclip2Icon;
declare const index_PaperclipAttachIcon: typeof PaperclipAttachIcon;
declare const index_PaperclipIcon: typeof PaperclipIcon;
declare const index_PauseCircleIcon: typeof PauseCircleIcon;
declare const index_PauseIcon: typeof PauseIcon;
declare const index_PeopleIcon: typeof PeopleIcon;
declare const index_PercentCircleIcon: typeof PercentCircleIcon;
declare const index_PercentageSquareIcon: typeof PercentageSquareIcon;
declare const index_PharagraphspacingIcon: typeof PharagraphspacingIcon;
declare const index_PhoneIcon: typeof PhoneIcon;
declare const index_PlayAddIcon: typeof PlayAddIcon;
declare const index_PlayCircleIcon: typeof PlayCircleIcon;
declare const index_PlayCricleIcon: typeof PlayCricleIcon;
declare const index_PlayIcon: typeof PlayIcon;
declare const index_PlayRemoveIcon: typeof PlayRemoveIcon;
declare const index_PlusIcon: typeof PlusIcon;
declare const index_Prescriptions2Icon: typeof Prescriptions2Icon;
declare const index_PrescriptionsIcon: typeof PrescriptionsIcon;
declare const index_PreviousIcon: typeof PreviousIcon;
declare const index_Profile2Icon: typeof Profile2Icon;
declare const index_Profile2UserIcon: typeof Profile2UserIcon;
declare const index_ProfileAddIcon: typeof ProfileAddIcon;
declare const index_ProfileCircleIcon: typeof ProfileCircleIcon;
declare const index_ProfileDeleteIcon: typeof ProfileDeleteIcon;
declare const index_ProfileIcon: typeof ProfileIcon;
declare const index_ProfileRemoveIcon: typeof ProfileRemoveIcon;
declare const index_ProfileTickIcon: typeof ProfileTickIcon;
declare const index_QrCodeIcon: typeof QrCodeIcon;
declare const index_QuestionMarkIcon: typeof QuestionMarkIcon;
declare const index_QuoteDownCircleIcon: typeof QuoteDownCircleIcon;
declare const index_QuoteDownIcon: typeof QuoteDownIcon;
declare const index_QuoteDownSquareIcon: typeof QuoteDownSquareIcon;
declare const index_QuoteUpCircleIcon: typeof QuoteUpCircleIcon;
declare const index_QuoteUpIcon: typeof QuoteUpIcon;
declare const index_QuoteUpSquareIcon: typeof QuoteUpSquareIcon;
declare const index_RadioIcon: typeof RadioIcon;
declare const index_Receipt1Icon: typeof Receipt1Icon;
declare const index_Receipt21Icon: typeof Receipt21Icon;
declare const index_Receipt2Icon: typeof Receipt2Icon;
declare const index_ReceiptAddIcon: typeof ReceiptAddIcon;
declare const index_ReceiptDiscountIcon: typeof ReceiptDiscountIcon;
declare const index_ReceiptDisscountIcon: typeof ReceiptDisscountIcon;
declare const index_ReceiptEditIcon: typeof ReceiptEditIcon;
declare const index_ReceiptIcon: typeof ReceiptIcon;
declare const index_ReceiptItemIcon: typeof ReceiptItemIcon;
declare const index_ReceiptMinusIcon: typeof ReceiptMinusIcon;
declare const index_ReceiptSearchIcon: typeof ReceiptSearchIcon;
declare const index_ReceiptTextIcon: typeof ReceiptTextIcon;
declare const index_ReceiveSquare2Icon: typeof ReceiveSquare2Icon;
declare const index_ReceiveSquareIcon: typeof ReceiveSquareIcon;
declare const index_ReceivedIcon: typeof ReceivedIcon;
declare const index_RecieptIcon: typeof RecieptIcon;
declare const index_RecordCircleIcon: typeof RecordCircleIcon;
declare const index_RecordIcon: typeof RecordIcon;
declare const index_RecycleIcon: typeof RecycleIcon;
declare const index_Redo2Icon: typeof Redo2Icon;
declare const index_RedoIcon: typeof RedoIcon;
declare const index_Refresh2Icon: typeof Refresh2Icon;
declare const index_RefreshCircleIcon: typeof RefreshCircleIcon;
declare const index_RefreshIcon: typeof RefreshIcon;
declare const index_RefreshLeftSquareIcon: typeof RefreshLeftSquareIcon;
declare const index_RefreshRightSquareIcon: typeof RefreshRightSquareIcon;
declare const index_RefreshSquare2Icon: typeof RefreshSquare2Icon;
declare const index_RepeatCircleIcon: typeof RepeatCircleIcon;
declare const index_RepeatIcon: typeof RepeatIcon;
declare const index_RepeateMusicIcon: typeof RepeateMusicIcon;
declare const index_RepeateOneIcon: typeof RepeateOneIcon;
declare const index_RotateLeftIcon: typeof RotateLeftIcon;
declare const index_RotateRightIcon: typeof RotateRightIcon;
declare const index_ScissorIcon: typeof ScissorIcon;
declare const index_ScreenmirroringIcon: typeof ScreenmirroringIcon;
declare const index_SendIcon: typeof SendIcon;
declare const index_SendSqaure2Icon: typeof SendSqaure2Icon;
declare const index_SendSquareIcon: typeof SendSquareIcon;
declare const index_ShipIcon: typeof ShipIcon;
declare const index_SmallcapsIcon: typeof SmallcapsIcon;
declare const index_SmartCarIcon: typeof SmartCarIcon;
declare const index_StopCircleIcon: typeof StopCircleIcon;
declare const index_StopIcon: typeof StopIcon;
declare const index_SubtitleIcon: typeof SubtitleIcon;
declare const index_Sun1Icon: typeof Sun1Icon;
declare const index_SunFogIcon: typeof SunFogIcon;
declare const index_SunIcon: typeof SunIcon;
declare const index_TagUserIcon: typeof TagUserIcon;
declare const index_TextBlockIcon: typeof TextBlockIcon;
declare const index_TextBoldIcon: typeof TextBoldIcon;
declare const index_TextIcon: typeof TextIcon;
declare const index_TextItalicIcon: typeof TextItalicIcon;
declare const index_TextUnderlineIcon: typeof TextUnderlineIcon;
declare const index_TextalignCenterIcon: typeof TextalignCenterIcon;
declare const index_TextalignJustifycenterIcon: typeof TextalignJustifycenterIcon;
declare const index_TextalignJustifyleftIcon: typeof TextalignJustifyleftIcon;
declare const index_TextalignJustifyrightIcon: typeof TextalignJustifyrightIcon;
declare const index_TextalignLeftIcon: typeof TextalignLeftIcon;
declare const index_TextalignRightIcon: typeof TextalignRightIcon;
declare const index_TranslateIcon: typeof TranslateIcon;
declare const index_TruckIcon: typeof TruckIcon;
declare const index_UndoIcon: typeof UndoIcon;
declare const index_UserAddIcon: typeof UserAddIcon;
declare const index_UserCirlceAddIcon: typeof UserCirlceAddIcon;
declare const index_UserEditIcon: typeof UserEditIcon;
declare const index_UserIcon: typeof UserIcon;
declare const index_UserMinusIcon: typeof UserMinusIcon;
declare const index_UserOctagonIcon: typeof UserOctagonIcon;
declare const index_UserRemoveIcon: typeof UserRemoveIcon;
declare const index_UserSearchIcon: typeof UserSearchIcon;
declare const index_UserSquareIcon: typeof UserSquareIcon;
declare const index_UserTagIcon: typeof UserTagIcon;
declare const index_UserTickIcon: typeof UserTickIcon;
declare const index_VideoAddIcon: typeof VideoAddIcon;
declare const index_VideoCircleIcon: typeof VideoCircleIcon;
declare const index_VideoHorizontalIcon: typeof VideoHorizontalIcon;
declare const index_VideoIcon: typeof VideoIcon;
declare const index_VideoOctagonIcon: typeof VideoOctagonIcon;
declare const index_VideoPlayIcon: typeof VideoPlayIcon;
declare const index_VideoRemoveIcon: typeof VideoRemoveIcon;
declare const index_VideoSlashIcon: typeof VideoSlashIcon;
declare const index_VideoSquareIcon: typeof VideoSquareIcon;
declare const index_VideoTickIcon: typeof VideoTickIcon;
declare const index_VideoTimeIcon: typeof VideoTimeIcon;
declare const index_VideoVerticalIcon: typeof VideoVerticalIcon;
declare const index_VoiceCricleIcon: typeof VoiceCricleIcon;
declare const index_VoiceSquareIcon: typeof VoiceSquareIcon;
declare const index_VolumeCrossIcon: typeof VolumeCrossIcon;
declare const index_VolumeHighIcon: typeof VolumeHighIcon;
declare const index_VolumeLow1Icon: typeof VolumeLow1Icon;
declare const index_VolumeLowIcon: typeof VolumeLowIcon;
declare const index_VolumeMuteIcon: typeof VolumeMuteIcon;
declare const index_VolumeSlashIcon: typeof VolumeSlashIcon;
declare const index_VolumeUpIcon: typeof VolumeUpIcon;
declare const index_WalletAdd1Icon: typeof WalletAdd1Icon;
declare const index_WalletAddIcon: typeof WalletAddIcon;
declare const index_WalletCheckIcon: typeof WalletCheckIcon;
declare const index_WalletIcon: typeof WalletIcon;
declare const index_WalletMinusIcon: typeof WalletMinusIcon;
declare const index_WalletMoneyIcon: typeof WalletMoneyIcon;
declare const index_WalletRemoveIcon: typeof WalletRemoveIcon;
declare const index_WalletSearchIcon: typeof WalletSearchIcon;
declare const index_WiFiIcon: typeof WiFiIcon;
declare const index_Wind2Icon: typeof Wind2Icon;
declare const index_WindIcon: typeof WindIcon;
declare namespace index {
  export {
    index_AirplaneIcon as AirplaneIcon,
    index_AirplaneSquareIcon as AirplaneSquareIcon,
    index_AlternativeIcon as AlternativeIcon,
    index_AmountIcon as AmountIcon,
    index_ArchiveIcon as ArchiveIcon,
    index_ArrangeCircle2Icon as ArrangeCircle2Icon,
    index_ArrangeCircleIcon as ArrangeCircleIcon,
    index_ArrangeSquare2Icon as ArrangeSquare2Icon,
    index_ArrangeSquareIcon as ArrangeSquareIcon,
    index_Arrow2Icon as Arrow2Icon,
    index_Arrow3Icon as Arrow3Icon,
    index_ArrowBottomIcon as ArrowBottomIcon,
    index_ArrowCircleDownIcon as ArrowCircleDownIcon,
    index_ArrowCircleLeftIcon as ArrowCircleLeftIcon,
    index_ArrowCircleRightIcon as ArrowCircleRightIcon,
    index_ArrowDown1Icon as ArrowDown1Icon,
    index_ArrowDown2Icon as ArrowDown2Icon,
    index_ArrowDownIcon as ArrowDownIcon,
    index_ArrowLeft1Icon as ArrowLeft1Icon,
    index_ArrowLeft2Icon as ArrowLeft2Icon,
    index_ArrowLeft3Icon as ArrowLeft3Icon,
    index_ArrowLeftIcon as ArrowLeftIcon,
    index_ArrowRight1Icon as ArrowRight1Icon,
    index_ArrowRight2Icon as ArrowRight2Icon,
    index_ArrowRight3Icon as ArrowRight3Icon,
    index_ArrowRightIcon as ArrowRightIcon,
    index_ArrowSquareDownIcon as ArrowSquareDownIcon,
    index_ArrowSquareLeftIcon as ArrowSquareLeftIcon,
    index_ArrowSquareRightIcon as ArrowSquareRightIcon,
    index_ArrowSquareUpIcon as ArrowSquareUpIcon,
    index_ArrowSwapHorizontalIcon as ArrowSwapHorizontalIcon,
    index_ArrowUp1Icon as ArrowUp1Icon,
    index_ArrowUp2Icon as ArrowUp2Icon,
    index_ArrowUp3Icon as ArrowUp3Icon,
    index_ArrowUpIcon as ArrowUpIcon,
    index_AttachCircleIcon as AttachCircleIcon,
    index_AttachSquareIcon as AttachSquareIcon,
    index_AttentionIcon as AttentionIcon,
    index_AudioSquareIcon as AudioSquareIcon,
    index_Baby2Icon as Baby2Icon,
    index_BabyIcon as BabyIcon,
    index_BackArrowIcon as BackArrowIcon,
    index_BackIcon as BackIcon,
    index_BackSquareIcon as BackSquareIcon,
    index_Backward10SecondsIcon as Backward10SecondsIcon,
    index_Backward15SecondsIcon as Backward15SecondsIcon,
    index_Backward5SecondsIcon as Backward5SecondsIcon,
    index_BackwardIcon as BackwardIcon,
    index_BagIcon as BagIcon,
    index_BellIcon as BellIcon,
    index_Bicycle2Icon as Bicycle2Icon,
    index_BicycleIcon as BicycleIcon,
    index_BirthdayIcon as BirthdayIcon,
    index_BoxIcon as BoxIcon,
    index_BrushIcon as BrushIcon,
    index_BusIcon as BusIcon,
    index_BusinessIcon as BusinessIcon,
    index_CalenderIcon as CalenderIcon,
    index_CallcentarIcon as CallcentarIcon,
    index_Camera2Icon as Camera2Icon,
    index_CameraIcon as CameraIcon,
    index_CameraSlashIcon as CameraSlashIcon,
    index_CarIcon as CarIcon,
    index_CartIcon as CartIcon,
    index_CashIcon as CashIcon,
    index_CategoryIcon as CategoryIcon,
    index_ChartSquareIcon as ChartSquareIcon,
    index_ChatIcon as ChatIcon,
    index_CheckBoxIcon as CheckBoxIcon,
    index_CheckedIcon as CheckedIcon,
    index_CirclesIcon as CirclesIcon,
    index_CloseCircleIcon as CloseCircleIcon,
    index_CloseIcon as CloseIcon,
    index_CloudCrossIcon as CloudCrossIcon,
    index_CloudDrizzleIcon as CloudDrizzleIcon,
    index_CloudFogIcon as CloudFogIcon,
    index_CloudIcon as CloudIcon,
    index_CloudLightningIcon as CloudLightningIcon,
    index_CloudMinusIcon as CloudMinusIcon,
    index_CloudNotifIcon as CloudNotifIcon,
    index_CloudPlusIcon as CloudPlusIcon,
    index_CloudSnowIcon as CloudSnowIcon,
    index_CloudSunnyIcon as CloudSunnyIcon,
    index_ConvertIcon as ConvertIcon,
    index_DevicesIcon as DevicesIcon,
    index_DrivingIcon as DrivingIcon,
    index_DropIcon as DropIcon,
    index_EraserIcon as EraserIcon,
    index_Export1Icon as Export1Icon,
    index_Export2Icon as Export2Icon,
    index_Export3Icon as Export3Icon,
    index_ExportIcon as ExportIcon,
    index_EyeIcon as EyeIcon,
    index_EyeSlashIcon as EyeSlashIcon,
    index_FaqIcon as FaqIcon,
    index_FemaleIcon as FemaleIcon,
    index_Filter2Icon as Filter2Icon,
    index_FilterIcon as FilterIcon,
    index_FirstlineIcon as FirstlineIcon,
    index_FlashIcon as FlashIcon,
    index_Folder2Icon as Folder2Icon,
    index_FolderAddIcon as FolderAddIcon,
    index_FolderCloudIcon as FolderCloudIcon,
    index_FolderCrossIcon as FolderCrossIcon,
    index_FolderFavoriteIcon as FolderFavoriteIcon,
    index_FolderIcon as FolderIcon,
    index_FolderMinusIcon as FolderMinusIcon,
    index_FolderOpenIcon as FolderOpenIcon,
    index_Forward10SecondsIcon as Forward10SecondsIcon,
    index_Forward15SecondsIcon as Forward15SecondsIcon,
    index_Forward5SecondsIcon as Forward5SecondsIcon,
    index_ForwardIcon as ForwardIcon,
    index_ForwardSquareIcon as ForwardSquareIcon,
    index_Frame1Icon as Frame1Icon,
    index_Frame2Icon as Frame2Icon,
    index_FrameIcon as FrameIcon,
    index_FullRedoIcon as FullRedoIcon,
    index_GalleryAddIcon as GalleryAddIcon,
    index_GalleryEditIcon as GalleryEditIcon,
    index_GalleryExportIcon as GalleryExportIcon,
    index_GalleryFavoriteIcon as GalleryFavoriteIcon,
    index_GalleryIcon as GalleryIcon,
    index_GalleryImportIcon as GalleryImportIcon,
    index_GalleryRemoveIcon as GalleryRemoveIcon,
    index_GallerySlashIcon as GallerySlashIcon,
    index_GalleryTickIcon as GalleryTickIcon,
    index_GasStationIcon as GasStationIcon,
    index_Gender2CompIcon as Gender2CompIcon,
    index_Gender2CompManIcon as Gender2CompManIcon,
    index_Gender2CompWomanIcon as Gender2CompWomanIcon,
    index_GenderFaceChangeIcon as GenderFaceChangeIcon,
    index_GenderFaceManIcon as GenderFaceManIcon,
    index_GenderFaceWomanIcon as GenderFaceWomanIcon,
    index_GenderIcon as GenderIcon,
    index_GenderManAndWomanIcon as GenderManAndWomanIcon,
    index_GiftIcon as GiftIcon,
    index_GlobalIcon as GlobalIcon,
    index_Group1Icon as Group1Icon,
    index_GroupIcon as GroupIcon,
    index_HeartIcon as HeartIcon,
    index_HelpIcon as HelpIcon,
    index_HomeIcon as HomeIcon,
    index_HospitalIcon as HospitalIcon,
    index_IdIcon as IdIcon,
    index_ImageIcon as ImageIcon,
    index_Import1Icon as Import1Icon,
    index_Import2Icon as Import2Icon,
    index_ImportIcon as ImportIcon,
    index_LanguageCircleIcon as LanguageCircleIcon,
    index_LanguageSquareIcon as LanguageSquareIcon,
    index_LanguagesIcon as LanguagesIcon,
    index_Link1Icon as Link1Icon,
    index_Link21Icon as Link21Icon,
    index_Link2Icon as Link2Icon,
    index_LinkAltIcon as LinkAltIcon,
    index_LinkCircleIcon as LinkCircleIcon,
    index_LinkIcon as LinkIcon,
    index_LinkSquareIcon as LinkSquareIcon,
    index_Login1Icon as Login1Icon,
    index_LoginIcon as LoginIcon,
    index_Logout1Icon as Logout1Icon,
    index_LogoutIcon as LogoutIcon,
    index_MaximizeCircleIcon as MaximizeCircleIcon,
    index_MaximizeIcon as MaximizeIcon,
    index_Microphone2Icon as Microphone2Icon,
    index_MicrophoneIcon as MicrophoneIcon,
    index_MicrophoneSlash1Icon as MicrophoneSlash1Icon,
    index_MicrophoneSlashIcon as MicrophoneSlashIcon,
    index_MiniMusicSqaureIcon as MiniMusicSqaureIcon,
    index_MoonIcon as MoonIcon,
    index_MusicCircleIcon as MusicCircleIcon,
    index_MusicDashboardIcon as MusicDashboardIcon,
    index_MusicFilterIcon as MusicFilterIcon,
    index_MusicIcon as MusicIcon,
    index_MusicLibrary2Icon as MusicLibrary2Icon,
    index_MusicPlaylistIcon as MusicPlaylistIcon,
    index_MusicSquareAddIcon as MusicSquareAddIcon,
    index_MusicSquareIcon as MusicSquareIcon,
    index_MusicSquareRemoveIcon as MusicSquareRemoveIcon,
    index_MusicSquareSearchIcon as MusicSquareSearchIcon,
    index_MusicnoteIcon as MusicnoteIcon,
    index_NextIcon as NextIcon,
    index_NoteSquareIcon as NoteSquareIcon,
    index_Paperclip2Icon as Paperclip2Icon,
    index_PaperclipAttachIcon as PaperclipAttachIcon,
    index_PaperclipIcon as PaperclipIcon,
    index_PauseCircleIcon as PauseCircleIcon,
    index_PauseIcon as PauseIcon,
    index_PeopleIcon as PeopleIcon,
    index_PercentCircleIcon as PercentCircleIcon,
    index_PercentageSquareIcon as PercentageSquareIcon,
    index_PharagraphspacingIcon as PharagraphspacingIcon,
    index_PhoneIcon as PhoneIcon,
    index_PlayAddIcon as PlayAddIcon,
    index_PlayCircleIcon as PlayCircleIcon,
    index_PlayCricleIcon as PlayCricleIcon,
    index_PlayIcon as PlayIcon,
    index_PlayRemoveIcon as PlayRemoveIcon,
    index_PlusIcon as PlusIcon,
    index_Prescriptions2Icon as Prescriptions2Icon,
    index_PrescriptionsIcon as PrescriptionsIcon,
    index_PreviousIcon as PreviousIcon,
    index_Profile2Icon as Profile2Icon,
    index_Profile2UserIcon as Profile2UserIcon,
    index_ProfileAddIcon as ProfileAddIcon,
    index_ProfileCircleIcon as ProfileCircleIcon,
    index_ProfileDeleteIcon as ProfileDeleteIcon,
    index_ProfileIcon as ProfileIcon,
    index_ProfileRemoveIcon as ProfileRemoveIcon,
    index_ProfileTickIcon as ProfileTickIcon,
    index_QrCodeIcon as QrCodeIcon,
    index_QuestionMarkIcon as QuestionMarkIcon,
    index_QuoteDownCircleIcon as QuoteDownCircleIcon,
    index_QuoteDownIcon as QuoteDownIcon,
    index_QuoteDownSquareIcon as QuoteDownSquareIcon,
    index_QuoteUpCircleIcon as QuoteUpCircleIcon,
    index_QuoteUpIcon as QuoteUpIcon,
    index_QuoteUpSquareIcon as QuoteUpSquareIcon,
    index_RadioIcon as RadioIcon,
    index_Receipt1Icon as Receipt1Icon,
    index_Receipt21Icon as Receipt21Icon,
    index_Receipt2Icon as Receipt2Icon,
    index_ReceiptAddIcon as ReceiptAddIcon,
    index_ReceiptDiscountIcon as ReceiptDiscountIcon,
    index_ReceiptDisscountIcon as ReceiptDisscountIcon,
    index_ReceiptEditIcon as ReceiptEditIcon,
    index_ReceiptIcon as ReceiptIcon,
    index_ReceiptItemIcon as ReceiptItemIcon,
    index_ReceiptMinusIcon as ReceiptMinusIcon,
    index_ReceiptSearchIcon as ReceiptSearchIcon,
    index_ReceiptTextIcon as ReceiptTextIcon,
    index_ReceiveSquare2Icon as ReceiveSquare2Icon,
    index_ReceiveSquareIcon as ReceiveSquareIcon,
    index_ReceivedIcon as ReceivedIcon,
    index_RecieptIcon as RecieptIcon,
    index_RecordCircleIcon as RecordCircleIcon,
    index_RecordIcon as RecordIcon,
    index_RecycleIcon as RecycleIcon,
    index_Redo2Icon as Redo2Icon,
    index_RedoIcon as RedoIcon,
    index_Refresh2Icon as Refresh2Icon,
    index_RefreshCircleIcon as RefreshCircleIcon,
    index_RefreshIcon as RefreshIcon,
    index_RefreshLeftSquareIcon as RefreshLeftSquareIcon,
    index_RefreshRightSquareIcon as RefreshRightSquareIcon,
    index_RefreshSquare2Icon as RefreshSquare2Icon,
    index_RepeatCircleIcon as RepeatCircleIcon,
    index_RepeatIcon as RepeatIcon,
    index_RepeateMusicIcon as RepeateMusicIcon,
    index_RepeateOneIcon as RepeateOneIcon,
    index_RotateLeftIcon as RotateLeftIcon,
    index_RotateRightIcon as RotateRightIcon,
    index_ScissorIcon as ScissorIcon,
    index_ScreenmirroringIcon as ScreenmirroringIcon,
    index_SendIcon as SendIcon,
    index_SendSqaure2Icon as SendSqaure2Icon,
    index_SendSquareIcon as SendSquareIcon,
    index_ShipIcon as ShipIcon,
    index_SmallcapsIcon as SmallcapsIcon,
    index_SmartCarIcon as SmartCarIcon,
    index_StopCircleIcon as StopCircleIcon,
    index_StopIcon as StopIcon,
    index_SubtitleIcon as SubtitleIcon,
    index_Sun1Icon as Sun1Icon,
    index_SunFogIcon as SunFogIcon,
    index_SunIcon as SunIcon,
    index_TagUserIcon as TagUserIcon,
    index_TextBlockIcon as TextBlockIcon,
    index_TextBoldIcon as TextBoldIcon,
    index_TextIcon as TextIcon,
    index_TextItalicIcon as TextItalicIcon,
    index_TextUnderlineIcon as TextUnderlineIcon,
    index_TextalignCenterIcon as TextalignCenterIcon,
    index_TextalignJustifycenterIcon as TextalignJustifycenterIcon,
    index_TextalignJustifyleftIcon as TextalignJustifyleftIcon,
    index_TextalignJustifyrightIcon as TextalignJustifyrightIcon,
    index_TextalignLeftIcon as TextalignLeftIcon,
    index_TextalignRightIcon as TextalignRightIcon,
    index_TranslateIcon as TranslateIcon,
    index_TruckIcon as TruckIcon,
    index_UndoIcon as UndoIcon,
    index_UserAddIcon as UserAddIcon,
    index_UserCirlceAddIcon as UserCirlceAddIcon,
    index_UserEditIcon as UserEditIcon,
    index_UserIcon as UserIcon,
    index_UserMinusIcon as UserMinusIcon,
    index_UserOctagonIcon as UserOctagonIcon,
    index_UserRemoveIcon as UserRemoveIcon,
    index_UserSearchIcon as UserSearchIcon,
    index_UserSquareIcon as UserSquareIcon,
    index_UserTagIcon as UserTagIcon,
    index_UserTickIcon as UserTickIcon,
    index_VideoAddIcon as VideoAddIcon,
    index_VideoCircleIcon as VideoCircleIcon,
    index_VideoHorizontalIcon as VideoHorizontalIcon,
    index_VideoIcon as VideoIcon,
    index_VideoOctagonIcon as VideoOctagonIcon,
    index_VideoPlayIcon as VideoPlayIcon,
    index_VideoRemoveIcon as VideoRemoveIcon,
    index_VideoSlashIcon as VideoSlashIcon,
    index_VideoSquareIcon as VideoSquareIcon,
    index_VideoTickIcon as VideoTickIcon,
    index_VideoTimeIcon as VideoTimeIcon,
    index_VideoVerticalIcon as VideoVerticalIcon,
    index_VoiceCricleIcon as VoiceCricleIcon,
    index_VoiceSquareIcon as VoiceSquareIcon,
    index_VolumeCrossIcon as VolumeCrossIcon,
    index_VolumeHighIcon as VolumeHighIcon,
    index_VolumeLow1Icon as VolumeLow1Icon,
    index_VolumeLowIcon as VolumeLowIcon,
    index_VolumeMuteIcon as VolumeMuteIcon,
    index_VolumeSlashIcon as VolumeSlashIcon,
    index_VolumeUpIcon as VolumeUpIcon,
    index_WalletAdd1Icon as WalletAdd1Icon,
    index_WalletAddIcon as WalletAddIcon,
    index_WalletCheckIcon as WalletCheckIcon,
    index_WalletIcon as WalletIcon,
    index_WalletMinusIcon as WalletMinusIcon,
    index_WalletMoneyIcon as WalletMoneyIcon,
    index_WalletRemoveIcon as WalletRemoveIcon,
    index_WalletSearchIcon as WalletSearchIcon,
    index_WiFiIcon as WiFiIcon,
    index_Wind2Icon as Wind2Icon,
    index_WindIcon as WindIcon,
  };
}

export { AirplaneIcon, AirplaneSquareIcon, AlternativeIcon, AmountIcon, ArchiveIcon, ArrangeCircle2Icon, ArrangeCircleIcon, ArrangeSquare2Icon, ArrangeSquareIcon, Arrow2Icon, Arrow3Icon, ArrowBottomIcon, ArrowCircleDownIcon, ArrowCircleLeftIcon, ArrowCircleRightIcon, ArrowDown1Icon, ArrowDown2Icon, ArrowDownIcon, ArrowLeft1Icon, ArrowLeft2Icon, ArrowLeft3Icon, ArrowLeftIcon, ArrowRight1Icon, ArrowRight2Icon, ArrowRight3Icon, ArrowRightIcon, ArrowSquareDownIcon, ArrowSquareLeftIcon, ArrowSquareRightIcon, ArrowSquareUpIcon, ArrowSwapHorizontalIcon, ArrowUp1Icon, ArrowUp2Icon, ArrowUp3Icon, ArrowUpIcon, AttachCircleIcon, AttachSquareIcon, AttentionIcon, AudioSquareIcon, Baby2Icon, BabyIcon, BackArrowIcon, BackIcon, BackSquareIcon, Backward10SecondsIcon, Backward15SecondsIcon, Backward5SecondsIcon, BackwardIcon, BagIcon, BellIcon, Bicycle2Icon, BicycleIcon, BirthdayIcon, BoxIcon, BrushIcon, BusIcon, BusinessIcon, CalenderIcon, CallcentarIcon, Camera2Icon, CameraIcon, CameraSlashIcon, CarIcon, CartIcon, CashIcon, CategoryIcon, ChartSquareIcon, ChatIcon, CheckBoxIcon, CheckedIcon, CirclesIcon, CloseCircleIcon, CloseIcon, CloudCrossIcon, CloudDrizzleIcon, CloudFogIcon, CloudIcon, CloudLightningIcon, CloudMinusIcon, CloudNotifIcon, CloudPlusIcon, CloudSnowIcon, CloudSunnyIcon, ConvertIcon, DevicesIcon, DrivingIcon, DropIcon, EraserIcon, Export1Icon, Export2Icon, Export3Icon, ExportIcon, EyeIcon, EyeSlashIcon, FaqIcon, FemaleIcon, Filter2Icon, FilterIcon, FirstlineIcon, FlashIcon, Folder2Icon, FolderAddIcon, FolderCloudIcon, FolderCrossIcon, FolderFavoriteIcon, FolderIcon, FolderMinusIcon, FolderOpenIcon, Forward10SecondsIcon, Forward15SecondsIcon, Forward5SecondsIcon, ForwardIcon, ForwardSquareIcon, Frame1Icon, Frame2Icon, FrameIcon, FullRedoIcon, GalleryAddIcon, GalleryEditIcon, GalleryExportIcon, GalleryFavoriteIcon, GalleryIcon, GalleryImportIcon, GalleryRemoveIcon, GallerySlashIcon, GalleryTickIcon, GasStationIcon, Gender2CompIcon, Gender2CompManIcon, Gender2CompWomanIcon, GenderFaceChangeIcon, GenderFaceManIcon, GenderFaceWomanIcon, GenderIcon, GenderManAndWomanIcon, GiftIcon, GlobalIcon, Group1Icon, GroupIcon, HeartIcon, HelpIcon, HomeIcon, HospitalIcon, IdIcon, ImageIcon, Import1Icon, Import2Icon, ImportIcon, LanguageCircleIcon, LanguageSquareIcon, LanguagesIcon, Link1Icon, Link21Icon, Link2Icon, LinkAltIcon, LinkCircleIcon, LinkIcon, LinkSquareIcon, Login1Icon, LoginIcon, Logout1Icon, LogoutIcon, MaximizeCircleIcon, MaximizeIcon, Microphone2Icon, MicrophoneIcon, MicrophoneSlash1Icon, MicrophoneSlashIcon, MiniMusicSqaureIcon, MoonIcon, MusicCircleIcon, MusicDashboardIcon, MusicFilterIcon, MusicIcon, MusicLibrary2Icon, MusicPlaylistIcon, MusicSquareAddIcon, MusicSquareIcon, MusicSquareRemoveIcon, MusicSquareSearchIcon, MusicnoteIcon, NextIcon, NoteSquareIcon, Paperclip2Icon, PaperclipAttachIcon, PaperclipIcon, PauseCircleIcon, PauseIcon, PeopleIcon, PercentCircleIcon, PercentageSquareIcon, PharagraphspacingIcon, PhoneIcon, PlayAddIcon, PlayCircleIcon, PlayCricleIcon, PlayIcon, PlayRemoveIcon, PlusIcon, Prescriptions2Icon, PrescriptionsIcon, PreviousIcon, Profile2Icon, Profile2UserIcon, ProfileAddIcon, ProfileCircleIcon, ProfileDeleteIcon, ProfileIcon, ProfileRemoveIcon, ProfileTickIcon, QrCodeIcon, QuestionMarkIcon, QuoteDownCircleIcon, QuoteDownIcon, QuoteDownSquareIcon, QuoteUpCircleIcon, QuoteUpIcon, QuoteUpSquareIcon, RadioIcon, Receipt1Icon, Receipt21Icon, Receipt2Icon, ReceiptAddIcon, ReceiptDiscountIcon, ReceiptDisscountIcon, ReceiptEditIcon, ReceiptIcon, ReceiptItemIcon, ReceiptMinusIcon, ReceiptSearchIcon, ReceiptTextIcon, ReceiveSquare2Icon, ReceiveSquareIcon, ReceivedIcon, RecieptIcon, RecordCircleIcon, RecordIcon, RecycleIcon, Redo2Icon, RedoIcon, Refresh2Icon, RefreshCircleIcon, RefreshIcon, RefreshLeftSquareIcon, RefreshRightSquareIcon, RefreshSquare2Icon, RepeatCircleIcon, RepeatIcon, RepeateMusicIcon, RepeateOneIcon, RotateLeftIcon, RotateRightIcon, ScissorIcon, ScreenmirroringIcon, SendIcon, SendSqaure2Icon, SendSquareIcon, ShipIcon, SmallcapsIcon, SmartCarIcon, StopCircleIcon, StopIcon, SubtitleIcon, Sun1Icon, SunFogIcon, SunIcon, TagUserIcon, TextBlockIcon, TextBoldIcon, TextIcon, TextItalicIcon, TextUnderlineIcon, TextalignCenterIcon, TextalignJustifycenterIcon, TextalignJustifyleftIcon, TextalignJustifyrightIcon, TextalignLeftIcon, TextalignRightIcon, TranslateIcon, TruckIcon, UndoIcon, UserAddIcon, UserCirlceAddIcon, UserEditIcon, UserIcon, UserMinusIcon, UserOctagonIcon, UserRemoveIcon, UserSearchIcon, UserSquareIcon, UserTagIcon, UserTickIcon, VideoAddIcon, VideoCircleIcon, VideoHorizontalIcon, VideoIcon, VideoOctagonIcon, VideoPlayIcon, VideoRemoveIcon, VideoSlashIcon, VideoSquareIcon, VideoTickIcon, VideoTimeIcon, VideoVerticalIcon, VoiceCricleIcon, VoiceSquareIcon, VolumeCrossIcon, VolumeHighIcon, VolumeLow1Icon, VolumeLowIcon, VolumeMuteIcon, VolumeSlashIcon, VolumeUpIcon, WalletAdd1Icon, WalletAddIcon, WalletCheckIcon, WalletIcon, WalletMinusIcon, WalletMoneyIcon, WalletRemoveIcon, WalletSearchIcon, WiFiIcon, Wind2Icon, WindIcon, createBravyIconsComponent, index as icons };
export type { BravyIconsIcon, BravyIconsProps, IconSvgObject };
