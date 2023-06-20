/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Group17OverridesProps = {
    Group17?: PrimitiveOverrideProps<FlexProps>;
    "Group 16"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 29"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 31"?: PrimitiveOverrideProps<IconProps>;
    "Frame 100"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 99"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 114"?: PrimitiveOverrideProps<ViewProps>;
    Union?: PrimitiveOverrideProps<IconProps>;
    "Team projects"?: PrimitiveOverrideProps<TextProps>;
    "Frame 98"?: PrimitiveOverrideProps<FlexProps>;
    "May 20, 2020"?: PrimitiveOverrideProps<TextProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Group17Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Group17OverridesProps | undefined | null;
}>;
export default function Group17(props: Group17Props): React.ReactElement;
