declare module "*.vue" {
    import { defineComponent } from "vue";
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
}
// declare module "*.vue" {
//     import type { DefineComponent } from "vue";
//     const component: DefineComponent<
//         Record<string, unknown>,
//         Record<string, unknown>,
//         unknown
//     >;
//     export default component;
// }
