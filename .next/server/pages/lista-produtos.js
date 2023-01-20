"use strict";
(() => {
var exports = {};
exports.id = 852;
exports.ids = [852];
exports.modules = {

/***/ 5290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Filtered)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__);





function Filtered({ isOpen , handleInputChange , formValue , handleSelectChange , handleCloseModal  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { sexo , cabelo , linha , tipoCabelo , comprimento , aspecto  } = router.query;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `cart ${isOpen && "show-cart"}`,
        id: "cart",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "bx bx-x cart__close",
                id: "cart-close",
                onClick: handleCloseModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiXCircle, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "cart__title-center",
                children: t("filtro_titulo")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "cart__container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "orcamento_filter",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "orcamento-produto_filter",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "font-1-xs cor-5",
                                    style: {
                                        marginBottom: "12px"
                                    },
                                    children: t("filtro_questao0_titulo")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "orcamento-conteudo_filter field-group_filter",
                                    id: "orcamento-bikcraft_filter",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "radio",
                                            name: "linha",
                                            value: "profissional",
                                            id: "profissional",
                                            checked: linha === "profissional",
                                            onChange: handleInputChange
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "profissional",
                                            children: t("filtro_questao0_option1")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "radio",
                                            name: "linha",
                                            value: "homecare",
                                            checked: linha === "homecare",
                                            id: "homecare",
                                            onChange: handleInputChange
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "homecare",
                                            children: t("filtro_questao0_option2")
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "orcamento-produto_filter",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "font-1-xs cor-5",
                                    style: {
                                        marginBottom: "12px"
                                    },
                                    children: t("filtro_questao1_titulo")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "orcamento-conteudo_filter field-group_filter",
                                    id: "orcamento-bikcraft_filter",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "radio",
                                            name: "sexo",
                                            value: "feminino",
                                            id: "feminino",
                                            checked: sexo === "feminino",
                                            onChange: handleInputChange
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "feminino",
                                            children: t("filtro_questao1_option1")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "radio",
                                            name: "sexo",
                                            value: "masculino",
                                            checked: sexo === "masculino",
                                            id: "masculino",
                                            onChange: handleInputChange
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "masculino",
                                            children: t("filtro_questao1_option2")
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "orcamento-dados_filter form",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "font-1-xs cor-5",
                                    children: t("filtro_questao2_titulo")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "cabelo",
                                            children: t("filtro_questao2_option1_placeholder")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            id: "cabelo",
                                            name: "cabelo",
                                            value: cabelo,
                                            onChange: handleSelectChange,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "0",
                                                    children: t("filtro_questao2_option0")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "liso",
                                                    children: t("filtro_questao2_option1")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "ondulado",
                                                    children: t("filtro_questao2_option2")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "cacheado",
                                                    children: t("filtro_questao2_option3")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "crespo",
                                                    children: t("filtro_questao2_option4")
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "tipoCabelo",
                                            children: t("filtro_questao3_option1_placeholder")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            id: "tipoCabelo",
                                            name: "tipoCabelo",
                                            value: tipoCabelo,
                                            onChange: handleSelectChange,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "0",
                                                    children: t("filtro_questao3_option0")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "natural",
                                                    children: t("filtro_questao3_option1")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "comMechas",
                                                    children: t("filtro_questao3_option2")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "comAlisamento",
                                                    children: t("filtro_questao3_option3")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "comColora\xe7\xe3o",
                                                    children: t("filtro_questao3_option4")
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "orcamento-produto_filter",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "font-1-xs cor-5",
                                    style: {
                                        marginBottom: "12px"
                                    },
                                    children: t("filtro_questao4_titulo")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "orcamento-conteudo_filter field-group_filter",
                                    id: "orcamento-bikcraft_filter",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "radio",
                                            name: "comprimento",
                                            value: "longo",
                                            checked: comprimento === "longo",
                                            id: "longo",
                                            onChange: handleInputChange
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "longo",
                                            children: t("filtro_questao4_option1")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "radio",
                                            name: "comprimento",
                                            value: "medio",
                                            checked: comprimento === "medio",
                                            id: "medio",
                                            onChange: handleInputChange
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "medio",
                                            children: t("filtro_questao4_option2")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "radio",
                                            name: "comprimento",
                                            value: "curto",
                                            checked: comprimento === "curto",
                                            id: "curto",
                                            onChange: handleInputChange
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "curto",
                                            children: t("filtro_questao4_option3")
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "orcamento-produto_filter",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "font-1-xs cor-5",
                                    style: {
                                        marginBottom: "12px"
                                    },
                                    children: t("filtro_questao5_titulo")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "orcamento-conteudo_filter field-group_filter",
                                    id: "orcamento-bikcraft_filter",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "radio",
                                            name: "aspecto",
                                            value: "oleoso",
                                            checked: aspecto === "curto",
                                            id: "oleoso",
                                            onChange: handleInputChange
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "oleoso",
                                            children: t("filtro_questao5_option1")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "radio",
                                            name: "aspecto",
                                            value: "seco",
                                            checked: aspecto === "seco",
                                            id: "seco",
                                            onChange: handleInputChange
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "seco",
                                            children: t("filtro_questao5_option2")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "radio",
                                            name: "aspecto",
                                            value: "misto",
                                            checked: aspecto === "misto",
                                            id: "misto",
                                            onChange: handleInputChange
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "misto",
                                            children: t("filtro_questao5_option3")
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 1497:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductsList),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CardItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(313);
/* harmony import */ var _components_Filtered__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5290);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1875);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5869);
/* harmony import */ var _lib_produtosBr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8261);
/* harmony import */ var _lib_produtosEn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer__WEBPACK_IMPORTED_MODULE_6__, _components_Header__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Footer__WEBPACK_IMPORTED_MODULE_6__, _components_Header__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








