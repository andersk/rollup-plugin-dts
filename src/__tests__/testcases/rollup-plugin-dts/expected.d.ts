import { CompilerOptions } from 'typescript';
import { PluginImpl } from 'rollup';
declare enum CompileMode {
    Types = "dts",
    Js = "js"
}
interface Options {
    include?: Array<string>;
    exclude?: Array<string>;
    tsconfig?: string;
    compilerOptions?: CompilerOptions;
    compileMode?: CompileMode;
}
declare const plugin: PluginImpl<Options>;
declare const dts: PluginImpl<Options>;
declare const js: PluginImpl<Options>;
export default plugin;
export { CompileMode, plugin, dts, js, js as ts };
