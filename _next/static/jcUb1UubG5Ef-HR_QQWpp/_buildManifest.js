self.__BUILD_MANIFEST = function(s, c, e, t, a, i, f, u) {
    return {
        __rewrites: {
            afterFiles: [{
                has: a,
                source: "/api/:path*",
                destination: a
            }, {
                has: a,
                source: "/static/:path*",
                destination: a
            }],
            beforeFiles: [],
            fallback: []
        },
        "/": [c, e, "static/css/7a357243a94d0c68.css", "static/chunks/pages/index-caf336209d0b76ce.js"],
        "/404": [s, "static/chunks/pages/404-88d000af375c3e89.js"],
        "/_error": ["static/chunks/pages/_error-08a9db0f433628d8.js"],
        "/account": [c, e, i, f, u, "static/chunks/pages/account-cbc3b26ea366c7e9.js"],
        "/buy": ["static/css/72e9d570f7e46475.css", "static/chunks/pages/buy-86f22a261c924a70.js"],
        "/customize": [c, e, i, f, u, "static/chunks/pages/customize-25f00eebb470f270.js"],
        "/invite": ["static/chunks/pages/invite-d69fbb65a4f15674.js"],
        "/links": [c, e, i, f, u, "static/chunks/pages/links-6b0bb064589d69c4.js"],
        "/login": [t, "static/css/d467bf3208b32cfc.css", "static/chunks/pages/login-b53d4b4d75095ec1.js"],
        "/logout": ["static/chunks/pages/logout-5b4e83c15eee9a9b.js"],
        "/password/success": [s, "static/chunks/pages/password/success-99976111117fb35f.js"],
        "/premium": [c, e, i, f, u, "static/chunks/pages/premium-6f89588d777f7fe2.js"],
        "/privacy": [s, "static/chunks/pages/privacy-d83f5d73a4c45121.js"],
        "/register": [t, "static/css/b267ac05fb7b47bf.css", "static/chunks/pages/register-3cb9b78171cb1c75.js"],
        "/reset": [t, "static/css/9130689b3be697b6.css", "static/chunks/pages/reset-fd4617cd6829a1cc.js"],
        "/reset/[reset]": [t, s, "static/chunks/pages/reset/[reset]-b5f2caf2684ef276.js"],
        "/sent": [s, "static/chunks/pages/sent-5f9dec8fc9dacf3f.js"],
        "/tos": [s, "static/chunks/pages/tos-5e39e646eb3b85fb.js"],
        "/verify/[verify]": [t, s, "static/chunks/pages/verify/[verify]-b843ff0a9274d94b.js"],
        "/[user]": [c, "static/chunks/173-f603dfb50df81c14.js", "static/chunks/226-d2846ef7b7a5c1f6.js", "static/css/e43d536aa911b9a6.css", "static/chunks/pages/[user]-c9c2cc73c1f964b0.js"],
        sortedPages: ["/", "/404", "/_app", "/_error", "/account", "/buy", "/customize", "/invite", "/links", "/login", "/logout", "/password/success", "/premium", "/privacy", "/register", "/reset", "/reset/[reset]", "/sent", "/tos", "/verify/[verify]", "/[user]"]
    }
}("static/css/8cd4e7baef956a6e.css", "static/chunks/705-9379f80bae85c90d.js", "static/chunks/588-1bb31c9814fb8c31.js", "static/chunks/154-fe6070946e590097.js", void 0, "static/chunks/674-d8939df063b045bc.js", "static/css/99acaaf9cd1b7e48.css", "static/chunks/425-1ecb762d598c6fca.js"),
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
