(this.webpackJsonppresentation = this.webpackJsonppresentation || []).push([[0], { 10: function (e, t, a) { e.exports = a(17) }, 15: function (e, t, a) { }, 16: function (e, t, a) { }, 17: function (e, t, a) { "use strict"; a.r(t); var n = a(0), r = a.n(n), o = a(8), l = a.n(o), c = (a(15), a(16), a(1)), i = a(2), s = a(5), u = a(4), m = a(3), p = a(9), f = a(6), h = function (e) { Object(u.a)(a, e); var t = Object(m.a)(a); function a() { var e; Object(c.a)(this, a); for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)r[o] = arguments[o]; return (e = t.call.apply(t, [this].concat(r))).state = { title: e.props.game.title, developer: e.props.game.developer, platforms: e.props.game.platforms }, e.handleSubmit = function (t) { t.preventDefault(); fetch("".concat("/api", "/games/").concat(e.props.game._id), { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e.state) }).then((function (e) { return e.json() })).then((function (e) { return console.log(e) })).then(e.props.toggleForm).then(e.props.refresh) }, e.handleChange = function (t) { e.setState(Object(f.a)({}, t.target.name, t.target.value)) }, e.handlePlatformsChange = function (t, a) { var n = e.state.platforms.concat([]); n[a] = t.target.value, e.setState({ platforms: n }) }, e.addPlatform = function (t) { var a = e.state.platforms.concat([""]); e.setState({ platforms: a }) }, e.removePlatform = function (t) { var a = e.state.platforms.concat([]); a.splice(t, 1), e.setState({ platforms: a }) }, e } return Object(i.a)(a, [{ key: "render", value: function () { var e = this, t = this.state.platforms.map((function (t, a) { return r.a.createElement("div", null, r.a.createElement("input", { name: a, type: "text", placeholder: "Platform ".concat(a + 1), value: t, onChange: function (t) { return e.handlePlatformsChange(t, a) }, required: !0 }), r.a.createElement("input", { className: "remove-platform", type: "button", value: "-", onClick: function () { return e.removePlatform(a) } })) })); return r.a.createElement("form", { onSubmit: this.handleSubmit }, r.a.createElement("input", { name: "title", type: "text", placeholder: "Title", value: this.state.title, onChange: this.handleChange, required: !0 }), r.a.createElement("input", { name: "developer", type: "text", placeholder: "Developer", value: this.state.developer, onChange: this.handleChange }), t, r.a.createElement("input", { id: "add_platform", type: "button", value: "Add Platform", onClick: this.addPlatform }), r.a.createElement("input", { type: "submit", value: "Update Game" })) } }]), a }(r.a.Component), d = function (e) { var t = e.game, a = e.deleteGame, o = e.refresh, l = Object(n.useState)(!1), c = Object(p.a)(l, 2), i = c[0], s = c[1], u = function () { return s(!i) }; return r.a.createElement("li", null, t.title, r.a.createElement("i", { onClick: function () { return u() }, class: "fa fa-gear" }), r.a.createElement("i", { onClick: function () { return a(t._id, o) }, className: "fa fa-trash-o del-btn" }), i ? r.a.createElement(h, { game: t, toggleForm: u, refresh: o }) : "") }, v = function (e) { Object(u.a)(a, e); var t = Object(m.a)(a); function a() { var e; Object(c.a)(this, a); for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)r[o] = arguments[o]; return (e = t.call.apply(t, [this].concat(r))).state = { title: "", developer: "", platforms: [""] }, e.handleSubmit = function (t) { t.preventDefault(); fetch("".concat("/api", "/games"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e.state) }).then((function (e) { return e.json() })).then((function (e) { return console.log(e) })).then((function () { e.setState({ title: "", developer: "", platforms: [""] }) })).then(e.props.refresh) }, e.handleChange = function (t) { e.setState(Object(f.a)({}, t.target.name, t.target.value)) }, e.handlePlatformsChange = function (t, a) { var n = e.state.platforms.concat([]); n[a] = t.target.value, e.setState({ platforms: n }) }, e.addPlatform = function (t) { var a = e.state.platforms.concat([""]); e.setState({ platforms: a }) }, e.removePlatform = function (t) { var a = e.state.platforms.concat([]); a.splice(t, 1), e.setState({ platforms: a }) }, e } return Object(i.a)(a, [{ key: "render", value: function () { var e = this, t = this.state.platforms.map((function (t, a) { return r.a.createElement("div", null, r.a.createElement("input", { name: a, type: "text", placeholder: "Platform ".concat(a + 1), value: t, onChange: function (t) { return e.handlePlatformsChange(t, a) }, required: !0 }), r.a.createElement("input", { className: "remove-platform", type: "button", value: "-", onClick: function () { return e.removePlatform(a) } })) })); return r.a.createElement("form", { onSubmit: this.handleSubmit }, r.a.createElement("input", { name: "title", type: "text", placeholder: "Title", value: this.state.title, onChange: this.handleChange, required: !0 }), r.a.createElement("input", { name: "developer", type: "text", placeholder: "Developer", value: this.state.developer, onChange: this.handleChange }), t, r.a.createElement("input", { id: "add_platform", type: "button", value: "Add Platform", onClick: this.addPlatform }), r.a.createElement("input", { type: "submit", value: "Add Game" })) } }]), a }(r.a.Component), g = function (e) { Object(u.a)(a, e); var t = Object(m.a)(a); function a(e) { var n; return Object(c.a)(this, a), (n = t.call(this, e)).state = { games: [] }, n.getGames = n.getGames.bind(Object(s.a)(n)), n } return Object(i.a)(a, [{ key: "getGames", value: function () { var e = this; fetch("".concat("/api", "/games")).then((function (e) { return e.json() })).then((function (t) { return e.setState({ games: t }) })) } }, { key: "componentDidMount", value: function () { this.getGames() } }, { key: "deleteGame", value: function (e, t) { fetch("".concat("/api", "/games/").concat(e), { method: "DELETE" }).then((function (e) { return e.json() })).then((function (e) { console.log(e), t() })) } }, { key: "render", value: function () { var e = this, t = this.state.games.map((function (t) { return r.a.createElement(d, { key: t._id, game: t, deleteGame: e.deleteGame, refresh: e.getGames }) })); return r.a.createElement(r.a.Fragment, null, r.a.createElement(v, { refresh: this.getGames }), r.a.createElement("ul", null, t)) } }]), a }(r.a.Component); var b = function () { return r.a.createElement("div", { className: "App" }, r.a.createElement("h2", null, "Games"), r.a.createElement(g, null)) }; Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); l.a.render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(b, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) { e.unregister() })).catch((function (e) { console.error(e.message) })) } }, [[10, 1, 2]]]);
//# sourceMappingURL=main.c47b188f.chunk.js.map