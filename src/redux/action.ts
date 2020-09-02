/** 
 * Action Type
 */
export const PUSH_COLORS = 'PUSH_COLORS';

/**
 * Action Creator
 */
export function PushColors(colors: Array<string>) {
    return {
        type: PUSH_COLORS,
        colors
    }
}