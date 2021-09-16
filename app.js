const input = document.querySelector("input")
const boxes = document.querySelectorAll(".colorBox")

input.addEventListener("change", (e) => {
  const arrows = document.querySelectorAll(".arrow")
  arrows.forEach((ar) => {
    ar.remove()
  })
  boxes.forEach((box) => {
    if (box.classList.contains(e.target.value)) {
      box.style.display = "block"
      box.style.opacity = "1"
      const arrow = document.createElement("img")
      arrow.className = "arrow"
      box.appendChild(arrow)
      arrow.src = "./up-arrow.png"
    } else {
      box.style.opacity = "0.1"
    }
  })
  e.target.value = ""
})
