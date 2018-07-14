import { NetInput } from './NetInput';
import { TNetInput } from './types';
/**
 * Validates the input to make sure, they are valid net inputs and awaits all media elements
 * to be finished loading.
 *
 * @param input The input, which can be a media element or an array of different media elements.
 * @param manageCreatedInput If a new NetInput instance is created from the inputs, this flag
 * determines, whether to set the NetInput as managed or not.
 * @returns A NetInput instance, which can be passed into one of the neural networks.
 */
export declare function toNetInput(inputs: TNetInput, manageCreatedInput?: boolean, keepCanvases?: boolean): Promise<NetInput>;
