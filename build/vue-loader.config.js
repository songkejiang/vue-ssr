module.exports=(isDev)=>{
    return{
        preserveWhiteSpace:true,
        extractCSS:!isDev,
        cssModules:{},
        // hotReload:true,
        // loaders:{},
        // preLoader:{},
        // postLoader:{}
    }
}