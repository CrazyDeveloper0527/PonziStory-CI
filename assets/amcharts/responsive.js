AmCharts.addInitHandler(function (n) {
    "use strict";
    var u, t;
    if (n.responsive !== undefined && n.responsive.ready !== !0 && n.responsive.enabled === !0 && (u = n.version.split("."), !(u.length < 2) && !(Number(u[0]) < 3) && (Number(u[0]) !== 3 || !(Number(u[1]) < 13)))) {
        t = n.responsive;
        t.ready = !0;
        t.currentRules = {};
        t.overridden = [];
        var e = {pie: [
            {maxWidth: 550, legendPosition: "left", overrides: {legend: {enabled: !1}}},
            {maxWidth: 550, legendPosition: "right", overrides: {legend: {enabled: !1}}},
            {maxWidth: 150, overrides: {legend: {enabled: !1}}},
            {maxHeight: 350, legendPosition: "top", overrides: {legend: {enabled: !1}}},
            {maxHeight: 350, legendPosition: "bottom", overrides: {legend: {enabled: !1}}},
            {maxHeight: 150, overrides: {legend: {enabled: !1}}},
            {maxWidth: 400, overrides: {labelsEnabled: !1}},
            {maxWidth: 100, overrides: {legend: {enabled: !1}}},
            {maxHeight: 350, overrides: {pullOutRadius: 0}},
            {maxHeight: 200, overrides: {titles: {enabled: !1}, labelsEnabled: !1}},
            {maxWidth: 60, overrides: {autoMargins: !1, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, radius: "50%", innerRadius: 0, balloon: {enabled: !1}, legend: {enabled: !1}}},
            {maxHeight: 60, overrides: {marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, radius: "50%", innerRadius: 0, balloon: {enabled: !1}, legend: {enabled: !1}}}
        ], funnel: [
            {maxWidth: 550, legendPosition: "left", overrides: {legend: {enabled: !1}}},
            {maxWidth: 550, legendPosition: "right", overrides: {legend: {enabled: !1}}},
            {maxWidth: 150, overrides: {legend: {enabled: !1}}},
            {maxHeight: 500, legendPosition: "top", overrides: {legend: {enabled: !1}}},
            {maxHeight: 500, legendPosition: "bottom", overrides: {legend: {enabled: !1}}},
            {maxHeight: 150, overrides: {legend: {enabled: !1}}},
            {maxWidth: 400, overrides: {labelsEnabled: !1, marginLeft: 10, marginRight: 10, legend: {enabled: !1}}},
            {maxHeight: 350, overrides: {pullOutRadius: 0, legend: {enabled: !1}}},
            {maxHeight: 300, overrides: {titles: {enabled: !1}}}
        ], radar: [
            {maxWidth: 550, legendPosition: "left", overrides: {legend: {enabled: !1}}},
            {maxWidth: 550, legendPosition: "right", overrides: {legend: {enabled: !1}}},
            {maxWidth: 150, overrides: {legend: {enabled: !1}}},
            {maxHeight: 350, legendPosition: "top", overrides: {legend: {enabled: !1}}},
            {maxHeight: 350, legendPosition: "bottom", overrides: {legend: {enabled: !1}}},
            {maxHeight: 150, overrides: {legend: {enabled: !1}}},
            {maxWidth: 300, overrides: {labelsEnabled: !1}},
            {maxWidth: 200, overrides: {autoMargins: !1, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, radius: "50%", titles: {enabled: !1}, valueAxes: {labelsEnabled: !1, radarCategoriesEnabled: !1}}},
            {maxHeight: 300, overrides: {labelsEnabled: !1}},
            {maxHeight: 200, overrides: {autoMargins: !1, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, radius: "50%", titles: {enabled: !1}, valueAxes: {radarCategoriesEnabled: !1}}},
            {maxHeight: 100, overrides: {valueAxes: {labelsEnabled: !1}}}
        ], gauge: [
            {maxWidth: 550, legendPosition: "left", overrides: {legend: {enabled: !1}}},
            {maxWidth: 550, legendPosition: "right", overrides: {legend: {enabled: !1}}},
            {maxWidth: 150, overrides: {legend: {enabled: !1}}},
            {maxHeight: 500, legendPosition: "top", overrides: {legend: {enabled: !1}}},
            {maxHeight: 500, legendPosition: "bottom", overrides: {legend: {enabled: !1}}},
            {maxHeight: 150, overrides: {legend: {enabled: !1}}},
            {maxWidth: 200, overrides: {titles: {enabled: !1}, allLabels: {enabled: !1}, axes: {labelsEnabled: !1}}},
            {maxHeight: 200, overrides: {titles: {enabled: !1}, allLabels: {enabled: !1}, axes: {labelsEnabled: !1}}}
        ], serial: [
            {maxWidth: 550, legendPosition: "left", overrides: {legend: {enabled: !1}}},
            {maxWidth: 550, legendPosition: "right", overrides: {legend: {enabled: !1}}},
            {maxWidth: 100, overrides: {legend: {enabled: !1}}},
            {maxHeight: 350, legendPosition: "top", overrides: {legend: {enabled: !1}}},
            {maxHeight: 350, legendPosition: "bottom", overrides: {legend: {enabled: !1}}},
            {maxHeight: 100, overrides: {legend: {enabled: !1}}},
            {maxWidth: 350, overrides: {autoMarginOffset: 0, graphs: {hideBulletsCount: 10}}},
            {maxWidth: 350, rotate: !1, overrides: {marginLeft: 10, marginRight: 10, valueAxes: {ignoreAxisWidth: !0, inside: !0, title: "", showFirstLabel: !1, showLastLabel: !1}, graphs: {bullet: "none"}}},
            {maxWidth: 350, rotate: !0, overrides: {marginLeft: 10, marginRight: 10, categoryAxis: {ignoreAxisWidth: !0, inside: !0, title: ""}}},
            {maxWidth: 200, rotate: !1, overrides: {marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10, categoryAxis: {ignoreAxisWidth: !0, labelsEnabled: !1, inside: !0, title: "", guides: {inside: !0}}, valueAxes: {ignoreAxisWidth: !0, labelsEnabled: !1, axisAlpha: 0, guides: {label: ""}}, legend: {enabled: !1}}},
            {maxWidth: 200, rotate: !0, overrides: {chartScrollbar: {scrollbarHeight: 4, graph: "", resizeEnabled: !1}, categoryAxis: {labelsEnabled: !1, axisAlpha: 0, guides: {label: ""}}, legend: {enabled: !1}}},
            {maxWidth: 100, rotate: !1, overrides: {valueAxes: {gridAlpha: 0}}},
            {maxWidth: 100, rotate: !0, overrides: {categoryAxis: {gridAlpha: 0}}},
            {maxHeight: 300, overrides: {autoMarginOffset: 0, graphs: {hideBulletsCount: 10}}},
            {maxHeight: 200, rotate: !1, overrides: {marginTop: 10, marginBottom: 10, categoryAxis: {ignoreAxisWidth: !0, inside: !0, title: "", showFirstLabel: !1, showLastLabel: !1}}},
            {maxHeight: 200, rotate: !0, overrides: {marginTop: 10, marginBottom: 10, valueAxes: {ignoreAxisWidth: !0, inside: !0, title: "", showFirstLabel: !1, showLastLabel: !1}, graphs: {bullet: "none"}}},
            {maxHeight: 150, rotate: !1, overrides: {titles: {enabled: !1}, chartScrollbar: {scrollbarHeight: 4, graph: "", resizeEnabled: !1}, categoryAxis: {labelsEnabled: !1, ignoreAxisWidth: !0, axisAlpha: 0, guides: {label: ""}}}},
            {maxHeight: 150, rotate: !0, overrides: {titles: {enabled: !1}, valueAxes: {labelsEnabled: !1, ignoreAxisWidth: !0, axisAlpha: 0, guides: {label: ""}}}},
            {maxHeight: 100, rotate: !1, overrides: {valueAxes: {labelsEnabled: !1, ignoreAxisWidth: !0, axisAlpha: 0, gridAlpha: 0, guides: {label: ""}}}},
            {maxHeight: 100, rotate: !0, overrides: {categoryAxis: {labelsEnabled: !1, ignoreAxisWidth: !0, axisAlpha: 0, gridAlpha: 0, guides: {label: ""}}}},
            {maxWidth: 100, overrides: {autoMargins: !1, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, categoryAxis: {labelsEnabled: !1}, valueAxes: {labelsEnabled: !1}}},
            {maxHeight: 100, overrides: {autoMargins: !1, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, categoryAxis: {labelsEnabled: !1}, valueAxes: {labelsEnabled: !1}}}
        ], xy: [
            {maxWidth: 550, legendPosition: "left", overrides: {legend: {enabled: !1}}},
            {maxWidth: 550, legendPosition: "right", overrides: {legend: {enabled: !1}}},
            {maxWidth: 100, overrides: {legend: {enabled: !1}}},
            {maxHeight: 350, legendPosition: "top", overrides: {legend: {enabled: !1}}},
            {maxHeight: 350, legendPosition: "bottom", overrides: {legend: {enabled: !1}}},
            {maxHeight: 100, overrides: {legend: {enabled: !1}}},
            {maxWidth: 250, overrides: {autoMarginOffset: 0, autoMargins: !1, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, valueAxes: {inside: !0, title: "", showFirstLabel: !1, showLastLabel: !1}, legend: {enabled: !1}}},
            {maxWidth: 150, overrides: {valueyAxes: {labelsEnabled: !1, axisAlpha: 0, gridAlpha: 0, guides: {label: ""}}}},
            {maxHeight: 250, overrides: {autoMarginOffset: 0, autoMargins: !1, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, valueAxes: {inside: !0, title: "", showFirstLabel: !1, showLastLabel: !1}, legend: {enabled: !1}}},
            {maxWidth: 150, overrides: {valueyAxes: {labelsEnabled: !1, axisAlpha: 0, gridAlpha: 0, guides: {label: ""}}}}
        ], stock: [
            {maxWidth: 500, overrides: {dataSetSelector: {position: "top"}, periodSelector: {position: "bottom"}}},
            {maxWidth: 400, overrides: {dataSetSelector: {selectText: "", compareText: ""}, periodSelector: {periodsText: "", inputFieldsEnabled: !1}}}
        ], map: [
            {maxWidth: 200, overrides: {zoomControl: {zoomControlEnabled: !1}, smallMap: {enabled: !1}, valueLegend: {enabled: !1}, dataProvider: {areas: {descriptionWindowWidth: 160, descriptionWindowRight: 10, descriptionWindowTop: 10}, images: {descriptionWindowWidth: 160, descriptionWindowRight: 10, descriptionWindowTop: 10}, lines: {descriptionWindowWidth: 160, descriptionWindowRight: 10, descriptionWindowTop: 10}}}},
            {maxWidth: 150, overrides: {dataProvider: {areas: {descriptionWindowWidth: 110, descriptionWindowRight: 10, descriptionWindowTop: 10}, images: {descriptionWindowWidth: 110, descriptionWindowRight: 10, descriptionWindowTop: 10}, lines: {descriptionWindowWidth: 110, descriptionWindowLeft: 10, descriptionWindowRight: 10}}}},
            {maxHeight: 200, overrides: {zoomControl: {zoomControlEnabled: !1}, smallMap: {enabled: !1}, valueLegend: {enabled: !1}, dataProvider: {areas: {descriptionWindowHeight: 160, descriptionWindowRight: 10, descriptionWindowTop: 10}, images: {descriptionWindowHeight: 160, descriptionWindowRight: 10, descriptionWindowTop: 10}, lines: {descriptionWindowHeight: 160, descriptionWindowRight: 10, descriptionWindowTop: 10}}}},
            {maxHeight: 150, overrides: {dataProvider: {areas: {descriptionWindowHeight: 110, descriptionWindowRight: 10, descriptionWindowTop: 10}, images: {descriptionWindowHeight: 110, descriptionWindowRight: 10, descriptionWindowTop: 10}, lines: {descriptionWindowHeight: 110, descriptionWindowLeft: 10, descriptionWindowRight: 10}}}}
        ]}, i = function (n) {
            return n === null || n === undefined
        }, o = function (n) {
            return!i(n) && Object.prototype.toString.call(n) === "[object Array]"
        }, r = function (n) {
            return n !== null && typeof n == "object"
        }, y = function (n, t) {
            for (var i = 0; i < n.length; i++)if (r(n[i]) && n[i].id === t)return n[i];
            return undefined
        }, h = function (n) {
            var i, t;
            if (!r(n))return n;
            if (o(n))return n.slice();
            i = {};
            for (t in n)Object.prototype.hasOwnProperty.call(n, t) && (i[t] = h(n[t]));
            return i
        }, c = "{F0578839-A214-4E2D-8D1B-44941ECE8332}_", l = {}, s = function (n, i, r) {
            var u = c + i;
            u in n || (n[u] = i in n ? n[i] : l);
            n[i] = h(r);
            t.overridden.push({object: n, property: i})
        }, a = function (n, t) {
            var i = n[c + t];
            i === l ? delete n[t] : n[t] = i
        }, p = function () {
            while (t.overridden.length > 0) {
                var n = t.overridden.pop();
                a(n.object, n.property)
            }
        }, w = function () {
            n.dataChanged = !0;
            n.type !== "xy" && (n.marginsUpdated = !1);
            n.zoomOutOnDataUpdate = !1;
            n.validateNow(!0);
            a(n, "zoomOutOnDataUpdate")
        }, f = function (n, t) {
            var h, e, u, p, l, c, w, a, v;
            if (!i(t))for (h in t)if (Object.prototype.hasOwnProperty.call(t, h)) {
                if (e = n[h], u = t[h], i(e)) {
                    s(n, h, u);
                    continue
                }
                if (o(e)) {
                    if (o(u)) {
                        if (e.length > 0 && !r(e[0]) || u.length > 0 && !r(u[0])) {
                            s(n, h, u);
                            continue
                        }
                        for (p = !0, l = 0; l < u.length; l++)if (i(u[l]) || i(u[l].id)) {
                            p = !1;
                            break
                        }
                        if (p) {
                            for (c = 0; c < u.length; c++) {
                                if (w = y(e, u[c].id), w === undefined)throw'could not find element to override in "' + h + '" with ID: ' + u[c].id;
                                f(w, u[c])
                            }
                            continue
                        }
                        if (u.length <= e.length) {
                            for (a = 0; a < u.length; a++)f(e[a], u[a]);
                            continue
                        }
                        throw"too many index-based overrides specified for object array property: " + h;
                    }
                    if (r(u)) {
                        for (v = 0; v < e.length; v++)f(e[v], u);
                        continue
                    }
                    throw"non-object override detected for array property: " + h;
                }
                if (r(e)) {
                    f(e, u);
                    continue
                }
                s(n, h, u)
            }
        }, v = function () {
            for (var r, c, e, s = n.divRealWidth, h = n.divRealHeight, o = !1, u = 0; u < t.rules.length; u++)r = t.rules[u], c = (r.minWidth === undefined || r.minWidth <= s) && (r.maxWidth === undefined || r.maxWidth >= s) && (r.minHeight === undefined || r.minHeight <= h) && (r.maxHeight === undefined || r.maxHeight >= h) && (r.rotate === undefined || r.rotate === !0 && n.rotate === !0 || r.rotate === !1 && (n.rotate === undefined || n.rotate === !1)) && (r.legendPosition === undefined || n.legend !== undefined && n.legend.position !== undefined && n.legend.position === r.legendPosition), c ? t.currentRules[u] === undefined && (t.currentRules[u] = !0, o = !0) : t.currentRules[u] !== undefined && (t.currentRules[u] = undefined, o = !0);
            if (o) {
                p();
                for (e in t.currentRules)if (Object.prototype.hasOwnProperty.call(t.currentRules, e) && t.currentRules[e] !== undefined) {
                    if (i(t.rules[e]))throw"null or undefined rule in index: " + e;
                    f(n, t.rules[e].overrides)
                }
                w()
            }
        };
        e.gantt = e.serial;
        o(t.rules) ? t.addDefaultRules !== !1 && (t.rules = e[n.type].concat(t.rules)) : t.rules = e[n.type];
        s(n, "zoomOutOnDataUpdate", n.zoomOutOnDataUpdate);
        n.addListener("resized", v);
        n.addListener("init", v)
    }
}, ["pie", "serial", "xy", "funnel", "radar", "gauge", "gantt", "stock", "map"]);
//# sourceMappingURL=responsive.min.js.map