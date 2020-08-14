export const startDeskDrag = (desk, dispatch) => {
    dispatch ({
        type: "ON_DESK_DRAG",
        payload: {desk}
    })
}

export const dropDesk = (desk, dispatch) => {
    dispatch ({
        type: "ON_DESK_DROP",
        payload: {desk}
    })
}