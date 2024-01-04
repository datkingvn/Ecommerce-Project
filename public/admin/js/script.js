// Button Status
const buttonStatus = document.querySelectorAll("[button-status]");
if (buttonStatus.length > 0) {
    buttonStatus.forEach(button => {
        let url = new URL(window.location.href);

        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status");

            if (status) {
                url.searchParams.set("status", status);
            } else {
                url.searchParams.delete("status");
            }

            window.location.href = url.href;
        });
    });
}
// End Button Status

// Form Search
const formSearch = document.querySelector("#form-search");
if (formSearch) {
    let url = new URL(window.location.href);

    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();

        const keyword = e.target.elements.keyword.value;

        if (keyword) {
            url.searchParams.set("keyword", keyword);
        } else {
            url.searchParams.delete("keyword");
        }

        window.location.href = url.href;
    });
}
// End Form Search

// Pagination
const buttonPagination = document.querySelectorAll("[button-pagination]");
if (buttonPagination) {
    let url = new URL(window.location.href);

    buttonPagination.forEach(button => {
        button.addEventListener("click", (e) => {
            const page = button.getAttribute("button-pagination");

            url.searchParams.set("page", page);

            window.location.href = url.href;
        })
    });
}
// End Pagination

// Checkbox Multi
const checkboxMulti = document.querySelector("[checkbox-multi]");
if (checkboxMulti) {
    const inputCheckAll = checkboxMulti.querySelector("input[name='check-all']");
    const inputIds = checkboxMulti.querySelectorAll("input[name='id']");

    inputCheckAll.addEventListener("click", () => {
        if (inputCheckAll.checked) {
            inputIds.forEach(input => {
                input.checked = true
            });
        } else {
            inputIds.forEach(input => {
                input.checked = false
            });
        }
    });

    inputIds.forEach(input => {
        input.addEventListener("click", () => {
            const countChecked = checkboxMulti.querySelectorAll("input[name='id']:checked").length;

            if (countChecked === inputIds.length) {
                inputCheckAll.checked = true
            } else {
                inputCheckAll.checked = false
            }
        });
    });
}
// End Checkbox Multi

// Form Change Multi
const formChangeMulti = document.querySelector("[form-change-multi]");
if (formChangeMulti) {
    formChangeMulti.addEventListener("submit", (e) => {
        e.preventDefault();

        const checkboxMulti = document.querySelector("[checkbox-multi]");
        const inputsChecked = document.querySelectorAll("input[name='id']:checked");

        if (inputsChecked.length > 0) {
            let ids = [];

            const inputIds = formChangeMulti.querySelector("input[name='ids']")

            inputsChecked.forEach(input => {
                const id = input.value;
                ids.push(id);
            })

            inputIds.value = ids.join(", ")

            formChangeMulti.submit();
        } else {
            alert("Vui lòng chọn ít nhất 1 bản ghi!");
        }
    });
}
// End Form Change Multi

// Delete Item
const buttonDelete = document.querySelectorAll("[button-delete]");
if (buttonDelete.length > 0) {
    const formDeleteItem = document.querySelector("#form-delete-item");
    const path = formDeleteItem.getAttribute("data-path");

    buttonDelete.forEach(button => {
        button.addEventListener("click", () => {
            const isConfirm = confirm("Bạn muốn xoá sản phẩm này?");

            if (isConfirm) {
                const id = button.getAttribute("data-id");

                const action = `${path}/${id}?_method=DELETE`

                formDeleteItem.action = action;
                formDeleteItem.submit();
            }
        });
    });
}
// End Delete Item