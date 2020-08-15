export const startDeskDrag = (desk, dispatch) => {
    const newDesk = {desk}
    dispatch ({
        type: "ON_DESK_DRAG",
        payload: newDesk.desk
    })
}

export const dropDesk = (desk, dispatch) => {
    const droppedDesk = {desk}
    dispatch ({
        type: "ON_DESK_DROP",
        payload: droppedDesk.desk
    })
}