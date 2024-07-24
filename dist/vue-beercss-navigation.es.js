import { computed as b, resolveComponent as D, openBlock as s, createElementBlock as r, Fragment as C, createElementVNode as a, normalizeClass as V, toDisplayString as h, createCommentVNode as k, renderList as E, createBlock as $, mergeModels as N, useModel as S, ref as f, onMounted as B, renderSlot as w } from "vue";
import { useRoute as M, useRouter as R } from "vue-router";
const x = ["to"], A = { class: "max" }, L = { key: 0 }, z = {
  key: 0,
  class: "tiny-space"
}, F = {
  key: 1,
  class: "drawer min no-padding"
}, I = { class: "drawer min no-padding vertical-padding" }, j = {
  __name: "NavigationEntry",
  props: {
    path: String,
    icon: String,
    label: String,
    name: String,
    activeEntrys: Array,
    entrys: Array,
    isDrawer: Boolean
  },
  emits: ["entryClick", "chieldClick"],
  setup(u, { emit: _ }) {
    const m = _, t = u, y = M(), n = b(() => t.activeEntrys.includes(t.name) || t.name === y.name);
    function v() {
      m("entryClick");
    }
    function c(p) {
      m("chieldClick", p);
    }
    return (p, i) => {
      const d = D("navigation-entry", !0);
      return s(), r(C, null, [
        a("a", {
          class: V(n.value ? "active " : ""),
          to: t.path,
          onClick: i[0] || (i[0] = (e) => v())
        }, [
          a("i", null, h(t.icon), 1),
          a("span", A, h(t.label), 1),
          t.entrys && u.isDrawer ? (s(), r("i", L, h(n.value ? "arrow_drop_up" : "arrow_drop_down"), 1)) : k("", !0)
        ], 10, x),
        u.isDrawer ? (s(), r("div", z)) : k("", !0),
        n.value && t.entrys ? (s(), r("nav", F, [
          a("nav", I, [
            (s(!0), r(C, null, E(t.entrys, (e) => (s(), $(d, {
              "is-drawer": "",
              key: e.name,
              icon: e.icon,
              label: e.label,
              path: e.path,
              name: e.name,
              entrys: e.entrys,
              "active-entrys": t.activeEntrys,
              onChieldClick: i[1] || (i[1] = (l) => c(l)),
              onEntryClick: (l) => c(e)
            }, null, 8, ["icon", "label", "path", "name", "entrys", "active-entrys", "onEntryClick"]))), 128))
          ])
        ])) : k("", !0)
      ], 64);
    };
  }
}, q = /* @__PURE__ */ a("div", { class: "tiny-space" }, null, -1), G = /* @__PURE__ */ a("i", null, "menu_open", -1), H = [
  G
], J = /* @__PURE__ */ a("div", { class: "s space" }, null, -1), K = /* @__PURE__ */ a("div", { class: "max" }, null, -1), O = /* @__PURE__ */ a("div", { class: "tiny-space" }, null, -1), T = {
  __name: "VueBeercssNavigation",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ N(["close", "activeteEntry"], ["update:modelValue"]),
  setup(u, { emit: _ }) {
    const m = S(u, "modelValue"), t = _, y = R(), n = f([]), v = f(null), c = f(!1);
    B(() => {
      p();
    });
    function p() {
      c.value = v.value.classList.contains("drawer");
    }
    function i(e) {
      e.path ? (y.push(e.path), n.value = [], d()) : e.entrys ? c.value ? n.value.includes(e.name) ? n.value = n.value.filter((l) => l !== e.name) : n.value.push(e.name) : t("activeteEntry", e) : d();
    }
    function d() {
      t("close");
    }
    return (e, l) => (s(), r("nav", {
      ref_key: "NavigationDrawerRef",
      ref: v
    }, [
      w(e.$slots, "top"),
      q,
      a("button", {
        class: "s circle transparent large",
        onClick: d
      }, H),
      J,
      (s(!0), r(C, null, E(m.value, (o) => (s(), $(j, {
        key: o.name,
        path: o.path,
        icon: o.icon,
        label: o.label,
        name: o.name,
        "active-entrys": n.value,
        "is-drawer": c.value,
        entrys: o.entrys,
        onEntryClick: (g) => i(o),
        onChieldClick: l[0] || (l[0] = (g) => i(g))
      }, null, 8, ["path", "icon", "label", "name", "active-entrys", "is-drawer", "entrys", "onEntryClick"]))), 128)),
      K,
      w(e.$slots, "bottom"),
      O
    ], 512));
  }
};
export {
  T as default
};
