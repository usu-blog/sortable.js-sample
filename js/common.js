Sortable.create(List1, {
  group: {
    name: "shares",
  },
  ghostClass: "ghost",
  multiDrag: true, // Enable the plugin
  selectedClass: "list-group-item-danger", // Class name for selected item
  animation: 100,
})
Sortable.create(List2, {
  group: {
    name: "shares",
  },
  ghostClass: "ghost",
  multiDrag: true, // Enable the plugin
  selectedClass: "list-group-item-danger", // Class name for selected item
  animation: 100,
})
Sortable.create(Output, {
  group: {
    name: "shares",
  },
  ghostClass: "ghost",
  multiDrag: true, // Enable the plugin
  selectedClass: "list-group-item-danger", // Class name for selected item
  animation: 100,
})

const List = document.querySelectorAll(".list-group-item")
List.forEach(item => {
  item.addEventListener("click", () => {
    if (item.classList.contains("list-group-item-danger")) {
      item.firstElementChild.checked = true
    } else {
      item.firstElementChild.checked = false
    }
  })
})

const CardTitles = document.querySelectorAll(".card-title")
CardTitles.forEach(title => {
  title.addEventListener("click", () => {
    const Children = title.parentNode.nextElementSibling.children
    if (!title.previousElementSibling.checked) {
      Array.prototype.forEach.call(Children, child => {
        Sortable.utils.select(child)
        child.firstElementChild.checked = true
      })
    } else {
      Array.prototype.forEach.call(Children, child => {
        Sortable.utils.deselect(child)
        child.firstElementChild.checked = false
      })
    }
  })
})
