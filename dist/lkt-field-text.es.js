import { defineComponent as te, useSlots as le, ref as m, computed as o, watch as S, openBlock as i, createElementBlock as s, normalizeClass as A, unref as y, renderSlot as ae, createCommentVNode as u, withDirectives as D, vModelDynamic as H, toDisplayString as R, createElementVNode as ie, nextTick as se } from "vue";
import { generateRandomString as U } from "lkt-string-tools";
import { createLktEvent as c } from "lkt-events";
const oe = ["data-show-ui", "data-labeled"], ue = ["for", "innerHTML"], ne = {
  key: 2,
  class: "lkt-field-text__main"
}, re = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], de = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], fe = {
  key: 2,
  class: "lkt-field__state"
}, ce = ["title"], ve = ["title"], me = ["title"], ye = ["title"], pe = ["title"], ke = ["title"], he = {
  key: 3,
  class: "lkt-field-text__read"
}, we = ["title", "href"], ge = ["title", "href"], be = ["innerHTML", "title"], xe = {
  key: 3,
  class: "lkt-field__state"
}, _e = ["title"], Me = { name: "LktFieldText", inheritAttrs: !1 }, Se = /* @__PURE__ */ te({
  ...Me,
  props: {
    modelValue: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: U(16) },
    valid: { type: Boolean, default: !1 },
    autocomplete: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    tabindex: { type: Number, default: void 0 },
    mandatory: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    reset: { type: Boolean, default: !1 },
    resetMessage: { type: String, default: "" },
    mandatoryMessage: { type: String, default: "" },
    infoMessage: { type: String, default: "" },
    errorMessage: { type: String, default: "" },
    showPasswordMessage: { type: String, default: "" },
    switchEditionMessage: { type: String, default: "" },
    min: { type: [Number, String, void 0], default: void 0 },
    max: { type: [Number, String, void 0], default: void 0 },
    step: { type: [Number, String], default: 1 },
    isTel: { type: Boolean, default: !1 },
    isEmail: { type: Boolean, default: !1 },
    isPassword: { type: Boolean, default: !1 },
    isSearch: { type: Boolean, default: !1 },
    isNumber: { type: Boolean, default: !1 },
    enableAutoNumberFix: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error"],
  setup(a, { expose: j, emit: z }) {
    const f = z, b = le(), e = a, n = U(16), h = m(null), B = m(e.modelValue), l = m(e.modelValue), w = m(!1), x = m(!1), v = m(!e.readMode), O = o(() => typeof e.valid == "function" ? e.valid() : e.valid), q = o(() => l.value !== B.value), V = o(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), N = o(() => {
      let t = 0;
      return e.reset && ++t, e.infoMessage && ++t, e.isPassword && e.showPassword && ++t, t;
    }), G = o(() => e.resetMessage !== "" ? e.resetMessage : ""), J = o(() => w.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), C = o(() => e.autocomplete === !0 ? "on" : "off"), P = o(() => l.value !== ""), g = o(() => e.isPassword && w.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isNumber ? "number" : e.isTel ? "tel" : e.isSearch ? "search" : "text"), Q = o(() => {
      const t = ["lkt-field", "lkt-field-text"];
      return e.palette && t.push(`lkt-field--${e.palette}`), g && t.push(`is-${g.value}`), q.value && t.push("is-changed"), e.disabled && t.push("is-disabled"), x.value && t.push("has-focus"), N.value > 0 && t.push("has-icons", `has-icons-${N.value}`), t.push(O.value ? "is-valid" : "is-error"), t.push(e.modelValue ? "is-filled" : "is-empty"), t.join(" ");
    }), _ = o(() => typeof l.value == "number" ? l.value.toString() : l.value), p = o(() => typeof e.min == "string" ? parseFloat(e.min) : typeof e.min == "number" ? e.min : !1), k = o(() => typeof e.max == "string" ? parseFloat(e.max) : typeof e.max == "number" ? e.max : !1), T = () => {
      se(() => {
        h.value && h.value.focus();
      });
    };
    S(() => e.readMode, (t) => v.value = !t), S(() => e.modelValue, (t) => {
      if (e.isNumber)
        return ee(t);
      l.value = t;
    }), S(l, (t) => f("update:modelValue", t));
    const M = () => l.value = B.value, W = () => l.value, E = (t) => f("keyup", t, c(n, { value: l.value })), F = (t) => f("keydown", t, c(n, { value: l.value })), L = (t) => (x.value = !0) && f("focus", t, c(n, { value: l.value })), I = (t) => (x.value = !1) && f("blur", t, c(n, { value: l.value })), K = (t) => f("click", t, c(n, { value: l.value })), X = (t) => f("click-info", t, c(n, { value: l.value })), Y = (t) => f("click-error", t, c(n, { value: l.value })), Z = (t) => w.value = !w.value, $ = (t) => {
      v.value = !v.value, v.value && T();
    }, ee = (t) => {
      if (!e.enableAutoNumberFix)
        return !1;
      let d = Number(t), r = !1;
      return p.value !== !1 && d < p.value && (d = p.value, r = !0), k.value !== !1 && d > k.value && (d = k.value, r = !0), r === !0 ? (l.value = d, !0) : !1;
    };
    return j({
      Identifier: n,
      reset: M,
      focus: T,
      value: W,
      isMandatory: () => e.mandatory
    }), M(), (t, d) => (i(), s("div", {
      class: A(Q.value),
      "data-show-ui": V.value,
      "data-labeled": !y(b).label
    }, [
      y(b).label ? ae(t.$slots, "label", { key: 0 }) : u("", !0),
      y(b).label ? u("", !0) : (i(), s("label", {
        key: 1,
        for: y(n),
        innerHTML: a.label
      }, null, 8, ue)),
      v.value ? (i(), s("div", ne, [
        a.placeholder ? D((i(), s("input", {
          key: 0,
          "onUpdate:modelValue": d[0] || (d[0] = (r) => l.value = r),
          ref: (r) => h.value = r,
          value: l.value,
          type: g.value,
          name: a.name,
          id: y(n),
          disabled: a.disabled,
          readonly: a.readonly,
          placeholder: a.placeholder,
          tabindex: a.tabindex,
          autocomplete: C.value,
          min: p.value,
          max: k.value,
          step: a.step,
          onKeyup: E,
          onKeydown: F,
          onFocus: L,
          onBlur: I,
          onClick: K
        }, null, 40, re)), [
          [H, l.value]
        ]) : D((i(), s("input", {
          key: 1,
          "onUpdate:modelValue": d[1] || (d[1] = (r) => l.value = r),
          ref: (r) => h.value = r,
          value: l.value,
          type: g.value,
          name: a.name,
          id: y(n),
          disabled: a.disabled,
          readonly: a.readonly,
          tabindex: a.tabindex,
          autocomplete: C.value,
          min: p.value,
          max: k.value,
          step: a.step,
          onKeyup: E,
          onKeydown: F,
          onFocus: L,
          onBlur: I,
          onClick: K
        }, null, 40, de)), [
          [H, l.value]
        ]),
        V.value ? (i(), s("div", fe, [
          e.errorMessage ? (i(), s("i", {
            key: 0,
            class: "lkt-field__error-icon",
            title: e.errorMessage,
            onClick: Y
          }, null, 8, ce)) : u("", !0),
          e.infoMessage ? (i(), s("i", {
            key: 1,
            class: "lkt-field__info-icon",
            title: e.infoMessage,
            onClick: X
          }, null, 8, ve)) : u("", !0),
          e.isPassword && e.showPassword && P.value ? (i(), s("i", {
            key: 2,
            class: A(J.value),
            title: e.showPasswordMessage,
            onClick: Z
          }, null, 10, me)) : u("", !0),
          e.reset && P.value ? (i(), s("i", {
            key: 3,
            class: "lkt-field__reset-icon",
            title: G.value,
            onClick: M
          }, null, 8, ye)) : u("", !0),
          e.mandatory ? (i(), s("i", {
            key: 4,
            class: "lkt-field__mandatory-icon",
            title: e.mandatoryMessage
          }, null, 8, pe)) : u("", !0),
          a.allowReadModeSwitch ? (i(), s("i", {
            key: 5,
            class: "lkt-field__edit-icon",
            title: e.switchEditionMessage,
            onClick: $
          }, null, 8, ke)) : u("", !0)
        ])) : u("", !0)
      ])) : u("", !0),
      v.value ? u("", !0) : (i(), s("div", he, [
        a.isEmail ? (i(), s("a", {
          key: 0,
          class: "lkt-field-text__read-value",
          title: _.value,
          href: "mail:" + l.value
        }, R(l.value), 9, we)) : a.isTel ? (i(), s("a", {
          key: 1,
          class: "lkt-field-text__read-value",
          title: _.value,
          href: "tel:" + l.value
        }, R(l.value), 9, ge)) : (i(), s("div", {
          key: 2,
          class: "lkt-field-text__read-value",
          innerHTML: l.value,
          title: _.value
        }, null, 8, be)),
        a.allowReadModeSwitch ? (i(), s("div", xe, [
          ie("i", {
            class: "lkt-field__edit-icon",
            title: e.switchEditionMessage,
            onClick: $
          }, null, 8, _e)
        ])) : u("", !0)
      ]))
    ], 10, oe));
  }
});
const Ce = {
  install: (a) => {
    a.component("lkt-field-text", Se);
  }
};
export {
  Ce as default
};
