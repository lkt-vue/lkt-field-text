import { Component, Plugin } from 'vue';
export { setTextValueSlot, setTextEditSlot } from './functions/settings-functions';
import "../styles/common-styles.css";
import "../styles/read-mode-styles.css";
import "../styles/palette-styles.css";
import "../styles/state-styles.css";
declare const LktFieldText: Plugin;
export default LktFieldText;
export declare const setDefaultTextEmptyValueSlot: (str: string, component?: string | Component) => void;
