document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelectorAll(
    "[data-current-styles*='\"customSectionHeight\": 22']"
  );
  e.forEach((e, t) => {
    let a = e.querySelectorAll(".summary-item"),
      i = e.querySelector(".tabs-heading");
    if (!i || 0 === a.length) return;
    (i.innerHTML = ""),
      a.forEach((e, t) => {
        e.setAttribute("aria-expanded", "false"),
          e.setAttribute("role", "tabpanel"),
          e.setAttribute("data-id", t + 1);
      });
    let r = a[0];
    r.classList.add("item-active"),
      r.setAttribute("aria-expanded", "true"),
      a.forEach((t, a) => {
        let r = t.querySelector(".summary-title-link"),
          s = t.querySelector(".summary-excerpt"),
          l = a + 1,
          c = 0 === a,
          d = document.createElement("div");
        d.setAttribute("role", "tab"),
          d.setAttribute("tabindex", "0"),
          d.setAttribute("data-id", l),
          d.setAttribute("aria-controls", l),
          d.setAttribute("aria-selected", c ? "true" : "false"),
          c && d.classList.add("item-active");
        let u = document.createElement("a");
        if (
          ((u.href = r.getAttribute("href")),
          (u.textContent = r.innerHTML),
          (u.onclick = function (e) {
            e.stopPropagation();
          }),
          d.appendChild(u),
          s)
        ) {
          let n = s.cloneNode(!0);
          d.appendChild(n);
        }
        let o = () => {
          let t = e.querySelector(".summary-item.item-active"),
            a = i.querySelector(".item-active");
          t &&
            (t.classList.remove("item-active"),
            t.setAttribute("aria-expanded", "false")),
            a &&
              (a.classList.remove("item-active"),
              a.setAttribute("aria-selected", "false")),
            d.classList.add("item-active"),
            d.setAttribute("aria-selected", "true");
          let r = e.querySelector(`.summary-item:nth-child(${l})`);
          r &&
            (r.classList.add("item-active"),
            r.setAttribute("aria-expanded", "true"));
        };
        d.addEventListener("mouseover", o),
          d.addEventListener("focus", o),
          i.appendChild(d);
      }),
      i.addEventListener("mouseleave", function () {
        let t = e.querySelector(".summary-item.item-active"),
          a = i.querySelector(".item-active");
        t &&
          (t.classList.remove("item-active"),
          t.setAttribute("aria-expanded", "false")),
          a &&
            (a.classList.remove("item-active"),
            a.setAttribute("aria-selected", "false")),
          r.classList.add("item-active"),
          r.setAttribute("aria-expanded", "true");
        let s = i.querySelector("div:first-child");
        s &&
          (s.classList.add("item-active"),
          s.setAttribute("aria-selected", "true"));
      });
  });
});
