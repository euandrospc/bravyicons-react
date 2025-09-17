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
 * @component @name CloudIcon
 * @description Renders Bravyicons CloudIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudIcon: BravyIconsIcon;

/**
 * @component @name CloudUploadIcon
 * @description Renders Bravyicons CloudUploadIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudUploadIcon: BravyIconsIcon;

/**
 * @component @name CompoundIcon
 * @description Renders Bravyicons CompoundIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CompoundIcon: BravyIconsIcon;

/**
 * @component @name CreditCardIcon
 * @description Renders Bravyicons CreditCardIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CreditCardIcon: BravyIconsIcon;

/**
 * @component @name CreditCardPlusIcon
 * @description Renders Bravyicons CreditCardPlusIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CreditCardPlusIcon: BravyIconsIcon;

/**
 * @component @name DeliveryBoxIcon
 * @description Renders Bravyicons DeliveryBoxIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DeliveryBoxIcon: BravyIconsIcon;

/**
 * @component @name DoctorEarphoneIcon
 * @description Renders Bravyicons DoctorEarphoneIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DoctorEarphoneIcon: BravyIconsIcon;

/**
 * @component @name DotsMenuIcon
 * @description Renders Bravyicons DotsMenuIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DotsMenuIcon: BravyIconsIcon;

/**
 * @component @name EditIcon
 * @description Renders Bravyicons EditIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EditIcon: BravyIconsIcon;

/**
 * @component @name EditPenIcon
 * @description Renders Bravyicons EditPenIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EditPenIcon: BravyIconsIcon;

/**
 * @component @name EmailIcon
 * @description Renders Bravyicons EmailIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EmailIcon: BravyIconsIcon;

/**
 * @component @name EqualIcon
 * @description Renders Bravyicons EqualIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EqualIcon: BravyIconsIcon;

/**
 * @component @name ExclamationIcon
 * @description Renders Bravyicons ExclamationIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ExclamationIcon: BravyIconsIcon;

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
 * @component @name GalleryIcon
 * @description Renders Bravyicons GalleryIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryIcon: BravyIconsIcon;

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
 * @component @name LinkIcon
 * @description Renders Bravyicons LinkIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LinkIcon: BravyIconsIcon;

/**
 * @component @name LocationIcon
 * @description Renders Bravyicons LocationIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LocationIcon: BravyIconsIcon;

/**
 * @component @name LocationTargetIcon
 * @description Renders Bravyicons LocationTargetIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LocationTargetIcon: BravyIconsIcon;

/**
 * @component @name LockPasswordIcon
 * @description Renders Bravyicons LockPasswordIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LockPasswordIcon: BravyIconsIcon;

/**
 * @component @name LogoutIconUiaIcon
 * @description Renders Bravyicons LogoutIconUiaIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LogoutIconUiaIcon: BravyIconsIcon;

/**
 * @component @name LowWiFiIcon
 * @description Renders Bravyicons LowWiFiIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LowWiFiIcon: BravyIconsIcon;

/**
 * @component @name MachineIcon
 * @description Renders Bravyicons MachineIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MachineIcon: BravyIconsIcon;

/**
 * @component @name MakeupIcon
 * @description Renders Bravyicons MakeupIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MakeupIcon: BravyIconsIcon;

/**
 * @component @name MaleManGenderIcon
 * @description Renders Bravyicons MaleManGenderIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MaleManGenderIcon: BravyIconsIcon;

/**
 * @component @name MapNavigationIcon
 * @description Renders Bravyicons MapNavigationIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MapNavigationIcon: BravyIconsIcon;

/**
 * @component @name MaskIcon
 * @description Renders Bravyicons MaskIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MaskIcon: BravyIconsIcon;

/**
 * @component @name MedicineBottleIcon
 * @description Renders Bravyicons MedicineBottleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MedicineBottleIcon: BravyIconsIcon;

/**
 * @component @name MenuIcon
 * @description Renders Bravyicons MenuIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MenuIcon: BravyIconsIcon;

/**
 * @component @name MessageIcon
 * @description Renders Bravyicons MessageIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MessageIcon: BravyIconsIcon;

/**
 * @component @name MinusIcon
 * @description Renders Bravyicons MinusIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MinusIcon: BravyIconsIcon;

/**
 * @component @name NoLocationIcon
 * @description Renders Bravyicons NoLocationIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NoLocationIcon: BravyIconsIcon;

/**
 * @component @name NotCoveredIcon
 * @description Renders Bravyicons NotCoveredIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NotCoveredIcon: BravyIconsIcon;

/**
 * @component @name NoteIcon
 * @description Renders Bravyicons NoteIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NoteIcon: BravyIconsIcon;

/**
 * @component @name OfferIcon
 * @description Renders Bravyicons OfferIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const OfferIcon: BravyIconsIcon;

/**
 * @component @name OfficeBagIcon
 * @description Renders Bravyicons OfficeBagIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const OfficeBagIcon: BravyIconsIcon;

/**
 * @component @name PaperclipAttachIcon
 * @description Renders Bravyicons PaperclipAttachIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PaperclipAttachIcon: BravyIconsIcon;

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
 * @component @name ProfileIcon
 * @description Renders Bravyicons ProfileIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ProfileIcon: BravyIconsIcon;

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
 * @component @name RadioIcon
 * @description Renders Bravyicons RadioIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RadioIcon: BravyIconsIcon;

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
 * @component @name RedoIcon
 * @description Renders Bravyicons RedoIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RedoIcon: BravyIconsIcon;

/**
 * @component @name SearchIcon
 * @description Renders Bravyicons SearchIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SearchIcon: BravyIconsIcon;

/**
 * @component @name SendSubmitSuccessIcon
 * @description Renders Bravyicons SendSubmitSuccessIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SendSubmitSuccessIcon: BravyIconsIcon;

/**
 * @component @name SettingIcon
 * @description Renders Bravyicons SettingIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SettingIcon: BravyIconsIcon;

/**
 * @component @name ShareIcon
 * @description Renders Bravyicons ShareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ShareIcon: BravyIconsIcon;

/**
 * @component @name SheetIcon
 * @description Renders Bravyicons SheetIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SheetIcon: BravyIconsIcon;

/**
 * @component @name SoapShampooIcon
 * @description Renders Bravyicons SoapShampooIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SoapShampooIcon: BravyIconsIcon;

/**
 * @component @name StarIcon
 * @description Renders Bravyicons StarIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const StarIcon: BravyIconsIcon;

/**
 * @component @name StoreIcon
 * @description Renders Bravyicons StoreIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const StoreIcon: BravyIconsIcon;

/**
 * @component @name ThumpDownIcon
 * @description Renders Bravyicons ThumpDownIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ThumpDownIcon: BravyIconsIcon;

/**
 * @component @name ThumpUpIcon
 * @description Renders Bravyicons ThumpUpIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ThumpUpIcon: BravyIconsIcon;

/**
 * @component @name TimeIcon
 * @description Renders Bravyicons TimeIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TimeIcon: BravyIconsIcon;

/**
 * @component @name TrushIcon
 * @description Renders Bravyicons TrushIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TrushIcon: BravyIconsIcon;

/**
 * @component @name VespaIcon
 * @description Renders Bravyicons VespaIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VespaIcon: BravyIconsIcon;

/**
 * @component @name VideoCallCameraIcon
 * @description Renders Bravyicons VideoCallCameraIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoCallCameraIcon: BravyIconsIcon;

/**
 * @component @name VillaHomeIcon
 * @description Renders Bravyicons VillaHomeIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VillaHomeIcon: BravyIconsIcon;

/**
 * @component @name VouchersIcon
 * @description Renders Bravyicons VouchersIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VouchersIcon: BravyIconsIcon;

/**
 * @component @name WiFiIcon
 * @description Renders Bravyicons WiFiIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WiFiIcon: BravyIconsIcon;

declare const index_AlternativeIcon: typeof AlternativeIcon;
declare const index_AmountIcon: typeof AmountIcon;
declare const index_AttentionIcon: typeof AttentionIcon;
declare const index_Baby2Icon: typeof Baby2Icon;
declare const index_BabyIcon: typeof BabyIcon;
declare const index_BackArrowIcon: typeof BackArrowIcon;
declare const index_BackIcon: typeof BackIcon;
declare const index_BagIcon: typeof BagIcon;
declare const index_BellIcon: typeof BellIcon;
declare const index_Bicycle2Icon: typeof Bicycle2Icon;
declare const index_BicycleIcon: typeof BicycleIcon;
declare const index_BirthdayIcon: typeof BirthdayIcon;
declare const index_BoxIcon: typeof BoxIcon;
declare const index_BrushIcon: typeof BrushIcon;
declare const index_BusinessIcon: typeof BusinessIcon;
declare const index_CalenderIcon: typeof CalenderIcon;
declare const index_CallcentarIcon: typeof CallcentarIcon;
declare const index_CameraIcon: typeof CameraIcon;
declare const index_CarIcon: typeof CarIcon;
declare const index_CartIcon: typeof CartIcon;
declare const index_CashIcon: typeof CashIcon;
declare const index_CategoryIcon: typeof CategoryIcon;
declare const index_ChatIcon: typeof ChatIcon;
declare const index_CheckBoxIcon: typeof CheckBoxIcon;
declare const index_CheckedIcon: typeof CheckedIcon;
declare const index_CloseCircleIcon: typeof CloseCircleIcon;
declare const index_CloseIcon: typeof CloseIcon;
declare const index_CloudIcon: typeof CloudIcon;
declare const index_CloudUploadIcon: typeof CloudUploadIcon;
declare const index_CompoundIcon: typeof CompoundIcon;
declare const index_CreditCardIcon: typeof CreditCardIcon;
declare const index_CreditCardPlusIcon: typeof CreditCardPlusIcon;
declare const index_DeliveryBoxIcon: typeof DeliveryBoxIcon;
declare const index_DoctorEarphoneIcon: typeof DoctorEarphoneIcon;
declare const index_DotsMenuIcon: typeof DotsMenuIcon;
declare const index_EditIcon: typeof EditIcon;
declare const index_EditPenIcon: typeof EditPenIcon;
declare const index_EmailIcon: typeof EmailIcon;
declare const index_EqualIcon: typeof EqualIcon;
declare const index_ExclamationIcon: typeof ExclamationIcon;
declare const index_EyeIcon: typeof EyeIcon;
declare const index_EyeSlashIcon: typeof EyeSlashIcon;
declare const index_FaqIcon: typeof FaqIcon;
declare const index_FemaleIcon: typeof FemaleIcon;
declare const index_Filter2Icon: typeof Filter2Icon;
declare const index_FilterIcon: typeof FilterIcon;
declare const index_FullRedoIcon: typeof FullRedoIcon;
declare const index_GalleryIcon: typeof GalleryIcon;
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
declare const index_HeartIcon: typeof HeartIcon;
declare const index_HelpIcon: typeof HelpIcon;
declare const index_HomeIcon: typeof HomeIcon;
declare const index_HospitalIcon: typeof HospitalIcon;
declare const index_IdIcon: typeof IdIcon;
declare const index_LanguagesIcon: typeof LanguagesIcon;
declare const index_LinkIcon: typeof LinkIcon;
declare const index_LocationIcon: typeof LocationIcon;
declare const index_LocationTargetIcon: typeof LocationTargetIcon;
declare const index_LockPasswordIcon: typeof LockPasswordIcon;
declare const index_LogoutIconUiaIcon: typeof LogoutIconUiaIcon;
declare const index_LowWiFiIcon: typeof LowWiFiIcon;
declare const index_MachineIcon: typeof MachineIcon;
declare const index_MakeupIcon: typeof MakeupIcon;
declare const index_MaleManGenderIcon: typeof MaleManGenderIcon;
declare const index_MapNavigationIcon: typeof MapNavigationIcon;
declare const index_MaskIcon: typeof MaskIcon;
declare const index_MedicineBottleIcon: typeof MedicineBottleIcon;
declare const index_MenuIcon: typeof MenuIcon;
declare const index_MessageIcon: typeof MessageIcon;
declare const index_MinusIcon: typeof MinusIcon;
declare const index_NoLocationIcon: typeof NoLocationIcon;
declare const index_NotCoveredIcon: typeof NotCoveredIcon;
declare const index_NoteIcon: typeof NoteIcon;
declare const index_OfferIcon: typeof OfferIcon;
declare const index_OfficeBagIcon: typeof OfficeBagIcon;
declare const index_PaperclipAttachIcon: typeof PaperclipAttachIcon;
declare const index_PhoneIcon: typeof PhoneIcon;
declare const index_PlusIcon: typeof PlusIcon;
declare const index_Prescriptions2Icon: typeof Prescriptions2Icon;
declare const index_PrescriptionsIcon: typeof PrescriptionsIcon;
declare const index_ProfileIcon: typeof ProfileIcon;
declare const index_QrCodeIcon: typeof QrCodeIcon;
declare const index_QuestionMarkIcon: typeof QuestionMarkIcon;
declare const index_RadioIcon: typeof RadioIcon;
declare const index_RecieptIcon: typeof RecieptIcon;
declare const index_RecycleIcon: typeof RecycleIcon;
declare const index_RedoIcon: typeof RedoIcon;
declare const index_SearchIcon: typeof SearchIcon;
declare const index_SendSubmitSuccessIcon: typeof SendSubmitSuccessIcon;
declare const index_SettingIcon: typeof SettingIcon;
declare const index_ShareIcon: typeof ShareIcon;
declare const index_SheetIcon: typeof SheetIcon;
declare const index_SoapShampooIcon: typeof SoapShampooIcon;
declare const index_StarIcon: typeof StarIcon;
declare const index_StoreIcon: typeof StoreIcon;
declare const index_ThumpDownIcon: typeof ThumpDownIcon;
declare const index_ThumpUpIcon: typeof ThumpUpIcon;
declare const index_TimeIcon: typeof TimeIcon;
declare const index_TrushIcon: typeof TrushIcon;
declare const index_VespaIcon: typeof VespaIcon;
declare const index_VideoCallCameraIcon: typeof VideoCallCameraIcon;
declare const index_VillaHomeIcon: typeof VillaHomeIcon;
declare const index_VouchersIcon: typeof VouchersIcon;
declare const index_WiFiIcon: typeof WiFiIcon;
declare namespace index {
  export {
    index_AlternativeIcon as AlternativeIcon,
    index_AmountIcon as AmountIcon,
    index_AttentionIcon as AttentionIcon,
    index_Baby2Icon as Baby2Icon,
    index_BabyIcon as BabyIcon,
    index_BackArrowIcon as BackArrowIcon,
    index_BackIcon as BackIcon,
    index_BagIcon as BagIcon,
    index_BellIcon as BellIcon,
    index_Bicycle2Icon as Bicycle2Icon,
    index_BicycleIcon as BicycleIcon,
    index_BirthdayIcon as BirthdayIcon,
    index_BoxIcon as BoxIcon,
    index_BrushIcon as BrushIcon,
    index_BusinessIcon as BusinessIcon,
    index_CalenderIcon as CalenderIcon,
    index_CallcentarIcon as CallcentarIcon,
    index_CameraIcon as CameraIcon,
    index_CarIcon as CarIcon,
    index_CartIcon as CartIcon,
    index_CashIcon as CashIcon,
    index_CategoryIcon as CategoryIcon,
    index_ChatIcon as ChatIcon,
    index_CheckBoxIcon as CheckBoxIcon,
    index_CheckedIcon as CheckedIcon,
    index_CloseCircleIcon as CloseCircleIcon,
    index_CloseIcon as CloseIcon,
    index_CloudIcon as CloudIcon,
    index_CloudUploadIcon as CloudUploadIcon,
    index_CompoundIcon as CompoundIcon,
    index_CreditCardIcon as CreditCardIcon,
    index_CreditCardPlusIcon as CreditCardPlusIcon,
    index_DeliveryBoxIcon as DeliveryBoxIcon,
    index_DoctorEarphoneIcon as DoctorEarphoneIcon,
    index_DotsMenuIcon as DotsMenuIcon,
    index_EditIcon as EditIcon,
    index_EditPenIcon as EditPenIcon,
    index_EmailIcon as EmailIcon,
    index_EqualIcon as EqualIcon,
    index_ExclamationIcon as ExclamationIcon,
    index_EyeIcon as EyeIcon,
    index_EyeSlashIcon as EyeSlashIcon,
    index_FaqIcon as FaqIcon,
    index_FemaleIcon as FemaleIcon,
    index_Filter2Icon as Filter2Icon,
    index_FilterIcon as FilterIcon,
    index_FullRedoIcon as FullRedoIcon,
    index_GalleryIcon as GalleryIcon,
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
    index_HeartIcon as HeartIcon,
    index_HelpIcon as HelpIcon,
    index_HomeIcon as HomeIcon,
    index_HospitalIcon as HospitalIcon,
    index_IdIcon as IdIcon,
    index_LanguagesIcon as LanguagesIcon,
    index_LinkIcon as LinkIcon,
    index_LocationIcon as LocationIcon,
    index_LocationTargetIcon as LocationTargetIcon,
    index_LockPasswordIcon as LockPasswordIcon,
    index_LogoutIconUiaIcon as LogoutIconUiaIcon,
    index_LowWiFiIcon as LowWiFiIcon,
    index_MachineIcon as MachineIcon,
    index_MakeupIcon as MakeupIcon,
    index_MaleManGenderIcon as MaleManGenderIcon,
    index_MapNavigationIcon as MapNavigationIcon,
    index_MaskIcon as MaskIcon,
    index_MedicineBottleIcon as MedicineBottleIcon,
    index_MenuIcon as MenuIcon,
    index_MessageIcon as MessageIcon,
    index_MinusIcon as MinusIcon,
    index_NoLocationIcon as NoLocationIcon,
    index_NotCoveredIcon as NotCoveredIcon,
    index_NoteIcon as NoteIcon,
    index_OfferIcon as OfferIcon,
    index_OfficeBagIcon as OfficeBagIcon,
    index_PaperclipAttachIcon as PaperclipAttachIcon,
    index_PhoneIcon as PhoneIcon,
    index_PlusIcon as PlusIcon,
    index_Prescriptions2Icon as Prescriptions2Icon,
    index_PrescriptionsIcon as PrescriptionsIcon,
    index_ProfileIcon as ProfileIcon,
    index_QrCodeIcon as QrCodeIcon,
    index_QuestionMarkIcon as QuestionMarkIcon,
    index_RadioIcon as RadioIcon,
    index_RecieptIcon as RecieptIcon,
    index_RecycleIcon as RecycleIcon,
    index_RedoIcon as RedoIcon,
    index_SearchIcon as SearchIcon,
    index_SendSubmitSuccessIcon as SendSubmitSuccessIcon,
    index_SettingIcon as SettingIcon,
    index_ShareIcon as ShareIcon,
    index_SheetIcon as SheetIcon,
    index_SoapShampooIcon as SoapShampooIcon,
    index_StarIcon as StarIcon,
    index_StoreIcon as StoreIcon,
    index_ThumpDownIcon as ThumpDownIcon,
    index_ThumpUpIcon as ThumpUpIcon,
    index_TimeIcon as TimeIcon,
    index_TrushIcon as TrushIcon,
    index_VespaIcon as VespaIcon,
    index_VideoCallCameraIcon as VideoCallCameraIcon,
    index_VillaHomeIcon as VillaHomeIcon,
    index_VouchersIcon as VouchersIcon,
    index_WiFiIcon as WiFiIcon,
  };
}

export { AlternativeIcon, AmountIcon, AttentionIcon, Baby2Icon, BabyIcon, BackArrowIcon, BackIcon, BagIcon, BellIcon, Bicycle2Icon, BicycleIcon, BirthdayIcon, BoxIcon, BrushIcon, BusinessIcon, CalenderIcon, CallcentarIcon, CameraIcon, CarIcon, CartIcon, CashIcon, CategoryIcon, ChatIcon, CheckBoxIcon, CheckedIcon, CloseCircleIcon, CloseIcon, CloudIcon, CloudUploadIcon, CompoundIcon, CreditCardIcon, CreditCardPlusIcon, DeliveryBoxIcon, DoctorEarphoneIcon, DotsMenuIcon, EditIcon, EditPenIcon, EmailIcon, EqualIcon, ExclamationIcon, EyeIcon, EyeSlashIcon, FaqIcon, FemaleIcon, Filter2Icon, FilterIcon, FullRedoIcon, GalleryIcon, Gender2CompIcon, Gender2CompManIcon, Gender2CompWomanIcon, GenderFaceChangeIcon, GenderFaceManIcon, GenderFaceWomanIcon, GenderIcon, GenderManAndWomanIcon, GiftIcon, GlobalIcon, HeartIcon, HelpIcon, HomeIcon, HospitalIcon, IdIcon, LanguagesIcon, LinkIcon, LocationIcon, LocationTargetIcon, LockPasswordIcon, LogoutIconUiaIcon, LowWiFiIcon, MachineIcon, MakeupIcon, MaleManGenderIcon, MapNavigationIcon, MaskIcon, MedicineBottleIcon, MenuIcon, MessageIcon, MinusIcon, NoLocationIcon, NotCoveredIcon, NoteIcon, OfferIcon, OfficeBagIcon, PaperclipAttachIcon, PhoneIcon, PlusIcon, Prescriptions2Icon, PrescriptionsIcon, ProfileIcon, QrCodeIcon, QuestionMarkIcon, RadioIcon, RecieptIcon, RecycleIcon, RedoIcon, SearchIcon, SendSubmitSuccessIcon, SettingIcon, ShareIcon, SheetIcon, SoapShampooIcon, StarIcon, StoreIcon, ThumpDownIcon, ThumpUpIcon, TimeIcon, TrushIcon, VespaIcon, VideoCallCameraIcon, VillaHomeIcon, VouchersIcon, WiFiIcon, createBravyIconsComponent, index as icons };
export type { BravyIconsIcon, BravyIconsProps, IconSvgObject };
