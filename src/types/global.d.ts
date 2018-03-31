interface NodeModule {
    hot: {
        accept: Function;
    };
}

declare module '*.png' {
    let __src__: string;
    export default __src__;
}
