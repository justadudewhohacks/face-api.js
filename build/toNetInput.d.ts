import { NetInput } from './NetInput';
import { TNetInput } from './types';
/**
 * Validates the input to make sure, they are valid net inputs and awaits all media elements
 * to be finished loading.
 *
 * @param input The input, which can be a media element or an array of different media elements.
 * @returns A NetInput instance, which can be passed into one of the neural networks.
 */
export declare function toNetInput(input: NetInput | TNetInput): Promise<NetInput>;
