const myObserver = new ResizeObserver((entries) => {
  let image = document.getElementById("imageDialogReceiptSearch")
  entries.forEach((entry) => {
    image.style.width = entry.contentRect.width
    image.style.height = entry.contentRect.height
  })
})

const dialog = document.getElementById(
  "createExpensesContentForm:variousComponent:j_idt334_content"
)

myObserver.observe(dialog)