//DATA


function ProductsList({ productBr , productEn  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { 0: modal , 1: setModal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: formData , 1: setFormData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (router.query.linha === "homecare") {
            setTimeout(()=>{
                setFilterLines([
                    "HomeCare"
                ]);
            }, 1000);
        } else {
            setTimeout(()=>{
                setFilterLines([
                    "Profissional"
                ]);
            }, 1000);
        }
    }, [
        router?.query
    ]);
    const isBr = i18n.language === "ptbr" ? productBr : productEn;
    const filterItems = isBr.filter((obj)=>obj.filtros.includes(formData.sexo) || obj.filtros.includes(formData.cabelo) || obj.filtros.includes(formData.linha) || obj.filtros.includes(formData.tipoCabelo) || obj.filtros.includes(formData.desejoCabelo) || obj.filtros.includes(formData.comprimento) || obj.filtros.includes(formData.aspecto));
    let verifiFilter = filterItems.length <= 0 ? isBr : filterItems;
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    function handleOnClickProduct(id, title) {
        var convertTitle = new URLSearchParams(title).toString();
        var convertUnderline = convertTitle.replaceAll("+", "-");
        router.push({
            pathname: `/products/${convertUnderline}`,
            query: {
                id
            }
        });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setData([
            ...verifiFilter
        ]);
    }, [
        verifiFilter
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getFilterItems();
    }, [
        formData
    ]);
    function handleSelectChange(event) {
        const { name , value  } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    function handleInputChange(event) {
        const { name , value  } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const getFilterItems = async ()=>{
        var newFilter = formData;
        var size = 0;
        for(var key in newFilter){
            if (newFilter[key]) {
                size++;
            } else {
                delete newFilter[key];
            }
        }
        if (size > 0) {
            var queryString = new URLSearchParams(newFilter).toString();
            queryString += ``;
            router.push({
                query: queryString
            });
        }
    };
    const { 0: filterLines , 1: setFilterLines  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        "Profissional"
    ]);
    function handleOnChangeFilterLine(value) {
        const existing = value == filterLines;
        console.log(existing);
        if (existing) {
            setFilterLines([]);
        } else {
            const newArray = [];
            value.map((row)=>{
                newArray.push(row);
            });
            setFilterLines(newArray);
        }
    // if (existing.length === 0) {
    //   const newLine = filterLines;
    //   value.map((valueRow) => {
    //     newLine.push(valueRow);
    //   });
    //   setFilterLines([...newLine]);
    // } else {
    //   if (value.length === 2) {
    //     setFilterLines([]);
    //   } else {
    //     setFilterLines(
    //       filterLines.filter(
    //         (objFilterLines) =>
    //           value.filter((objValue) => objValue !== objFilterLines)[0]
    //       )
    //     );
    //   }
    // }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let filterFilters = filterLines;
        const newData = [];
        filterFilters.map((filter)=>{
            if (verifiFilter.filter((obj)=>obj.filtros.filter((filtro)=>filtro === filter).length > 0)) {
                verifiFilter.filter((obj)=>obj.filtros.filter((filtro)=>filtro === filter).length > 0).map((row)=>{
                    newData.push(row);
                });
            }
        });
        setData([
            ...newData
        ]);
    }, [
        filterLines
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Filtered__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                isOpen: modal,
                handleCloseModal: ()=>setModal(false),
                handleInputChange: handleInputChange,
                handleSelectChange: handleSelectChange,
                formValue: formData
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "main",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "quality section",
                        id: "premium",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "quality__container container ",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "specialty__box",
                                    style: {
                                        gridTemplateColumns: "1fr"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "section__titleSpecialty",
                                            children: t("produtos_titulo")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "listItems-group",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: t("produtos_subtitulo")
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "filterItems",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "filterItemsForLines",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: filterLines.filter((obj)=>obj === "Profissional").length > 0 ? "active" : "normal",
                                            onClick: ()=>handleOnChangeFilterLine([
                                                    "Profissional"
                                                ]),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: t("produtos_button_linha")
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: filterLines.filter((obj)=>obj === "HomeCare").length > 0 ? "active" : "normal",
                                            onClick: ()=>handleOnChangeFilterLine([
                                                    "HomeCare"
                                                ]),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Home Care"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: filterLines.includes("HomeCare") && filterLines.includes("Profissional") ? "active" : "normal",
                                            onClick: ()=>handleOnChangeFilterLine([
                                                    "HomeCare",
                                                    "Profissional"
                                                ]),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: t("produtos_button_linha_todos")
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "new__container container grid",
                                style: {
                                    marginTop: "4rem"
                                },
                                children: data.map((row)=>{
                                    console.log("cole\xe7\xe3o", row?.colecao[0].src);
                                    return(// <article className="new__card" key={row.id}>
                                    //   <Image src={row.imagem} className="new__img" alt={row.title} />
                                    //   <button
                                    //     onClick={() => handleOnClickProduct(row.id, row.title)}
                                    //     className="new__link"
                                    //     style={{ width: '100%' }}
                                    //   >
                                    //     <div className="new__data">
                                    //       <h2 className="new__title">{row.title}</h2>
                                    //       {/* <span className="new__subtitle">{row.title}</span> */}
                                    //     </div>
                                    //     <i className="ri-arrow-right-line">
                                    //       <RiArrowRightLine />
                                    //     </i>
                                    //   </button>
                                    // </article>
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CardItem__WEBPACK_IMPORTED_MODULE_4__/* .CardItem */ .S, {
                                            handleOnClick: ()=>handleOnClickProduct(row.id, row.title),
                                            images: row.colecao,
                                            title: row.title,
                                            isBorder: true
                                        }, row)
                                    }));
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}
const getStaticProps = async ()=>{
    const productBr = (0,_lib_produtosBr__WEBPACK_IMPORTED_MODULE_8__/* .getProdutcBr */ .Y)();
    const productEn = (0,_lib_produtosEn__WEBPACK_IMPORTED_MODULE_9__/* .getProdutcEn */ .n)();
    return {
        props: {
            productBr: productBr,
            productEn: productEn
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

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,61,21,370,275], () => (__webpack_exec__(1497)));
module.exports = __webpack_exports__;

})();