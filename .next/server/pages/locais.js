"use strict";
(() => {
var exports = {};
exports.id = 649;
exports.ids = [649];
exports.modules = {

/***/ 7424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* binding */ SelectDefault)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./src/components/SelectDefault/index.tsx



function SelectDefault({ name , label , error , children , icon: Icon , ...rest }) {
    const inputRef = (0,external_react_.useRef)(null);
    const { 0: isFocused , 1: setIsFocused  } = (0,external_react_.useState)(false);
    const { 0: isFilled , 1: setIsFilled  } = (0,external_react_.useState)(false);
    const handleInputFocus = (0,external_react_.useCallback)(()=>{
        setIsFocused(true);
    }, []);
    const handleInputBlur = (0,external_react_.useCallback)(()=>{
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "containerSelect",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "labelSelect",
                htmlFor: name,
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "contentSelect",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "leftInputElement",
                        children: Icon && /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                            color: "#CCCCCC"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                        className: `${Icon ? "isIcon" : ""} select`,
                        onFocus: handleInputFocus,
                        onBlur: handleInputBlur,
                        ref: inputRef,
                        id: name,
                        ...rest,
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "rightInputElement",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaAngleDown, {
                            color: "rgba(204, 204, 204, 1)"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* binding */ getlocal)
});

;// CONCATENATED MODULE: ./src/data/LocaleData.tsx
const LocaleData = [
    {
        id: 1,
        Estado: "SP",
        Cidade: "American\xf3polis",
        Endereço: "R. \xd4mega, 25",
        Salao: "Rose Studio Hair",
        Telefone: "(11) 2892-7896",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.2744533238742!2d-46.642886670861266!3d-23.666141222183697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce452cf6fe172d%3A0x2cb1fdc23ed113ab!2sR.%20%C3%94mega%2C%2025%20-%20Cidade%20Ademar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004335-110!5e0!3m2!1spt-BR!2sbr!4v1667346992351!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.642886670861266",
        longitude: "-23.666141222183697"
    },
    {
        id: 2,
        Estado: "SP",
        Cidade: "Campinas",
        Endereço: "R. Saldanha Marinho, 296 - Centro",
        Salao: "Requinte Stylo",
        Telefone: "(19) 3239-2206 / (19) 98229-8428",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.17026714946!2d-47.067352484529!3d-22.907089843641938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8b6da5cab21%3A0x155eb7aae68f7360!2sR.%20Saldanha%20Marinho%2C%20296%20-%20Centro%2C%20Campinas%20-%20SP%2C%2013013-081!5e0!3m2!1spt-BR!2sbr!4v1667347018489!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-47.067352484529",
        longitude: "-22.90708984364"
    },
    {
        id: 3,
        Estado: "SP",
        Cidade: "Campinas",
        Endereço: "R. Iboti, 397 - Vila Marieta",
        Salao: "Academia dos Cachos e Apliques",
        Telefone: "(19) 3029-5103 / (19) 3295-2379 / (19) 99286-9865",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.689097835173!2d-47.057772784528545!3d-22.924835544279862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf2a549f309d%3A0x5d00c8bec9825130!2sR.%20Iboti%2C%20397%20-%20Vila%20Maria%2C%20Campinas%20-%20SP%2C%2013041-770!5e0!3m2!1spt-BR!2sbr!4v1667347039709!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-47.057772784528545",
        longitude: "-22.924835544279862"
    },
    {
        id: 4,
        Estado: "SP",
        Cidade: "Diadema",
        Endereço: "Av. Senador Vitorino Freire, 505 - Sala: 01",
        Salao: "Fina Flor Salon",
        Telefone: "(11) 4055-5866",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.648657531887!2d-46.63663088451423!3d-23.68851937218652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce451c5494badb%3A0xb37d3a0eb1f3c800!2sAv.%20Sen.%20Vitorino%20Freire%2C%20505%20-%2001%20-%20Centro%2C%20Diadema%20-%20SP%2C%2004423-000!5e0!3m2!1spt-BR!2sbr!4v1667347062821!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.63663088451423",
        longitude: "-23.6885193721"
    },
    {
        id: 5,
        Estado: "SP",
        Cidade: "Diadema",
        Endereço: "R. Luiz de Vasconcelos, 203 - Jardim Marilene",
        Salao: "Espa\xe7o Beleza",
        Telefone: "(11) 99443-0843",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.502024326347!2d-46.60006677085749!3d-23.69376002316502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4478fcd94e67%3A0x56504879592c7aed!2sR.%20Luiz%20de%20Vasconcelos%2C%20203%20-%20Vila%20Nogueira%2C%20Diadema%20-%20SP%2C%2009960-250!5e0!3m2!1spt-BR!2sbr!4v1667347200718!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.60006677085749",
        longitude: "-23.6937600231"
    },
    {
        id: 80,
        Estado: "MS",
        Cidade: "Dourados",
        Endereço: "R. Cuiab\xe1, 2466",
        Salao: "Linda Hair",
        Telefone: "(67) 99155-4994",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.2074311919487!2d-54.810354471058375!3d-22.232207172893425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9489a83818fadb6f%3A0x564fb71c9a15335e!2sR.%20Cuiab%C3%A1%2C%202466%20-%20Centro%2C%20Dourados%20-%20MS!5e0!3m2!1spt-BR!2sbr!4v1667347229604!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-54.810354471058375",
        longitude: "-22.232207172893425"
    },
    {
        id: 6,
        Estado: "SP",
        Cidade: "Emb\xfa das Artes",
        Endereço: "R. Paranapanema, 3600",
        Salao: "Sal\xe3o El Shaday",
        Telefone: "(11) 98201-1255",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.3267540388206!2d-46.80625688451478!3d-23.664270071286793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce536acf16ab0b%3A0x6f425d23d84abda6!2sR.%20Paranapanema%2C%20Embu%20das%20Artes%20-%20SP%2C%2006826-440!5e0!3m2!1spt-BR!2sbr!4v1667347254728!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.80625688451478",
        longitude: "-23.66427007128"
    },
    {
        id: 7,
        Estado: "SP",
        Cidade: "Emb\xfa das Artes",
        Endereço: "R. \xc1gua Branca, 784",
        Salao: "Regina Cabeleireiros",
        Telefone: "(11) 4244-7314",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.7241638819405!2d-46.80516188451501!3d-23.650047470759542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5366dae748a1%3A0xe849ae49b37a59a2!2sR.%20%C3%81gua%20Branca%2C%20784%20-%20Vila%20Regina%2C%20Embu%20das%20Artes%20-%20SP%2C%2006810-695!5e0!3m2!1spt-BR!2sbr!4v1667347275534!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.80516188451501",
        longitude: "-23.65004747075"
    },
    {
        id: 8,
        Estado: "SP",
        Cidade: "Emb\xfa das Artes",
        Endereço: "R. Alemanha, 183 - Jd Mimas",
        Salao: "Bel\xedssima Fashion Hair",
        Telefone: "(11) 97172-8015",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.552881139432!2d-46.81651928451555!3d-23.62036316966007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce54c537ea0413%3A0xb486aca61c021849!2sR.%20Alemanha%2C%20183%20-%20Jardim%20Mimas%2C%20Embu%20das%20Artes%20-%20SP%2C%2006807-510!5e0!3m2!1spt-BR!2sbr!4v1667347305837!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.81651928451555",
        longitude: "-23.6203631696"
    },
    {
        id: 9,
        Estado: "Go",
        Cidade: "Goi\xe2nia",
        Endereço: "R. CP-15 Qd. CP-14 Lt. 07 Res. Celina Park",
        Salao: "VW Cabeleireiros",
        Telefone: "(62) 3247-3904 / (62) 99688-4139",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15286.571730406153!2d-49.391237360449225!3d-16.694742199999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef660ffffffff%3A0xeb665015282d2ffa!2sVm%20Cabeleireiros!5e0!3m2!1spt-BR!2sbr!4v1667347486217!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-49.391237360449225",
        longitude: "-16.694742199999986"
    },
    {
        id: 10,
        Estado: "GO",
        Cidade: "Goi\xe2nia",
        Endereço: "Av. Contorno Sul, Qd.33, Lt. 04 Espa\xe7o Mobilize - Parque Anhanguera",
        Salao: "Plattinium Instituto de Beleza",
        Telefone: "(62) 4141-0547 / (62) 98624-6682",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.2542803362508!2d-49.30124727076873!3d-16.725997514914514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef721178b0789%3A0x18a722f629ad81ac!2sAv.%20do%20Contorno%20Sul%2C%202053%20-%20Parque%20Anhanguera%2C%20Goi%C3%A2nia%20-%20GO%2C%2074340-060!5e0!3m2!1spt-BR!2sbr!4v1667347751367!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-49.30124727076873",
        longitude: "-16.72599751491"
    },
    {
        id: 11,
        Estado: "GO",
        Cidade: "Goi\xe2nia",
        Endereço: "Av. Mil\xe3o (Pr\xf3x ao Terminal Bandeiras)",
        Salao: "Espa\xe7o Mulher Express",
        Telefone: "(62) 99859-9123",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.3533325696367!2d-49.322313984631414!3d-16.70921295057112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef6f4b03d61d5%3A0xa6753840f245627d!2sAv.%20Mil%C3%A3o%20-%20Goi%C3%A2nia%2C%20GO%2C%2074325-070!5e0!3m2!1spt-BR!2sbr!4v1667347824471!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-49.322313984631414",
        longitude: "-16.70921295057112"
    },
    {
        id: 12,
        Estado: "GO",
        Cidade: "Goi\xe2nia",
        Endereço: "",
        Salao: "Valdirene Distribuidora",
        Telefone: "(62) 8149-7301",
        iframe: "",
        latitude: "",
        longitude: ""
    },
    {
        id: 13,
        Estado: "GO",
        Cidade: "Goi\xe2nia",
        Endereço: "Av. Brasilia, Qd 30 LT 11 - S\xe3o Judas Tadeu",
        Salao: "Salone di Belezza",
        Telefone: "(62) 3609-7197 / (62)98579-2651",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122291.96089897209!2d-49.37430733000278!3d-16.695699689872068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef6bd58d80867%3A0xef692bad20d2678e!2zR29pw6JuaWEsIEdP!5e0!3m2!1spt-BR!2sbr!4v1667349909459!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-49.37430733000278(62) 9",
        longitude: "-16.69569968987"
    },
    {
        id: 14,
        Estado: "SP",
        Cidade: "Guarulhos",
        Endereço: "R. Parambu, 299 - Vila Nova Cumbica",
        Salao: "Elidia Cabeleireira",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.2059870204853!2d-49.25043463472605!3d-16.6164280444105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3ea54f379e1%3A0x646f8701368be50a!2zU2Fsb25lIERpIEJlbGxlenphIOKcgu-4j_CfkobigI3imYDvuI_wn5KH4oCN4pmA77iP!5e0!3m2!1spt-BR!2sbr!4v1667347906819!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-49.25043463472605",
        longitude: "-16.616428044"
    },
    {
        id: 15,
        Estado: "SP",
        Cidade: "Jabaquara",
        Endereço: "Av. General Valdomiro de Lima, 67 - Jabaquara",
        Salao: "Sal\xe3o Black White",
        Telefone: "(11) 99938-4955/ (11) 5021-2981",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.221447069497!2d-46.465429084518746!3d-23.452475363466466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce61df32ed3ec3%3A0x3679b678b7fc9564!2sR.%20Parambu%2C%20299%20-%20Vila%20Nova%20Cumbica%2C%20Guarulhos%20-%20SP%2C%2007231-310!5e0!3m2!1spt-BR!2sbr!4v1667347927467!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.465429084518746",
        longitude: "-23.452475363466466"
    },
    {
        id: 16,
        Estado: "SP",
        Cidade: "Mau\xe1",
        Endereço: "R. Dorival M\xe1ximo, 34 - Jd Maring\xe1",
        Salao: "Emp\xf3rio Mulher",
        Telefone: "(11) 4542-3332 / (11) 97576-9464",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.996821450662!2d-46.644306984515495!3d-23.640284870397938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5aef5d19e879%3A0x19eeb409f54ae644!2sAv.%20Gen.%20Valdomiro%20de%20Lima%2C%2067%20-%20Jabaquara%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004344-070!5e0!3m2!1spt-BR!2sbr!4v1667348252661!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.644306984515495",
        longitude: "-23.640284870397938"
    },
    {
        id: 17,
        Estado: "SP",
        Cidade: "Santo Andr\xe9",
        Endereço: "Av. Valentim Magalh\xe3es, 858 Vl Guarani",
        Salao: "Sal\xe3o Casa \xe9 Sua",
        Telefone: "(11) 9712-37934",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.2950216253885!2d-46.43208888451471!3d-23.66540537132911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6ea87949e247%3A0xbf2668248362048c!2sR.%20Dorival%20M%C3%A1ximo%2C%2034%20-%20Jardim%20Maring%C3%A1%2C%20Mau%C3%A1%20-%20SP%2C%2009341-285!5e0!3m2!1spt-BR!2sbr!4v1667348270084!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.43208888451471",
        longitude: "-23.6654053713"
    },
    {
        id: 18,
        Estado: "SP",
        Cidade: "Santo Andr\xe9",
        Endereço: "R. Su\xe9cia, 303 - Parque das Na\xe7\xf5es",
        Salao: "Boss Hair",
        Telefone: "(11) 4476-1917",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.96129862779!2d-46.50124908451453!3d-23.677341971771774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce69ec820af987%3A0x1ab19dbf931e17e5!2sAv.%20Valentim%20Magalh%C3%A3es%2C%20858%20-%20Vila%20Guarani%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009120-000!5e0!3m2!1spt-BR!2sbr!4v1667348286876!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.50124908451453",
        longitude: "-23.67734197177"
    },
    {
        id: 19,
        Estado: "SP",
        Cidade: "Santo Andr\xe9",
        Endereço: "R. Carij\xf3s, 1806 - Vila Alzira",
        Salao: "Body Office Esthetic Center",
        Telefone: "(11) 4453-2356",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.0858856935783!2d-46.5181456845152!3d-23.63709507027974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce681e23fde71d%3A0x2c46da2ad7fc33e3!2sR.%20Su%C3%A9cia%2C%20303%20-%20Parque%20das%20Na%C3%A7%C3%B5es%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009280-080!5e0!3m2!1spt-BR!2sbr!4v1667348304494!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.5181456845152",
        longitude: "-23.6370950702"
    },
    {
        id: 20,
        Estado: "SP",
        Cidade: "Santo Andr\xe9",
        Endereço: "R. dos Cocais, 131 - Vila Luzita",
        Salao: "Vera Studio",
        Telefone: "(11) 9646-68199",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.7373951191566!2d-46.524298684514314!3d-23.685347372068858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce420c1e290d5d%3A0x562018caec48320f!2sR.%20Carij%C3%B3s%2C%201806%20-%20Vila%20Linda%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009180-001!5e0!3m2!1spt-BR!2sbr!4v1667348319949!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.524298684514314",
        longitude: "-23.685347372068858"
    },
    {
        id: 21,
        Estado: "SP",
        Cidade: "Santo Andr\xe9",
        Endereço: "Av. S\xe3o Paulo, 1058 - Cidade S\xe3o Jorge",
        Salao: "Souza Hair",
        Telefone: "(11) 4978-1179",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.3328853062458!2d-46.50832638451417!3d-23.699803672605608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6a1b48e96e3f%3A0x7a648531179cc359!2sR.%20dos%20Cocais%2C%20131%20-%20Jardim%20Guarara%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009170-510!5e0!3m2!1spt-BR!2sbr!4v1667348337002!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.50832638451417",
        longitude: "-23.69980367260"
    },
    {
        id: 22,
        Estado: "SP",
        Cidade: "Santo Andr\xe9",
        Endereço: "R. Coronel Seabra, 453",
        Salao: "Espa\xe7o Beleza",
        Telefone: "(11) 2988-4442 / (11) 9976-46258",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.1087866210755!2d-46.48907397086043!3d-23.67206732239425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce69997c4f3f7f%3A0xc74377e8a5596e29!2sAv.%20S%C3%A3o%20Paulo%2C%201058%20-%20Cidade%20S%C3%A3o%20Jorge%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009111-410!5e0!3m2!1spt-BR!2sbr!4v1667348367002!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.48907397086043",
        longitude: "-23.6720673223"
    },
    {
        id: 23,
        Estado: "SP",
        Cidade: "Santo Andr\xe9",
        Endereço: "R. Marina, 851 - Campestre",
        Salao: "Espa\xe7o Feh Monteiro",
        Telefone: "(11) 2564-2619 / (11) 94077-0790",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.173333402569!2d-46.52205298451464!3d-23.669758571490405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4279dd5a221d%3A0x2070d257c02e1d3!2sR.%20Cel.%20Seabra%2C%20453%20-%20Vila%20Marina%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009176-000!5e0!3m2!1spt-BR!2sbr!4v1667348391327!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.52205298451464",
        longitude: "-23.66975857149"
    },
    {
        id: 24,
        Estado: "SP",
        Cidade: "Santo Andr\xe9",
        Endereço: "R. Campos Sales, 58 - Centro",
        Salao: "Studio Profissional Luana",
        Telefone: "(11) 43164-332 / (11) 97065-4043",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.98405198553!2d-46.550063984515255!3d-23.64074217041473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42d0f359159f%3A0x9e9b29a4b11b5ac5!2sR.%20Marina%2C%20851%20-%20Campestre%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009560-560!5e0!3m2!1spt-BR!2sbr!4v1667348527494!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.550063984515255",
        longitude: "-23.64074217041473"
    },
    {
        id: 25,
        Estado: "SP",
        Cidade: "Santo Andr\xe9",
        Endereço: "R. B\xe9lgica, 584 - Parque das Na\xe7\xf5es",
        Salao: "Studio Licia Lins",
        Telefone: "(11) 4976-4094 / (11) 94702-5277",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5707211762983!2d-46.53026028451489!3d-23.65553987096323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce428fb588a265%3A0xe56e94ffa6b0924f!2sR.%20Campos%20Sales%2C%2058%20-%20Centro%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009015-200!5e0!3m2!1spt-BR!2sbr!4v1667348542254!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.53026028451489",
        longitude: "-23.6555398709"
    },
    {
        id: 26,
        Estado: "SP",
        Cidade: "Santo Andr\xe9",
        Endereço: "Av. Padre Anchieta, 645 - Jardim",
        Salao: "Evania Soares Studio Hair",
        Telefone: "(11) 4438-6834 / (11) 99355-2907",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.1536605197066!2d-46.52648478451541!3d-23.63466747018978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42a56c1cee89%3A0xe4ef139b7bcd546a!2sR.%20B%C3%A9lgica%2C%20584%20-%20Parque%20das%20Na%C3%A7%C3%B5es%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009210-030!5e0!3m2!1spt-BR!2sbr!4v1667348557239!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.52648478451541",
        longitude: "-23.6346674701"
    },
    {
        id: 27,
        Estado: "SP",
        Cidade: "Santo Andr\xe9",
        Endereço: "R. Avanhandava, 48 - CEP: 09190-410",
        Salao: "Studio Gabriel Cabelos",
        Telefone: "(11) 99501-8873",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.7294937109855!2d-46.53652348451517!3d-23.64985667075255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4294c28290c7%3A0x3e4a690e51e45698!2sAv.%20Padre%20Anchieta%2C%20645%20-%20Jardim%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009090-710!5e0!3m2!1spt-BR!2sbr!4v1667348570432!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.53652348451517",
        longitude: "-23.6498566707"
    },
    {
        id: 28,
        Estado: "SP",
        Cidade: "Santo Andr\xe9",
        Endereço: "R. Maria Calegari do Nascimento, 56B - VL Vit\xf3ria",
        Salao: "Maria Equipe",
        Telefone: "(11) 4516-6269 / (11) 99676-1670",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.16423361245!2d-46.53896878451463!3d-23.670084071502593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce425e407e18a7%3A0xfbdcbede4e4d99ce!2sR.%20Avanhandava%2C%2048%20-%20Vila%20Gilda%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009190-410!5e0!3m2!1spt-BR!2sbr!4v1667348586841!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.53896878451463",
        longitude: "-23.67008407150"
    },
    {
        id: 29,
        Estado: "SP",
        Cidade: "S\xe3o Bernardo do Campo",
        Endereço: "R. Mateos Demarchi, 76 - Sala 26",
        Salao: "Renovar",
        Telefone: "(11) 96279-0814 / (11) 94614-3064 / (11) 95354-9487",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116897.2463619518!2d-46.492890855353934!3d-23.710303112822494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4278871d7eef%3A0x9eaaca862adb4ede!2sSanto%20Andr%C3%A9%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1667348713732!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.492890855353934",
        longitude: "-23.710303112822494"
    },
    {
        id: 30,
        Estado: "SP",
        Cidade: "S\xe3o Bernardo do Campo",
        Endereço: "R. Cecilia, 365 - Jordan\xf3polis",
        Salao: "Equipe Revolution Prime",
        Telefone: "(11) 2355-0540 / (11) 97547-4443",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1925288950406!2d-46.5568613845134!3d-23.740512874118803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce41a81dd7c409%3A0xdcb2720ab49824b4!2sRua%20Mateos%20Demarchi%2C%2076%20-%20Jardim%20das%20Quatro%20Marias%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009820-270!5e0!3m2!1spt-BR!2sbr!4v1667348731022!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.5568613845134",
        longitude: "-23.74051287411"
    },
    {
        id: 31,
        Estado: "MG",
        Cidade: "S\xe3o Jo\xe3o Del Rei",
        Endereço: "R. Das Orqu\xeddeas, 73",
        Salao: "Sal\xe3o da Fernanda",
        Telefone: "(32) 9948-0758",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.6710500021136!2d-46.57200348451432!3d-23.68771897215692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce43a352ea80ab%3A0x66a6d0b508563d08!2sR.%20Cec%C3%ADlia%2C%20365%20-%20Vila%20Santa%20Izabel%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009891-040!5e0!3m2!1spt-BR!2sbr!4v1667348744337!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.57200348451432",
        longitude: "-23.6877189721"
    },
    {
        id: 32,
        Estado: "MG",
        Cidade: "S\xe3o Jo\xe3o Del Rei",
        Endereço: "R. Oscar Moreira Sandim, 11",
        Salao: "Mayra Detomi",
        Telefone: "(32) 99812-7483",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2851745545827!2d-44.22937358456046!3d-21.141046482565148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1c6499012febf%3A0x93fed12fd1a8698!2sR.%20das%20Orqu%C3%ADdeas%2C%2073%20-%20Pio%20XII%2C%20S%C3%A3o%20Jo%C3%A3o%20del%20Rei%20-%20MG%2C%2036305-304!5e0!3m2!1spt-BR!2sbr!4v1667348774922!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-44.22937358456046",
        longitude: "-21.14104648256"
    },
    {
        id: 33,
        Estado: "MA",
        Cidade: "S\xe3o Lu\xeds",
        Endereço: "R. De Santana, 155 - Centro",
        Salao: "Mercad\xe3o da Beleza",
        Telefone: "(98) 9911-70662",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2210394974704!2d-44.28322898456043!3d-21.143599982649945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1c8dbd601f2bd%3A0x7a1176a6958af4bf!2sR.%20Osc%C3%A1r%20Moreira%20Sandim%2C%2011%20-%20Res.%20Lenheiro%2C%20S%C3%A3o%20Jo%C3%A3o%20del%20Rei%20-%20MG%2C%2036309-392!5e0!3m2!1spt-BR!2sbr!4v1667348791747!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-44.28322898456043",
        longitude: "-21.14359998264"
    },
    {
        id: 34,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Cipriano Barata, 2191",
        Salao: "Harmonia Rios",
        Telefone: "(11) 2215-0099",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.925946340361!2d-44.304297584773416!3d-2.5310671389656396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68ee6de6f1fb3%3A0xe1e5e5e74a96d11!2sR.%20de%20Santana%2C%20155%20-%20Centro%2C%20S%C3%A3o%20Lu%C3%ADs%20-%20MA%2C%2065015-440!5e0!3m2!1spt-BR!2sbr!4v1667348815368!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-44.304297584773416",
        longitude: "-2.531067138965"
    },
    {
        id: 35,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "Estrada das L\xe1grimas, 1689",
        Salao: "Week Hair",
        Telefone: "(11) 95233-3112",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4266788673767!2d-46.60722668451613!3d-23.58902596850067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bee5c337daf%3A0xfeb9ff554de37a06!2sR.%20Cipriano%20Barata%2C%202191%20-%20Ipiranga%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004205-001!5e0!3m2!1spt-BR!2sbr!4v1667348834567!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.60722668451613",
        longitude: "-23.5890259685"
    },
    {
        id: 36,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "Lino Coutinho, 983 A Sala: 1",
        Salao: "Espaco Mulher",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.621790841778!2d-46.59487338451578!3d-23.61789326956867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c82909ea24b%3A0x376973c8886db1ad!2sEstr.%20das%20L%C3%A1grimas%2C%201689%20-%20Vila%20Heliopolis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004245-000!5e0!3m2!1spt-BR!2sbr!4v1667348852190!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.59487338451578",
        longitude: "-23.6178932695"
    },
    {
        id: 37,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Agostinho Gomes, 661",
        Salao: "Bella Barillaro",
        Telefone: "(11) 99491-7856",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3438971980604!2d-46.60435298451609!3d-23.59199646861058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bf2891af549%3A0x5cf48e19102d6942!2sR.%20Lino%20Coutinho%2C%20983%20-%20Ipiranga%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004207-001!5e0!3m2!1spt-BR!2sbr!4v1667348867827!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.60435298451609",
        longitude: "-23.5919964686"
    },
    {
        id: 38,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Varzel\xe2ndia, 301 - Jardim Pedro Jos\xe9 Nunes",
        Salao: "Flor da Pele",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7880636225746!2d-46.60719988451638!3d-23.576054068021328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59587f4a9433%3A0x9ccc4e91bc2db4cc!2sR.%20Agostinho%20Gomes%2C%20661%20-%20Ipiranga%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004206-000!5e0!3m2!1spt-BR!2sbr!4v1667348894473!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.60719988451638",
        longitude: "-23.57605406802"
    },
    {
        id: 39,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "Av. Cangaiba, 2611 - Cangaiba",
        Salao: "Studio D&Z",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.776890383564!2d-46.46644908451789!3d-23.504544365382696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6116be718feb%3A0xdf7687aec085ec7!2sR.%20Varzel%C3%A2ndia%2C%20301%20-%20Jardim%20Pedro%20Jos%C3%A9%20Nunes%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008061-320!5e0!3m2!1spt-BR!2sbr!4v1667348924919!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.46644908451789",
        longitude: "-23.50454436538"
    },
    {
        id: 40,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Jd das Margaridas, 404 - Vila Buenos Aires",
        Salao: "Flor de Lis",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7371111995594!2d-46.53277038451775!3d-23.505976665435526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5fcecb9df43b%3A0x48082c54e2c2cd2e!2sAv.%20Canga%C3%ADba%2C%202611%20-%20Cangaiba%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003711-007!5e0!3m2!1spt-BR!2sbr!4v1667348939558!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.53277038451775",
        longitude: "-23.50597666543"
    },
    {
        id: 41,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Eng. Osvaldo Andreani, 247 - Ponte Rasa",
        Salao: "Studio Harm",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.710645097106!2d-46.51534398451782!3d-23.50692956547067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce608091b077a9%3A0x554716d253d8da86!2sR.%20Jardim%20das%20Margaridas%2C%20404%20-%20Vila%20Buenos%20Aires%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003737-000!5e0!3m2!1spt-BR!2sbr!4v1667348954929!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.51534398451782",
        longitude: "-23.5069295654"
    },
    {
        id: 42,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Col. Leopoldina - Vila Cisper",
        Salao: "Estrela Rosa",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5539219281136!2d-46.49396778451757!3d-23.512571565678584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce60eeae088541%3A0xa76492bb1b8a4233!2sR.%20Eng.%20Osvaldo%20Andreani%2C%20247%20-%20Vila%20Rio%20Branco%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003877-100!5e0!3m2!1spt-BR!2sbr!4v1667348969025!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.49396778451757",
        longitude: "-23.51257156567"
    },
    {
        id: 43,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Osman Fonseca, 146 - Campo Grande",
        Salao: "Salao Arco \xcdris",
        Telefone: "(11) 5631-6534",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.117354165007!2d-46.501941884518125!3d-23.492282164931225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce606f35f18b39%3A0xb2a1d29a541e3686!2sR.%20Col.%20Leopoldina%20-%20Vila%20Cisper%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003821-020!5e0!3m2!1spt-BR!2sbr!4v1667348984788!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.501941884518125",
        longitude: "-23.492282164931225"
    },
    {
        id: 44,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "Av. Yervant Kissajikian, 378 - VL Constan\xe7a",
        Salao: "Tr\xeas Irm\xe3os Cabeleireiros",
        Telefone: "(11) 5623-6092",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.261613415585!2d-46.680367284514695!3d-23.66660057137339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce500fb7812627%3A0x77a2bdc0d6ebe6f1!2sR.%20Osman%20Fonseca%2C%20146%20-%20Jardim%20Luanda%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004678-030!5e0!3m2!1spt-BR!2sbr!4v1667348998022!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.680367284514695",
        longitude: "-23.66660057137339"
    },
    {
        id: 45,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Ailson Sim\xf5es, 39 - Cupec\xea",
        Salao: "Zahara Espa\xe7o de Beleza",
        Telefone: "(11) 5566-4240",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.261613415585!2d-46.680367284514695!3d-23.66660057137339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5008ab5ded91%3A0x4e9c5a5385943391!2sAv.%20Yervant%20Kissajikian%2C%20378%20-%20Vila%20Constanca%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004660-000!5e0!3m2!1spt-BR!2sbr!4v1667349014218!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.680367284514695",
        longitude: "-23.66660057137339"
    },
    {
        id: 46,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Bueno de Andrade, 501 - Aclima\xe7\xe3o",
        Salao: "Zilda",
        Telefone: "(11) 98627-4557",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.251978071694!2d-46.677397184514774!3d-23.666945271386105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5aa76a92349d%3A0x904881ee7d3f9a5b!2sR.%20Ailson%20Sim%C3%B5es%2C%2039%20-%20Cupec%C3%AA%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004652-228!5e0!3m2!1spt-BR!2sbr!4v1667349033220!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.677397184514774",
        longitude: "-23.666945271386105"
    },
    {
        id: 47,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Prof Apr\xedgio de Gonzaga, 765 - Sa\xfade",
        Salao: "Elisa Pires",
        Telefone: "(11) 98350-8553 / (11) 2577-5462",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1062369510732!2d-46.633578084516664!3d-23.564627667599137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce590a9a1598a3%3A0x932aa4271c9120d3!2sR.%20Bueno%20de%20Andrade%2C%20501%20-%20Liberdade%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001526-000!5e0!3m2!1spt-BR!2sbr!4v1667349083461!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.633578084516664",
        longitude: "-23.564627667599137"
    },
    {
        id: 48,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "Av. Diederichsen, 1249 - Vila Guarani",
        Salao: "Salao Vitrine",
        Telefone: "(11) 5017-4765 / (11) 5011-0820",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4423000598963!2d-46.63522188451552!3d-23.62432616980678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5afff314716b%3A0x2999da6ffc8505e9!2sR.%20Prof.%20Apr%C3%ADgio%20Gonzaga%2C%20765%20-%20S%C3%A3o%20Judas%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004303-001!5e0!3m2!1spt-BR!2sbr!4v1667349098520!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.63522188451552",
        longitude: "-23.6243261698"
    },
    {
        id: 49,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Pajau, 171 - Vila Campo Grande",
        Salao: "Juliana Valadares",
        Telefone: "(11) 94736-1641",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4423000598963!2d-46.63522188451552!3d-23.62432616980678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5afb7a82b063%3A0x14868285e965706!2sAv.%20Diederichsen%2C%201249%20-%20Vila%20Guarani%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004310-001!5e0!3m2!1spt-BR!2sbr!4v1667349114771!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.63522188451552",
        longitude: "-23.6243261698"
    },
    {
        id: 50,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Pascoal Valva, 509 - Cidade Ademar",
        Salao: "Marina",
        Telefone: "(11) 8662-3807",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.377193688072!2d-46.69680018451472!3d-23.66246537122003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5040d2c23d5f%3A0x7f563450bf227842!2sRua%20Paja%C3%BA%2C%20171%20-%20Vila%20Campo%20Grande%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004673-000!5e0!3m2!1spt-BR!2sbr!4v1667349128448!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.69680018451472",
        longitude: "-23.6624653712"
    },
    {
        id: 51,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Pinheiro Guimar\xe3es, 706 - Jardim Avelino",
        Salao: "Leonardo Gilles Hair Design",
        Telefone: "(11) 96195-5632",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.6153388798894!2d-46.641140184514285!3d-23.68971027223089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce451bb26c2951%3A0xa85a52def90d1c92!2sRua%20Pascoal%20Valva%2C%20509%20-%20Jardim%20Luso%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004421-070!5e0!3m2!1spt-BR!2sbr!4v1667349142816!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.641140184514285",
        longitude: "-23.68971027223089"
    },
    {
        id: 52,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Costa Barros, 1028 - Sala 3 - Vila Alpina",
        Salao: "Amigos Cabeleireiros",
        Telefone: "(11) 98690-7109",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4155016168475!2d-46.57363718451618!3d-23.58942706851558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c43ca242b01%3A0xae56cbb082843e8f!2sR.%20Pinheiro%20Guimar%C3%A3es%2C%20706%20-%20Parque%20da%20Vila%20Prudente%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003141-030!5e0!3m2!1spt-BR!2sbr!4v1667349157834!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.57363718451618",
        longitude: "-23.5894270685"
    },
    {
        id: 53,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Mandior\xe9, 528 - Vila Formosa",
        Salao: "Jhonatan Vitor Make Up & Hair",
        Telefone: "(11) 98318-2110",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4155016168475!2d-46.57363718451618!3d-23.58942706851558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c556c92585f%3A0x21aca34e00baa917!2sR.%20Costa%20Barros%2C%201028%20-%20Vila%20Alpina%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003210-000!5e0!3m2!1spt-BR!2sbr!4v1667349173080!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.57363718451618",
        longitude: "-23.5894270685"
    },
    {
        id: 54,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Das Perobas, 17 B",
        Salao: "Barber Jessy Hair Style",
        Telefone: "(11) 95843-5979",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.967656852831!2d-46.55001918451651!3d-23.569605067783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5dcedea482bd%3A0x7237ea23a9cddf19!2sR.%20Mandior%C3%A9%2C%20528%20-%20Vila%20Formosa%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003360-015!5e0!3m2!1spt-BR!2sbr!4v1667349196677!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.55001918451651",
        longitude: "-23.56960506"
    },
    {
        id: 55,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Sabi\xe1, 37",
        Salao: "Salao de Cabeleireiro Unissex",
        Telefone: "(11) 96183-9914",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.9789530699804!2d-46.645644884515264!3d-23.640924770421616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5aef2f6f3eeb%3A0xba4a7697bfb08976!2sRua%20das%20Perobas%2C%2017%20-%20Jardim%20Oriental%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004321-120!5e0!3m2!1spt-BR!2sbr!4v1667349213923!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.645644884515264",
        longitude: "-23.640924770421616"
    },
    {
        id: 56,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Antonio da Cruz Messias, 120 - Jd S\xe3o Luiz",
        Salao: "Jany Ara\xfajo",
        Telefone: "(11) 96997-1070",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.704701209085!2d-46.71534508451116!3d-23.864617578747275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce373027928c41%3A0x2ab12af8dfff1a54!2sCond.%20Vargem%20Grande%2C%20Col%C3%B4nia%20Zona%20Sul%20-%20Parelheiros!5e0!3m2!1spt-BR!2sbr!4v1667349262568!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.71534508451116",
        longitude: "-23.86461757874"
    },
    {
        id: 57,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Moliere, 425",
        Salao: "Mauricio Ribeiro Est\xe9tica e Beleza",
        Telefone: "(11) 2892-9668 / (11) 96899-6202",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5317656789653!2d-46.7340300845148!3d-23.65693407101487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5175be06fcc3%3A0xc0cf6cdf5fd4a019!2sR.%20Ant%C3%B4nio%20da%20Cruz%20Mess%C3%ADas%2C%20120%20-%20Jardim%20S%C3%A3o%20Lu%C3%ADs%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005814-130!5e0!3m2!1spt-BR!2sbr!4v1667349280484!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.7340300845148",
        longitude: "-23.6569340710"
    },
    {
        id: 58,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "Av. Sat\xe9lite, 689 - S\xe3o Matheus",
        Salao: "Novo Stylo",
        Telefone: "(11) 98414-7347",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.4662193312406!2d-46.69462758451479!3d-23.65927977110189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce504179aa103b%3A0xbba8244a2225b83!2sRua%20Moli%C3%A9re%2C%20425%20-%20Vila%20Sofia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004671-090!5e0!3m2!1spt-BR!2sbr!4v1667349293841!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.69462758451479",
        longitude: "-23.6592797711"
    },
    {
        id: 59,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "Av. Maria Luiza Americo, 99",
        Salao: "Oficina da Beleza",
        Telefone: "(11) 3294-2963 / (11) 98252-9679 / (11) 99575-4440",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8144224030384!2d-46.46765018451582!3d-23.61098756931298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce689a549939e5%3A0xa1368a7ca7fb07cf!2sAv.%20Sat%C3%A9lite%2C%20689%20-%20Cidade%20Satelite%20Santa%20Barbara%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008330-480!5e0!3m2!1spt-BR!2sbr!4v1667349388033!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.46765018451582",
        longitude: "-23.6109875693"
    },
    {
        id: 60,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Maria Bauman Mendon\xe7a, 280",
        Salao: "Cisar's",
        Telefone: "(11) 97959-6494",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.726369106232!2d-46.48386058451653!3d-23.578269068103175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce67ac347512c5%3A0xba3f669a12ee6c23!2sAv.%20Maria%20Luiza%20Americano%2C%2099%20-%20Itaquera%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008275-001!5e0!3m2!1spt-BR!2sbr!4v1667349430849!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.48386058451653",
        longitude: "-23.57826906810"
    },
    {
        id: 61,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Altin\xf3polis, 240 - \xc1gua Fria",
        Salao: "Laselli",
        Telefone: "(11) 2959-4594",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.884457795391!2d-46.45051348451708!3d-23.53665776656674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66a34f87f501%3A0x94fa55e6ab0a97d4!2sRua%20Maria%20Baumann%20Mendon%C3%A7a%2C%20280%20-%20Itaquera%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008210-500!5e0!3m2!1spt-BR!2sbr!4v1667349478096!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.45051348451708",
        longitude: "-23.5366577665"
    },
    {
        id: 62,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "Jos\xe9 Vieira Guimar\xe3es, 1414 - Jd Centen\xe1rio",
        Salao: "Majestosa Beleza",
        Telefone: "(11) 93152-1300",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3428799652424!2d-46.62034588451818!3d-23.484156264631885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef647479398d1%3A0x9c077e33963bfa30!2sR.%20Altin%C3%B3polis%2C%20240%20-%20%C3%81gua%20Fria%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002334-000!5e0!3m2!1spt-BR!2sbr!4v1667349493780!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.62034588451818",
        longitude: "-23.48415626463"
    },
    {
        id: 63,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Jurarater\xea, 48 - Itaim Paulista",
        Salao: "Espalhamos Beleza",
        Telefone: "(11) 2572-7447 / (11) 96299-4426",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1237760560794!2d-46.42306948451735!3d-23.52805016624914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6414c0df9d8f%3A0x84ec55dce1d76e11!2sR.%20Jos%C3%A9%20Vieira%20Guimar%C3%A3es%2C%201414%20-%20Jardim%20Santa%20Teresinha%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008430-000!5e0!3m2!1spt-BR!2sbr!4v1667349541337!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.42306948451735",
        longitude: "-23.5280501662"
    },
    {
        id: 64,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Jo\xe3o de Sirqueira Afonso, 195 - Lageado",
        Salao: "\xc9tica e Beleza",
        Telefone: "(11) 2552-4871",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.868196389152!2d-46.401475084517756!3d-23.501256465261708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce637f1645f98f%3A0x9472201078324a37!2sR.%20Jurarater%C3%AA%2C%2048%20-%20Jardim%20Tua%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008140-040!5e0!3m2!1spt-BR!2sbr!4v1667349560163!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.401475084517756",
        longitude: "-23.501256465261708"
    },
    {
        id: 65,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "R. Paulino de Brito, 106 - Jd Brasil",
        Salao: "Bella Espa\xe7o da Beleza",
        Telefone: "(11) 2981-8423",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8670692788273!2d-46.398517484517164!3d-23.53728306658982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce64feaed6f5ad%3A0xfdb410bc8ff66089!2sR.%20Jo%C3%A3o%20de%20Siqueira%20Afonso%2C%20195%20-%20Lageado%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008452-000!5e0!3m2!1spt-BR!2sbr!4v1667349574937!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.398517484517164",
        longitude: "-23.53728306658982"
    },
    {
        id: 66,
        Estado: "SP",
        Cidade: "S\xe3o Paulo",
        Endereço: "Aguia de Haia, 1310",
        Salao: "Instituto de Beleza Reluz",
        Telefone: "(11) 2043-0074",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.4905465835923!2d-46.58337138451828!3d-23.478834264436014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef5eee1c146e3%3A0x8790f67802261ff3!2sR.%20Paulino%20de%20Brito%2C%20106%20-%20Jardim%20Brasil%20(Zona%20Norte)%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002223-010!5e0!3m2!1spt-BR!2sbr!4v1667349588405!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.58337138451828",
        longitude: "-23.47883426443"
    },
    {
        id: 67,
        Estado: "SP",
        Cidade: "Tabo\xe3o da Serra",
        Endereço: "R. Julio Fernandes, 114 - JD Leme",
        Salao: "Shirley",
        Telefone: "(11) 98904-0662",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.942414024781!2d-46.47799097087989!3d-23.534573517525878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66d40ff09c2b%3A0x586bb20d43c9312c!2sAv.%20%C3%81guia%20de%20Haia%2C%201310%20-%20Artur%20Alvim%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003694-000!5e0!3m2!1spt-BR!2sbr!4v1667349616755!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.47799097087989",
        longitude: "-23.53457351752"
    },
    {
        id: 68,
        Estado: "SP",
        Cidade: "Tabo\xe3o da Serra",
        Endereço: "R. Cassiano de Moraes, 35 - Jd Scandia",
        Salao: "Deluxe",
        Telefone: "(11) 94235-7748",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8884509162867!2d-46.79448088451513!3d-23.644165570541638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce537c3c01694f%3A0x9d25e1cd2a98b00!2sR.%20J%C3%BAlio%20Fernandes%2C%20114%20-%20Jardim%20Leme%2C%20Tabo%C3%A3o%20da%20Serra%20-%20SP%2C%2006773-170!5e0!3m2!1spt-BR!2sbr!4v1667349648129!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0; borderRadius: 5px 5px 0 0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
        latitude: "-46.79448088451513",
        longitude: "-23.64416557054"
    }, 
];

;// CONCATENATED MODULE: ./src/lib/locais.tsx

function getlocal() {
    const locais = LocaleData;
    return locais;
}


/***/ }),

/***/ 1221:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Locails),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1875);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5869);
/* harmony import */ var _components_SelectDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7424);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_locais__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(221);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer__WEBPACK_IMPORTED_MODULE_2__, _components_Header__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Footer__WEBPACK_IMPORTED_MODULE_2__, _components_Header__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Locails({ locais  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { 0: filter , 1: setFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const filterLocal = locais.filter((obj)=>obj.Cidade === filter);
    const filtercities = locais.map((obj)=>obj.Cidade);
    const novaArr = filtercities.filter((este, i)=>filtercities.indexOf(este) === i);
    const verifiFilter = filterLocal.length <= 0 ? locais : filterLocal;
    function handleSelectChange(event) {
        const { value  } = event.target;
        setFilter(value);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "main",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "quality section",
                        id: "premium",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "quality__container container ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "specialty__box",
                                        style: {
                                            gridTemplateColumns: "1fr"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "section__titleSpecialty",
                                            children: t("locais_titulo")
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_SelectDefault__WEBPACK_IMPORTED_MODULE_4__/* .SelectDefault */ .u, {
                                        label: t("locais_label"),
                                        name: "name",
                                        id: "name",
                                        onChange: handleSelectChange,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "0",
                                                children: t("locais_option")
                                            }),
                                            novaArr.map((row)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: row,
                                                    children: row
                                                }, row))
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "lojas container",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "font-1-xxl",
                                        children: [
                                            t("locais_subtitulo"),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "cor-p1",
                                                children: "."
                                            })
                                        ]
                                    }),
                                    verifiFilter.map((row)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "lojas-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "maps",
                                                    dangerouslySetInnerHTML: {
                                                        __html: row.iframe
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "lojas-conteudo",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "font-1-xl",
                                                            children: row.Cidade
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "lojas-dados font-2-s cor-8",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: row.Endereço
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: row.Salao
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "lojas-dados font-2-s cor-8",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: `tel:+${row.Telefone}`,
                                                                dangerouslySetInnerHTML: {
                                                                    __html: row.Telefone ? row.Telefone.replaceAll("/", "<br/>") : row.Telefone
                                                                }
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, row.id))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}
const getStaticProps = async ()=>{
    const locais = (0,_lib_locais__WEBPACK_IMPORTED_MODULE_6__/* .getlocal */ .P)();
    return {
        props: {
            locais
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 9989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("react-icons/ri");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,21,370], () => (__webpack_exec__(1221)));
module.exports = __webpack_exports__;

})();