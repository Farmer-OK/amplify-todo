/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame64OverridesProps = {
    Frame64?: PrimitiveOverrideProps<FlexProps>;
    "Frame 67"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 69"?: PrimitiveOverrideProps<ViewProps>;
    "Task numbre una casita la importante"?: PrimitiveOverrideProps<TextProps>;
    "Group 11"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 19"?: PrimitiveOverrideProps<ViewProps>;
    "Vector 6"?: PrimitiveOverrideProps<IconProps>;
    "Frame 68"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 44"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 41"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 46"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 47"?: PrimitiveOverrideProps<FlexProps>;
    "May 20, 2020"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame64Props = React.PropsWithChildren<Partial<FlexProps> & {
    selected?: "no" | "yes";
} & {
    overrides?: Frame64OverridesProps | undefined | null;
}>;
export default function Frame64(props: Frame64Props): React.ReactElement;
