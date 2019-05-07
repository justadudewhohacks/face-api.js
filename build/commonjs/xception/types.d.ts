import { TfjsImageRecognitionBase } from "tfjs-image-recognition-base";
export declare type ReductionBlockParams = {
    separable_conv0: TfjsImageRecognitionBase.SeparableConvParams;
    separable_conv1: TfjsImageRecognitionBase.SeparableConvParams;
    expansion_conv: TfjsImageRecognitionBase.ConvParams;
};
export declare type MainBlockParams = {
    separable_conv0: TfjsImageRecognitionBase.SeparableConvParams;
    separable_conv1: TfjsImageRecognitionBase.SeparableConvParams;
    separable_conv2: TfjsImageRecognitionBase.SeparableConvParams;
};
export declare type TinyXceptionParams = {
    entry_flow: {
        conv_in: TfjsImageRecognitionBase.ConvParams;
        reduction_block_0: ReductionBlockParams;
        reduction_block_1: ReductionBlockParams;
    };
    middle_flow: any;
    exit_flow: {
        reduction_block: ReductionBlockParams;
        separable_conv: TfjsImageRecognitionBase.SeparableConvParams;
    };
};
